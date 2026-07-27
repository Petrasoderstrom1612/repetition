import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import Clicker from './components/Clicker'

interface Post {
id: number, 
title: string, 
likes: number,
done?: boolean
}

function App() {
  const [posts, setPosts] = useState<Post[]>([
    {id: 1, title: "react is best", likes: 26, done: true},
    {id: 2, title: "programming is cool", likes: 200},
    {id: 3, title: "react is my fav", likes: 3000}
  ])
  const [postTitle, setPostTitle] = useState("")
  const [counter, setCounter] = useState(posts.length)

  const handleLike = (postId: number) =>{
    setPosts(posts.map(p => p.id === postId ? {...p, likes: p.likes + 1 } : p)) //returns ternary
  }

  const removeLike = (postId: number) => {
    setPosts(posts.filter(p => p.id !== postId)) //returns whatever is truthy
  }
  const handleForm = (e: React.SubmitEvent) => { //React.SubmitEvent !!! React. must be included
    e.preventDefault()
    console.log(e.target.value)
    const newPost = {id: Math.max(...posts.map(p => p.id)) + 1, title: postTitle, likes: 0} //map over posts to create a new array, but use spread ... to remove hakparenteses and after the entire Math + 1
    setPosts([...posts, newPost])

    setPostTitle("")
    setCounter(posts.length)
  }

  const changeDone = (post: Post) => {
    console.log(post.id)
    post.done = !post.done 
      setPosts([...posts])
  }

  return (
    <>
    <Clicker/>
    <Counter count={counter}/>
  {posts.length > 0 ?
    (  <ul>
        {posts.filter(post => !post.done).map(post => 
        <>
        <li className={post.done ? "done" : ""} onClick={() => changeDone(post)}>{post.title} {post.likes} likes</li>
        <button className="btn btn-success" onClick={() => handleLike(post.id)}>👍🏻</button>
        <button className="btn btn-danger" onClick={() => removeLike(post.id)}>❌</button>
        </> )}
        <hr/>
        {posts.filter(post => post.done).map(post => <>
        <li key={post.id} className={post.done ? "done" : ""} onClick={() => changeDone(post)}>{post.title} {post.likes} likes</li>
        <button className="btn btn-success" onClick={() => handleLike(post.id)}>👍🏻</button>
        <button className="btn btn-danger" onClick={() => removeLike(post.id)}>❌</button>
        </>)}
        
        </ul>
    ) : <p>No posts...</p>}

    <form onSubmit={(e) => handleForm(e)}>
      <input
        aria-label="create a new post"
        minLength={2}
        value={postTitle}
        onChange={(e) => setPostTitle(e.target.value)}
      />
      <button type="submit" className="btn btn-primary" disabled={postTitle.length < 3}>Create a new post</button>
    </form>
  </>
  )
}

export default App
