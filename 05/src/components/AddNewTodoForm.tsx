import React from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'


interface AddNewTodoFormProps {
  postData: (title: string) => Promise<void>;
}

const AddNewTodoForm: React.FC<AddNewTodoFormProps> = ({postData}) => {
const [postTitle, setPostTitle] = useState("")
const trimmedPostTitle = postTitle.trim()
const postTitleLength = postTitle.length

  const handleForm = (e: React.SubmitEvent) => { //React.SubmitEvent !!! React. must be included
    e.preventDefault()
    console.log(e.target.value)

    postData(postTitle) 
    setPostTitle("")
  }

  return (
    <Form onSubmit={(e) => handleForm(e)}  className="mb-5 position-relative" >
      <InputGroup>
      <Form.Control
            aria-label="create a new post"
            minLength={2}
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
            required
            isInvalid= {postTitleLength < 3 && postTitleLength > 0}
        />
        <Button variant="success" type="submit" className="btn btn-primary" disabled={trimmedPostTitle.length < 3}>Create a new post</Button>
      </InputGroup>
       <Form.Control.Feedback type="invalid" className="text-danger position-absolute start-0 top-100 mt-1">Too short text...</Form.Control.Feedback>
    </Form>
  )
}

export default AddNewTodoForm