import { PrismaClient } from '@prisma/client';

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
      const { description } = req.body;
      if (!description) {
        return res.status(400).json({ error: 'Description is required' });
      }
      const task = await prisma.task.create({ data: { description } });
      res.status(201).json(task);
    } catch (error) {
      res.status(500).json({ error: 'Error creating task' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}