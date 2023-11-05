import Image from 'next/image'
import { AddTask } from './componenets/AddTask'
import { Tasks } from './componenets/Tasks'
import { getTasks } from '@/libs/task_api'
import { Task } from '@/libs/types'

export default async function Home() {
  const tasks = await getTasks()
  console.log(tasks)
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-200'>
      <h1 className='text-6xl'>Todo</h1>
      <div className='bg-white p-4 rounded-lg shadow-lg w-6/12'>
        <AddTask />
        <Tasks tasks={tasks}/>
      </div>
    </div>
  )
}