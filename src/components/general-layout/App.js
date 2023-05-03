import React, { useEffect, useState } from 'react';
import {Routes, Route} from 'react-router';

import { Belts, Bracelets, Watches, HandBags } from '../items-sold';
import Home from "./Home"
import Cart from './Cart';
import NavBar from "./NavBar"
import ContactUs from "./ContactUs"



function App() {
  const [belts, setBelts] = useState([]);
  const [bracelets, setBracelets] = useState([]);
  const [handBags, setHandBags] = useState([]);
  const [watches, setWatches] = useState([]);
  const [cart, setCart] = useState([]);


  useEffect(
    () => {
      fetch("http://localhost:3000/belts")
      .then(res => res.json())
      .then(data => setBelts([...data]))
    }, []
  )
  
  useEffect(
    () => {
      fetch("http://localhost:3000/bracelets")
      .then(res => res.json())
      .then(data => setBracelets([...data]))
    }, []
  )

  useEffect(
    () => {
      fetch("http://localhost:3000/handbags")
      .then(res => res.json())
      .then(data => setHandBags([...data]))
    }, []
  )

  useEffect(
    () => {
      fetch("http://localhost:3000/watches")
      .then(res => res.json())
      .then(data => setWatches([...data]))
    }, []
  )

  console.log("Cart items :", cart)

  return (
    <div>
      <NavBar />
      <Routes>

      

      <Route exact path="/" element={
              <Home/>
            } />
      

      <Route exact path="/watches" element={
        <Watches watches={watches} cart={cart} setCart={setCart}/>
      } />

      <Route exact path="/belts" element={
              <Belts belts={belts} cart={cart}  setCart={setCart}/>
            } />

      <Route exact path="/bracelets" element={
              <Bracelets bracelets={bracelets} cart={cart}  setCart={setCart}/>
            } />

      <Route exact path="/handbags" element={
              <HandBags handBags={handBags} cart={cart}  setCart={setCart}/>
            } />

      <Route exact path="/cart" element={
      <Cart  cart={cart}  setCart={setCart}/>
      }/>

      <Route exact path ="/contact" element={
        <ContactUs />
      }/>
     
    </Routes>
    </div>
    
  )
}

export default App