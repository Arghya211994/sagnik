import React, { useContext } from 'react'
import { Cart2 } from '../Context'

const SingleProduct = ({prod}) => {
    
    const {cart,setCart} = useContext(Cart2)
  return (  
    <>
    <div className='card-body'>
    <img src={prod.image} alt="image"/>
    <div className='card-content'>
        <h3>{prod.name}</h3>
        <p>{prod.price.substring(0,3)}</p>
    </div>
    {cart.includes(prod) ? (
        <button onClick={() => {
            setCart(cart.filter((e) => e.id !== prod.id))
        }}>Remove To Cart</button>
    ) : (
        <button onClick={() => {
            setCart([...cart,prod])
        }}>Add To Cart</button>
    )}
    
    
    </div>
    </>
  )
}

export default SingleProduct