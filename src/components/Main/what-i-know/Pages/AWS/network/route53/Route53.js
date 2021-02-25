import React from "react";
import "./Route53.css";

const Route53 = () => {
  return (
    <main className={`route53-home`}>
      <h2>route53</h2>

      <article className={"tools"}>
        <h3> Online Resources </h3>
        <ul>
          <li>
            - Route53: <a href="https://aws.amazon.com/route53/">Click here </a>
          </li>
          <li>
            - Domain registra list:{" "}
            <a href="https://www.icann.org/registrar-reports/accreditation-qualified-list.html">
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

          <h4 className={`center`}> Route53 </h4>
          <h4 className={`center`}> Definition </h4>
          <p className={`border-btm`}>
            {`Route 53 is a DNS service provided by amazon.`}
            <br />
            <br />
            {`It has a domain registra, management for your
       domain, traffic management and monitoring.`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Domain registra </h4>
          <p className={`border-btm`}>
            {`This is an authority that can assign unique domain names.`}
            <br />
            <br />
            {`- Go daddy`}
            <br />
            {`- Amazon ROUTE 53`}
            <br />
            {`- 123-reg`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Domain names </h4>
          <p className={`border-btm`}>
            {`These are unique names we give to our web 
        applications so users can access them easily.`}
            <br />
            <br />
            {`They are unique.`}
            <br />
            <br />
            {`Domain names originally are the original ip 
        addresses that connects to your web app.`}
            <br />
            <br />
            {`You change your web apps IP address to a 
        domain name and store it within a DNS.`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Health checks </h4>
          <p className={`border-btm`}>
            {`This allows you to make sure your records are healthy.`}
            <br />
            <br />
            {`A health check will check if a path is working and healthy.`}
            <br />
            <br />
            {`A path is defined by the IP address or domain name and then 
        the url path, the url path will be specifically checked to 
        see if its working and if it isn’t will be removed.`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Route53 routing policies </h4>
          <p>
            {`These allow you to define the routing type for your domain name.`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Simple routing </h4>
          <p>
            {`This allows you to have one record with multiple IP addresses.
        If you have IP addresses within a record, Route 53 will return 
        random IP address.`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Weighted routing </h4>
          <p>
            {`This allows you to split your traffic (requests 
        from users) based on weights assigned.`}
            <br />
            <br />
            {`Weights define the percentage of the user traffic 
        it will handle and where it will be routed.`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Latency based routing </h4>
          <p>
            {`This allows you to route your traffic based on the 
        lowest network latency for the user.`}
            <br />
            <br />
            {`The IP address within the record which provides the best 
        connection will be the response to the user.`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Failover routing </h4>
          <p>
            {`This allows you to route traffic to a specific IP address 
        and if that route fails it will automatically switch the 
        route to another IP address.`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Geolocation routing </h4>
          <p>
            {`This allows you to define routing based on the location 
        of the user.`}
            <br />
            <br />
            {`An example of this will be you may want users from Europe 
        to access a route specifically for Europe instances.`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Multivalve routing </h4>
          <p>
            {`This allows you to define routing based on the location 
        of the user.`}
            <br />
            <br />
            {`Similar to simple routing but does it one by one instead 
        and allows you to add health checks.`}
            <br />
            <br />
          </p>
        </article>
      </section>
    </main>
  );
};

export default Route53;
