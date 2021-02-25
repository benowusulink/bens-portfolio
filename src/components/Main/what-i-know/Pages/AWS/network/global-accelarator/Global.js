import React from "react";
import "./Global.css";

const Global = () => {
  return (
    <main className={`global-accelerator-home`}>
      <h2>global-accelerator</h2>

      <article className={"tools"}>
        <h3> Online Resources </h3>
        <ul>
          <li>
            - Global accelerator:{" "}
            <a href="https://aws.amazon.com/global-accelerator/">Click here </a>
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

          <h4 className={`center`}> Global accelerator </h4>
          <h4 className={`center`}> Definition </h4>
          <p className={`border-btm`}>
            {`An AWS service that allows you to improve the
       performance of user traffic to and from instances.`}
            <br />
            <br />
            {`The global accelerators role is to make access to 
        and from instances within a public subnet easier.`}
            <br />
            <br />
            {`You should use this method to request files from public 
        EC2 instances.`}
            <br />
            <br />
            {`Alternatively if you don’t use a global accelerator you 
        can create a domain name within ROUTE 53, and define 
        the IP addresses (public EC2 instances) you want associated 
        with the domain and make records that direct traffic to 
        specific IP addresses but by doing this you won’t be 
        taking advantage of the infrastructure of edge locations.`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Static IP addresses </h4>
          <p className={`border-btm`}>
            {`When you create a global accelerator by default you are given 2 
        IP addresses to allow you to connect to it.`}
            <br />
            <br />
            {`You can add you own IP addresses.`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Accelerator </h4>
          <p className={`border-btm`}>
            {`An accelerator directs traffic to optimal 
        endpoints over the AWS network.`}
            <br />
            <br />
            {`They have one or more listener.`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> DNS name </h4>
          <p className={`border-btm`}>
            {`When you create a global accelerator you are 
        given a default DNS name.`}
            <br />
            <br />
            {`This points to the IP addresses that are 
        provided for you.`}
            <br />
            <br />
            {`You can also add you own domain name to your 
         accelerator.`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Network zone </h4>
          <p className={`border-btm`}>
            {`This allows you to manipulate the static IP
       addresses for your global accelerator.`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Listener </h4>
          <p className={`border-btm`}>
            {`It is within the listener you define what ports are 
        allows to communicate with your accelerator.`}
            <br />
            <br />
            {`Ports - 80 - http, 443 - https`}
            <br />
            {`Protocol - tcp`}
            <br />
            {`Client affinity - none`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> End point group </h4>
          <p className={`border-btm`}>
            {`When a user makes a request it is sent to an edge location.
        Within the edge location it decides which region should the 
        request go for the best performance.`}
            <br />
            <br />
            {`Regions are end points groups`}
            <br />
            <br />
            {`If you have instances in 2 different regions 
        they are in two different end point groups `}
            <br />
            <br />
            {`You can increase or decrease the percentage of traffic 
        within an end point group, this is done by the traffic 
        dial`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> End point </h4>
          <p className={`border-btm`}>
            {`These are the individual EC2 instances, application 
        load balancers, network load balancers and IP addresses 
        that the traffic will connect to.`}
            <br />
            <br />
            {`These end points should be within a public subnet to 
        allow access to them`}
            <br />
            <br />
          </p>
        </article>
      </section>
    </main>
  );
};

export default Global;
