import {useState , useCallback} from 'react'
import Title from './Title';
import Count from './Count';
import ButtonComp from './ButtonComp';



const ParentComp = () => {

let[marks,setMarks] = useState(80);
let[percent,setPercent] = useState(85);


//when the parentcomp is re-render then the function will also re-render that's why we use {useCallback}..

//useCallback(callbackfunc, array of dependency) is used to memoize a function

let incrMarks = useCallback(() =>{
  setMarks(marks + 1)
},[marks])

let incrPercent = useCallback(() =>{
  setPercent(percent + 1)
},[percent])


// let incrMarks = ()=> setMarks(marks + 1)
// let incrPercent = ()=> setPercent(percent + 1)

  return (
    <>
    <Title/>
    
 {/* memoizationis the optimization technique through which u can improve the performance of component or application*/}

    <Count Count = {marks} text = "marks"/>
    <ButtonComp incrFunc ={incrMarks}>Incr Marks</ButtonComp>

    <Count Count = {percent} text = "percent"/>
    <ButtonComp incrFunc={incrPercent}>Incr Percent</ButtonComp>
    </>
  )
}

export default ParentComp