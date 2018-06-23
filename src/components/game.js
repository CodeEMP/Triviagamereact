import React, { Component } from 'react';
import axios from 'axios';
import Question from './question.js'

class Game extends Component {
  constructor(props) {
    super(props);
    this.api_count = 0;
    this.state = {
      UName: "CodeE",
      questions: [],
      corrects : 0,
      showquestion : false,
    }
    this.getQuestions()
  }

  getQuestions(event) {
    console.log(event);
    this.api_count += 1;
    axios.get(
      'http://localhost:9090/api/get-questions'
    )
     .then((response) => {
       this.setState({
         questions: response.data.results,
       });
     })
     .catch(function () {
     });
   }

   showquestion(index) {
     const visible = {
       ...this.state.showquestion,
       [index]: true,
     };
     this.setState.showquestion({visible});
   }

  render () {
    var trivia = this.state.questions.map((current, index) =>
      <div key={current}>
          
      </div>
    );
    console.log(trivia)
    return (
      <div>
        {trivia? trivia : null}
      </div>
    );
  }
}

export default Game
