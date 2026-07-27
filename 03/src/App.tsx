import { useState } from 'react'
import './App.css'

interface Post {
id: number, 
title: string, 
likes: number
}

function App() {
  const [posts, setPosts] = useState<Post[]>([
    {id: 1, title: "react is best", likes: 26},
    {id: 2, title: "react is best", likes: 200},
    {id: 3, title: "react is best", likes: 3000}
  ])

  const handleLike = (postId: number) =>{
    setPosts(posts.map(p => p.id === postId ? {...p, likes: p.id + 1 } : p))
  }

  const removeLike = (postId: number) => {
    setPosts(posts.filter(p => p.id !== postId))
  }

  return (
    <ul>
    {posts.map(post => 
    <>
    <li key={post.id}>{post.title} {post.likes}</li>
    <button className="btn btn-success" onClick={() => handleLike(post.id)}>👍🏻</button>
    <button className="btn btn-danger" onClick={() => removeLike(post.id)}>❌</button>
    </>
    )}
    </ul>
  )
}

export default App
