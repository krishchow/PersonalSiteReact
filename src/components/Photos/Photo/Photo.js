import React, { Component } from 'react';

class Photo extends Component {
    render() {
        const tags = this.props.tags;
        const tags_string = tags.join(' ');
        return (
            <div class={`col-lg-4 col-md-6 all ${tags_string}`}>
                <div class="portfolio_box">
                    <div class="single_portfolio">
                        <img class="img-fluid w-100" src={`img/portfolio/${this.props.img}`} alt=""/>
                        <div class="overlay"></div>
                        <a href={`img/portfolio/${this.props.img}`} class="img-gal">
                            <div class="icon">
                                <span class="lnr lnr-cross"></span>
                            </div>
                        </a>
                    </div>
                    <div class="short_info">
                        <h4>{this.props.title}</h4>
                        <p>{this.props.desc}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Photo;