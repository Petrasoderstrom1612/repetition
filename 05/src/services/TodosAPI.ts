import type {Post} from "../types/Todo.types" 
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