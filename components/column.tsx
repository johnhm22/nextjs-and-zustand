'use client';

import React, { useMemo } from 'react';
import Task from './task';
import { Status, useTaskStore } from '@/lib/store';

// const tasks = [
//   {
//     id: '1234',
//     title: 'First task',
//     description: 'Description of first task',
//     status: 'TODO'
//   },
//   {
//     id: '1235',
//     title: 'Second task',
//     description: 'Description of second task',
//     status: 'DONE'
//   },
//   {
//     id: '1236',
//     title: 'Third task',
//     description: 'Description of third task',
//     status: 'IN_PROGRESS'
//   }
// ];

const Column = ({ title, status }: { title: string; status: Status }) => {
  const tasks = useTaskStore(state => state.tasks);
  const filteredTasks = useMemo(
    () => tasks.filter(task => task.status === status),
    [tasks, status]
  );

  const updateTask = useTaskStore(state => state.updateTask);
  const draggedTask = useTaskStore(state => state.draggedTask);
  const dragTask = useTaskStore(state => state.dragTask);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    if (!draggedTask) return;
    updateTask(draggedTask, status);
    dragTask(null);
  };

  return (
    <section className='h-[600px] flex-1'>
      <h2 className='ml-2 text-2xl font-semibold text-white'>{title}</h2>
      <div
        className='mt-3 h-full w-full rounded-xl bg-gray-700/50'
        onDrop={handleDrop}
        onDragOver={e => e.preventDefault()}
      >
        <div className='flex flex-col gap-4'>
          {filteredTasks.map(task => (
            <Task key={task.id} {...task} status={status} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Column;
