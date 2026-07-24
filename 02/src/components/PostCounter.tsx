// import React from 'react'

interface PostCounterProps {
  count: number
}

const PostCounter: React.FC<PostCounterProps> = ({count}: PostCounterProps) => {
  return (
    <p>There are {count} posts</p>
  )
}

export default PostCounter