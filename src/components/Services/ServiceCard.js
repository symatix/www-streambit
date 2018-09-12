import React from 'react';
import Icon from '../Icons/Icon';

const ServiceCard = (props) => {
  const { name, text, icon } = props;

  return (
    <div className="col-md-6 col-lg-4 col-xs-12 padding-none">
      <div className="services-item wow fadeInDown" data-wow-delay="0.2s">
        <div className="icon">
          <Icon id={icon} height="40px" width="40px" />
        </div>
        <div className="services-content">
          <h3>
            <a href="index.html">{name}</a>
          </h3>
          <p>{text}</p>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard;