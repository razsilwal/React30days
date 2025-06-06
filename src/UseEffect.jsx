import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [count,setCount] = useState(0)

    // First tytpes of useEffect
    // useEffect(()=>{
    //     console.log("Hello inside from the useEffect")
    // },[])

    // Second types of useEffect
    // useEffect(()=>{
    //     console.log("Second type of useEffect")
    // },[count])

    // Third tpes of useEffect
    useEffect(()=>{
        console.log("Third types of useeffect")
    })
  return (
    <div>
        <h1> {count} </h1>
        <button onClick={()=>{
            setCount(count+1)
        }}>+</button>
      
    </div>
  )
}

export default UseEffect
