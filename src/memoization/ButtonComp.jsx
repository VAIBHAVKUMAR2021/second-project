import React from 'react'

const ButtonComp = (props) => {

    let{children,incrFunc} = props

    console.log(`Rendering ButtonComp for ${children}`)

  return (
    <>
    <button onClick={incrFunc}>{children}</button>
     </>
  )
}

export default React.memo(ButtonComp)