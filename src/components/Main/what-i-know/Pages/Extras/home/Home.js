import React from "react";
import "./Home.css";
import circleci from "./assets/circleci.svg";
import jwt from "./assets/jwtio-json-web-token.svg";
import ssh from "./assets/ssh.svg";
import webpack from "./assets/webpack-icon.svg";

const ExtrasHome = ({ onRouteChange }) => {
  return (
    <main className={`extras-home`}>
      <h2> Extras </h2>
      <section className={`extras-section`}>
        <section className={`extras-section-1`}>
          <article
            onClick={() => {
              onRouteChange("CICD");
            }}
          >
            <img src={circleci} alt={`ci/cd`} />
            <h3> Continuous Deployment and Development </h3>
          </article>
          <article
            onClick={() => {
              onRouteChange("Sessions");
            }}
          >
            <img src={jwt} alt={`Sessions`} />
            <h3> sessions </h3>
          </article>
        </section>
        <section className={`extras-section-2`}>
          <article
            onClick={() => {
              onRouteChange("SSH");
            }}
          >
            <img src={ssh} alt={`SSH`} />
            <h3> ssh </h3>
          </article>
          <article
            onClick={() => {
              onRouteChange("Bundling");
            }}
          >
            <img src={webpack} alt={`Bundling`} />
            <h3> bundling </h3>
          </article>
        </section>
      </section>
    </main>
  );
};

export default ExtrasHome;
