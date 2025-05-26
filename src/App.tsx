import React, { useState } from 'react';
import { TaskInput } from './TaskInput';
import { TaskTable } from './TaskTable';
import type {Task } from './Types/Task';



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
    <div className="p-4 max-w-xl mx-auto">
      <h1 className=" text-2xl font-bold mb-4">To-Do List</h1>
      <TaskInput newTask={newTask} setNewTask={setNewTask} addTask={addTask} />
      <TaskTable tasks={tasks} removeTask={removeTask} toggleTask={toggleTask} />
    </div>
  );
}
