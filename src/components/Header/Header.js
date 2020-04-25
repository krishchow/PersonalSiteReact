import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <section class="home_banner_area">
                    <div class="banner_inner">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-7">
                                    <div class="banner_content">
                                        <h3 class="text-uppercase">Hello Everyone</h3>
                                        <h1 class="text-uppercase">I'm Krish Chowdhary</h1>
                                        <h5 class="text-uppercase">Software Engineer and Consultant. <br/>Trying to be an everything SME</h5>
                                        <div class="d-flex align-items-center">
                                            <a class="primary_btn" href="#" data-toggle="modal" data-target="#myModal"><span>Contact Me</span></a>
                                            <a class="primary_btn tr-bg" href="./img/Krish Chowdhary Resume.pdf"><span>Get CV</span></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-5">
                                    <div class="home_right_img">
                                        <img class="" width="700" src="img/banner/home-right.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        );
    }
}

export default Header;