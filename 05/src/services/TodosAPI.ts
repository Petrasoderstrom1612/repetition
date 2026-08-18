import type {CreateTodoPayload, Post} from "../types/Todo.types" 
import axios from "axios";

const BASE_URL = "http://localhost:3000"

export const getTodosFetch = async () => {
const res = await fetch(BASE_URL + "/todos")
    if(!res.ok){
        throw new Error("Request failed")
    }
const data = await res.json() as Post[]
return data
}

export const getTodosAxios = async () => {
    const res = await axios.get<Post[]>(BASE_URL + "/todos")
    return res.data
}

console.log("getTodosAxios", getTodosAxios())

export const createTodoAxios = async(payload: CreateTodoPayload) => {
      console.log("POST payload:", payload)
    const res = await axios.post<Post>(BASE_URL + "/todos",payload)
    return res.data
}

export const deleteTodoAxios = async(id: number) => {
    const res = await axios.delete<Post>(BASE_URL + "/todos/" + id)
    return res.data
}

export const likeTodoAxios = async(id: number, likes: number) => {
    const res = await axios.patch<Post>(BASE_URL + "/todos/" + id, {likes: likes + 1})
    return res.data
}

export const completeToggleTodoAxios = async(id:number, done:{done: boolean}) => {
    const rest = await axios.patch<Post>(BASE_URL + "/todos/" + id, done) 
    return rest.data
}