import React from "react";
import "./RDS.css";

const RDS = () => {
  return (
    <main className={`rds-home`}>
      <h2>rds</h2>

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

          <h4 className={`center`}> RDS </h4>
          <h4 className={`center`}> Definition </h4>
          <p className={`border-btm`}>
            {`RDS aka relational database service is a sql relational 
        database provided by AWS service that supports postresql, 
        mySQL and 4 other relational databases.`}
            <br />
            <br />
            {`It supports Multi AZ and read replicas.`}
            <br />
            <br />
            {`You are given a URL to connect your RDS database `}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Multi az </h4>
          <p className={`border-btm`}>
            {`Automatically back your database data across different 
        availability zones.`}
            <br />
            <br />
            {`The back up storage is stored within S3 and this free.`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Read replicas </h4>
          <p className={`border-btm`}>
            {`Manually create copies of the data within your database.
        This is done by taking snapshots.`}
            <br />
            {`You must have back ups turned on in your database instance`}
            <br />
            <br />
            {`They have their own DNS addresses`}
            <br />
            <br />
            {`They can have their own multiple AZ`}
            <br />
            <br />
            {`They are stored after you delete your database instance`}
            <br />
            <br />
          </p>
        </article>
      </section>
    </main>
  );
};

export default RDS;
