import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
        this.handleClose = () => this.setState({show:false});
        this.handleShow = () => {
            console.log('here')
            this.setState({show:true});
        }
    }

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
                                            <div className="primary_btn" onClick={this.handleShow} data-toggle="modal" data-target="#myModal"><span>Contact Me</span></div>
                                            <a className="primary_btn tr-bg" href="./img/Krish Chowdhary Resume.pdf"><span>Get CV</span></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="home_right_img">
                                        <img className="" width="140%" src="img/banner/home-right.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton/>
                        <Modal.Body>
                            <p>You can contact me at krishchow<span style={{'display':'none'}}>foo</span>.10@gmail.com</p>
                        </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </section>
        );
    }
}

export default Home;