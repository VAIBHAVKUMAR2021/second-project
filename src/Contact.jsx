import { Link,Outlet } from "react-router-dom"

const Contacts = () => {
  return (
   <>
    <h2>Contacts</h2>
    <Link to='/contact/mobile'>Click here for mobile</Link>
    <Outlet/>
    </>
  )
}

export default Contacts