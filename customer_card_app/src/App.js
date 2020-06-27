import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/CardList.jsx';
import { SearchBox } from './components/search-box/SearchBox.jsx';


class App extends Component {
  constructor() {
    super();

    this.state = {
      customers: [],
      searchField: ''
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    //api call
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({customers: users}))
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { customers, searchField } = this.state;
    const filteredCustomers = customers.filter(customer =>
      customer.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div className="App">
        <h1>Customer Search System</h1>
        <SearchBox
          placeholder='Search a customer...'
          handleChange={this.handleChange}/>
        <CardList customers = {filteredCustomers} />
      </div>
    );
  }
}

export default App;
