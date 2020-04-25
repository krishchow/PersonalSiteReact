import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <section class="banner_area">
                <div class="banner_inner d-flex align-items-center">
                    <div class="container">
                        <div class="banner_content text-center">
                            <h2>{`${this.props.title}`}</h2>
                            <div class="page_link">
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