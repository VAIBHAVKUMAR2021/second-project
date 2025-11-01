import React from 'react'
import { Link , Outlet} from 'react-router-dom'



const Contact = () => {


  //Outlet -> it should be placed inside the parent component , to indicate where the child component or child route should be displayed
  return (
    <>
 <h2>Contact</h2>
 <Link to='/contact/mobile'> Click here for mobile number </Link>
<Outlet/>
    </>
   
  )
}

export default Contact