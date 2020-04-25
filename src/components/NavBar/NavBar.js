import React, { Component } from 'react';
import {
    Link
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
                                    <li className="nav-item active">
                                        <Link className="nav-link" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/about">About</Link>
                                    </li>
                                    <li className="nav-item submenu dropdown">
                                        <Link to="/" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Blog</Link>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <a className="nav-link" href="first-blog.html">Intro to Krish</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="second-blog.html">Best Project</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="third-blog.html">Connective Link</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="fourth-blog.html">CSS Design Zen</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="fifth-blog.html">To Space, or to Tab</a>
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