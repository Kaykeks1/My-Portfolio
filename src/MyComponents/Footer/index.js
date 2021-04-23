import React, { Component } from "react";
import './Footer.css'

class Footer extends Component{
    render() {
        return(
            <div className="my-footer">
                <div className="footer-head">Contact me on the following</div>
                <div className="footer-socials">
                    <a href="http://twitter.com/kaykeks1"><i className="im im-twitter footer-icon" /> TWITTER</a>
                    <a href="http://linkedin.com/in/fawaz-kekere-ekun-54351916b"><i className="im im-linkedin footer-icon" /> LINKEDIN</a>
                    <a href="http://github.com/Kaykeks1"><i className="im im-github footer-icon" /> GITHUB</a>
                    <a href="mailto:kayuskeks@gmail.com"><i className="im im-mail footer-icon" /> GMAIL</a>

                </div>
                <div className="my-copyright">© 2020 | Created by <span>Kayode</span></div>
            </div>
        )
    }
}

export default Footer;