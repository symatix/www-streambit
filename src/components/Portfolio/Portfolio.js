import React from 'react';
import { connect } from 'react-redux';
import Heading from '../Heading/Heading';
import PortfolioNav from './PortfolioNav';
import PortfolioList from './PortfolioList';

const Portfolio = (props) => {
  const { portfolio } = props;

  const renderPortfolioNav = () => portfolio.map(p => 
    <PortfolioNav key={`nav-${p.id}`} {...p} />
  )

  const renderPortfolioList = () => portfolio.map(p => 
    <PortfolioList key={`list-${p.id}`} {...p} />
  )

   return(
      <section id="portfolio" className="portfolio section-padding">
      <div className="container">
        <div className="row">
          <Heading title={"Portfolio"} subtitle={"Listen and browse past work"} />
        </div>
        <div className="portfolio-area row wow fadeInDown" data-wow-delay="0.3s">
          <div className="portfolio-tab-title col-md-12 col-lg-3 col-xs-12 text-center">
            <div className="table-responsive">
              <ul className="nav nav-tabs hide-overflow" id="myTab" role="tablist">
                {renderPortfolioNav()}
              </ul>
            </div>
          </div>
          <div className="portfolio-tab-content col-md-12 col-lg-9 col-xs-12 clearfix">
            <div className="tab-content" id="myTabContent">
              {renderPortfolioList()}
            </div>
          </div>
        </div>
      </div>
    </section>
   )
}

function mapStateToProps({ portfolio }){
  return { portfolio }
}

export default connect(mapStateToProps)(Portfolio);