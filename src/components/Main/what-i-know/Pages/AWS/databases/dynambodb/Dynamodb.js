import React from "react";
import "./Dynamodb.css";

const Dynamodb = () => {
  return (
    <main className={`dynamodb-home`}>
      <h2>dynamodb</h2>

      <article className={"tools"}>
        <h3> Online Resources </h3>
        <ul>
          <li>
            - Dynamodb:{" "}
            <a href="https://aws.amazon.com/dynamodb/">Click here </a>
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

          <h4 className={`center`}> Dynamodb </h4>
          <h4 className={`center`}> Definition </h4>
          <p className={`border-btm`}>
            {`This is a NOSQL database solution service available through AWS.`}
            <br />
            <br />
            {`It is serverless meaning you don't need to set up a instance 
      for it to work`}
            <br />
            <br />
            {`It is stored within SSD storage`}
            <br />
            <br />
            {`You can choose for it to have eventual consistency reads 
        (more than 1 sec) and strongly consistent reads 
        (less than a sec)`}
            <br />
            <br />
          </p>
        </article>
      </section>
    </main>
  );
};

export default Dynamodb;
