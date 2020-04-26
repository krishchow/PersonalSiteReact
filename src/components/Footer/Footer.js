import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";
class Footer extends Component {
    render() {
        return (
            <footer className="footer_area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="footer_top flex-column">
                                <div className="footer_logo">
                                    <Link to="/">
                                        <img src="img/logo.png" alt=""/>
                                    </Link>
                                    <h4>Find Me</h4>
                                </div>
                                <div className="footer_social">
                                    <a href="https://www.linkedin.com/in/krish-chowdhary/"><i className="fa fa-github"></i></a>
                                    <a href="https://github.com/krishchow"><i className="fa fa-linkedin"></i></a>
                                    <a href="https://www.instagram.com/krish.chow"><i className="fa fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;