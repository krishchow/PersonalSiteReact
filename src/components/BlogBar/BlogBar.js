import React, { Component } from 'react';
import BlogTags from '../BlogTags/BlogTags';
import {
    Link,
} from "react-router-dom";

class BlogBar extends Component {
    render() {
        return (
            <div class="col-lg-3  col-md-3">
                <div class="blog_info text-right">
                    <BlogTags tags={this.props.tags}/>
                    <ul class="blog_meta list">
                        <li><Link to="/about">Krish Chowdhary<i class="lnr lnr-user"></i></Link></li>
                        <li><Link to="#">{this.props.date}<i class="lnr lnr-calendar-full"></i></Link></li>
                    </ul>
                    <ul class="social-links">
                        <li><a href="https://www.linkedin.com/in/krish-chowdhary/"><i class="fa fa-github"></i></a></li>
                        <li><a href="https://github.com/krishchow"><i class="fa fa-linkedin"></i></a></li>
                        <li><a href="https://www.instagram.com/krish.chow"><i class="fa fa-instagram"></i></a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default BlogBar;