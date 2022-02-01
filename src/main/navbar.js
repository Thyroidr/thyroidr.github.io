import React from 'react';
import './navbar.scss';
import pfp from '../resource/pfp.jpg';
import {
  Link
} from 'react-router-dom';

const pages = [
  { name: 'About', link: '/' },
  { name: 'Projects', link: 'projects' },
  { name: 'Awards', link: 'awards' },
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
                <Link
                  key={'page-' + page.name}
                  to={page.link}
                  className={'page page-' + page.name}
                >
                  {page.name}
                </Link>
              ))}
            </div>
          </div>
      )
  }
}

export default NavBar;