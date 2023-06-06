import React, { Component } from 'react'
import Style from '../sass/style.css'
import { Link } from 'react-router-dom'

class Footer extends Component {
  render() {
    return (
      <>
      <footer className="row d-flex justify-content-center  py-5 my-5">
  <div className="col-lg-3 mb-3">
    <h5>CONTACT US</h5>
    <ul className="nav flex-column">
      <li className="nav-item mb-2"><a href="#" className="nav-link p-0">199 Amsterdam 72, Wall street, Nox 20110 NY</a></li>
      <li className="nav-item mb-2"><a href="#" className="nav-link p-0">(+123) 456 789</a></li>
      <li className="nav-item mb-2"><a href="#" className="nav-link p-0">tikieshopbook@domain.com</a></li>
      <li className="nav-item mb-2"><a href="#" className="nav-link p-0">Branch: New York, Paris, France, California, Madrid, Spain
</a></li>
      <li className="nav-item mb-2"><a href="#" className="nav-link p-0">Open hours: 8.00 – 20.00 Mon – Fri</a></li>
    </ul>
  </div>
  <div className="col-6 col-lg-2 mb-3">
    <h5>PRINT RESTORATION</h5>
    <ul className="nav flex-column">
      <li className="nav-item mb-2"><a href="#" className="nav-link p-0">Bestsellers</a></li>
      <li className="nav-item mb-2"><a href="#" className="nav-link p-0">Interviews</a></li>
      <li className="nav-item mb-2"><a href="#" className="nav-link p-0">Authors Story</a></li>
      <li className="nav-item mb-2"><a href="#" className="nav-link p-0">Book Fairs</a></li>
      <li className="nav-item mb-2"><a href="#" className="nav-link p-0">Privacy & Terms</a></li>
    </ul>
  </div>
  <div className="col-6 col-lg-2 mb-3">
    <h5>SOCIAL MEDIA</h5>
    <ul className="nav flex-column">
      <li className="nav-item mb-2"><a href="#" className="nav-link p-0">Twitter</a></li>
      <li className="nav-item mb-2"><a href="#" className="nav-link p-0">Instagram</a></li>
      <li className="nav-item mb-2"><a href="#" className="nav-link p-0">Facebook</a></li>
      <li className="nav-item mb-2"><a href="#" className="nav-link p-0">Dribbble</a></li>
      <li className="nav-item mb-2"><a href="#" className="nav-link p-0">Behance</a></li>
    </ul>
  </div>
  <div className="col-6 col-lg-2 mb-3">
    <h5>ABOUT US</h5>
    <ul className="nav flex-column">
      <li className="nav-item mb-2"><Link to="/about" className="nav-link p-0">About Us</Link></li>
      <li className="nav-item mb-2"><a href="#" className="nav-link p-0">Story</a></li>
      <li className="nav-item mb-2"><a href="#" className="nav-link p-0">Institute</a></li>
      <li className="nav-item mb-2"><a href="#" className="nav-link p-0">Blog</a></li>
      <li className="nav-item mb-2"><a href="#" className="nav-link p-0">Gift cards</a></li>
    </ul>
  </div>
  <div className="col-6 col-lg-2 mb-3">
    <ul className="nav flex-column">
      <li className="nav-item mb-2"><a href="#" className="nav-link p-0">
        <img src="https://wpbingosite.com/wordpress/tikie/wp-content/uploads/2020/06/paymet-2.png" alt="" /></a></li>
      
    </ul>
  </div>
</footer>
   <div className='elementor-element row align-items-center justify-content-center'>
    <div className='col-12 mt-2 text-center'>
      <p>© 2021 TIKIE, MADE BY WPBINGO</p>
    </div>
   </div>
     </>
     )
  }
}

export default Footer