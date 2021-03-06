import React from 'react';

const PortfolioNav = (props) => {
   const { id, name, label, nav } = props;
   
   return (
      <li className="nav-item nav-item-rowFix">
         <a
            className={nav === "music" ? "nav-link active" : "nav-link"}
            id={id}
            data-toggle="tab"
            href={`#${nav}`}
            role="tab"
            aria-controls={nav}
            aria-expanded="true">
            <div className="item-text">
               <h4>{name}</h4>
               <h5>{label}</h5>
            </div>
         </a>
      </li>
   )
}

export default PortfolioNav;