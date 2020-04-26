import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <section className="banner_area">
                <div className="banner_inner d-flex align-items-center">
                    <div className="container">
                        <div className="banner_content text-center">
                            <h2>{`${this.props.title}`}</h2>
                            <div className="page_link">
                                <Link to="/">Home</Link>
                                <Link to={`${this.props.link}`}>{`${this.props.link_test}`}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Header;