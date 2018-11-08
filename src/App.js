import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

           <a
            className="App-link"
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
          <img src="https://d3frsattnbx5l6.cloudfront.net/1532688803714-instagram-94fd767f257b.png" class="styled-icon"></img>
            Instagram
          </a>

          <a
            className="App-link"
            href="https://www.skype.com"
            target="_blank"
            rel="noopener noreferrer"
          >
          <img src="https://www.vectorlogo.zone/logos/skype/skype-tile.svg" class="styled-icon"></img>
            Skype
          </a>

        </header>
      </div>
    );
  }
}

export default App;
