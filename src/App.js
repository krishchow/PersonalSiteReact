import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import Summary from './components/Summary/Summary';
import Skills from './components/Skills/Skills';

class App extends Component {
  render() {
      return (
        <div className="App">
            <NavBar/>
            <Header/>
            <Summary/>
            <Skills/>
        </div>
        );
    }
}

export default App;
