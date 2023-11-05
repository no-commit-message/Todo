import { deleteTaskApi } from '@/libs/task_api'
import { Task } from '@/libs/types'
import Router, { useRouter } from 'next/router'
import React from 'react'

interface Props {
  task: Task
}

export const Task_one = ({ task }: Props) => {
  const handleClick = async () => {
    await deleteTaskApi(task.id)
  }

  return (
    <li key={task.id} className='flex justify-between border text-xl py-1 px-3 border-l-4 border-l-indigo-700 rounded-md shadow-md mb-2'>
        <div className='flex'>
            <input type="checkbox" className='mr-2' />
            <p>{task.task}</p>
        </div>
        <div>
            <button className='text-indigo-700 mr-2'>編集</button>
            <button className='text-red-700' onClick={ handleClick }>削除</button>
        </div>
    </li>
  )
}