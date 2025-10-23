import {useEffect} from 'react'
import axios from 'axios'

const FetchUsers = () => {
    //axios => promise based library .
    //axios => provides the http methods..


      useEffect(() =>{
                axios.get("https://api.github.com/users")  //returns a promise 
                .then((response) => {
                 console.log(response);  // {data: [{..},{..},{..}]}
                 console.log(response.data); 
                })
      },[])



  return (
    <div>FetchUsers</div>
  )
}

export default FetchUsers