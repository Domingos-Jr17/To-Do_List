import React from 'react';
import type { TaskProps } from './Types/Task';




export function TaskTable({ tasks, removeTask, toggleTask }: TaskProps) {
  return (
    <ul className="space-y-2">
      {tasks.map((task, i) => (
        <li
          key={i}
          className="flex justify-between items-center p-2 border rounded hover:bg-gray-50"
        >
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(i)}
              className="form-checkbox"
            />
            <span className={task.completed ? 'line-through text-gray-400' : ''}>
              {task.text}
            </span>
          </div>
          {!task.completed && (
            <button
              onClick={() => removeTask(i)}
              className="text-red-500 hover:underline"
            >
              Remove
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}
