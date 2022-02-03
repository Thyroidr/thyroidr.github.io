import React from 'react';
import './about.scss';

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='main-page'>
              <h1 className='title'>About me</h1>
              <p classname='content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt ligula eget eros malesuada scelerisque. Phasellus sed enim diam. Sed tristique faucibus est et tempor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi quam turpis, aliquet posuere lacinia eget, malesuada eget purus. Mauris ut ornare leo, sed laoreet urna. In hac habitasse platea dictumst. In tempus mi augue. Aenean ex mauris, vulputate quis ante at, posuere vulputate nisl. Donec non diam mauris. Nullam vehicula malesuada congue. Maecenas tristique rhoncus lacus ac mollis. Phasellus laoreet euismod tempus. Praesent a vestibulum risus.</p>
            </div>
        );
    }
}

export default About;