import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './home.js'
import Scores from './scores.js'
import Game from './game.js'

class Content extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render () {
    return(
      <Router>
        <div>
          <nav>
            <span><Link to="/">Home</Link></span>
            <span><Link to="/scores">Scores</Link></span>
          </nav>
          <Route exact path="/" component={Home} />
          <Route path="/scores" component={Scores} />
          <Route path="/trivia" component={Game} />
        </div>
      </Router>
    )
  }
}

export default Content
