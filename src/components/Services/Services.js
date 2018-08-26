import React from 'react';
import { connect } from 'react-redux';
import ServiceCard from './ServiceCard';
import Heading from '../Heading/Heading';

const Services = (props) => {
  const { services } = props;

  const renderServices = () => services.map(s => 
    <ServiceCard key={s.id} {...s} />
  )

   return(
      <section id="services" className="services section-padding">
      <div className="container">
        <div className="row">
          <Heading title={"Why You Choose Us?"} subtitle={"List of services"} />
        </div>
        <div className="row justify-content-center services-wrapper">
          {renderServices()}
        </div>
      </div>
    </section>
   )
}

function mapStateToProps({ services }){
  return { services }
}

export default connect(mapStateToProps)(Services);