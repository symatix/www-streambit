import React from 'react';
import {connect} from 'react-redux';
import PartnersCard from './PartnerCard';
import Heading from '../Heading/Heading';

const Partners = (props) => {
  const { partners } = props;

  const renderPartners = () => partners.map(p => 
    <PartnersCard key={p.id} {...p} />
  )

  return (
    <section id="partners" className="section-padding">
      <div className="container">
        <div className="row">
          <Heading title={"Partners"} />
        </div>
        <div className="row justify-content-center mb-30 wow fadeInDown" data-wow-delay="0.3s">
          {renderPartners()}
        </div>
      </div>
    </section>
  )
}

function mapStateToProps({partners}) {
  return {partners}
}

export default connect(mapStateToProps)(Partners);