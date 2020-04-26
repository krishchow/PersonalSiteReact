import React, { Component } from 'react';

class BlogImage extends Component {
    render() {
        return (
            <div class="col-lg-12">
                <div class="feature-img">
                    <img class="img-fluid" src={`/img/blog/${this.props.img}`} alt=""/>
                </div>									
            </div>
        );
    }
}

export default BlogImage;