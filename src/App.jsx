import React from 'react'
import { BrowserRouter , Routes, Route ,Link} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Setting from './Setting'
import Notfound from './Notfound'

//routing-vv5 => npm i react-router-dom
const App = () => {
  return (
    //if you want routing a part of your application u have to wrap the entire application inside in BrowserRouter
    // it will ttake care of location and history of your object
    //it will act like a wrapper for a route 
    //its a corresponding like for the component
    <BrowserRouter>
     <Routes>
          <Route path='/' element ={<Home/>}/>
           <Route path='/about' element ={<About/>}/>
           <Route path='/contact' element ={<Contact/>}/>
           <Route path='/setting' element ={<Setting/>}/>
           <Route path='*' element ={<Notfound/>}/>
     </Routes>
 <ul>
    <li><Link to='/'>Home</Link></li>
     <li><Link to='/about'>About</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
       <li><Link to='/setting'>Setting</Link></li>
 </ul>

    </BrowserRouter>
  )
}

export default App