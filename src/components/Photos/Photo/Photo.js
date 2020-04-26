import React, { Component } from 'react';

class Photo extends Component {
    render() {
        const tags = this.props.tags;
        const tags_string = tags.join(' ');
        return (
            <div className={`col-lg-4 col-md-6 all ${tags_string}`}>
                <div className="portfolio_box">
                    <div className="single_portfolio">
                        <img className="img-fluid w-100" src={`img/portfolio/${this.props.img}`} alt=""/>
                        <div className="overlay"></div>
                        <a href={`img/portfolio/${this.props.img}`} className="img-gal">
                            <div className="icon">
                                <span className="lnr lnr-cross"></span>
                            </div>
                        </a>
                    </div>
                    <div className="short_info">
                        <h4>{this.props.title}</h4>
                        <p>{this.props.desc}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Photo;