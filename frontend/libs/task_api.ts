import { Task } from "./types";

const SERVER_URL = 'http://127.0.0.1:8000/'

export const getTasks = async (): Promise<Task[]> => {
    const res = await fetch(new URL(`${SERVER_URL}api/todo/`), {cache: "no-store"});
    const tasks = await res.json();
    return tasks;
}

export const addTaskApi = async (task: Task): Promise<Task> => {
    const res = await fetch(new URL(`${SERVER_URL}api/todo/`), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    });
    const newTask = await res.json();
    return newTask;
}

export const deleteTaskApi = async (id: string): Promise<void> => {
    await fetch(new URL(`${SERVER_URL}api/todo/${id}/`), {
        method: 'DELETE'
    });
}