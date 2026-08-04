import React from 'react'

interface CountProps {
    completed: number
    total: number
}

const Counter: React.FC<CountProps> = ({completed, total}: CountProps) => {
  return (
    <p> {completed} {completed === 1 ? "todo" : "todos"} of {total} completed.</p>
  )
}

export default Counter
