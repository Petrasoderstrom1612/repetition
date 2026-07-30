import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import type {Post} from "../types/Todo.types"

type TodosListProps = {
    handleLike: (postId: number) => void;
    removePost: (postId: number) => void;
    changeDone: (post: Post) => void;
    filteredPosts: Post[];
    headline: string;
}

const TodosList = ({handleLike, removePost, changeDone, filteredPosts, headline}: TodosListProps) => {
  return (
    <>
        <h2 className="h5 mb-2">{headline}</h2>
        <ListGroup className="todolist mb-3">
        {filteredPosts.map(post => 
        <>
        <ListGroup.Item key={post.id} className={`${post.done ? "completed" : ""} mb-3`} onClick={() => changeDone(post)}><span className="todo-title">{post.title} {post.likes} likes</span>
        <div>
            <Button size="sm" variant="outline-warning" onClick={(e) => {e.stopPropagation(); handleLike(post.id)}}>👍🏻</Button>
            <Button size="sm" variant="outline-danger" onClick={(e) => {e.stopPropagation(); removePost(post.id)}}>❌</Button>
        </div>
        </ListGroup.Item>
        </> )}
        </ListGroup>
    </>
  )
}

export default TodosList