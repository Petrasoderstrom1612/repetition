import {useState} from "react";

interface Post {
    id: number;
    title: string;
    likes: number;
}
const App = () => {
  const [newTitle, setNewTitle] = useState("")
  const [posts, setPosts] = useState<Post[]>([  //tom array är typ never
  {id: 1, title: "react rocks", likes: 33}, 
  {id: 2,  title: "jsx moar rocks", likes: 27},
  {id: 3,  title: "statefull?", likes: 433},
  ])

  const addNewTodo = (e) => {
    e.preventDefault()
    setPosts([...posts, { id: Math.max(...posts.map(p => p.id)) + 1, title: newTitle, likes: 0}])
    setNewTitle("")
  }


  return (
    <>
    <div>Hello</div>
    {posts.length > 0 ?
       (<ul>
            {posts.map(post => 
            <li key={post.id}>
            {post.title} {post.likes} likes
            <button className="btn btn-success btn-sm ms-1" onClick={() => {setPosts(posts.map(p => post.id === p.id ? {...p, likes: p.likes + 1} : p))}}>👍🏻</button>
            <button onClick={() => {setPosts(posts.filter(p => post.id !== p.id))}}>❌</button>
            </li>
        )}
        </ul>) : (<p>no posts...</p>)}

        

      <form>
        <input
          placeholder="new todo item"
          aria-label="new todo item"
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          name="new-todo-item"
          required
          // minlength="4"
        />
        <button type="submit" onClick={(e) =>addNewTodo(e)}>Add new todo</button>
      </form>
    </>
  )
}

export default App