import React from "react";
import "./Home.css";

const AWSHome = ({ onRouteChange }) => {
  return (
    <main className={`aws-home`}>
      <h2> AWS </h2>
      <section className={`aws-section`}>
        <section className={`aws-section-1`}>
          <article
            onClick={() => {
              onRouteChange("Compute");
            }}
          >
            <img src="" alt={`Compute`} />
            <h3> Compute </h3>
          </article>
          <article
            onClick={() => {
              onRouteChange("Network");
            }}
          >
            <img src="" alt={`Network, Content and Delivery`} />
            <h3> network content and delivery </h3>
          </article>
        </section>
        <section className={`aws-section-2`}>
          <article
            onClick={() => {
              onRouteChange("Security");
            }}
          >
            <img src="" alt={`Secrurity`} />
            <h3> Secrurity, identity and compliance </h3>
          </article>
          <article
            onClick={() => {
              onRouteChange("Storage");
            }}
          >
            <img src="" alt={`storage`} />
            <h3> storage </h3>
          </article>
          <article
            onClick={() => {
              onRouteChange("Databases");
            }}
          >
            <img src="" alt={`Databases`} />
            <h3> Databases </h3>
          </article>
        </section>
      </section>
    </main>
  );
};

export default AWSHome;
