import React from 'react';
import type { ImputProps } from './Types/Task';



export function TaskInput({ newTask, setNewTask, addTask }: ImputProps) {
  return (
    <div className="flex gap-2 mb-4">
      <input
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="New task"
        className="flex-1 border px-2 py-1 rounded"
      />
      <button
        onClick={addTask}
        className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">
        Add
      </button>
    </div>
  );
}
