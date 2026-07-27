import React from 'react'

interface CountProps {
    count: number
}

const Counter: React.FC<CountProps> = ({count}: CountProps) => {
  return (
    <div>
      {count}
    </div>
  )
}

export default Counter
