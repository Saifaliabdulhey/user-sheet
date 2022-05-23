import React from "react";
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
import msi from '../images/msi.png'


const ExpenseListItem = ({ id, description,cpu, img, amount, createdAt }) => (
  <Link className="list-item" to={`/edit/${id}`}>
    <div>
    <img className="item_brand" src={img}/>
      <h3 className="list-item__title"> {description} </h3> 
      <div className="note-div"><p className="list-item_title"> {cpu} </p></div>
      <span className="list-item__sub-title">{moment(createdAt).format('MMMM Do, YYYY')}</span>
      </div>
    
    <h3 className="list-item__data">{numeral(amount / 100).format('$0,0.00')}</h3>
  </Link>



);

export default ExpenseListItem;
