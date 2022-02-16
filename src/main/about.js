import React from 'react';
import {
    Link
} from 'react-router-dom';
import {
    Content,
    InlineLink,
    Paragraph,
    Header,
} from './utility';

let contentCreators = [
    {
        link: "https://www.youtube.com/c/3blue1brown",
        creator: '3Blue1Brown, of course',
    },
    {
        link: "https://www.youtube.com/c/greymatter",
        creator: "CGP Grey",
    },
    {
        link: "https://space.bilibili.com/23947287",
        creator: "小约翰可汗",
    },
    {
        link: "https://space.bilibili.com/81824112",
        creator: "小策",
    }
];

function ContentCreatorLink(props) {
    return (
        <li className='text-slate-700 text-left'>
          <a href={props.link} className="underline decoration-teal-300/30 hover:decoration-teal-400/70 transition">{props.creator}</a>
        </li>
    );
}

function About() {
    let contentCreatorLinks = contentCreators.map(ContentCreatorLink);

    return (
        <Content>
          <Header><h1>About me</h1></Header>
          <Paragraph><p>Hi, welcome to my backyard in the internet. This is mostly my own portfolio, and it may not be up to date. </p></Paragraph>
          <Paragraph><p>I am an second year undergraduate student at the Australian National University, learning about Computer Science and Mathematics. I have not yet specialised in any area. You can find out a bit more of what I am doing in the <InlineLink><Link to='/projects'>Projects</Link></InlineLink> and <InlineLink><Link to='/awards'>Awards</Link></InlineLink> pages.</p></Paragraph>
          <Paragraph><p>I have competed heavily in various competitive programming competitions. I represented Australia in the 2019 International Olympiad in Informatics and earned a bronze medal (100th place in the world). I also maintained a <InlineLink><a href="http://www.ryanxw.com/InfoBlogs/">blog</a></InlineLink> with 70 or so posts throughout that period, detailing many of my solutions for challenging algorithm and data structure problems. </p></Paragraph>
          <Paragraph><p>While not working on CS/Maths related stuff, I enjoy video games, cooking (maybe not with much success), and videos from various content creators:</p></Paragraph>
          <ul className='list-disc list-inside'>
            {contentCreatorLinks}
          </ul>
          <div className='mt-4'>
            <a href="https://www.ryanxw.com/files/resume.pdf" className='bg-teal-300 px-6 py-3 rounded-lg drop-shadow-lg hover:bg-teal-400 transition'>Résumé</a>
          </div>
        </Content>
    );
}

export default About;