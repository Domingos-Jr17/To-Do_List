import React, { useState } from 'react';
import { TaskInput } from './TaskInput';
import { TaskTable } from './TaskTable';
import type { Task } from './Types/Task';

export function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask.trim(), completed: false }]);
      setNewTask('');
    }
  };

  const removeTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleTask = (index: number) => {
    setTasks(tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    ));
  };

 return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-md">
        <h1 className="text-3xl font-semibold text-blue-600 mb-6 text-center">
          To-DO List
        </h1>
        <TaskInput newTask={newTask} setNewTask={setNewTask} addTask={addTask} />
        {tasks.length > 0 && (
          <TaskTable tasks={tasks} removeTask={removeTask} toggleTask={toggleTask} />
        )}
      </div>
    </div>
  );
}