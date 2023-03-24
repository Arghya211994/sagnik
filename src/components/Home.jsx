import React, { useContext, useState } from 'react'
import faker from 'faker'
import SingleProduct from './SingleProduct'
import { Cart2 } from '../Context'




const Home = () => {

   faker.seed(100)
    
    const productsArray = [...Array(20)].map(() => {
        return({
            id:faker.datatype.uuid(),
            name:faker.commerce.productName(),
            price:faker.commerce.price(),
            image:faker.random.image()
        })
    })

    
    // const [cart,setCart] = useState([])
    const [products] = useState(productsArray)
    
    
  return (
    <>
    <div className='home-body'>
    {
        products.map((prod) => {
            return(
                <SingleProduct prod={prod}  key={prod.id}/>
            )
        //    return( <h1>{prod.name}</h1>)
        })
    }
    </div>
    </>
  )
}

export default Home