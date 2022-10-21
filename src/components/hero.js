import React from "react";

const Hero = () => {
  return (
    <header className="masthead">
      <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
        <div className="d-flex justify-content-center">
          <div className="text-center">
            <h1 className="mx-auto my-0 text-uppercase">Space Marauders</h1>
            <h2 className="text-white-50 mx-auto mt-2 mb-5">
              <br />
              Your next space adventure on Alexa.
            </h2>
            <a
              className="btn btn-primary block"
              target="_blank"
              rel="noreferrer"
              href="https://t.co/TtnmDZZ7G4"
            >
              Play Now!
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Hero;
