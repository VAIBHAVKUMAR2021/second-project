//rcc for making class based component
import React, { Component } from 'react'

export default class ComponentA extends Component {
    
    
          //   1. mounting phase method

  constructor(props){
    super(props)
    this.state ={
        subject:"ReactJS"
    }
//This method ia best place to initialize state and binding "this" keyword
//here you can't code for side effects and this is special method..
    console.log("ComponentA - constructor")
  }
  
  static getDerivedStateFromProps (){
    //Rarely used method
    //get the change in props based on the props
    //returns an object or null
    //here you can't code for side-effects
    console.log("ComponentA - getDerivedStateFromProps")
    return null
  }

  componentDidMount(){
    //this is the most asked question what is componentDidMount?
    //componentDidMount is a method inb mounting phase of react component lifecycle
    //behavior:  
    //1. it is invoked immediately after a render method execution and "ONLY ONCE"
    //2. here you can code for side-effects like API call ,DOM manipulation ,event listener etc
      console.log("ComponentA - componentDidMount")

}

//2. updating phase methods
shouldComponentUpdate(){
  // decides whether the component should re-render or not
  // returns a boolean value(true/false)
  // here you can't code for side-effects
  console.log("ComponentA - shouldComponentUpdate")
  return true
}


getSnapshotBeforeUpdate(){
  //RARELY USED METHOD
  //either returns a value or null
  //here you can't code for side-effects
  console.log("ComponentA - getSnapshotBeforeUpdate")
  return null
}

componentDidUpdate(){
  // this method is invoked after every re rendering of the component
  // here you can code for side-effects
  console.log("ComponentA - componentDidUpdate")
}

    render() {
// it is the only method which is required in class based component ,without this render method this component isn't usefull...
 //1.it will render the jsx to the browser
 //2.render is used for read state/props and display to the browser
 //3.here u can't code for side-effects.
        console.log("ComponentA - render") // i'm rendering outside to the jsx
        return (
      <div>ComponentA</div>
    )
  }
}
