import React, { Component } from 'react';
import './App.css';
import CardList from './components/card-list/CardList.jsx';


class App extends Component {
  constructor() {
    super();

    this.state = {
      customers: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({customers: users}))
  }

  render() {
    return (
      <div className="App">
        <CardList customers = {this.state.customers} />
      </div>
    );
  }
}


export default App;
