import React from "react";
import "./WAF.css";

const WAF = () => {
  return (
    <main className={`waf-home`}>
      <h2>waf</h2>

      <article className={"tools"}>
        <h3> Online Resources </h3>
        <ul>
          <li>
            - WAF:{" "}
            <a href="https://aws.amazon.com/waf/?nc2=h_ql_prod_se_waf">
              Click here{" "}
            </a>
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

          <h4 className={`center`}> WAF </h4>
          <h4 className={`center`}> Definition </h4>
          <p className={`border-btm`}>
            {`This is a web app firewall that allows you to monitor http and https requests 
      	forwarded to cloud front, load balancers and api gateways .`}
            <br />
            <br />
            {`You can activate conditions like what IP Addresses can access 
      	your services or what query string parameters are needed etc.`}
            <br />
            <br />
            {`It allows all requests except the ones you block
Blocks all requests except the ones you allow 
It counts the requests that match the properties you specify`}
            <br />
            <br />
          </p>
        </article>
      </section>
    </main>
  );
};

export default WAF;
