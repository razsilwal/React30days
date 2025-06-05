import { useState } from "react"

function About(){
    // const state = useState("Raz")
    // console.log(state)
    // var count = 0  # we didnt use this so we use useState hooks 
    
    // const state = useState(0)
    // const firstItem = state[0]
    // const secondItem = state[1]
    const [number, setNumber] = useState(0)

    const increaseCount = ()=>{
        setNumber(number + 1)
    }
    const decreaseCount = ()=> {
        if (number > 0){
        setNumber(number-1)
        }
    }
    return(
        <div>
            <h1>{number}</h1>
            <button onClick={increaseCount}>+</button>
            <button onClick={decreaseCount}>-</button>
        </div>
    )
}

export default About