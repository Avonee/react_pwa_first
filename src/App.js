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
            href= "skype://raquelmota1977?chat"//"https://www.skype.com/zh-Hant/get-skype/"//"https://www.skype.com"
            target="_blank"
            rel="noopener noreferrer"
          >
          <img src="https://www.vectorlogo.zone/logos/skype/skype-tile.svg" class="styled-icon"></img>
            Skype
          </a>

          <a
            className="App-link"
            href= "https://www.evernote.com/notelink/Login.action?targetUrl=%2Fshard%2Fs3%2Fnl%2F237001%2F232d6d1e-11b5-40f3-aa53-f278f070f5a7"//"https://www.evernote.com"
            target="_blank"
            rel="noopener noreferrer"
          >
          <img src="https://images.fastcompany.net/image/upload/w_1280,f_jpg,q_auto,fl_lossy/wp-cms/uploads/2018/08/p-2-evernote.gif" class="styled-icon"></img>
            Evernote
          </a>


        </header>
      </div>
    );
  }
}

export default App;
