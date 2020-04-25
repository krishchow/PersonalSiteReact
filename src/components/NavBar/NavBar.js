import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
        <header className="header_area">
            <div className="main_menu">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <a className="navbar-brand logo_h" href="index.html">
                            <img src="img/logo.png" alt=""/>
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                            <ul className="nav navbar-nav menu_nav justify-content-end">
                                <li className="nav-item active"><a className="nav-link" href="index.html">Home</a></li>
                                <li className="nav-item"><a className="nav-link" href="about.html">About</a></li>
                                <li className="nav-item submenu dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Blog</a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item"><a className="nav-link" href="first-blog.html">Intro to Krish</a></li>
                                        <li className="nav-item"><a className="nav-link" href="second-blog.html">Best Project</a></li>
                                        <li className="nav-item"><a className="nav-link" href="third-blog.html">Connective Link</a></li>
                                        <li className="nav-item"><a className="nav-link" href="fourth-blog.html">CSS Design Zen</a></li>
                                        <li className="nav-item"><a className="nav-link" href="fifth-blog.html">To Space, or to Tab</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item"><a className="nav-link" href="portfolio.html">Portfolio</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
	    </header>);
    }
}

export default NavBar;