import {createContext, useState} from 'react'

export const Cart2 = createContext()

const Context = ({children}) => {

    const [cart,setCart] = useState([])
    return(
        <>
        <Cart2.Provider value={{cart,setCart}}>
            {children}
        </Cart2.Provider>
        </>
    )
}

export default Context