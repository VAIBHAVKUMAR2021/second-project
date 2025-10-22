import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
 
//best metthod to initialize state in class component
     constructor(props){
        super(props)
        this.state={
            isError:false //initially no error
        }
     }


//4. Error handling method
     static getDerivedStateFromError(error){
        //Helps to display a fallback UI

        return{
            isError:true //error occurs
        }
     }



     componentDidCatch(error,info){
        console.log(error,info);  //display the info of error
     }

  render() {
 if(this.state.isError==true){
    return(<><h2>Something Went Wrong... pls try again in sometime</h2></>)
 }else{
    return(this.props.children) //if no error render all child components
 }
  }
}
