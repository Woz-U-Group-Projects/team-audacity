import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import Customers from './components/customers';

class App extends Component {
  state = {
    fruit: [],
    newFruit: ""
  };

  getFruit() {
    axios.get("http://localhost:5000/fruit").then(res => {
      const fruit = res.data;
      this.setState({ fruit });
    });
  }
  componentDidMount() {
    this.getFruit();
  }
  submitFruit() {
    axios
      .post("http://localhost:5000/fruit", { name: this.state.newFruit })
      .then(res => {
        this.setState({ newFruit: "" });
        this.getFruit();
      });
  }

  render() {
    return (
      <div>
        <h1>Fruits:</h1>
        <ul>
          {this.state.fruit.map(f => (
            <li key={f.id}>{f.name}</li>
          ))}
        </ul>

        <input
          value={this.state.newFruit}
          onChange={evt => this.setState({ newFruit: evt.target.value })}
        />
        <button onClick={() => this.submitFruit()}>Submit</button>
      </div>
    );
  }
}

export default App;


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Story Arcadia</h1>
        </header>
        <Customers />
      </div>
    );
  }
}

export default App;



