import React from 'react'

const Not = () => { let [task,setTask] = useState("")  //to store the value of single task , after that the empty string of useState is for the initial state

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
           <span> <MdDelete /></span>
     </Fragment>)

    })
}
    </>

    
    
  )
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
             <span> <MdDelete /></span>
       </Fragment>)
  
      })
  }
      </>
  
      
      
    )
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
               <span> <MdDelete /></span>
         </Fragment>)
    
        })
    }
        </>
    
        
        
      )
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
                 <span> <MdDelete /></span>
           </Fragment>)
      
          })
      }
          </>
      
          
          
        )

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
           <span> <MdDelete /></span>
     </Fragment>)

    })
}
    </>

    
    
  )
}

export default Not