import React from 'react';

const NavToggler = (props) => {
   return (
      <button
         className="navbar-toggler"
         type="button"
         data-toggle="collapse"
         data-target="#main-navbar"
         aria-controls="main-navbar"
         aria-expanded="false"
         aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
         <span className="icon-menu"></span>
         <span className="icon-menu"></span>
         <span className="icon-menu"></span>
      </button>
   )
}

export default NavToggler;