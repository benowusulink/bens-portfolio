import React from "react";
import "./Elasticache.css";

const Elasticache = () => {
  return (
    <main className={`elasticache-home`}>
      <h2>elasticache</h2>

      <article className={"tools"}>
        <h3> Online Resources </h3>
        <ul>
          <li>
            - rds: <a href="https://aws.amazon.com/rds/">Click here </a>
          </li>
        </ul>
      </article>

      <section className={`html-content`}>
        <article>
          <h4 className={`border-btm`}>
            {" "}
            (Below are quick notes and tips about the subject, for more better
            information on the subject please refer to the resources above)
          </h4>

          <h4 className={`center`}> Elasticache </h4>
          <h4 className={`center`}> Definition </h4>
          <p className={`border-btm`}>
            {`An in memory database that allows you to cache data.`}
            <br />
            <br />
            {`Similar to redis`}
            <br />
            <br />
          </p>
        </article>
      </section>
    </main>
  );
};

export default Elasticache;
