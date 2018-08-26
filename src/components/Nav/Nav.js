import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavLogo from './NavLogo';
import NavToggler from './NavToggler';
import NavList from './NavList';

class Nav extends Component {
   render() {
      const { nav } = this.props;

      return (
         <nav className="navbar navbar-expand-lg fixed-top scrolling-navbar">
            <div className="container">
               <div className="navbar-header">
                  <NavToggler />
                  <NavLogo />
               </div>
               <div className="collapse navbar-collapse" id="main-navbar">
                  <NavList nav={nav} mobile={false} />
               </div>
            </div>
            <NavList nav={nav} mobile={true} />
         </nav>
      )
   }
}

function mapStateToProps({ nav }){
   return { nav }
}

export default connect(mapStateToProps)(Nav);