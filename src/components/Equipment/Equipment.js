import React from 'react';
import { connect } from 'react-redux';
import EquipmentCard from './EquipmentCard';
import Heading from '../Heading/Heading';

const Equipment = (props) => {
  const { equipment } = props;

  const renderEquipment = () => equipment.map(e =>
    <EquipmentCard key={e.id} {...e} />
  )

   return(
      <section id="equipment" className="section-padding">
      <div className="container">
        <div className="row">
          <Heading title={"Equipment"} subtitle={"From analog to digital"} />
          {renderEquipment()}
          <div className="col-12 text-center">
            <a href="#" className="btn btn-common">Read More News</a>
          </div>
        </div>
      </div>
    </section>
   )
}

function mapStateToProps({ equipment }){
  return { equipment }
}

export default connect(mapStateToProps)(Equipment);