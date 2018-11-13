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
            href= "skype://?xxxxxx"
            target="_blank"
            rel="noopener noreferrer"
          >
          <img src="https://www.vectorlogo.zone/logos/skype/skype-tile.svg" class="styled-icon"></img>
            Skype
          </a>

          <a
            className="App-link"
            href= "evernote://"//"https://www.evernote.com/client/web"
            target="_blank"
            rel="noopener noreferrer"
          >
          <img src="https://images.fastcompany.net/image/upload/w_1280,f_jpg,q_auto,fl_lossy/wp-cms/uploads/2018/08/p-2-evernote.gif" class="styled-icon"></img>
            Evernote
          </a>

           <a
            className="App-link"
            href= "imovie://"
            target="_blank"
            rel="noopener noreferrer"
          >
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/1d/IOS_iMovie.png" class="styled-icon"></img>
            iMovie
          </a>

          <a
            className="App-link"
            href= "polycomrealPresencemobile://"//"realPresence://"//"polycom://"
            target="_blank"
            rel="noopener noreferrer"
          >
          <img src="https://lh3.ggpht.com/OtNA7gl_o8AGCySWZoxp5jUZDWoF4eXl-5a3dAlVTnOOL5XLhaBcI60BJ-wUYS2lsftR=w300" class="styled-icon"></img>
            Polycom
          </a>

        </header>
      </div>
    );
  }
}

export default App;
