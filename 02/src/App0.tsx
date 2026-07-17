import "./assets/scss/App.scss";
import { useState } from "react";
import Counter from "./components/Counter";

interface Post {
  id: number; 
  title: string; 
  likes: number;
}

function App0() {

  const [msg, setMsg] = useState("Hi mom!")
  const [posts, setPosts] = useState<Post[]>([  //tom array är typ never
    {id: 1, title: "react rocks", likes: 33},
    {id: 2,  title: "jsx moar rocks", likes: 27},
    {id: 3,  title: "statefull?", likes: 433},
  ])
  const [ salary, setSalary ] = useState(10)
  const [isVisible, setIsVisible] = useState(true)

  console.log("app is rendering...")

  const adjustSalary = (amount: number) => {
    // setSalary(salary + amount >= 10 ? salary + amount : 5 )

    if(amount + salary < 5){
      setSalary(5)
      return
    }

    setSalary(salary + amount)
  }

  return (
    <div className="container py-2 border border-danger">
      <h1>App</h1>

      <Counter/> {/*own memory place*/}
      <Counter/> {/*own memory place*/}

      <hr/>
      <button className="btn btn-warning" onClick={() => {setMsg(msg === "Hi mom!" ? "Hi dad" : "Hi mom!")}}>Change msg!</button>
      <p>{msg}</p>


      <button className={`${isVisible ? "btn btn-danger" : "btn btn-success"}`} onClick={()=> setIsVisible(!isVisible)}>{isVisible ? "Hide Salary" : "Show Salary"}</button>

      {isVisible && (<>    <h2>Salary</h2>
      <h3>Salary per hour: {salary} £</h3>
      <button className="btn btn-primary" onClick={() => adjustSalary(+1)}>Raise 1£</button>
      <button className="btn btn-primary" onClick={() => adjustSalary(+5)}>Raise 5£</button>
      <button className="btn btn-danger" onClick={() => adjustSalary(-1)} disabled={salary === 5}>Decrease 1£</button>
      <button className="btn btn-danger" onClick={() => adjustSalary(-5)} disabled={salary === 5}>Decrease 5£</button>
      {salary < 10 && <p className="alert alert-warning">Salary went below 10£</p>}
      <hr/>
      </> )}

      <ul>
        {posts.map(post => <li key={post.id}>{post.title} ({post.likes} likes)</li>)}
      </ul>
    </div>
  )
}

export default App0
