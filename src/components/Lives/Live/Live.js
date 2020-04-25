import React, { Component } from 'react';

class Live extends Component {
    render() {
        return (
            <div className="col-lg-3 col-md-6">
                <div className="feature_item">
                    <img src={`img/services/${this.props.img}`} alt=""/>
                    <h4>{this.props.title}</h4>
                    <p>{this.props.body}
                    </p>
                </div>
            </div>
        );
    }
}

export default Live;