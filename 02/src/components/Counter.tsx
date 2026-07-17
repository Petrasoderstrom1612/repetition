import { useState } from "react"

const Counter = () => {
  const [counter, setCounter] = useState(0)

  const handleBtnClick= () => {
    console.log("handle counter before click ", counter)
    setCounter(counter + 1)
    console.log("handle counter after click ", counter)
  }

    return(
    <div className="counter">
        <h2>{counter}</h2>
        <button className="btn btn-primary" onClick={handleBtnClick}>Click me!</button>
    </div>
    )
}

export default Counter