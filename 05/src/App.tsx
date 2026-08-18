/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable react-hooks/exhaustive-deps */
import { createTodoAxios, completeToggleTodoAxios, deleteTodoAxios, getTodosAxios, likeTodoAxios } from './services/TodosAPI'
import { useEffect, useState } from 'react'
import './assets/app.scss'
import Counter from './components/Counter'
// import Clicker from './components/Clicker'
import AddNewTodoForm from './components/AddNewTodoForm'
import Container from 'react-bootstrap/Container' //it is recommended to use this way of import with the /Component at the end - saver so Bootstrap works in all browsers
import type {Post} from "./types/Todo.types" // do not forget type!!! (you can also have { type X, Y Z}) if you want to group them
import TodosList from './components/TodosList'
import Alert from 'react-bootstrap/esm/Alert'

// const storedPosts = localStorage.getItem("localStoragePosts")
// const initialPosts: Post[] = storedPosts ? JSON.parse(storedPosts): [] //you have to have the storedPosts in a separate variable, otherwise Typescript believes it can be null if you place it in this line, it believes you are doing 2 function calls and could parse null
// const initialPosts: Post[] = JSON.parse(localStorage.getItem("localStoragePosts") ?? "[]") //the best solution for TS, you treat the same type withi parse


function App() {
  // const [posts, setPosts] = useState<() => Post[] | Post[]>(() => localStorage.getItem("posts")||[]) 
  // const [posts, setPosts] = useState<Post[]>(initialPosts) 
  const [posts, setPosts] = useState<Post[]|null>(null) 
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string|false>(false)
  const incompletedPosts = posts?.filter(post => !post.done) ?? [];
  const completedPosts = posts?.filter(post => post.done) ?? [];
  const doneCount = posts?.filter(p => p.done).length ?? [];

 
  const getData = async () => {
    try{
      setIsLoading(true)
      const dataFromService = await getTodosAxios() 
      setPosts(dataFromService) //to set Posts again
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
     getData()
  },[])
  
    useEffect(()=>{   
      localStorage.setItem("localStoragePosts", JSON.stringify(posts))
    },[posts])

  const postData = async (title: string) => { //you need async because you call the service
    try{
      await createTodoAxios({title: title, likes: 0, done: false}) 
      getData()
    } catch (err) {
      if (err instanceof Error){
        setError("Could not create todo" + err.message)
      } else {
        setError("something unexpected has happend")
      }
    } 
  }

    
  // const addPostSetter = (title: string) => {
  //   // const newPost = await createTodoAxios({
  //   //   // id: Axios generates the right number automatically
  //   //   title: title, 
  //   //   likes: 0
  //   // }) //!do not forget 0 if no posts!!!! so it does not add infinity

  //   // setPosts([...posts!, newPost])
  //   return title
  // }

  const deletePost = async (postId: number) => {
    try{
      await deleteTodoAxios(postId)
      getData()
    } catch(err) {
      if (err instanceof Error){
        setError("could not delete the item" + err.message)
      } else{
        setError("something unexpected has happend")
      }
    }
  }
  
  // const removePost = (postId: number) => {
  //   console.log(postId)
  //   setPosts(posts && posts.filter(p => p.id !== postId)) //returns whatever is truthy, keep all whose id is not matching the incoming id, the result will be a new array of filtered p's
  // }

  
  const addLike = async (postId: number, likes: number) => {
    try{
      await likeTodoAxios(postId, likes)
      await getData() //so that it waits on likeTodoAxios PATCH
    } catch (err){
      if (err instanceof Error){
        setError("could not add like" + err.message)
      } else {
        setError("something unexpected happened")
      }
    }
  }
  
  // const handleLike = (postId: number) =>{
  //   setPosts(posts ?posts.map(p => p.id === postId ? {...p, likes: p.likes + 1 } : p): []) //returns ternary
  // }

  // const changeDone = (post: Post) => {
  //   console.log(post.id)
  //   post.done = !post.done 
  //   setPosts([...posts!])
  // }

  const toggleDone = async(postId:number, done: boolean) => {
    try{
      await completeToggleTodoAxios(postId, {done:!done})
      getData()
    } catch (err){
      if (err instanceof Error){
        setError("could not add like" + err.message)
      } else{
        setError("something unexpected happened")
      }
    }
  }

  return (
  <Container>
  <>
    {error ? (<Alert variant="danger">{error}</Alert>) :
    isLoading ? (<p>loading...</p>) :
    posts && posts.length ?
      (  <>
          <h2 className="h5 mb-2">"Done stuff"</h2>
          <TodosList handleLike={addLike} removePost={deletePost} changeDone={toggleDone} posts={incompletedPosts}/>
          <hr/>
          <h2 className="h5 mb-2">"To do stuff"</h2>
          <TodosList handleLike={addLike} removePost={deletePost} changeDone={toggleDone} posts={completedPosts}/>
          <p className="text-muted"> {doneCount} of {posts.length} completed</p>
          </>
      ) : (<p>No posts...</p>)}
  </>
    {/* <Clicker/> */}
    <h1>Todos</h1>
    <Counter completed={posts ? posts.filter(p => p.done).length: 0} total={posts ? posts.length : 0}/>
    <AddNewTodoForm  postData={postData}/>
  </Container>
  )
}

export default App

