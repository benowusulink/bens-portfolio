import React from "react";
import "./Home.css";
import compute from "./assets/compute.svg";
import database from "./assets/database.svg";
import network from "./assets/network.svg";
import security from "./assets/security.svg";
import storage from "./assets/storage.svg";

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
            <img src={compute} alt={`Compute`} />
            <h3> Compute </h3>
          </article>
          <article
            onClick={() => {
              onRouteChange("Network");
            }}
          >
            <img src={network} alt={`Network, Content and Delivery`} />
            <h3> Network content and Delivery </h3>
          </article>
        </section>
        <section className={`aws-section-2`}>
          <article
            onClick={() => {
              onRouteChange("Security");
            }}
          >
            <img src={security} alt={`Secrurity`} />
            <h3> Security, identity and compliance </h3>
          </article>
          <article
            onClick={() => {
              onRouteChange("Storage");
            }}
          >
            <img src={storage} alt={`storage`} />
            <h3> Storage </h3>
          </article>
          <article
            onClick={() => {
              onRouteChange("Databases");
            }}
          >
            <img src={database} alt={`Databases`} />
            <h3> Databases </h3>
          </article>
        </section>
      </section>
    </main>
  );
};

export default AWSHome;
