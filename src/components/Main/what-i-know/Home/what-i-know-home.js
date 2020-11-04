import React from "react";
import "./what-i-know-home.css";

const WhatIKnowHome = ({ onRouteChange }) => {
  return (
    <main className={`what-i-know`}>
      <h2>{`what i know`}</h2>
      <section className={`what-i-know-div`}>
        <div className={`what-i-know-div-1`}>
          <article
            className={`what-i-know-section`}
            onClick={() => {
              onRouteChange("FrontEnd");
            }}
          >
            <h4>Front End</h4>
            <img src={``} alt={`what-i-know-1`} />
            <p>
              Our mission: to help people learn to code for free. We accomplish
              this by creating
            </p>
            <p>
              Our mission: to help people learn to code for free. We accomplish
              this by creating
            </p>
            <p>
              Our mission: to help people learn to code for free. We accomplish
              this by creating
            </p>
          </article>
          <article
            className={`what-i-know-section`}
            onClick={() => {
              onRouteChange("BackEnd");
            }}
          >
            <h4>Back End</h4>
            <img src={``} alt={`what-i-know-2`} />
            <p>
              Our mission: to help people learn to code for free. We accomplish
              this by creating
            </p>
            <p>
              Our mission: to help people learn to code for free. We accomplish
              this by creating
            </p>
            <p>
              Our mission: to help people learn to code for free. We accomplish
              this by creating
            </p>
          </article>
        </div>

        <div className={`what-i-know-div-2`}>
          <article
            className={`what-i-know-section`}
            onClick={() => {
              onRouteChange("Extras");
            }}
          >
            <h4>Extras</h4>
            <img src={``} alt={`what-i-know-3`} />
            <p>
              Our mission: to help people learn to code for free. We accomplish
              this by creating
            </p>
            <p>
              Our mission: to help people learn to code for free. We accomplish
              this by creating
            </p>
            <p>
              Our mission: to help people learn to code for free. We accomplish
              this by creating
            </p>
          </article>
          <article
            className={`what-i-know-section`}
            onClick={() => {
              onRouteChange("AWS");
            }}
          >
            <h4>AWS</h4>
            <img src={``} alt={`what-i-know-4`} />
            <p>
              Our mission: to help people learn to code for free. We accomplish
              this by creating
            </p>
            <p>
              Our mission: to help people learn to code for free. We accomplish
              this by creating
            </p>
            <p>
              Our mission: to help people learn to code for free. We accomplish
              this by creating
            </p>
          </article>
        </div>
      </section>
    </main>
  );
};

export default WhatIKnowHome;
