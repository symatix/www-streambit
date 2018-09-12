import React from 'react';

const PartnerCard = (props) => {
   const { img } = props;
   return (
      <div className="col-md-3 col-sm-6 col-xs-12">
         <div className="partner-logo">
            <a href="index.html"><img className="img-fluid" src={img} alt=""/></a>
         </div>
      </div>
   )
}

export default PartnerCard;