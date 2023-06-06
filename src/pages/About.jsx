import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <>
      <div className='elementor-heading-title text-center'>
        <h2>About Us</h2>
      </div>

      <div className='elementor-container'>
        <div className="elementor-row" style={{'padding':'0 15px 0 15px'}}>
          <div className="bg-video row">
            <img src="https://wpbingosite.com/wordpress/tikie/wp-content/webp-express/webp-images/uploads/2021/04/img-about.jpg.webp" alt=""/>
            <i class="bi bi-play-circle"></i>
          </div>
        </div>
      </div>
      
      <div className="element-wrap">
        <div className="element-wrap-inner row">
          
         <div className="col-12 col-sm-12 col-md-4 d-flex elementor-widget">

           <div className='me-2 mt-3'>
             <img src="https://wpbingosite.com/wordpress/tikie/wp-content/uploads/2021/04/star-03.png" alt="" width={50}/>
           </div>
           <div>
            <h3>FREE DELIVERY</h3>
            <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
           </div>

         </div>

         <div className="col-12 col-sm-12 col-md-4 d-flex elementor-widget">

           <div className="me-2 mt-3">
             <img src="https://wpbingosite.com/wordpress/tikie/wp-content/uploads/2021/04/unique-03.png" alt="" width={50}/>
           </div>
           <div>
            <h3>FREE DELIVERY WORLDWIDE</h3>
            <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
           </div>

         </div>

         <div className="col-12 col-sm-12 col-md-4 d-flex elementor-widget">

           <div className='me-2 mt-3'>
             <img src="https://wpbingosite.com/wordpress/tikie/wp-content/uploads/2021/04/quality-03.png" alt="" width={50}/>
           </div>
           <div>
            <h3>ONLINE ORDERING</h3>
            <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
           </div>

         </div>

        </div>
      </div>

      </>
    )
  }
}

export default About