import './App.css';
import React from 'react';
import NavBar from './main/navbar';
import About from './main/about';
import Projects from './main/projects';
import Awards from './main/awards';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    document.title = "Ryan Wang";
    return (
      <div>
        <BrowserRouter>
          <div className="relative">
            <NavBar/>
            <div className='absolute top-14'>
              <Routes>
                <Route exact path='/' element={<About/>} />
                <Route exact path='/projects' element={<Projects/>} />
                <Route exact path='/awards' element={<Awards/>} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
