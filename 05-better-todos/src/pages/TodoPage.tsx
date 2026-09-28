import { useParams } from "react-router";
const TodoPage = () => {
    const params = useParams()
    console.log(params)

    return (
        <div><h1>Todo {params.id}</h1></div>
    )
}

export default TodoPage;