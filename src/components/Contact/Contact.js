import React from 'react';

const Contact = (props) => {
   return(
      <section id="contact-map" className="section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="section-title-header text-center">
              <h1 className="section-title wow fadeInUp" data-wow-delay="0.2s">Drop A Message</h1>
              <p className="wow fadeInDown" data-wow-delay="0.2s">Global Grand Event on Digital Design</p>
            </div>
          </div>
          <div className="col-lg-7 col-md-12 col-xs-12">
            <div className="container-form wow fadeInLeft" data-wow-delay="0.2s">
              <div className="form-wrapper">
                <form method="post" id="contactForm" name="contact-form" data-toggle="validator">
                  <div className="row">
                    <div className="col-md-6 form-line">
                      <div className="form-group">
                        <input type="text" className="form-control" id="name" name="email" placeholder="First Name" required data-error="Please enter your name"/>
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-6 form-line">
                      <div className="form-group">
                        <input type="email" className="form-control" id="email" name="email" placeholder="Email" required data-error="Please enter your Email"/>
                        <div className="help-block with-errors"></div>
                      </div> 
                    </div>
                    <div className="col-md-12 form-line">
                      <div className="form-group">
                        <input type="tel" className="form-control" id="msg_subject" name="subject" placeholder="Subject" required data-error="Please enter your message subject"/>
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea className="form-control" rows="4" id="message" name="message" required data-error="Write your message"></textarea>
                      </div>
                      <div className="form-submit">
                        <button type="submit" className="btn btn-common" id="form-submit"><i className="fa fa-paper-plane" aria-hidden="true"></i>  Send Us Now</button>
                        <div id="msgSubmit" className="h3 text-center hidden"></div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
   )
}

export default Contact;