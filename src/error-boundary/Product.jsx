import React from 'react'

const Product = (props) => {
    console.log(props);
    let{product}=props; // destructuring

//now manually throwing an error for mobile
    if(product==="mobile"){
        throw new Error("Product not found");
    }

  return (
    <>
    <h2>Product:{product}</h2>
    </>
  )
}

export default Product