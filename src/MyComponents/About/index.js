import React, { Component } from "react";
import './About.css'
// import user from '../../Assets/images/avatars/user-03.jpg'
// import user from '../../Assets/images/mine/me4.PNG'
import user from '../../Assets/images/mine/me6.jpg'

class About extends Component{
    render() {
        return(
            <div className="my-about">
                <div className="about-div">
                    <img className="avatar" src={user} alt="Me" />
                    <div className="about-me">
                        <h3>About Me</h3>
                        {/* <span>
                        I am a self-taught software developer based in Lagos, Nigeria. My main focus has mostly been web development.   
                        cillum ullamco proident aliquip quis qui voluptate dolore veniam Ut laborum non est in officia.
                        </span> */}
                        <span>
                            I am a self-driven software developer seeking to work in a
                            motivating environment to utilize my skills and to successfully
                            develop applications with the aim of achieving corporate goals
                            and organization objectives.
                        </span>
                    </div>
                </div>
                <div className="education-div sub-about">
                    <div className="about-head">
                        <h3>EDUCATION</h3>
                    </div>
                    <div className="more-about">
                        {/* <h3>F.S.T.C Yaba</h3>
                        <span>
                        Lorem ipsum Dolor adipisicing nostrud et aute Excepteur amet commodo ea dolore irure esse Duis nulla sint fugiat 
                        cillum ullamco proident aliquip quis qui voluptate dolore veniam Ut laborum non est in officia.
                        </span> */}

                        <h3>University of Lagos</h3>
                        <span>
                            I graduated from the University of Lagos in 2019, with a B.Sc. in Computer Science.
                        </span>
                    </div>
                </div>
                <div className="experience-div sub-about">
                    <div className="about-head">
                        <h3>EXPERIENCE</h3>
                    </div>
                    <div className="more-about">
                        {/* <h3>Technology Advantage</h3>
                        <span>
                        I worked here as a technical assistant where i 
                        cillum ullamco proident aliquip quis qui voluptate dolore veniam Ut laborum non est in officia.
                        </span> */}

                        <h3>Fieldinsight</h3>
                        <span>
                            Fieldinsight is a tech company based in Nigeria that builds software
                            solutions. My job here was to work with a team to develop scalable
                            and reliable digital solutions for the clients.
                            <br />
                            What has been achieved:
                            <ul>
                                <li>
                                    Developed applications in Javascript using tools like VueJS, ReactJS,
                                    React native, Nativescript vue, AdonisJS, SailsJS, etc
                                </li>
                                <li>
                                    Helped to develop the company's website using content management
                                    systems like Craft CMS, etc.
                                </li>
                                <li>
                                    I was able to achieve a work-school-life balance.
                                </li>
                                <li>
                                    Important skills and qualities were gained such as creative thinking,
                                    problem solving, owning task, managing time, etc.
                                </li>
                            </ul>
                        </span>
                    </div>
                </div>
                <div className="skill-div sub-about">
                    <div className="about-head">
                        <h3>SKILL</h3>
                    </div>
                    <div className="more-about">
                        {/* <h3>University of Life</h3> */}

                        <span style={{marginTop: '6rem', display: 'block'}}>
                        {/* I am a full-stack web developer. I use MERN (MongoDB, Express, ReactJS, Node) stack for web development.
                        cillum ullamco proident aliquip quis qui voluptate dolore veniam Ut laborum non est in officia. */}
                            I merge a passion for usability and user experience with
                            technical knowledge to create cool digital experiences. My
                            repertoire includes programming languages and tools such as
                            ReactJS, VueJS, NodeJS, Craft CMS, SailsJS, MySQL, PostgreSQL,
                            CSS, Gulp, SASS, Bootstrap, and more.
                        </span>

                        <div className="show-skills">
                            {/* <h3>I've Got Some skills.</h3> */}

                            <ul className="skill-bars">
                                <li>
                                <div className="progress percent80"><span>80%</span></div>
                                <strong>JavaScript</strong>
                                </li>
                                <li>
                                <div className="progress percent75"><span>75%</span></div>
                                <strong>React</strong>
                                </li>
                                <li>
                                <div className="progress percent85"><span>85%</span></div>
                                <strong>Vue</strong>
                                </li>
                                <li>
                                <div className="progress percent80"><span>80%</span></div>
                                <strong>Node JS</strong>
                                </li>
                                <li>
                                <div className="progress percent75"><span>75%</span></div>
                                <strong>Adonis JS</strong>
                                </li>   
                                <li>
                                <div className="progress percent70"><span>70%</span></div>
                                <strong>Python</strong>
                                </li>
                                <li>
                                <div className="progress percent90"><span>90%</span></div>
                                <strong>HTML5</strong>
                                </li>
                                <li>
                                <div className="progress percent90"><span>80%</span></div>
                                <strong>CSS</strong>
                                </li>   
                            </ul>

                            {/* <form method="get" action="../../Assets/cv/cv.pdf">
                                <button type="submit">Download!</button>
                            </form> */}
                            <a className="download-cv btn" download href="/Assets/cv/cv.pdf">DOWNLOAD CV</a>
                            {/* <a className="download-cv btn" download href="../../Assets/images/mine/me6.jpg">DOWNLOAD CV</a> */}
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default About;