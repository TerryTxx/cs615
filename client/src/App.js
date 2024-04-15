import React, { Component } from 'react';
import Dashboard from './components/dashboard'

class App extends Component {
  render() {  // This renders the main App component
    return (
      <div className="App">
       <Dashboard/> // This renders the Dashboard component
      </div>
    );
  }
}

export default App;
