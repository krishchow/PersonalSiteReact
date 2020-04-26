import React, { Component } from 'react';

class BlogProfile extends Component {
    render() {
        return (
            <div class="col-lg-4">
                <div class="blog_right_sidebar">
                    <aside class="single_sidebar_widget author_widget">
                        <img class="author_img rounded-circle" src="/img/blog/me.jpg" alt=""/>
                        <h4>Krish Chowdhary</h4>
                        <p>Blog Author</p>
                        <div class="social_icon">
                            <a href="https://www.linkedin.com/in/krish-chowdhary/"><i class="fa fa-github"></i></a>
                            <a href="https://github.com/krishchow"><i class="fa fa-linkedin"></i></a>
                            <a href="https://www.instagram.com/krish.chow"><i class="fa fa-instagram"></i></a>
                        </div>
                        <p>Ex-Software Engineer and Cyber Security Consultant. Just finishing TAing CSC209 and a CS research project at the University of Toronto. Feel free to ask me about anything, I'm an open book :)</p>
                        <div class="br"></div>
                    </aside>
                </div>
            </div>
        );
    }
}

export default BlogProfile;