import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <>
        <div className="main-screen-home pt-3" style={{'background-color':'#eeeff3'}}>
          <div class="row">
            <div class="col-sm-8">
              <div className='zoomimg-div'>
                <img src="https://wpbingosite.com/wordpress/tikie/wp-content/webp-express/webp-images/uploads/2021/04/banner-39.png.webp" style={{ 'width': '100%' }} className='zoomimg' alt="" />
              </div>
              <div className="row mt-4">
                <div className="col ">
                  <div className='zoomimg-div'>
                    <img src="https://wpbingosite.com/wordpress/tikie/wp-content/webp-express/webp-images/uploads/2021/04/banner-41.png.webp" style={{ 'width': '100%' }} className='zoomimg' alt="" />
                  </div>
                </div>
                <div className="col">
                  <div className='zoomimg-div'>
                    <img src="https://wpbingosite.com/wordpress/tikie/wp-content/webp-express/webp-images/uploads/2021/04/banner-42.png.webp" style={{ 'width': '100%' }} className='zoomimg' alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div class="col-sm-4">
                <div>
                  <div className='zoomimg-div'>
                    <img src="https://wpbingosite.com/wordpress/tikie/wp-content/webp-express/webp-images/uploads/2021/04/banner-40.png.webp" style={{ 'width': '100%'}} className='zoomimg' alt="" />
                  </div>
              </div>

              <div>
                <div className="row">
                 <div>
                 <div className='zoomimg-div'>
                    <img src="https://wpbingosite.com/wordpress/tikie/wp-content/webp-express/webp-images/uploads/2021/04/banner-43.png.webp" style={{ 'width': '100%' }} className='zoomimg' alt="" />
                  </div>
                 </div>
              </div>
              </div>


            </div>
          </div>
        </div>
        <div className="main-screen-brands pt-5 pb-5" style={{'background-color':'#eeeff3'}}>
          <div className="row seven-cols">
            <div className="col">
              <img src="https://wpbingosite.com/wordpress/tikie/wp-content/webp-express/webp-images/uploads/2021/03/brand-2.png.webp" alt="" width={150} className='brand1' />
            </div>
            <div className="col">
              <img src="https://wpbingosite.com/wordpress/tikie/wp-content/webp-express/webp-images/uploads/2021/03/brand-3.png.webp" alt="" width={150} className='brand2'/>
            </div>
            <div className="col">
              <img src="https://wpbingosite.com/wordpress/tikie/wp-content/webp-express/webp-images/uploads/2021/03/brand-4.png.webp" alt=""  width={150}className='brand3'/>
            </div>
            <div className="col">
              <img src="https://wpbingosite.com/wordpress/tikie/wp-content/webp-express/webp-images/uploads/2021/03/brand-5.png.webp" alt=""width={150} className='brand4'/>
            </div>
            <div className="col">
              <img src="https://wpbingosite.com/wordpress/tikie/wp-content/webp-express/webp-images/uploads/2021/03/brand-6.png.webp" alt="" width={150} className='brand5'/>
            </div>
            <div className="col">
              <img src="https://wpbingosite.com/wordpress/tikie/wp-content/webp-express/webp-images/uploads/2021/03/brand-7.png.webp" alt="" width={150} className='brand6'/>
            </div>
            <div className="col">
              <img src="https://wpbingosite.com/wordpress/tikie/wp-content/webp-express/webp-images/uploads/2021/04/brand-8.png.webp" alt="" width={150} className='brand7'/>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Home