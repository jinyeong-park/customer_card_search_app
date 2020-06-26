import React from 'react';
import './card-list.styles.css';
import Card from '../card/Card.jsx';

const CardList = props => (

  <div className='card-list'>
    {props.customers.map(customer => (
      <Card key={customer.id} customer={customer} />
    ))}
  </div>
);

export default CardList;