import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
import Modal from 'react-modal'
import lenovo from '../images/laptop.png'
import facebook1 from '../images/facebook1.png'
import instagram1 from '../images/instagram1.png'
import star from '../images/star.png'



export class ExpenseListItem extends Component {

  constructor(props) {
    super(props)

    this.state = ({ modal: false })

  }

  openModal = () => {
    this.setState({ modal: true })
  }

  closeModal = () => {
    this.setState({ modal: false })
  }

  render() {

    const youtube = this.props.youtube;
    return (
      <div>
        <Link className="list-item" onClick={this.openModal}>
          <div>
            <img className="item_brand" src={this.props.img1} />
            <h3 className="list-item__title"> {this.props.description} </h3>
            <div className="note-div"><p className="list-item_title"> {this.props.cpu} </p></div>
            <span className="list-item__sub-title">{moment(this.props.createdAt).format('MMMM Do, YYYY')}</span>
          </div>

          <h3 className="list-item__data">{numeral(this.props.amount / 100).format('$0,0.00')}</h3>
        </Link>
        <Modal
          appElement={document.getElementById('root')}
          isOpen={this.state.modal}
          onRequestClose={this.closeModal}
          closeTimeoutMS={200}
          className='modal'
          backdropClassName="my-backdrop-style"
        >
          <div className='modal_container'>
            <div className='content'>
              <div className='images-container'>
                <img className='main-img' src={this.props.img1} />
                <div className='img_links'>
                  <img src={this.props.img1} />
                  <img src={this.props.img2} />
                  <img src={this.props.img3} />
                </div>
                <div className="review-div">
                  <p>Review</p>
                  <iframe width="600px" src={this.props.youtube}>
                  </iframe>
                </div>
              </div>

              <div className='product_desc-container'>
                <p className='product_brand_title'></p>
                <p className='product_title'>{this.props.note}</p>
                <div className="rate_div">
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                </div>
                <div className="share_icons">
                  <button><img src={facebook1} /> share</button>
                  <button><img src={instagram1} />instagram</button>
                </div>
                <p className="availablity">Availablity: <strong>In Stock</strong></p>
                <hr></hr>
                <p className="price">Price: {numeral(this.props.amount / 100).format('$0,0.00')}</p><s>$800.00</s>
                <div className="modal-buttons">
                  <button className="btn-2"> Add to Crad</button>
                  <button className="btn-2"> By Now</button>
                </div>
                <h3>Specifications</h3>
                <hr></hr>
                <div className="specifications">
                  <li className="li">{this.props.cpu}</li>
                  <li className="li">{this.props.ram}</li>
                  <li className="li">{this.props.graphics}</li>
                  <li className="li">{this.props.display}</li>
                  <li className="li">{this.props.storage}</li>
                  <li className="li">{this.props.op}</li>
                </div>
                <hr></hr>

              </div>
            </div>
            <button onClick={this.closeModal} className='btn-close'></button>
          </div>

        </Modal>
      </div>
    )
  }
}

export default ExpenseListItem;
