import {useState} from 'react'

const SideEffects = () => {
    let[count, setCount] = useState(0)
    let[number,setNumber] = useState(0)

    const incrCount= () => { setCount(count + 1)}
    const incrNum= () => { setNumber(number + 1)}
  return (
    <> 
    <h2>Count:{count}</h2>
    <button onClick={incrCount}>Increment</button>
    <h2>Number:{number}</h2>
    <button onClick={incrNum}>Increment</button>
    </>
  )
}

export default SideEffects