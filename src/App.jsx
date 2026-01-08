import React, { Profiler, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './PAGES/Home'
import Navbar from './components/Navbar'
import Men from './PAGES/Men'
import Women from './PAGES/Women'
import Profile from './PAGES/Profile'
import Cart from './PAGES/Cart'
import Footer from './components/Footer'
import Mencatagories from './components/Mencatagories'
import axios from 'axios'
import Menanchor from './components/Menanchor'
import Menscollage from './components/Menscollage'
import User from './components/User'
import Registeraccount from './components/Registeraccount'
import Loginuser from './components/Loginuser'

const App = () => {

 
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>} ></Route>
      

      
      <Route path='/men' element={<Men/>} ></Route>
      <Route path='/men/category' element={<Mencatagories/>} ></Route>
      <Route path='/men/category/men-anchor' element={<Menanchor/>} ></Route>
      
      <Route path='/women' element={<Women/>} ></Route>
      <Route path='/profile' element={<Profile/>} ></Route>
      <Route path='/profile/user' element={<User/>} ></Route>
      <Route path='/profile/user/register' element={<Registeraccount/>} ></Route>
      <Route path='/profile/user/login' element={<Loginuser/>} ></Route>
      
      <Route path='/cart' element={<Cart/>} ></Route>
      </Routes>
     
      
    </div>
  )
}

export default App
