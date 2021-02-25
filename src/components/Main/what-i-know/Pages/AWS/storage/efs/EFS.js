import React from "react";
import "./EFS.css";

const EFS = () => {
  return (
    <main className={`efs-home`}>
      <h2>efs</h2>

      <article className={"tools"}>
        <h3> Online Resources </h3>
        <ul>
          <li>
            - EFS: <a href="https://aws.amazon.com/efs/">Click here </a>
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

          <h4 className={`center`}> EFS </h4>
          <h4 className={`center`}> Definition </h4>
          <p className={`border-btm`}>
            {`EFS aka elastic file system is an AWS service that provides
       file storage for EC2 instances within the cloud.`}
            <br />
            <br />
            {`They are similar to EBS as they are storage for your EC2 instance 
        except the capacity of the storage is elastic meaning it 
        automatically grows and shrinks automatically depending on the 
        size it needs.`}
            <br />
            <br />
            {`You can share this storage with other EC2 instances unlike EBS volumes`}
            <br />
            <br />
          </p>
        </article>
      </section>
    </main>
  );
};

export default EFS;
