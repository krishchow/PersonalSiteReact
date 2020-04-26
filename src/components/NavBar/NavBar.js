import React, { Component } from 'react';
import {
    Link,
} from "react-router-dom";

class NavBar extends Component {
    render() {
        return (
            <header className="header_area">
                <div className="main_menu">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container">
                            <Link className="navbar-brand logo_h" to="/">
                                <img src="img/logo.png" alt=""/>
                            </Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                                <ul className="nav navbar-nav menu_nav justify-content-end">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/about">About</Link>
                                    </li>
                                    <li className="nav-item submenu dropdown">
                                        <Link to="/blog" className="nav-link" role="button" aria-haspopup="true" aria-expanded="false">Blog</Link>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/blog/first">Intro to Krish</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/blog/second">Best Project</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/blog/third">Connective Link</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/blog/fourth">CSS Design Zen</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/blog/fifth">To Space, or to Tab</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/portfolio">Portfolio</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        );
    }
}

export default NavBar;