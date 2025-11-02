import { useNavigate } from "react-router-dom"

const About = () => {

  let navigator = useNavigate() //returns a function

  let gotoContact =() => {
    navigator("/contact")
  }
  return (
    <>
<h2>About</h2>
<p>loreum abacbcu aBcbcuac uaiufhahf afuhfveuavbuv vaBvuehbuhabv vbubheuB vuebUB bvU b viuvbvvbEV Sbv v S Vv e v sVvvvevSVSJvjs vvsVSEVthn ranataRergh raehaerthbarghae reahgeargr</p>
<button onClick={gotoContact}>Click here to Contact</button>
    </>
    
  )
}

export default About