import React from 'react';

const Landing = (props) => {
   return(
      <div id="main-slide" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#main-slide" data-slide-to="0" className="active"></li>
        <li data-target="#main-slide" data-slide-to="1"></li>
        <li data-target="#main-slide" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src="assets/img/slider/slide1.jpg" alt="First slide" />
          <div className="carousel-caption d-md-block">
            <p className="fadeInUp wow" data-wow-delay=".6s">THINK DIFFERENT</p>
            <h1 className="wow fadeInDown heading" data-wow-delay=".4s">SOUND DIFFERENT<br/>- streambit -</h1>
            <a href="#contact-map" className="fadeInLeft wow btn btn-common btn-lg" data-wow-delay=".6s">Contact Us</a>
            <a href="#services" className="fadeInRight wow btn btn-border btn-lg" data-wow-delay=".6s">Explore More</a>
          </div>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="assets/img/slider/slide2.png" alt="Second slide" />
          <div className="carousel-caption d-md-block">
            <p className="fadeInUp wow" data-wow-delay=".6s">AMAZING VOICE TALENTS</p>
            <h1 className="wow bounceIn heading" data-wow-delay=".7s">MATCH THE MOOD WITH <br/>THE BRAND</h1>
            <a href="#voices" className="fadeInUp wow btn btn-border btn-lg" data-wow-delay=".8s">Choose The Voice</a>
          </div>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="assets/img/slider/slide3.jpg" alt="Third slide" />
          <div className="carousel-caption d-md-block">
            <p className="fadeInUp wow" data-wow-delay=".6s">streamBit</p>
            <h1 className="wow fadeInUp heading" data-wow-delay=".6s">Book Your Studio Time Now!</h1>
            <a href="#" className="fadeInUp wow btn btn-common btn-lg" data-wow-delay=".8s">Explore</a>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#main-slide" role="button" data-slide="prev">
        <span className="carousel-control" aria-hidden="true"><i className="lni-chevron-left"></i></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#main-slide" role="button" data-slide="next">
        <span className="carousel-control" aria-hidden="true"><i className="lni-chevron-right"></i></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
   )
}

export default Landing;