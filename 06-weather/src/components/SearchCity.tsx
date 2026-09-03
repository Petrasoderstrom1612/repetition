import { Button, Form } from 'react-bootstrap';
import { useState} from 'react'

interface SearchCityProps {
  onSearch: (city: string, units: string) => void;
  units: string;
}

const SearchCity: React.FC<SearchCityProps> = ({onSearch, units}) => {
  const [input, setInput] = useState("")
  const trimmedInput = input.trim()

 console.log(input.length)

 const handleForm = (e: React.SubmitEvent) => {
  e.preventDefault()
  onSearch(trimmedInput, units)
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
            isInvalid={input.length > 0 && input.length < 3}
            aria-label="write city to check weather forecast there"
            minLength={3} //browser has automatic text (if not overridden by Form.Control.Feedback), the 3 is for screenreader
            required
          />
        <Form.Control.Feedback type="invalid" className="text-danger">Too short text</Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit" disabled={input.length < 3}>Submit</Button>
      </Form>

    </div>
  )
}

export default SearchCity
// disabled={input.length < 3}