import { useState } from "react"
import { Container } from "react-bootstrap"
import Button from 'react-bootstrap/Button';

const Counter = () => {
    
    const [seconds, setSeconds] = useState(0);
    return(
    <><Container>
       <h1>{seconds}</h1> 
    </Container>
    <Container>
        <Button variant="success" onClick={() => setSeconds(seconds +1)}>+1</Button> 
        <Button variant="danger" onClick={() => setSeconds(seconds -1)}>-1</Button> 
    </Container>
    </>


)}

export default Counter;