import React, { Component } from 'react';
import NavBar from '../components/NavBar/NavBar';
import Header from '../components/Header/Header';
import Summary from '../components/Summary/Summary';
import Skills from '../components/Skills/Skills';
import Footer from '../components/Footer/Footer';

class AboutPage extends Component {
  render() {
      return (
        <div className="App">
            <NavBar/>
            <Header title="About Me" link_test="About" link="/about"/>
            <Summary/>
            <Skills/>
            <Footer/>
        </div>
        );
    }
}

export default AboutPage;
