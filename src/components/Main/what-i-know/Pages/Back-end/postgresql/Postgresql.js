import React from "react";
import "./Postgresql.css";

const Postgresql = () => {
  return (
    <main className={`postgres-home`}>
      <h2>redux</h2>

      <article className={"tools"}>
        <h3> Online Resources </h3>
        <ul>
          <li>
            - Postgres:{" "}
            <a
              href="https://www.postgresql.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here{" "}
            </a>
          </li>
          <li>
            - Psequel:{" "}
            <a
              href="http://www.psequel.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here{" "}
            </a>
          </li>
          <li>
            - Knex:{" "}
            <a
              href="https://knexjs.org/#Installation-node"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here{" "}
            </a>
          </li>
          <li>
            - PG Promise:{" "}
            <a
              href="https://github.com/vitaly-t/pg-promise"
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

          <h4 className={`center`}> Postgresql & databases </h4>
          <h4 className={`center`}> Databases </h4>
          <p className={`border-btm`}>
            {`Databases are a collection of data and allows us to organise data in an 
        efficient way. They are used to store data such as usernames, 
        passwords etc.`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> DBMS (Databse management system) </h4>
          <p className={`border-btm`}>
            {`Dbms is an collection of programs that allow us to manipulate databases.`}
            <br />
            <br />
          </p>

          <h4 className={`center`}>Relational and Non relational databases </h4>
          <p>
            {`There are two types of databases:`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Relational databases </h4>
          <p>
            {`Relational databases are a type of databases that have a schema. 
        This means the data within the database is separated within tables
         and you access information by linking tables.  It also has primary 
         and foreign keys. All relational databases can be communicated 
         with the language SQL. An example of a relational database is
          postgresql.`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Non relational databases </h4>
          <p className={`border-btm`}>
            {`These are databases that do not use a schema but instead store 
        all data within one file. Non relational databases usually come 
        with their own query language. For example the mongo db non 
        relational database comes with the language mongo db query language
         for us to communicate from server to database.`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Query Languages </h4>
          <p className={`border-btm`}>
            {`These are languages/protocol used to access information 
        within a database usually from a server.`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Postgresql </h4>
          <p>
            {`Postgresql is a relational database.`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> How to use </h4>
          <h4 className={`center`}> Step 1 </h4>
          <p>
            {`Install postgresql via home brew`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`brew install postgresql`}
            <br />
            <br />
            {`Brew allows you to download any file over the internet via the terminal.`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Step 2 </h4>
          <p>
            {`Start postgresql on your computer`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`brew services start postgresql`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Step 3 </h4>
          <p>
            {`Create a database within postgresql`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`createdb example`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Step 4 </h4>
          <p className={`border-btm`}>
            {`Enter the database created`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`psql example`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Database structure </h4>
          <p>
            {`Within all relational databases they all follow the same structure in 
        how they are built hence why it can all be manipulated by the same 
        query language SQL`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Table </h4>
          <p>
            {`This is the overall component where columns and rows live`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Columns </h4>
          <p>
            {`This is where sets of data is stored.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`column = name`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Rows </h4>
          <p className={`border-btm`}>
            {`This is where the sets of data intercept and in turn 
        return unique sets of data for each column. `}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`column = name, row = ben. Column2 = age, row2 = 24;`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Knex (Query Builder) </h4>
          <p>
            {`This module is a query builder that allows you to communicate to your 
        relational database within your server. It works with a number of relational 
        databases including postgresql. `}
            <br />
            <br />
          </p>
          <h4 className={`center`}> PG Promise </h4>
          <p>
            {`Pg promise is an alternative to knex.`}
            <br />
            <br />
          </p>
        </article>
      </section>
    </main>
  );
};

export default Postgresql;
