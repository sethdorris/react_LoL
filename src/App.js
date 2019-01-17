import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Main from './styles/Main.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation></Navigation>
      </div>
    );
  }
}

export default App;
