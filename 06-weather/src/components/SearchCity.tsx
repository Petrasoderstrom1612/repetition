import { Button, Form } from 'react-bootstrap';
import { useState} from 'react'

interface SearchCityProps {
  getData: (city: string) => Promise<void>
}

const SearchCity: React.FC<SearchCityProps> = ({getData}) => {
  const [input, setInput] = useState("")

 console.log(input)

 const handleForm = (e: React.SubmitEvent) => {
  e.preventDefault()
  getData(input)
  setInput("")  
 }

  return (
    <div id="search-wrapper">
      <Form onSubmit={handleForm}>
        <Form.Group>
          <Form.Label>Search city</Form.Label>
          <Form.Control 
            type="text" 
            value={input} 
            onChange={(e) => setInput(e.target.value)}
            isInvalid={input.length < 3}
            aria-label="write city to check weather forecast there"
            minLength={2}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">Submit</Button>
      </Form>

    </div>
  )
}

export default SearchCity
// disabled={input.length < 3}