import React from "react";
import "./Redshift.css";

const Redshift = () => {
  return (
    <main className={`redshift-home`}>
      <h2>redshift</h2>

      <article className={"tools"}>
        <h3> Online Resources </h3>
        <ul>
          <li>
            - redshift:{" "}
            <a href="https://aws.amazon.com/redshift/?whats-new-cards.sort-by=item.additionalFields.postDateTime&whats-new-cards.sort-order=desc">
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

          <h4 className={`center`}> Redshift </h4>
          <h4 className={`center`}> Definition </h4>
          <p className={`border-btm`}>
            {`This is a database that allows you to run complex queries on.`}
            <br />
            <br />
            {`This is used for large data sets`}
            <br />
            <br />
            {`You should extract your data from your database and put it 
        into redshift`}
            <br />
            <br />
          </p>
        </article>
      </section>
    </main>
  );
};

export default Redshift;
