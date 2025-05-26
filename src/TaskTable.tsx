import React from 'react';
import type { TaskProps } from './Types/Task';

export function TaskTable({ tasks, removeTask, toggleTask }: TaskProps) {
  return (
    <ul className="space-y-3 mt-6">
      {tasks.map((task, i) => (
        <li
          key={i}
          className="flex justify-between items-center p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm hover:shadow transition duration-200"
        >
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(i)}
              className="w-5 h-5 accent-blue-600"
            />
            <span
              className={`text-lg ${
                task.completed ? 'line-through text-gray-400' : 'text-gray-800'
              }`}
            >
              {task.text}
            </span>
          </div>
          {!task.completed && (
            <button
              onClick={() => removeTask(i)}
              className="text-red-500 hover:text-red-600 hover:underline transition duration-150"
            >
              Remover
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}
