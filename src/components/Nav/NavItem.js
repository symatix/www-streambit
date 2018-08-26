import React from 'react';

const NavItem = (props) => {
      const { mobile, url, label, id } = props;
      return (
         <li className={mobile ? "" : "nav-item"}>
            <a className={mobile ? "page-scroll" : "nav-link"} 
               href={url}>
               {label}
            </a>
         </li>
      )
}

export default NavItem;