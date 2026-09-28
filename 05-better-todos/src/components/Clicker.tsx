import React from 'react'

const Clicker = () => { //no props
    const [click, setClick] = React.useState(0)

    const addClick = () => {
        setClick(prev => prev + 1)
    }
  return (
    <div>
        <p>{click}</p>
        <button onClick={addClick}>Click</button>
    </div>
  )
}

export default Clicker