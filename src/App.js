import React from 'react'
import './App.css'
import {Routes,Route } from 'react-router-dom'
import Navbar from './compo2/Navbar'
import Home from './compo2/Home'
import Cart from './compo2/Cart'


const App = () => {

  
  return (
    <>
    {/* <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route/>
    </Routes> */}
    
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
    </>
  )
}

export default App