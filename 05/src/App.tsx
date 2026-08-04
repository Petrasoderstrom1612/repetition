import { useState } from 'react'
import './assets/app.scss'
import Counter from './components/Counter'
import Clicker from './components/Clicker'
import AddNewTodoForm from './components/AddNewTodoForm'
import Container from 'react-bootstrap/Container' //it is recommended to use this way of import with the /Component at the end - saver so Bootstrap works in all browsers
import ListGroup from 'react-bootstrap/ListGroup'
import type {Post} from "./types/Todo.types" // do not forget type!!! (you can also have { type X, Y Z}) if you want to group them
import TodosListItem from "./components/TodosListItem"
import TodosList from './components/TodosList'

function App() {
  const [posts, setPosts] = useState<Post[]>([
    {id: 1, title: "react is best", likes: 26, done: true},
    {id: 2, title: "programming is cool", likes: 200},
    {id: 3, title: "react is my fav", likes: 3000}
  ])

  
  const doneCount = posts.filter(p => p.done).length
  
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
  
  const handleStateSetters = (title: string) => {
    setPosts([...posts, {id: Math.max(0,...posts.map(p => p.id)) + 1, title: title, likes: 0}]) //!do not forget 0 if no posts!!!! so it does not add infinity
  }

  const incompletedPosts = posts.filter(post => !post.done)
  const completedPosts = posts.filter(post => post.done)

  return (
    <Container>
  <>
  {posts.length > 0 ?
    (  <>
        <h2 className="h5 mb-2">"Done stuff"</h2>
        <TodosList handleLike={handleLike} removePost={removePost} changeDone={changeDone} posts={incompletedPosts}/>
        <hr/>
        <h2 className="h5 mb-2">"To do stuff"</h2>
        <TodosList handleLike={handleLike} removePost={removePost} changeDone={changeDone} posts={completedPosts}/>
        <p className="text-muted"> {doneCount} of {posts.length} completed</p>
        </>
    ) : <p>No posts...</p>}
  </>
    <Clicker/>
    <h1>Todos</h1>
    <Counter completed={posts.filter(p => p.done).length} total={posts.length}/>
    <AddNewTodoForm  handleStateSetters={handleStateSetters}/>
  </Container>
  )
}

export default App


  // const doneCount = posts.reduce((count, post) => {
  // if (post.done) {
  //   return count + 1;
  // }
  // return count;
  // }, 0);

