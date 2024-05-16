import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Product from './Components/Product';
import Cart from './Components/Cart';

const App = () => {
  const [data,setData]=useState();
  const[search,setSearch]=useState('');
  const[cart,setCart]=useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/products').then(resp => resp.json().then(data => setData(data.products)))
  }, [])


  return (
    <div className="app">
      <BrowserRouter>
        <Navbar setSearch={setSearch} />
        <Routes>
          <Route path='/' element={<Home data={data} search={search} />} />
          <Route path='/:id' element={<Product cart={cart} setCart={setCart}/>} />
          <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App