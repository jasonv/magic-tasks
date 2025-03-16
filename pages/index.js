import { useState, useEffect } from 'react';

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const fetchTasks = async () => {
    try {
      const res = await fetch('/api/tasks');
      const data = await res.json();
      setTasks(data);
    } catch (err) {
      console.error('Failed to fetch tasks', err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (e) => {
    const submitAction = e.nativeEvent.submitter.id;
    e.preventDefault();
    if (!description.trim() && submitAction=="addTaskButton") {
      setError('Please enter a task description');
      return;
    }
    setError('');
    try {
      const res = await fetch('/api/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ submitAction, description })
      });
      if (res.ok) {
        const newTask = await res.json();
        setTasks([newTask, ...tasks]);
        setDescription('');
      } else {
        const errorData = await res.json();
        setError(errorData.error || 'Error adding task');
      }
    } catch (err) {
      console.error('Error adding task', err);
      setError('Error adding task');
    }
  };

  const deleteTask = async (id) => {
    try {
      const res = await fetch(`/api/tasks/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setTasks(tasks.filter(task => task.id !== id));
      } else {
        console.error('Failed to delete task');
      }
    } catch (err) {
      console.error('Error deleting task', err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-xl mx-auto bg-white shadow content-center p-6">
        <h1 className="text-2xl font-bold mb-4">Magic Tasks</h1>
        <h2>Add some tasks and then let Magic Tasks read your mind!</h2>
        <h2>&nbsp;</h2>
        <form onSubmit={addTask} className="mb-4">
          <input
            type="text"
            placeholder="Enter a task"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {error && <p className="text-red-500 mt-2">{error}</p>}
          <button type="submit" id="addTaskButton" className="mt-2 w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Add Task
          </button>
          <button type="submit" id="readMyMind" className="mt-2 w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Read My Mind
          </button>
        </form>
        <ul>
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between items-center border-b border-gray-200 py-2">
              <span>{task.description}</span>
              <button onClick={() => deleteTask(task.id)} className="text-red-500 hover:underline">
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}