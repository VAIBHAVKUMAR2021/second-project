import React from 'react'

const Count = (props) => {

    let{Count,text} = props
    console.log(`rendering component ${text}`)



  return (
    <>
    <h2>{text} : {Count}</h2>
   
    </>
  )
}

export default React.memo(Count)