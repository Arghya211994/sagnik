import React, { useContext, useEffect, useState } from 'react'
import { Cart2 } from '../Context'
import SingleProduct from './SingleProduct'

const Cart = () => {

   const {cart,setCart} = useContext(Cart2)

    const [total,setTotal] = useState(0)

    useEffect(() => {
        setTotal(cart.reduce((acc,curr) => acc + Number(curr.price),0))
    },[cart])
  return (
    <>
    <div className='cart'>
        <h1>My cart</h1>
        <h3>Total: {total}</h3>
    {
        cart.map((prod) => {
            return(
                <SingleProduct prod={prod} cart={cart} setCart={setCart}/> 
            )
        })
    }
    </div>
   
    </>
  )
}

export default Cart