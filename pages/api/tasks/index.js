import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
dotenv.config();
import OpenAI from 'openai';
const openai = new OpenAI({ apiKey: process.env.OPEN_API_KEY});

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const tasks = await prisma.task.findMany({ orderBy: { createdAt: 'desc' } });
      res.status(200).json(tasks);
    } catch (error) {
      res.status(500).json({ error: 'Error retrieving tasks' });
    }
  } else if (req.method === 'POST') {
    try {
      console.log(req.body)
      const { description } = req.body;
      const { submitAction } = req.body;
      
      if (!description && submitAction=="addTaskButton") {
        return res.status(400).json({ error: 'Description is required' });
      }

      if(submitAction=="addTaskButton")
      {
        const task = await prisma.task.create({ data: {description} });
        res.status(201).json(task);
      }

      if(submitAction=="readMyMind")
      {
        const tasks = await prisma.task.findMany({ orderBy: { createdAt: 'desc' } });
        console.log("tasks:" + JSON.stringify(tasks))
        const descriptions = tasks.map(item => item.description).join(', ');
        const whatIsInMyMind = await getChatGptResponse(descriptions);
        const task = await prisma.task.create({data: {"description":whatIsInMyMind}});
        res.status(201).json(task);
      }
  
    } catch (error) {
      res.status(500).json({ error: 'Error creating task' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

async function getChatGptResponse(descriptions) {
  try {
    const prompt = `here is a list\n\n${descriptions}\n\n what would be another good item for the list? please just return the item`;
    
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    })
    console.log(JSON.stringify(response)); 
    return response.choices[0].message.content;
  } catch (error) {
    console.log("Error fetching response from ChatGPT:", error);
    return "Could not determine what is on your mind." + error;
  }
}