import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import fiery from "../assets/img/Fiery Katana.jpg";
import sting from "../assets/img/Sting.jpg";
import boomstick from "../assets/img/Prideful Boomstick.jpg";
import daddy from "../assets/img/Big Daddy.jpg";
import chaos from "../assets/img/Chaos.jpg";
import beacon from "../assets/img/Doom Beacon.jpg";
import vowed from "../assets/img/Vowed Blade.jpg";
import headhunter from "../assets/img/Headhunter.jpg";
import razor from "../assets/img/Vengeance Razor.jpg";
import "../App.css";
const About = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <section className="about-section text-center" id="about">
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-lg-8">
            <h2 className="text-white mb-4">
              The first inventory collection game for Alexa
            </h2>
            <p className="text-white-50">
              Space Marauders hunt down bounties that are mostly monsters but
              also some riffraff from other factions. You then kill or defeat to
              get the bounty which is credits and new inventory. Level up and
              get more and better items to get you better bounties. There are
              180 different items that you can get, each faction has their own
              gear and there are common, uncommon and rare items.
            </p>
            <div className="row mx-auto my-auto justify-content-center pb-3">
              <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                  <div className="card">
                    <div className="card-img">
                      <img src={fiery} className="img-fluid" alt="weapon" />
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-img">
                      <img src={sting} className="img-fluid" alt="weapon" />
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-img">
                      <img src={boomstick} className="img-fluid" alt="weapon" />
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="card">
                    <div className="card-img">
                      <img src={daddy} className="img-fluid" alt="weapon" />
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-img">
                      <img src={chaos} className="img-fluid" alt="weapon" />
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-img">
                      <img src={beacon} className="img-fluid" alt="weapon" />
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="card">
                    <div className="card-img">
                      <img src={vowed} className="img-fluid" alt="weapon" />
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-img">
                      <img
                        src={headhunter}
                        className="img-fluid"
                        alt="weapon"
                      />
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-img">
                      <img src={razor} className="img-fluid" alt="weapon" />
                    </div>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
