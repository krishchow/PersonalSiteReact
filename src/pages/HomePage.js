import React, { Component } from 'react';
import NavBar from '../components/NavBar/NavBar';
import Home from '../components/Home/Home';
import Summary from '../components/Summary/Summary';
import Skills from '../components/Skills/Skills';
import Lives from '../components/Lives/Lives';
import Photos from '../components/Photos/Photos';
import Footer from '../components/Footer/Footer';
import { Helmet } from 'react-helmet'

class HomePage extends Component {
  render() {
      return (
        <div className="App">
            <Helmet>
                <title>Krish Chowdhary Portfolio</title>
            </Helmet>
            <NavBar/>
            <Home/>
            <Summary/>
            <Skills/>
            <Lives/>
            <Photos/>
            <Footer/>
        </div>
        );
    }
}

export default HomePage;
