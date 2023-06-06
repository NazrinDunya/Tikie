import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SingleCard from '../components/SingleCard'
import products from '../book-data/products'

class Shop extends Component {
    render() {
        return (
            <>
                <div className="row contact-theme mt-5">
                    <div className='shop-title'>
                        <h1>Shop</h1>
                        <Link style={{ 'text-decoration': 'none', 'color': '#000' }} to="/">Home</Link> &nbsp;
                        <span><i class="fa-solid fa-angle-right"></i></span>&nbsp;
                        <Link style={{ 'text-decoration': 'none', 'color': '#000' }} to="/contact">Shop</Link>
                    </div><br />
                </div>

                <div className="products-list container">
                   <div className="products-list-inner row g-5 mt-3">
                   {products.map((fd,i)=>{
            return <SingleCard key={i} photo1={fd.image1} photo2={fd.image2} title={fd.title} desc={fd.by} price={fd.price} rating={fd.rating}/>
        })}
                   </div>
                </div>
            </>
        )
    }
}

export default Shop