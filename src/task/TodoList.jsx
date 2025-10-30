import {useState , Fragment} from 'react'
import { MdDelete } from "react-icons/md";



const ToDoList = () => {
    let [task,setTask] = useState("")  //to store the value of single task , after that the empty string of useState is for the initial state

let [list,setList] = useState([])  //to store the multiple value of task...

let handleChange = (e) =>{
    setTask(e.target.value)
}

let handleSubmit =(e) =>{
    e.preventDefault()
    if(!task){                     // if user didn't passs the task or send it empty
        alert("Please Enter Some Task")
    }else{
        setList([...list,task])   // spread operator => so that it stores the value together
        setTask("")
    }
}

//list =["task1","task2","task3"]
//filter() is an array method used to filter out elements based on given condition
//filter() returns a new array
let handleDelete =(x) =>{ // x=> index of the task to be deleted,
  let filteredArray= list.filter((value,index)=> index!= x) //0!=2
  console.log(filteredArray); //["task1","task2"]
  setList(filteredArray)
}

  return (
    <>
<h2>ToDoList</h2>
<form onSubmit={handleSubmit}>
    <input type='text' placeholder='Enter your task' value={task} onChange={handleChange}/>
    <button>+</button>
</form>
{
    list.map((value,index)=>{                  //for displaying the task on server
        return(<Fragment key={index}>
           <h3>{value}</h3>
           <span onClick={() => handleDelete(index)}> <MdDelete /></span>  {/*if we pass the function which return something we have to wrap inside in callback() */}
     </Fragment>)

    })
}
</>

    
    
  )
}

export default ToDoList