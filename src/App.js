import './App.css';
import React from 'react';
import NavBar from './main/navbar';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <NavBar />
      </div>
    )
  }
}

export default App;
