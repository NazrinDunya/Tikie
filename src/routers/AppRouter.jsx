import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Shop from '../pages/Shop'


class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
      <Header/>
           <Routes>
               <Route path='/' element={<Home/>}></Route>
               <Route path='/about' element={<About/>}></Route>
               <Route path='/contact' element={<Contact/>}></Route>
               <Route path='/shop' element={<Shop/>}></Route>
           </Routes>
      <Footer />
      </BrowserRouter>
    )
  }
}

export default AppRouter