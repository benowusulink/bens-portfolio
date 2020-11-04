import React from "react";
import "./Home.css";
import cloudfront from "./assets/aws-cloudfront.svg";
import glo from "./assets/aws-logo.svg";
import vpc from "./assets/aws-vpc-1.svg";
import route53 from "./assets/aws-route53.svg";

const NetworkHome = ({ onRouteChange }) => {
  return (
    <main className={`network-home`}>
      <h2> Network </h2>
      <section className={`network-section`}>
        <section className={`network-section-1`}>
          <article
            onClick={() => {
              onRouteChange("VPC");
            }}
          >
            <img src={vpc} alt={`VPC`} />
            <h3> VPC </h3>
          </article>
          <article
            onClick={() => {
              onRouteChange("Cloudfront");
            }}
          >
            <img src={cloudfront} alt={`Cloudfront`} />
            <h3> Cloudfront </h3>
          </article>
        </section>
        <section className={`network-section-2`}>
          <article
            onClick={() => {
              onRouteChange("Route53");
            }}
          >
            <img src={route53} alt={`Route53`} />
            <h3> Route53 </h3>
          </article>
          <article
            onClick={() => {
              onRouteChange("Global");
            }}
          >
            <img src={glo} alt={`Global`} />
            <h3> Global Accelerator </h3>
          </article>
        </section>
      </section>
    </main>
  );
};

export default NetworkHome;
