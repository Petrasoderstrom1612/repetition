/* eslint-disable react-hooks/exhaustive-deps */
import { getTodosAxios } from './services/TodosAPI'
import { useEffect, useState } from 'react'
import './assets/app.scss'
import Counter from './components/Counter'
import Clicker from './components/Clicker'
import AddNewTodoForm from './components/AddNewTodoForm'
import Container from 'react-bootstrap/Container' //it is recommended to use this way of import with the /Component at the end - saver so Bootstrap works in all browsers
import type {Post} from "./types/Todo.types" // do not forget type!!! (you can also have { type X, Y Z}) if you want to group them
import TodosList from './components/TodosList'

const storedPosts = localStorage.getItem("localStoragePosts")
const initialPosts: Post[] = storedPosts ? JSON.parse(storedPosts): [] //you have to have the storedPosts in a separate variable, otherwise Typescript believes it can be null if you place it in this line, it believes you are doing 2 function calls and could parse null
// const initialPosts: Post[] = JSON.parse(localStorage.getItem("localStoragePosts") ?? "[]") //the best solution for TS, you treat the same type withi parse


function App() {
  // const [posts, setPosts] = useState<() => Post[] | Post[]>(() => localStorage.getItem("posts")||[]) 
  const [posts, setPosts] = useState<Post[]>(initialPosts) 
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string|false>(false)
  const incompletedPosts = posts.filter(post => !post.done)
  const completedPosts = posts.filter(post => post.done)
  const doneCount = posts.filter(p => p.done).length

  useEffect(() => {
    const getData = async () => {
      try{
        setIsLoading(true)
        const dataFromService = await getTodosAxios() 
        setPosts(dataFromService)
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
    getData()
  },[])

  useEffect(()=>{   
    localStorage.setItem("localStoragePosts", JSON.stringify(posts))
  },[posts])

  
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
  
  const addPostSetter = (title: string) => {
    setPosts([...posts, {id: Math.max(0,...posts.map(p => p.id)) + 1, title: title, likes: 0}]) //!do not forget 0 if no posts!!!! so it does not add infinity
  }


  return (
  <Container>
  <>
    {error ? (<p>{error}</p>) :
    isLoading ? (<p>loading...</p>) :
    posts.length > 0 ?
      (  <>
          <h2 className="h5 mb-2">"Done stuff"</h2>
          <TodosList handleLike={handleLike} removePost={removePost} changeDone={changeDone} posts={incompletedPosts}/>
          <hr/>
          <h2 className="h5 mb-2">"To do stuff"</h2>
          <TodosList handleLike={handleLike} removePost={removePost} changeDone={changeDone} posts={completedPosts}/>
          <p className="text-muted"> {doneCount} of {posts.length} completed</p>
          </>
      ) : (<p>No posts...</p>)}
  </>
    <Clicker/>
    <h1>Todos</h1>
    <Counter completed={posts.filter(p => p.done).length} total={posts.length}/>
    <AddNewTodoForm  addPostSetter={addPostSetter}/>
  </Container>
  )
}

export default App

