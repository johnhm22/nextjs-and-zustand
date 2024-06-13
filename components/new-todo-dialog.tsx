'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from './ui/textarea';
import React, { useRef } from 'react';
import { useTaskStore } from '@/lib/store';

export const NewTodoDialog = () => {
  //the below uses the useTaskStore from Zustand when we created our store. It returns the addTask function from the Zustand store which we invoke below
  const addTask = useTaskStore(state => state.addTask);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const { title, description } = Object.fromEntries(formData);
    if (typeof title !== 'string' || typeof description !== 'string') return;
    //here we invoke the addTask function that was returned from the Zustand store
    addTask(title, description);
  };

  const dialogRef = useRef<HTMLDialogElement | null>(null);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='secondary' size='sm'>
          + Add New Todo
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Add New Todo</DialogTitle>
          <DialogDescription>
            What do you want to get done today?
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} id='todo-form'>
          <div className='mb-4'>
            <Input placeholder='Todo title...' id='title' name='title' />
          </div>
          <div>
            <Textarea
              placeholder='Description...'
              id='description'
              name='description'
            />
          </div>
        </form>
        <DialogFooter>
          <DialogClose asChild>
            {/* <DialogTrigger asChild> */}
            <Button type='submit' form='todo-form'>
              Add Todo
            </Button>
          </DialogClose>
          {/* </DialogTrigger> */}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
