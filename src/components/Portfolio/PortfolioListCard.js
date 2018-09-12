import React from 'react';
import PortfolioPlayer from './PortfolioPlayer';

const PortfolioListCard = (props) => {
   const {
      id,
      name,
      img,
      type,
      year
   } = props;

   return (
      <div className="card">
         <div id={id}>
            <div className="collapsed card-header">
               <div className="row">
                  <div className="col-md-2 col-sm-3 col-xs-2">
                     <div className="images-box">
                        <img className="img-fluid" src={img} alt=""/>
                     </div>
                  </div>
                  <div className="col-md-8 col-sm-6 col-xs-7">
                     <span className="time">{year}</span>
                     <h4>{name}</h4>
                     <h5 className="name">{type}</h5>
                  </div>
                  <div className="col-md-2 col-sm-3 col-xs-3">
                     <PortfolioPlayer track={props} id={`player-${id}`} />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default PortfolioListCard;
