
import { useState } from 'react';
import './assets/scss/App.scss';
import { Button } from 'react-bootstrap';
import Clock from './Clock';

function App() {
const [showClock, setShowClock] = useState(false)

  return (
    <div>
      <Button onClick={() => setShowClock(!showClock)}>{showClock ? "Hide" : "Show"}</Button>
      {showClock && <Clock/>}
    </div>
  )
}

export default App
