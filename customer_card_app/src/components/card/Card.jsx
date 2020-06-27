import React from 'react';
import './card.styles.css';

const Card = props => (
  <div className='card-container'>
    <img alt="customer" src={`https://robohash.org/${props.customer.id}?set=set5&size=180x180`} />
    <h2 className='customer-name'>{props.customer.name} </h2>
    <p>{props.customer.email}</p>

  </div>
);

export default Card;
