import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Cart2 } from '../Context'

const Header = () => {
    const {cart} = useContext(Cart2)
    return (
        <>
            <header>

                <Link to="/" className='link'>Home</Link>

                <Link to="/cart" className='link'>Cart:{cart.length}</Link>
            </header>
        </>
    )
}

export default Header