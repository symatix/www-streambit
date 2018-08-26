import React from 'react';

const style = {
   active:"collapse show",
   passive:"collapse"
}

const PortfolioListCard = (props) => {
   const { parent, id, name, img, type, sample, active, year } = props;
   return(
      <div className="card">
         <div id={id}>
            <div className="collapsed card-header" data-toggle="collapse" data-target={`#${name}`} aria-expanded="false" aria-controls={name}>
            <div className="images-box">
               <img className="img-fluid" src={img} alt="" />
            </div>                     
            <span className="time">{year}</span>
            <h4>{name}</h4>
            <h5 className="name">{type}</h5>
            </div>
         </div>
         <div id={name} className="collapse" aria-labelledby={id} data-parent={`#${parent}`}>
            <div className="card-body">
               <p>
                  Consectetur adipisicing elit. Quod distinctio impedit sint accusantium ducimus lites consequuntur innobisl 
                  dolores saepe.Proin sit amet turpis lobortis.
               </p>
               <div className="location">
                  <span>Play:</span> {sample}
               </div>
            </div>
         </div>
      </div>
   )
}

export default PortfolioListCard;
