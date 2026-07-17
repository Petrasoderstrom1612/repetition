import {useState} from "react";

interface Post {
    id: number;
    title: string;
    likes: number;
}
const App = () => {
 const [posts, setPosts] = useState<Post[]>([  //tom array är typ never
 {id: 1, title: "react rocks", likes: 33}, 
 {id: 2,  title: "jsx moar rocks", likes: 27},
 {id: 3,  title: "statefull?", likes: 433},
 ])

  return (
    <>
    <div>Hello</div>
    {posts.length > 0 ?
       (<ul>
            {posts.map(post => 
            <li key={post.id}>
            {post.title} {post.likes} likes
            <button onClick={() => {setPosts(posts.map(p => post.id === p.id ? {...p, likes: p.likes + 1} : p))}}>👍🏻</button>
            <button onClick={() => {setPosts(posts.filter(p => post.id !== p.id))}}>❌</button>
            </li>
        )}
        </ul>) : (<p>no posts...</p>)}
    </>
  )
}

export default App