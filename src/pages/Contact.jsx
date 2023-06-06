import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Contact extends Component {
  render() {
    return (
      <>
        <div>
          <div className="row contact-theme mt-5">
            <div>
              <h1>Contact</h1>
              <Link style={{ 'text-decoration': 'none', 'color': '#000' }} to="/">Home</Link> &nbsp;
              <span><i class="fa-solid fa-angle-right"></i></span>&nbsp;
              <Link style={{ 'text-decoration': 'none', 'color': '#000' }} to="/contact">Contact</Link>
            </div><br />
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86829.86398213897!2d-0.18461599794279365!3d51.50679283238517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2sLondon%20Eye!5e0!3m2!1str!2s!4v1675061766887!5m2!1str!2s"
              width="600"
              height="550"
              style={{ 'border': '0' }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <section>
            <div className="contact-details">
              <div className="row contact-details-inner d-flex">

                <div className="col-12 col-sm-12 col-md-4">
                  <div className="card text-center">
                    <div className="card-body-icon">
                      <div className="icon-box">
                      <i class="bi bi-geo-alt"></i>
                      </div>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Address</h5>
                      <p className="card-text">807 Mize Cemetery Rd, Somerset KY, 42503</p>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-12 col-md-4">
                  <div className="card text-center">
                    <div className="card-body-icon">
                      <div className="icon-box">
                      <i class="bi bi-telephone"></i>
                      </div>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Phone</h5>
                      <p className="card-text">+84 (007) 1996-5432</p>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-12 col-md-4">
                  <div className="card text-center">
                    <div className="card-body-icon">
                      <div className="icon-box">
                      <i class="bi bi-envelope"></i>
                      </div>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Email</h5>
                      <p className="card-text">sayhello@tikie.com</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>
        </div>
      </>
    )
  }
}

export default Contact