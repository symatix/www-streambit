import React from 'react';

const Heading = (props) => {
  const { title, subtitle } = props;

   return(
      <div className="col-12">
        <div className="section-title-header text-center">
          <h1 className="section-title wow fadeInUp" data-wow-delay="0.2s">{title}</h1>
          <p className="section-subtitle wow fadeInDown" data-wow-delay="0.2s">{subtitle}</p>
        </div>
      </div>
   )
}

export default Heading;