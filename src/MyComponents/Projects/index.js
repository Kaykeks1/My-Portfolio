import React, { Component } from "react";
import './Projects.css'

import coffee from '../../Assets/images/portfolio.1/coffee.jpg'
import consoleJPG from '../../Assets/images/portfolio.1/console.jpg'
import judah from '../../Assets/images/portfolio.1/judah.jpg'
import light from '../../Assets/images/portfolio.1/into-the-light.jpg'
import farmerboy from '../../Assets/images/portfolio.1/farmerboy.jpg'
import girl from '../../Assets/images/portfolio.1/girl.jpg'
import origami from '../../Assets/images/portfolio.1/origami.jpg'
import retrocam from '../../Assets/images/portfolio.1/retrocam.jpg'
import svs from '../../Assets/images/portfolio.1/svs.png'
import libsys from '../../Assets/images/portfolio.1/libsys.png'
import arvo from '../../Assets/images/portfolio.1/arvo.png'
import vela from '../../Assets/images/portfolio.1/vela.png'
import svs2 from '../../Assets/images/portfolio.1/svs2.PNG'
import todo from '../../Assets/images/portfolio.1/todo.PNG'
import summation from '../../Assets/images/portfolio.1/summation.PNG'
import url from '../../Assets/images/portfolio.1/url.PNG'

class Projects extends Component{
    render() {
        return(
            <div className="my-projects">
                <div>
                    <div className="my-projects-title">CHECK OUT SOME OF MY PROJECTS</div>

                    <div className="portfolio-wrapper">

                        <div className="portfolio-item">
                            <img alt="" src={libsys} />
                            <a className="portfolio-overlay">
                                <div className="portfolio-item-meta">
                                    <h5>Library Management System</h5>
                                    <p>This application helps librarians to manage some of their day to day activities</p>
                                    <div>
                                        {/* You can find the code on {' '} */}
                                        <a href="https://github.com/Kaykeks1/siwesFrontend150805517">
                                            <i className="im im-github github-icon"></i>
                                        </a>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className="portfolio-item">
                            <img alt="" src={arvo} />
                            <div className="portfolio-overlay">
                                <div className="portfolio-item-meta">
                                    <h5>Landing Page</h5>
                                    <p>This is a simple landing page developed using ReactJS</p>
                                    <div>
                                        {/* You can find the code on {' '} */}
                                        <a href="https://github.com/Kaykeks1/Arvo-Test2">
                                            <i className="im im-github github-icon"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div> 

                        <div className="portfolio-item">
                            <img alt="" src={vela} />
                            <div className="portfolio-overlay">
                                <div className="portfolio-item-meta">
                                    <h5>Dashboard</h5>
                                    <p>An interactive dashboard with graphs and tables. Developed with ReactJS</p>
                                    <div>
                                        {/* You can find the code on {' '} */}
                                        <a href="https://github.com/Kaykeks1/Vela-Test">
                                            <i className="im im-github github-icon"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div> 

                        {/* <div className="portfolio-item">
                            <img alt="" src={svs} />
                            <div className="portfolio-overlay">
                                <div className="portfolio-item-meta">
                                    <h5>Into The Light</h5>
                                    <p>Photography</p>
                                    <div>
                                        You can find the code on 
                                        <a href="https://www.github.com/">
                                            <i className="im im-github github-icon"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>  */}

                        <div className="portfolio-item">
                            <img alt="" src={svs2} />
                            <div className="portfolio-overlay">
                                <div className="portfolio-item-meta">
                                    <h5>Student Verificaion System</h5>
                                    <p>A mobile app that helps verify a student's id using facial recognition</p>
                                    <div>
                                        {/* You can find the code on  */}
                                        <a href="https://github.com/Kaykeks1/FacialRecognition-Mobile">
                                            <i className="im im-github github-icon"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div> 

                        <div className="portfolio-item">
                            <img alt="" src={todo} />
                            <div className="portfolio-overlay">
                                <div className="portfolio-item-meta">
                                    <h5>Todo App</h5>
                                    <p>A mobile app that helps keep track of your daily tasks</p>
                                    <div>
                                        {/* You can find the code on  */}
                                        <a href="https://github.com/Kaykeks1/Todo-App">
                                            <i className="im im-github github-icon"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div> 

                        <div className="portfolio-item">
                            <img alt="" src={summation} />
                            <div className="portfolio-overlay">
                                <div className="portfolio-item-meta">
                                    <h5>Summation Game</h5>
                                    <p>A mobile game that lets you add numbers together to win</p>
                                    <div>
                                        {/* You can find the code on  */}
                                        <a href="https://github.com/Kaykeks1/Summation-Game">
                                            <i className="im im-github github-icon"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div> 

                        <div className="portfolio-item">
                            <img alt="" src={url} />
                            <div className="portfolio-overlay">
                                <div className="portfolio-item-meta">
                                    <h5>URL Shortener</h5>
                                    <p>A Web app that lets you input a valid website url and gives back a new url for the website </p>
                                    <div>
                                        {/* You can find the code on  */}
                                        <a href="https://github.com/Kaykeks1/Backdrop-Test">
                                            <i className="im im-github github-icon"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div> 

                        {/* <div className="portfolio-item">
                            <img alt="" src={farmerboy} />
                            <div className="portfolio-overlay">
                                <div className="portfolio-item-meta">
                                    <h5>Farmer Boy</h5>
                                    <p>Branding</p>
                                    <div>
                                        You can find the code on 
                                        <a href="https://www.github.com/">
                                            <i className="im im-github github-icon"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div> 

                        <div className="portfolio-item">
                            <img alt="" src={girl} />
                            <div className="portfolio-overlay">
                                <div className="portfolio-item-meta">
                                    <h5>Girl</h5>
                                    <p>Photography</p>
                                    <div>
                                        You can find the code on 
                                        <a href="https://www.github.com/">
                                            <i className="im im-github github-icon"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div> 

                        <div className="portfolio-item">
                            <img alt="" src={origami} />
                            <div className="portfolio-overlay">
                                <div className="portfolio-item-meta">
                                    <h5>Origami</h5>
                                    <p>Illustrration</p>
                                    <div>
                                        You can find the code on 
                                        <a href="https://www.github.com/">
                                            <i className="im im-github github-icon"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div> 

                        <div className="portfolio-item">
                            <img alt="" src={retrocam} />
                            <div className="portfolio-overlay">
                                <div className="portfolio-item-meta">
                                    <h5>Retrocam</h5>
                                    <p>Web Development</p>
                                    <div>
                                        You can find the code on 
                                        <a href="https://www.github.com/">
                                            <i className="im im-github github-icon"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>  */}

                    </div>

                </div>

            </div>
        )
    }
}

export default Projects;