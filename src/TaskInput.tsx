import React from 'react';
import type { ImputProps } from './Types/Task';

export function TaskInput({ newTask, setNewTask, addTask }: ImputProps) {
  return (
    <div className="flex gap-2">
      <input
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Escreve uma nova tarefa..."
        className="flex-1 border border-gray-300 px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
      />
      <button
        onClick={addTask}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition duration-200 shadow"
      >
        Adicionar
      </button>
    </div>
  );
}
