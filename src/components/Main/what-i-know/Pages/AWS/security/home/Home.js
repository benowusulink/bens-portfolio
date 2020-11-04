import React from "react";
import "./Home.css";
import waf from "./assets/aws-waf.svg";
import org from "./assets/aws-logo.svg";
import iam from "./assets/aws-iam.svg";

const SecurityHome = ({ onRouteChange }) => {
  return (
    <main className={`security-home`}>
      <h2> Security </h2>
      <section className={`security-section`}>
        <article
          onClick={() => {
            onRouteChange("WAF");
          }}
        >
          <img src={waf} alt={`WAF`} />
          <h3> WAF </h3>
        </article>
        <article
          onClick={() => {
            onRouteChange("IAM");
          }}
        >
          <img src={iam} alt={`IAM`} />
          <h3> IAM </h3>
        </article>
        <article
          onClick={() => {
            onRouteChange("Organisation");
          }}
        >
          <img src={org} alt={`Organisation`} />
          <h3> Organisation </h3>
        </article>
      </section>
    </main>
  );
};

export default SecurityHome;
