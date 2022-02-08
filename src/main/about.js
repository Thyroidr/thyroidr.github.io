import React from 'react';
import './about.scss';
import {
    Link
} from 'react-router-dom';

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='main-page'>
              <h1 className='title'>About me</h1>
              <p className='content'>Hi, welcome to my backyard in the internet. This is mostly my own portfolio, and it may not be up to date. </p>
              <p className='content'>I am an second year undergraduate student at the Australian National University, learning about Computer Science and Mathematics. I have not yet specialised in any area. You can find out a bit more of what I am doing in the <Link to='/projects' className='inline-link'>Projects</Link> and <Link to='/awards' className='inline-link'>Awards</Link> pages.</p>
              <p className='content'>I have competed heavily in various competitive programming competitions. I represented Australia in the 2019 International Olympiad in Informatics and earned a bronze medal (100th place in the world). I also maintained a <a href="http://www.ryanxw.com/InfoBlogs/" className="inline-link">blog</a> with 70 or so posts throughout that period, detailing many of my solutions for challenging algorithm and data structure problems. </p>
              <p className='content'>While not working on CS/Maths related stuff, I enjoy video games, cooking (maybe not with much success), and videos from various content creators:</p>
              <ul>
                  <li className='content list-item'><a href="https://www.youtube.com/c/3blue1brown" className="inline-link">3Blue1Brown</a>, of course</li>
                  <li className='content list-item'><a href="https://www.youtube.com/c/greymatter" className="inline-link">CGP Grey</a></li>
                  <li className='content list-item'>(Chinese) <a href="https://space.bilibili.com/23947287" className="inline-link">小约翰可汗</a></li>
                  <li className='content list-item'>(Chinese) <a href="https://space.bilibili.com/81824112" className="inline-link">小策</a></li>
              </ul>
              <button className='resume-button'>Résumé</button>
            </div>
        );
    }
}

export default About;