import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getTodoAxios } from "../services/TodosAPI";
import type { Post } from "../types/Todo.types";
import { Alert} from "react-bootstrap";

// type TodoPageProps = {
//     changeDone: (postId: number,done: boolean) => Promise<void>;
// }

const TodoPage = () => {
    const params = useParams()
    const paramId = Number(params.id)

      const [todo, setTodo] = useState<Post|null>(null) 
      const [isLoading, setIsLoading] = useState(false)
      const [error, setError] = useState<string|false>(false)

      const getData = async () => {
        try{
          setIsLoading(true)
                console.log("Getting todo with ID:",typeof  paramId)
          const dataFromService = await getTodoAxios(paramId) 
            console.log("API returned:", typeof dataFromService)
          setTodo(dataFromService) //to set Posts again
        } catch (err) {
          if (err instanceof Error){
            setError(err.message)
          } else {
            setError("something unexpected has happend")
          }
        } finally {
          setIsLoading(false)
        }
      }
    
      useEffect(() => {
         // eslint-disable-next-line react-hooks/set-state-in-effect
         getData()
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[paramId])


    return (
        error ? (<Alert variant="danger">{error}</Alert>) :
        isLoading ? (<p>loading...</p>) :
        todo ?
(        <div>
            <h1>Todo {params.id} {todo.title}</h1>
                {/* <Button size="sm" variant="outline-warning" onClick={(e) => {e.stopPropagation(); handleLike(post.id, post.likes)}}>👍🏻</Button>
                <Button size="sm" variant="outline-danger" onClick={(e) => {e.stopPropagation(); removePost(post.id)}}>❌</Button>     */}
        </div>) : null
    )
}

export default TodoPage;