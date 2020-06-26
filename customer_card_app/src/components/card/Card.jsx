import React from 'react';
import './card.styles.css';

const Card = props => (
  <div className='card-container'>
    <img alt="customer" src={`https://robohash.org/${props.customer.id}?set=set5&size=180x180`} />
    <h1>{props.customer.name} </h1>
  </div>
);

export default Card;
