import ListGroup from 'react-bootstrap/ListGroup'
import TodosListItem from "../components/TodosListItem"
import type {Post} from "../types/Todo.types"

interface TodosListProps {
    handleLike: (postId: number) => void;
    removePost: (postId: number) => void;
    changeDone: (post: Post) => void;
    posts: Post[]
}

const TodosList: React.FC<TodosListProps> = ({handleLike,removePost,changeDone,posts}) => {
    return (
    <ListGroup className="todolist mb-3">
      {posts.map(post => 
      <TodosListItem handleLike={handleLike} removePost={removePost} changeDone={changeDone} post={post}/> )}
    </ListGroup>
    )
}

export default TodosList;