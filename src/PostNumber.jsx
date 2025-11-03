import React from 'react'
import { useParams } from 'react-router-dom'

const PostNumber = () => {

  // useParams() is uded to access the value of parameter from url

  let parameter = useParams() // returns an object
  console.log(parameter)
  let {postnum} =parameter
  
  return (
    <>
      <h2>PostNumber {postnum}</h2>
    </>
  )
}

export default PostNumber