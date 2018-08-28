import React from 'react';
import PortfolioListCard from './PortfolioListCard';

const style = {
   active:"tab-pane fade show active",
   passive:"tab-pane fade show"
}

const PortfolioList = (props) => {
   const { work, id, name, nav, label } = props;

   const renderPortfolio = () => work.map((w, i) => 
      <PortfolioListCard key={w.id} {...w}  />
   )

   return(
      <div 
         className={nav === "music" ? style.active : style.passive} 
         id={nav} 
         role="tabpanel" 
         aria-labelledby={id} >
         <div id={label}>
            {renderPortfolio()}
         </div>
      </div>
   )
}

export default PortfolioList;