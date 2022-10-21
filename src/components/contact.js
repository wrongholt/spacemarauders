import React from "react";
import twitterImg from "../assets/img/twitter.png";
const twitter = "https://twitter.com/space_marauders";

const Contact = () => {
  return (
    <section id="contact" className="contact-section bg-black">
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5">
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <i className="fas fa-map-marked-alt text-primary mb-2"></i>
                <h4 className="text-uppercase m-0">Address</h4>
                <hr className="my-4 mx-auto" />
                <div className="small text-dark">Chicago, IL</div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <i className="fas fa-envelope text-primary mb-2"></i>
                <h4 className="text-uppercase m-0">Email</h4>
                <hr className="my-4 mx-auto" />
                <div className="small text-dark">
                  <a href="mailto:spacemarauders2@gmail.com">
                    Space Marauders Email
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <i className="fas fa-hashtag text-primary mb-2"></i>
                <h4 className="text-uppercase m-0">Social</h4>
                <hr className="my-4 mx-auto" />
                <div className="social d-flex justify-content-center">
                  <a className="mx-2 twitter" href={twitter}>
                    <img src={twitterImg} alt="twitter"></img>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
