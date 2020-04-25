import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <section className="home_banner_area">
                    <div className="banner_inner">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7">
                                    <div className="banner_content">
                                        <h3 className="text-uppercase">Hello Everyone</h3>
                                        <h1 className="text-uppercase">I'm Krish Chowdhary</h1>
                                        <h5 className="text-uppercase">Software Engineer and Consultant. <br/>Trying to be an everything SME</h5>
                                        <div className="d-flex align-items-center">
                                            <a className="primary_btn" href="#" data-toggle="modal" data-target="#myModal"><span>Contact Me</span></a>
                                            <a className="primary_btn tr-bg" href="./img/Krish Chowdhary Resume.pdf"><span>Get CV</span></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="home_right_img">
                                        <img className="" width="700" src="img/banner/home-right.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        );
    }
}

export default Home;