import React from 'react';
import './navbar.scss';
import pfp from '../resource/pfp.jpg';

class NavBar extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
      return (
          <div className="flex w-full h-12 bg-gray-20 shadow-lg grid-cols-4">
            <div className="col-span-1 py-1 pl-5 pr-2">
              <img className="flex h-10 w-10 rounded-full" src={pfp} alt="pfp"></img>
            </div>
            <div className="col-span-3 pt-3 pb-1 pl-2 pr-10">
              <h1 className="">Ryan Wang</h1>
            </div>
            
          </div>
      )
  }
}

export default NavBar;