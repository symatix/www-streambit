import React from 'react';

const Footer = (props) => {
   return(
      <footer className="footer-area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-delay="0.2s">
            <h3><img src="assets/img/logo-alt2-white.png" alt="" /></h3>
            <p>
              Aorem ipsum dolor sit amet elit sed lum tempor incididunt ut labore el dolore alg minim veniam quis nostrud ncididunt.
            </p>
          </div>
          <div className="col-md-6 col-lg-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-delay="0.4s">
            <h3>QUICK LINKS</h3>
            <ul>
              <li><a href="index.html">About Conference</a></li>
              <li><a href="index.html">Our Speakers</a></li>
              <li><a href="index.html">Event Shedule</a></li>
              <li><a href="index.html">Latest News</a></li>
              <li><a href="index.html">Event Photo Gallery</a></li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-delay="0.6s">
            <h3>RECENT POSTS</h3>
            <ul className="image-list">
              <li>
                <figure className="overlay">
                  <img className="img-fluid" src="assets/img/art/a1.jpg" alt="" />
                </figure>
                <div className="post-content">
                  <h6 className="post-title"> <a href="blog-single.html">Lorem ipsm dolor sumit.</a> </h6>
                  <div className="meta"><span className="date">October 12, 2018</span></div>
                </div>
              </li>
              <li>
                <figure className="overlay">
                  <img className="img-fluid" src="assets/img/art/a2.jpg" alt="" />
                </figure>
                <div className="post-content">
                  <h6 className="post-title"><a href="blog-single.html">Lorem ipsm dolor sumit.</a></h6>
                  <div className="meta"><span className="date">October 12, 2018</span></div>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-delay="0.8s">
            <h3>SUBSCRIBE US</h3>
            <div className="widget">
              <div className="newsletter-wrapper">
                <form method="post" id="subscribe-form" name="subscribe-form" className="validate">
                  <div className="form-group is-empty">
                    <input type="email" value="" name="Email" className="form-control" id="EMAIL" placeholder="Your email" required="" />
                    <button type="submit" name="subscribe" id="subscribes" className="btn btn-common sub-btn"><i className="lni-pointer"></i></button>
                    <div className="clearfix"></div>
                  </div>
                </form>
              </div>
            </div>
            <div className="widget">
              <h5 className="widget-title">FOLLOW US ON</h5>
              <ul className="footer-social">
                <li><a className="facebook" href="index.html"><i className="lni-facebook-filled"></i></a></li>
                <li><a className="twitter" href="index.html"><i className="lni-twitter-filled"></i></a></li>
                <li><a className="linkedin" href="index.html"><i className="lni-linkedin-filled"></i></a></li>
                <li><a className="google-plus" href="index.html"><i className="lni-google-plus"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
   )
}

export default Footer;