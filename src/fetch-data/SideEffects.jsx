import {useState,useEffect} from 'react'

const SideEffects = () => {
    let[count, setCount] = useState(0)
    let[number,setNumber] = useState(0)

// useEffect(callback function,array of dependency) is used to code for side effects.......
// when the component is render on website the side effect is invoked and when the component is updated the side effect is invoked again.....

//useEffect with empty array of dependency --> it will behave like componentDidMount() and will be invoked only once when the component is rendered first time on website...
    // useEffect(() => {
    //     console.log("useEffect is getting invoked")
    // }, [])


// useEffect() with some value of dependency --> it will behave like componentDidUpdate() and will be invoked only when the value of dependency is changed....
  useEffect(() => {
        console.log("useEffect is getting invoked")
    }, [count])   // here we can also pass multiple dependencies in array like [count,number].....


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