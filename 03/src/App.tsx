import { useState } from 'react'
import './assets/app.scss'
import Button from 'react-bootstrap/Button'
import Counter from './components/Counter'
import Clicker from './components/Clicker'
import AddNewTodoForm from './components/AddNewTodoForm'
import Container from 'react-bootstrap/Container' //it is recommended to use this way of import with the /Component at the end - saver so Bootstrap works in all browsers
import ListGroup from 'react-bootstrap/ListGroup'
import type {Post} from "./types/Todo.types" // do not forget type!!! (you can also have { type X, Y Z}) if you want to group them


function App() {
  const [posts, setPosts] = useState<Post[]>([
    {id: 1, title: "react is best", likes: 26, done: true},
    {id: 2, title: "programming is cool", likes: 200},
    {id: 3, title: "react is my fav", likes: 3000}
  ])
  const [postTitle, setPostTitle] = useState("")


  const handleLike = (postId: number) =>{
    setPosts(posts.map(p => p.id === postId ? {...p, likes: p.likes + 1 } : p)) //returns ternary
  }

  const removePost = (postId: number) => {
    console.log(postId)
    setPosts(posts.filter(p => p.id !== postId)) //returns whatever is truthy, keep all whose id is not matching the incoming id, the result will be a new array of filtered p's
  }

  const changeDone = (post: Post) => {
    console.log(post.id)
    post.done = !post.done 
      setPosts([...posts])
  }

  const handleStateSetters = () => {
    setPosts([...posts, {id: Math.max(0,...posts.map(p => p.id)) + 1, title: postTitle, likes: 0}]) //!do not forget 0 if no posts!!!! so it does not add infinity

    setPostTitle("")
  }

  // const doneCount = posts.reduce((count, post) => {
  // if (post.done) {
  //   return count + 1;
  // }
  // return count;
  // }, 0);

  const doneCount = posts.filter(p => p.done).length

  return (
    <Container>
    <Clicker/>
    <h1>Todos</h1>
    <Counter completed={posts.filter(p => p.done).length} total={posts.length}/>
    <AddNewTodoForm postTitle={postTitle} handleStateSetters={handleStateSetters} setPostTitle={setPostTitle}/>

  {posts.length > 0 ?
    (  
      <>
      <ListGroup className="todolist mb-3">
        {posts.filter(post => !post.done).map(post => 
        <>
        <ListGroup.Item key={post.id} className={`${post.done ? "completed" : ""} mb-3`} onClick={() => changeDone(post)}><span className="todo-title">{post.title} {post.likes} likes</span>
        <div>
          <Button size="sm" variant="outline-warning" onClick={(e) => {e.stopPropagation(); handleLike(post.id)}}>👍🏻</Button>
          <Button size="sm" variant="outline-danger" onClick={(e) => {e.stopPropagation(); removePost(post.id)}}>❌</Button>
        </div>
        </ListGroup.Item>
        </> )}
        <hr/>
        {posts.filter(post => post.done).map(post => <>
        <ListGroup.Item key={post.id} className={post.done ? "completed" : ""} onClick={() => changeDone(post)}><span className="todo-title">{post.title} {post.likes} likes</span>
        <div>
          <Button size="sm" variant="outline-warning" onClick={(e) => {e.stopPropagation(); handleLike(post.id)}}>👍🏻</Button>
          <Button size="sm" variant="outline-danger" onClick={(e) => {e.stopPropagation(); removePost(post.id)}}>❌</Button>
        </div>
        </ListGroup.Item>
        </>)}
        </ListGroup>
        {<p className="text-muted"> {doneCount} of {posts.length} completed</p>}
        </>
    ) : <p>No posts...</p>}
  </Container>
  )
}

export default App
