import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <>
      <header>
  <div className="px-3 py-2 uppernav">
    <div className="">
    <nav className="navbar navbar-expand-lg rounded" aria-label="Thirteenth navbar example">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample11" aria-controls="navbarsExample11" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse d-lg-flex" id="navbarsExample11">
      <NavLink className="navbar-brand col-lg-3 me-0" to="/"><img src="https://wpbingosite.com/wordpress/tikie/wp-content/webp-express/webp-images/uploads/2021/05/logo-white.png.webp" height={40} alt=""/></NavLink>
      
      <div>
        

          <div className='inner-div d-flex ms-5 form-wrap' style={{'borderRadius':''}}>
            <form action="">
            <select className='text-center'><option value="All Category">All Category</option></select>
            <input type="text" placeholder='Search for books by keyword' className='search-box'/>
            <button type='submit' className='search-button'><i class="bi bi-search-heart-fill"></i></button>
            </form>
          </div>

       
      </div>

      <div className="d-lg-flex col-lg-3 justify-content-lg-end">
        <i></i>
      </div>
    </div>
  </div>
</nav>

    </div>
  </div>

      <hr />
    <nav className="navbar navbar-expand-lg bg-body-tertiary button-nav">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/about">About Us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/shop">Shop</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
     
    <div className='navbar-logo'>
      <img src="https://wpbingosite.com/wordpress/tikie/wp-content/webp-express/webp-images/uploads/2021/05/logo-white.png.webp"  alt="" />
    </div>

    <div className='navbar-right text-end'>
       <h6>FREE SHIPING FOR ORDERS OVER $25</h6>
    </div>
  </div>
</nav>

      
    
</header>
      </>
    )
  }
}

export default Header