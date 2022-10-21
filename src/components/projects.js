import React from "react";
import cover from "../assets/img/spaceMarauders1k.jpg";
import prim from "../assets/img/Prim-1920x1080.jpg";
import desperado from "../assets/img/desperado.png";
import giantWorm from "../assets/img/giantWorm.png";
const Projects = () => {
  return (
    <section className="projects-section bg-light" id="projects">
      <div className="container px-4 px-lg-5">
        <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
          <div className="col-xl-8 col-lg-7">
            <img className="img-fluid mb-3 mb-lg-0" src={prim} alt="Prim" />
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="featured-text text-center text-lg-left">
              <h4>Space</h4>
              <p className="text-black-50 mb-0">
                We have 11 planets that you can visit and collect bounties. Each
                planet has their own type of monsters but some may repeat on
                other planets. Including in the 11 planets are the 5 home
                planets for each faction which you will start at depending on
                which faction you choose.
              </p>
            </div>
          </div>
        </div>
        <div className="row gx-0 mb-5 mb-lg-0 justify-content-center">
          <div className="col-lg-6">
            <img className="img-blocks" src={desperado} alt="desparado" />
          </div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <h4 className="text-white">Desperado</h4>
                  <p className="mb-0 text-white-50">
                    Desperado is the ship you start out in, the pilot and
                    operator of the ship Jericho Holiday finds you a stowaway on
                    his ship.
                  </p>
                  <hr className="d-none d-lg-block mb-0 ms-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row gx-0 justify-content-center">
          <div className="col-lg-6">
            <img
              className="img-blocks monsters"
              src={giantWorm}
              alt="giant worm"
            />
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <h4 className="text-white">Monsters</h4>
                  <p className="mb-0 text-white-50">
                    As stated before there are different monsters or bounties on
                    each planet. There are 50 different bounties that you can
                    defeat.
                  </p>
                  <hr className="d-none d-lg-block mb-0 me-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="row gx-0 mb-5 mb-lg-0 justify-content-center"
          title="Jericho Holiday and his ship Desperado"
        >
          <div className="col-md-6">
            <img
              className="img-blocks smCover"
              src={cover}
              alt="Space Marauders Cover"
            />
          </div>
          <div className="col-md-6">
            <div className="bg-black text-center h-100 project">
              <div className="project-text w-100 my-auto text-center text-lg-left">
                <h4 className="text-white">The Merch!</h4>
                <div className="d-flex justify-content-center flex-wrap gap-2">
                  <a
                    className="btn btn-primary block"
                    target="_blank"
                    rel="noreferrer"
                    href="https://thetalesofold.bandcamp.com/album/space-marauders"
                  >
                    Soundtrack
                  </a>

                  <a
                    className="btn btn-primary block"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.etsy.com/shop/TheTalesofOld"
                  >
                    Merchandise
                  </a>

                  <a
                    className="btn btn-primary block"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.amazon.com/s?rh=n%3A7141123011%2Cp_4%3AThe+Tales+of+Old&ref=bl_sl_s_ap_web_7141123011"
                  >
                    Amazon Store
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

export default Projects;
