"use client";

import { addTaskApi } from '@/libs/task_api';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const AddTask = () => {
  const [task, setTask] = useState('')
  const handleSubmit = async (e: FormEvent) => {
    await addTaskApi({ id: uuidv4(), task: task })
    setTask('')
  }

  return (
    <form className='text-2xl mb-4 flex justify-center' onSubmit={ handleSubmit }>
        <input
          type="text" 
          className='border-2 rounded-md shadow-md py-1 mr-2 block w-10/12 focus:outline-none focus:ring-1 focus:ring-indigo-700'
          onChange={(e: ChangeEvent<HTMLInputElement>) => setTask(e.target.value) }
          value={ task } />
        <button className='bg-indigo-700 text-white px-3 py-1 rounded-md w-2/12'>追加</button>
    </form>
  )
}