import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'

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
    <Form onSubmit={(e) => handleForm(e)}  className="mb-3" >
      <InputGroup>
      <Form.Control
            aria-label="create a new post"
            minLength={2}
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
            required
        />
        {postTitle.length < 3 && postTitle.length > 1 && <p>Too short text...</p>}
        <Button variant="success" type="submit" className="btn btn-primary" disabled={postTitle.length < 3}>Create a new post</Button>
      </InputGroup>
    </Form>
  )
}

export default AddNewTodoForm