import React from 'react';
import './navbar.scss';
import pfp from '../resource/pfp.jpg';

const pages = [
  { name: 'About' },
  { name: 'Projects' },
  { name: 'Awards' },
];

class NavBar extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
      return (
          <div className="navbar">
            <img className="title-image" src={pfp} alt="pfp"></img>
            <h1 className="title-text">Ryan Wang</h1>
            <div className="pages">
              {pages.map((page) => (
                <a
                  key={'page-' + page.name}
                  href='#'
                  className={'page page-' + page.name}
                >
                  {page.name}
                </a>
              ))}
            </div>
          </div>
      )
  }
}

export default NavBar;