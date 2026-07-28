import React from 'react'

interface AddNewTodoFormProps {
    postTitle: string;
    handleStateSetters: () => void
    setPostTitle: React.Dispatch<React.SetStateAction<string>>
}

const AddNewTodoForm: React.FC<AddNewTodoFormProps> = ({postTitle, handleStateSetters, setPostTitle}: AddNewTodoFormProps) => {

  const handleForm = (e: React.SubmitEvent) => { //React.SubmitEvent !!! React. must be included
    e.preventDefault()
    console.log(e.target.value)
    handleStateSetters()
  }

  return (
    <form onSubmit={(e) => handleForm(e)}>
      <input
        aria-label="create a new post"
        minLength={2}
        value={postTitle}
        onChange={(e) => setPostTitle(e.target.value)}
      />
      {postTitle.length < 3 && postTitle.length > 1 && <p>Too short text...</p>}
      <button type="submit" className="btn btn-primary" disabled={postTitle.length < 3}>Create a new post</button>
    </form>
  )
}

export default AddNewTodoForm