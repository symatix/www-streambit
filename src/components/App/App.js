import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeTrack } from '../../actions';
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
import Player from '../Player/Player';

const App = props => {
   return(
      <div className = "App" id = "App" >
         <Header />
         <Services />
         <Voices />
         <Equipment />
         <Portfolio />
         <Partners />
         <Contact />
         <Footer />
         <BackToTop />
         {props.track 
            ? <Player track = { props.track } /> 
            : null}
      </div >
   );
}

function mapStateToProps({ track }) {
   return { track }
}

export default connect(mapStateToProps, { removeTrack })(App);
