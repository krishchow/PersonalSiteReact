import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";
class Footer extends Component {
    render() {
        return (
            <footer class="footer_area">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-12">
                            <div class="footer_top flex-column">
                                <div class="footer_logo">
                                    <Link to="/">
                                        <img src="img/logo.png" alt=""/>
                                    </Link>
                                    <h4>Find Me</h4>
                                </div>
                                <div class="footer_social">
                                    <a href="https://www.linkedin.com/in/krish-chowdhary/"><i class="fa fa-github"></i></a>
                                    <a href="https://github.com/krishchow"><i class="fa fa-linkedin"></i></a>
                                    <a href="https://www.instagram.com/krish.chow"><i class="fa fa-instagram"></i></a>
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