import './App.css';
import React from 'react';
import NavBar from './main/navbar';
import About from './main/about';
import Projects from './main/projects';
import Awards from './main/awards';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <About />
      </div>
    )
  }
}

export default App;
