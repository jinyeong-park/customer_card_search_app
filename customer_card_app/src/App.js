import React, { Component } from 'react';
import './App.css';
import CardList from './components/card-list/CardList.jsx';


class App extends Component {
  constructor() {
    super();

    this.state = {
      customers: [],
      searchField: ''
    };
  }


  componentDidMount() {
    //api call
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({customers: users}))
  }

  render() {
    const { customers, searchField } = this.state;
    // const customers = this.state.customers;
    // const searchField = this.state.searchField;
    const filteredCustomers = customers.filter(customer =>
      customer.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <input type="search" placeholder="Search a customer.." onChange={e => this.setState({searchField: e.target.value})}/>
        <CardList customers = {filteredCustomers} />
      </div>
    );
  }
}


export default App;
