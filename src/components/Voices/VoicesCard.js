import React from 'react';

// img, name, mood, id

const VoicesCard = (props) => {
   const { img, name, mood } = props;
   
   return (
          <div className="col-sm-6 col-md-6 col-lg-4">
            <div className="team-item wow fadeInUp" data-wow-delay="0.2s">
              <div className="team-img">
                <img className="img-fluid" src={img} alt=""/>
                <div className="team-overlay">
                  <div className="overlay-social-icon text-center">
                    <ul className="social-icons">
                      <li><a href="#"><i className="lni-facebook-filled" aria-hidden="true"></i></a></li>
                      <li><a href="#"><i className="lni-twitter-filled" aria-hidden="true"></i></a></li>
                      <li><a href="#"><i className="lni-linkedin-filled" aria-hidden="true"></i></a></li>
                      <li><a href="#"><i className="lni-behance" aria-hidden="true"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="info-text">
                <h3><a href="#">{name}</a></h3>
                <p>{mood}</p>
              </div>
            </div>
          </div>
   )
}

export default VoicesCard;