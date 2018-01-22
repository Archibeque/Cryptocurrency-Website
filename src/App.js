import React, { Component } from 'react';
import './App.css';

import GitHub from './Github.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GitHub username="garrettcarrott"></GitHub>
      </div>
    );
  }
}

export default App;
