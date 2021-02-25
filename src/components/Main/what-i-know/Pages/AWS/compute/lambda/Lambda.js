import React from "react";
import "./Lambda.css";

const Lambda = () => {
  return (
    <main className={`lambda-home`}>
      <h2>lambda</h2>

      <article className={"tools"}>
        <h3> Online Resources </h3>
        <ul>
          <li>
            - Lambda: <a href="https://aws.amazon.com/lambda/">Click here </a>
          </li>
          <li>
            - Serverless:{" "}
            <a href="https://www.npmjs.com/package/serverless">Click here </a>
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

          <h4 className={`center`}> Lambda </h4>
          <h4 className={`center`}> Definition </h4>
          <p className={`border-btm`}>
            {`An AWS service that allows you to upload your code and 
        create lambda functions. LAMBDA takes care of creating 
        the servers and running your code, it is serverless.`}
            <br />
            <br />
            {`You can use LAMBDA to run code in response to events from 
        S3 and DYNAMODB. You can use LAMBDA to run code based on 
        requests from HTTP, servers or API gateway.`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Serverless </h4>
          <p className={`border-btm`}>
            {`This is a tool which allows us to run lambda commands 
        within the terminal `}
            <br />
            <br />
            {`Serverless can be used with other platforms`}
            <br />
            <br />
          </p>
        </article>
      </section>
    </main>
  );
};

export default Lambda;
