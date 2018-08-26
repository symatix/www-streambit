import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Header from '../Header/Header';
import Services from '../Services/Services';
import Voices from '../Voices/Voices';
import Equipment from '../Equipment/Equipment';
import Portfolio from '../Portfolio/Portfolio';
import Partners from '../Partners/Partners';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import BackToTop from '../Nav/BackToTop';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Services/>
        <Voices/>
        <Equipment/>
        <Portfolio/>
        <Partners/>
        <Contact/>
        <Footer/>
        <BackToTop />
      </div>
    );
  }
}

export default App;
