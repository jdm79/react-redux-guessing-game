import React, { Component } from 'react';
import '../styling/App.css';

import Congrats from './Congrats'
import GuessedWords from './GuessedWords'

class App extends Component {
  render() {
    return(
      <div className="container">
        <h1>Guess the Word!</h1>
        <Congrats success={ true } />
        <GuessedWords guessedWords={ 
          [ { guessedWord: 'train', letterMatchCount: 3},
            { guessedWord: 'agile', letterMatchCount: 1}
          ]
        } />
      </div>
    )
  }
}

export default App;
