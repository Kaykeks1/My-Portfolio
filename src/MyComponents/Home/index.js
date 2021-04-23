import React, { Component } from "react";
// import { Link, BrowserRouter } from "react-router-dom";
// import { HashLink } from 'react-router-hash-link';
// import Scroll from 'react-scroll'

import './Home.css'

// const ScrollLink = Scroll.ScrollLink;

class Home extends Component{
    render() {
        return(
            <div className="my-home">
                <div className="overlay"></div>
                {/* <div className="overlay shadow"></div> */}
                <div className="home-content">
                    <div className="home-intro">
                        <h3>Hello</h3>
                        <h1>
                            I'm Kekere-Ekun Fawaz Kayode.
                        </h1>
                        <h2 style={{color: 'white'}}>
                            A Fullstack developer.
                        </h2>
                    </div>
                    <div className="home-btn">
                        <a className="btn smoothscroll btn--stroke" href="#projects">LATEST PROJECTS</a>
                        <a className="btn smoothscroll btn--stroke" href="#about">MORE ABOUT ME </a>
                        {/* <nav>
                        <ScrollLink 
                            to="projects" 
                            spy={true} 
                            smooth={true} 
                            duration={500} 
                            className='btn smoothscroll btn--stroke' 
                            activeClass='some-active-class'
                        >
                            LATEST PROJECTS
                        </ScrollLink>  
                        <ScrollLink 
                            to="about" 
                            spy={true} 
                            smooth={true} 
                            duration={500} 
                            className='btn smoothscroll btn--stroke' 
                            activeClass='some-active-class'
                        >
                            MORE ABOUT ME
                        </ScrollLink>
                        </nav> */}
                    </div>
                </div>
                <ul className="home-social">
                    {/* <li>
                        <a href="#"><i className="im im-facebook" aria-hidden="true"></i><span>Facebook</span></a>
                    </li> */}
                    <li>
                        <a href="http://twitter.com/kaykeks1"><i className="im im-twitter" aria-hidden="true"></i><span>Twitter</span></a>
                    </li>
                    <li>
                        <a href="http://linkedin.com/in/fawaz-kekere-ekun-54351916b"><i className="im im-linkedin" aria-hidden="true"></i><span>LinkedIn</span></a>
                    </li>
                    <li>
                        <a href="http://github.com/Kaykeks1"><i className="im im-github" aria-hidden="true"></i><span>Github</span></a>
                    </li>
                    <li>
                        <a href="mailto:kayuskeks@gmail.com"><i className="im im-mail" aria-hidden="true"></i><span>Gmail</span></a>
                    </li>
                </ul> 
            </div>
        )
    }
}

export default Home;