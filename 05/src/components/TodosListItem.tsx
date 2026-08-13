import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import type {Post} from "../types/Todo.types"

type TodosListItemProps = {
    handleLike: (postId: number, likes: number) => Promise<void>;
    removePost: (postId: number) => Promise<void>;
    changeDone: (post: Post) => void;
    post: Post
}

const TodosListItem: React.FC<TodosListItemProps> = ({handleLike, removePost, changeDone, post}) => {
return (
  <>
  <ListGroup.Item key={post.id} className={`${post.done ? "completed" : ""} mb-3`} onClick={() => changeDone(post)}><span className="todo-title">{post.title} {post.likes} likes</span>
  <div>
      <Button size="sm" variant="outline-warning" onClick={(e) => {e.stopPropagation(); handleLike(post.id, post.likes)}}>👍🏻</Button>
      <Button size="sm" variant="outline-danger" onClick={(e) => {e.stopPropagation(); removePost(post.id)}}>❌</Button>
  </div>
  </ListGroup.Item>
  </>
  )
}

export default TodosListItem

