import React, { Component } from 'react';
import './App.css';
import Content from './components/content.js'


class App extends Component {


  render () {

    return (
      <div className="App">
        <header className=''>
          <h1>React Trivia Game</h1>
        </header>
        <Content />
        <footer className="footer">
          <div className="content">
            Created by CodeE
          </div>
        </footer>
      </div>
    )
  }
}
export default App;
