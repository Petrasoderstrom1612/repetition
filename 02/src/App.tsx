import {useRef, useState} from "react";


interface Post {
    id: number;
    title: string;
    likes: number;
}
const App = () => {
  const [msg, setMsg] = useState("")
  const [newTitle, setNewTitle] = useState("")
  const [posts, setPosts] = useState<Post[]>([  //tom array är typ never
  {id: 1, title: "react rocks", likes: 33}, 
  {id: 2,  title: "jsx moar rocks", likes: 27},
  {id: 3,  title: "statefull?", likes: 433},
  ])

  // const inputTitleRef = useRef<HTMLInputElement | null>(null)

  const addNewTodo = (e: React.SubmitEvent) => {
    e.preventDefault() //stop form from being submitted and causing a page reload

    setPosts([...posts, 
      { id: Math.max(0, ...posts.map(p => p.id)) + 1, 
        title: newTitle, 
        likes: 0}
    ])
    setNewTitle("")
    // inputTitleRef.current.value  = "" //you have to go inside of the object, hence doing postTitle = "" would be wrong as you would reassign an entire object but here we just point to the object as it is a complex type
  }

  const handleLike = (post: Post) => {
    console.log("the clicked post", post)
    post.likes++
    setPosts([...posts])
  }

  const removePost = (clickedPost: Post) => {
    const postsToKeep = posts.filter(p => p.id !== clickedPost.id)
    setPosts(postsToKeep)
  }

  console.log("...app is rendering")
  // console.log("inputTitleRef", inputTitleRef)

  return (
    <>
    <button onClick={()=>{setMsg(msg === "" ? "hi" : "")}}>{msg}</button>
    <div>Hello</div>
    {posts.length > 0 ?
       (<ul>
            {posts.map(post => 
            <li key={post.id}>
            {post.title} {post.likes} likes
            <button className="btn btn-success btn-sm ms-1" onClick={() => handleLike(post)}>👍🏻</button>
            <button className="btn btn-danger btn-sm ms-1" onClick={() => {removePost(post)}}>❌</button>
            </li>
        )}
        </ul>) : (<p>no posts...</p>)}

        

      <form  onSubmit={addNewTodo}>
        <input
          placeholder="new todo item"
          aria-label="new todo item"
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          name="new-todo-item"
          required
          minLength={2}
          className="hi"
          // ref={inputTitleRef}
        />
        <button type="submit">Add new todo</button>
      </form>
    </>
  )
}

export default App