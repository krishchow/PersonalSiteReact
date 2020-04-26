import React, { Component } from 'react';
import {
    Link,
} from "react-router-dom";

class BlogNav extends Component {
    render() {
        return (
            <div class="navigation-area">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-12 nav-left flex-row d-flex justify-content-start align-items-center">
                        <div class="detials">
                            <p>Prev Post</p>
                            <Link to={this.props.prev_link}><h4>{this.props.prev}</h4></Link>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-12 nav-right flex-row d-flex justify-content-end align-items-center">
                        <div class="detials">
                            <p>Next Post</p>
                            <Link to={this.props.next_link}><h4>{this.props.next}</h4></Link>
                        </div>							
                    </div>									
                </div>
            </div>
        );
    }
}

export default BlogNav;