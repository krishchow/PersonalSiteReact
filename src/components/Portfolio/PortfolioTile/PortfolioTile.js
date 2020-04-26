import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class PortfolioTile extends Component {
    constructor(props) {
        super(props);
        if (props.tile.modal) {
            this.state = {
                show: false
            }
            this.handleClose = () => {
                this.setState({show:false});
            }
            this.handleShow = () => {
                this.setState({show:true});
            }
        }
    }

    render() {
        const value = this.props.tile;
        return (
            <div className="col-lg-3 col-md-6">
                <div className="feature_item" onClick={this.handleShow}>
                    <img src={`img/services/${value.img}.png`} alt=""/>
                    <h4>{value.title}</h4>
                    <p>
                        {value.body}
                    </p>
                </div>
                {value.modal ? 
                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>{value.modal_title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <ul>
                                {value.modal_body.map((row,index) => {
                                    return (
                                        <li key={`${this.key} li ${index}`}>
                                            {row}
                                        </li>
                                    );
                                })}
                            </ul>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={this.handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    :
                    <></>
                }
            </div>
        );
    }
}

export default PortfolioTile;