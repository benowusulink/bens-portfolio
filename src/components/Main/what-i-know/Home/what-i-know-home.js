import React from "react";
import "./what-i-know-home.css";
import aws from "./assets/aws.png";
import frontend from "./assets/frontend.jpg";
import backend from "./assets/backend.jpg";
import extras from "./assets/extras.jpg";

class WhatIKnowHome extends React.Component {
  constructor() {
    super();
    this.state = { route: "" };
  }

  render() {
    const { onRouteChange } = this.props;
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
              <h4 className={"underline"}>Front End</h4>
              <img src={frontend} alt={`what-i-know-1`} />
              <ul>
                <li>- HTML </li>
                <li>- CSS </li>
                <li>- Javascript </li>
                <li>- React </li>
                <li>- Redux </li>
              </ul>
            </article>
            <article
              className={`what-i-know-section`}
              onClick={() => {
                onRouteChange("BackEnd");
              }}
            >
              <h4 className={"underline"}>Back End</h4>
              <img src={backend} alt={`what-i-know-2`} />
              <ul>
                <li>- Node </li>
                <li>- SQL </li>
                <li>- Postgresql </li>
                <li>- Redis </li>
                <li>- Express </li>
                <li>- Docker </li>
              </ul>
            </article>
          </div>

          <div className={`what-i-know-div-2`}>
            <article
              className={`what-i-know-section`}
              onClick={() => {
                onRouteChange("Extras");
              }}
            >
              <h4 className={"underline"}>Extras</h4>
              <img src={extras} alt={`what-i-know-3`} />
              <ul>
                <li>- CI/CD </li>
                <li>- Sessions </li>
                <li>- SSH </li>
                <li>- Bundling </li>
              </ul>
            </article>
            <article
              className={`what-i-know-section`}
              onClick={() => {
                onRouteChange("AWS");
              }}
            >
              <h4 className={"underline"}>AWS</h4>
              <img src={aws} alt={`what-i-know-4`} />
              <ul>
                <li>- Compute </li>
                <li>- Network, Content and Delivery </li>
                <li>- Security </li>
                <li>- Storage </li>
                <li>- Databases </li>
              </ul>
            </article>
          </div>
        </section>
      </main>
    );
  }
}

export default WhatIKnowHome;
