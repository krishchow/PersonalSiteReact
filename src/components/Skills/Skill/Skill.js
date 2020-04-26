import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
class Skill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
        this.handleClose = () => this.setState({show:false});
        this.handleShow = () => {
            this.setState({show:true});
        }
    }

    render() {
        return (
            <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="single-brand-item d-table">
                    <div className="d-table-cell text-center" onClick={this.handleShow}>
                        <img src={`img/brands/${this.props.img}`} alt=""/>
                    </div>
                </div>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton/>
                    <Modal.Body>
                        {this.props.body}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default Skill;