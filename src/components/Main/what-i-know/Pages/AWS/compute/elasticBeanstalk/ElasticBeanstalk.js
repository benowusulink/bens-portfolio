import React from "react";
import "./ElasticBeanstalk.css";

const ElasticBeanstalk = () => {
  return (
    <main className={`elastic-beanstalk-home`}>
      <h2>elastic-beanstalk</h2>

      <article className={"tools"}>
        <h3> Online Resources </h3>
        <ul>
          <li>
            - Elastic Beanstalk:{" "}
            <a
              href="https://aws.amazon.com/elasticbeanstalk/"
              target="_blank"
              rel="noopener noreferrer"
            >
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

          <h4 className={`center`}> Elastic beanstalk </h4>
          <h4 className={`center`}> Definition </h4>
          <p className={`border-btm`}>
            {`Allows you to quickly deploy code on AWS services.`}
            <br />
            <br />
            {`With elastic beanstalk all you do is upload your code 
        to the service and choose which programming environment 
        (node, docker etc) you want for your code.`}
            <br />
            <br />
            {`Elastic beanstalk will create the autoscaling EC2 instances
       needed and the programming language needed for the instance, 
       create a security group etc `}
            <br />
            <br />
          </p>
        </article>
      </section>
    </main>
  );
};

export default ElasticBeanstalk;
