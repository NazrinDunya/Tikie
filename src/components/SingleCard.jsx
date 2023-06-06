import React, { Component } from 'react'

class Icon extends Component{
    render(){
      return(
        <p>
          <span>
        <i
          className={
            this.props.value >= 2
              ? "fa-solid fa-star"
              : this.props.value >= 1.5
              ? "fa-solid fa-star-half-stroke"
              : "fa-regular fa-star"
          }
        style={{'color':'#969696','font-size':'13px'}}></i>
      </span>
      <span>
        <i
          className={
            this.props.value >= 3
              ? "fa-solid fa-star"
              : this.props.value >= 2.5
              ? "fa-solid fa-star-half-stroke"
              : "fa-regular fa-star"
          }
          style={{'color':'#969696','font-size':'13px'}}></i>
      </span>
      <span>
        <i
          className={
            this.props.value >= 4
              ? "fa-solid fa-star"
              : this.props.value >= 3.5
              ? "fa-solid fa-star-half-stroke"
              : "fa-regular fa-star"
          }
          style={{'color':'#969696','font-size':'13px'}}></i>
      </span>
      <span>
        <i
          className={
            this.props.value >= 5
              ? "fa-solid fa-star"
              : this.props.value >= 4.5
              ? "fa-solid fa-star-half-stroke"
              : "fa-regular fa-star"
          }
          style={{'color':'#969696','font-size':'13px'}}></i>
      </span>
        </p>
      )
    }
  }

class SingleCard extends Component {
    render() {
        return (
            <>
                <div className="col-12 col-sm-6 col-md-3 singlecard">
                    <div className="card">
                        <img src={this.props.photo1} className="card-img-top" alt="..."/>
                        <img src={this.props.photo2} alt=""  className="card-img-bottom"/>
                        <div className='overlay text-end'>
                            <div className='shop'><i class="bi bi-cart-plus-fill"></i></div>
                            <div className='shop'><i class="bi bi-heart-fill"></i></div>
                            <div className='shop'><i class="bi bi-search-heart-fill"></i></div>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{this.props.title}</h5>
                            <p className="card-text"><i><span style={{'color':'#969696'}}>by:</span> {this.props.desc}</i></p>
                            <div className='d-flex justify-content-between'>
                            <p className="card-price" style={{'margin-top':'3px'}}>{this.props.price}</p>
                            <Icon value={this.props.rating}/>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default SingleCard