import {useState , useMemo} from 'react'

const MemoComp = () => {

let[count,setCount] = useState(0)
let[number,setNumber] = useState(0)


let incrCount = () =>{ setCount(count+1)}
let incrNum = () =>{ setNumber(number+1)}

//useMemo(callbackfunc, array of dependency) is used to memoize the value return by the function.

// let isEven = () => {
//     let i=0
//     while(i<2000000000){              // we loaded the function so that we can use the 3rd technique
//         i++}
//     return count % 2 === 0            //memoize the boolean value
// }

//assign the function with useMemo hook
let isEven = useMemo(() => {
    let i=0
    while(i<2000000000){         
     i++
}
    return count % 2 === 0          // memoize the return value  
}, [count])

  return (
    <> 
    <button onClick={incrCount}>Count - {count}</button>
    {isEven ? "Even" : "Odd"}  <br/>
    <button onClick={incrNum}>Number - {number}</button>
    </>
  )
}

export default MemoComp