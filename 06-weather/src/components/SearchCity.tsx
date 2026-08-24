import { Button, Form } from 'react-bootstrap';

const SearchCity = () => {
  return (
    <div id="search-wrapper">
      <Form>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Button variant="primary">Submit</Button>
      </Form>

    </div>
  )
}

export default SearchCity
