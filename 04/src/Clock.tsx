import { useEffect, useState } from 'react';
import Container from "react-bootstrap/Container";

const Clock = () => {
  const [time, setTime] = useState(() => new Date().toLocaleTimeString())

  useEffect(()=>{
    const intervalId =  setInterval(() => {
      console.log("starting clock")      
      setTime(new Date().toLocaleTimeString())
    }, 1000);

    return () => {
      console.log(intervalId, "unmounts"); 
      clearInterval(intervalId)}
  },[])

  return (
    <Container>
      <div className="display-1 font-monospace text-center">
        {time}
      </div>
    </Container>
  )
}

export default Clock
