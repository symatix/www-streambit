import React from 'react';
import NavItem from './NavItem';

const style = {
   desktop: "navbar-nav mr-auto w-100 justify-content-end",
   mobile: "mobile-menu"
}

const NavDesktop = (props) => {
   const { nav, mobile } = props;

   const renderItems = () => 
      nav.map(n => 
         <NavItem 
            key={n.id} 
            mobile={mobile} 
            {...n} />
         )
   
   return (
      <ul className={
         mobile 
         ? style.mobile 
         : style.desktop}
         >
         {renderItems()}
      </ul>
   )
}

export default NavDesktop;