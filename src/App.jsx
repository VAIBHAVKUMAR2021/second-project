import Layout from './Layout'
import Contact from './Contact'
import About from './About'
import Notfound from './Notfound'
import Post from './Post'
import PostNumber from './PostNumber'
import { createBrowserRouter ,RouterProvider} from 'react-router-dom'
import Mobile from './Mobile'

const App = () => {

    let routerpath =createBrowserRouter([
        {
           path : '/',
           element : <Layout/>,
           children:[
            {
                path : '/about',
           element : <About/>
            },
            {
                path : '/contact',
           element : <Contact/>,
           children : [ 
            {
                    path: '/contact/mobile',
                    element : <Mobile/>
           }
        ] 
            },
            {
                path : '/post',
           element : <Post/>,
           children : [
            {
              path : '/post/:postnum',      //parameter/slug =>/:ParameterName   , it's way to define a dynamic path
              element : <PostNumber/>   
            }
           ]
            },
            {
                path : '*',
           element : <Notfound/>
            },
           ]
    }
])


  return (
    <RouterProvider router={routerpath}></RouterProvider>
  )
}

export default App