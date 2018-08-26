import React from 'react';
import Nav from '../Nav/Nav';
import Landing from '../Landing/Landing';

const Header = (props) => {
   return(
      <header id="header-wrap">
         <Nav />
         <Landing />
      </header>
   )
}

export default Header;