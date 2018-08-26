import React from 'react';
import { connect } from 'react-redux';
import VoicesCard from './VoicesCard';
import Heading from '../Heading/Heading';

const Voices = (props) => {
  const { voices } = props;

  const renderVoices = () => voices.map(v => 
    <VoicesCard key={v.id} {...v} />
  )

   return (
      <section id="voices" className="section-padding text-center">
      <div className="container">
        <div className="row">
          <Heading title={"Voice Talents"} subtitle={"Choose a mood that fits your company brand"} />
        </div>
        <div className="row">
          {renderVoices()}
        </div>
        <a href="speakers.html" className="btn btn-common mt-30 wow fadeInUp" data-wow-delay="1.9s">All Speakers</a>
      </div>
    </section>
   )
}

function mapStateToProps({ voices }){
  return { voices }
}

export default connect(mapStateToProps)(Voices);