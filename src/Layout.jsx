import { Link , Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <>
  <h2>Layout</h2>
  <ul>
    <li><Link to='/about'>About</Link></li>
     <li><Link to='/post'>Post</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
  </ul>
  <hr/>
  <Outlet/>
    </>
  
  )
}

export default Layout