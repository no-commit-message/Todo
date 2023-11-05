"use client";

import { deleteTaskApi } from '@/libs/task_api';
import { Task } from '@/libs/types'
import React from 'react'
import { Task_one } from './Task_one';

interface Props {
  tasks: Task[]
}

export const Tasks = ({ tasks }: Props) => {
  return (
    <ul>
      {tasks.map((task) => (
        <Task_one key={task.id} task={ task }/>
      ))}
    </ul>
  )
}