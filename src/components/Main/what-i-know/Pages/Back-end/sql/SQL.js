import React from "react";
import "./SQL.css";

const SQL = () => {
  return (
    <main className={`sql-home`}>
      <h2>sql</h2>

      <article className={"tools"}>
        <h3> Online Resources </h3>
        <ul>
          <li>
            - SQL Tutorial:{" "}
            <a
              href="https://www.w3schools.com/sql/sql_intro.asp"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here{" "}
            </a>
          </li>
          <li>
            - SQL datatypes:{" "}
            <a
              href="https://www.w3schools.com/sql/sql_datatypes.asp"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here{" "}
            </a>
          </li>
          <li>
            - SQL joins{" "}
            <a
              href="https://www.w3schools.com/sql/sql_join.asp"
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

          <h4 className={`center`}> SQL </h4>
          <h4 className={`center`}> Definition </h4>
          <p className={`border-btm`}>
            {`SQL is a query language used to communicate and 
        manipulate databases usually from a server.`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> How to use </h4>

          <h4 className={`center`}> Create a table </h4>
          <p className={`border-btm`}>
            {`To create a table in a relational database with 
        sql commands are as follows:`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`CREATE TABLE table (column1 text, column2 smallint);`}
            <br />
            <br />
            {`Example2:`}
            <br />
            <br />
            {`CREATE TABLE test (name text, age smallint);`}
            <br />
            <br />
            {`This will create a new table within your relational database called test. 
        It will have 2 columns that accept the data types text and small int.`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Datatyes </h4>
          <p className={`border-btm`}>
            {`Each column within a table has to have a data type. 
        The data type defines what sort of data is going to
         be inserted into the table. `}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`CREATE TABLE test (column1 text not null, column2 smallint);`}
            <br />
            <br />
            {`In this example a table was created with the name test, 
        it has two columns with column1 accepting the data of 
        text and an additional datatype of not null which means 
        this field cannot be empty and column2 accepting the data 
        of small numbers. `}
            <br />
            <br />
            {`You can add multiple conditions in addition to the data 
        type when creating tables, the conditions should come 
        after the data type. `}
            <br />
            <br />
            {`Example2:`}
            <br />
            <br />
            {`CREATE TABLE table (column1 text not null primary key, column2 serial);`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Inserting Values into a table </h4>
          <p className={`border-btm`}>
            {`To insert values into a table in the relational database 
        that you have created is as follows:`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`INSERT INTO table (column1, column2) VALUES (value, value);`}
            <br />
            <br />
            {`Example2:`}
            <br />
            <br />
            {`INSERT INTO test (name, age) VALUES (‘ben’, 25);`}
            <br />
            <br />
            {`The INSERT INTO syntax allows you to insert data into a 
        column within a table. VALUES are the data you want 
        inserted into the columns of the table. The values have 
        to correspond with the data type of the columns.`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Updating values in a table </h4>
          <p className={`border-btm`}>
            {`To update values within an existing table is as follows:`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`UPDATE table SET column =“value” WHERE column=“value”;`}
            <br />
            <br />
            {`Example2:`}
            <br />
            <br />
            {`UPDATE test SET score = 50 WHERE name = ‘ben’;`}
            <br />
            <br />
            {`The UPDATE keyword allows you to select a table you want 
        to update. The SET keyword allows you to select and update 
        the new value. The WHERE keyword allows you to select the 
        column you want to update. In the above example the test 
        table is being updated and bens score is now 50.`}
            <br />
            <br />
            {`To update more than one value is as follows:`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`UPDATE test SET score = 100 WHERE name = ‘ben’ OR name = ’sally’;`}
            <br />
            <br />
            {`Example2:`}
            <br />
            <br />
            {`UPDATE test SET score = 100 WHERE name = ‘ben’ AND name = ‘sally’;`}
            <br />
            <br />
            {`In EXAMPLE 1 because of the OR extender the score will be updated for both ben and sally.`}
            <br />
            {`In EXAMPLE 2 because of the AND extender the score will only be updated if the if names ben and sally match.`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Select data from tables </h4>
          <p className={`border-btm`}>
            {`To select data from a table to view/manipulate is as follows:`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`SELECT column1 column2 FROM table WHERE column1 = value;`}
            <br />
            <br />
            {`Example2:`}
            <br />
            <br />
            {`SELECT name age FROM test WHERE name = “ben”;`}
            <br />
            <br />
            {`The SELECT keyword allows you to choose which columns of data 
        you want to view/manipulate. The FROM keyword allows you to 
        choose which table you are choosing the columns from. The WHERE
         keyword allows you to specify what specific row you want selected.`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> SQL conditional statements </h4>
          <p className={`border-btm`}>
            {`This allows you to order or select specific data`}
            <br />
            <br />
            {`To select specific data with a condition is as follows:`}
            <br />
            <br />
            {`SELECT * FROM table WHERE column LIKE ‘A%’;`}
            <br />
            <br />
            {`The SELECT * FROM table allows us to access all the data 
        within the columns of the table which in this example is 
        called test. The WHERE keyword allows us to choose the 
        column. The LIKE keyword allows us to select a data value 
        with a condition, in the above example you are selecting 
        all the data values that start with a capital A (case sensitive).`}
            <br />
            <br />
            {`To order data is as follows:`}
            <br />
            <br />
            {`SELECT * FROM table ORDER BY column ASC/DESC`}
            <br />
            <br />
            {`The SELECT * FROM table allows us to access all the data within the 
        columns of the table which in this example is called test. The ORDER 
        BY keyword allows you to choose the column you want to order. The 
        ASC/DESC keywords allows you to order the data either by ascending 
        or descending order.`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> SQL functions </h4>
          <p className={`border-btm`}>
            {`This allows you to add functions to columns 
        to perform actions on specific data:`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`SELECT AVG/COUNT/SUM (column) FROM table`}
            <br />
            <br />
            {`Example2:`}
            <br />
            <br />
            {`SELECT AVG (age) FROM test;`}
            <br />
            <br />
            {`The SELECT keyword allows you to to choose a column. 
        It accepts a parameter which is the column you want 
        to perform the function on.`}
            <br />
            <br />
            {`The AVG keyword is a function and allows you to find the 
        average value of a column.It accepts a parameter which 
        is the column you want to perform the function on.`}
            <br />
            <br />
            <br />
            {`The SUM keyword is a function and allows you to find the 
        sum of values within a column.It accepts a parameter which 
        is the column you want to perform the function on. `}
            <br />
            <br />
            <br />
            {`The COUNT keyword is a function and allows you to count 
        the amount of data values within a column `}
            <br />
            <br />
            <br />
            {`The FROM keyword allows you to select the table you want to edit.`}
            <br />
            <br />
            <br />
            {`In Example2 the output will be the average from the column 
        age within the table users.`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> SQL joining tables </h4>
          <p className={`border-btm`}>
            {`This allows you to add the data of two tables 
        together to gain access to more data.`}
            <br />
            <br />
            {`When using a relational database with all it is good 
        to separate data into many tables with specific data 
        rather than having one big table.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`SELECT * FROM table1 JOIN table2 ON table.column = table2.column;`}
            <br />
            <br />
            {`The SELECT * FROM table1 allows you to grab all the data from the 
        first table you want be joined. The JOIN keyword allows you to 
        attach the the data from the second table you want joined to the 
        first table, this data will be attached to the first table. The 
        ON keyword allows you to set up the columns which you want matched 
        from each table to make the data from both tables match.`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Primary & Foreign key </h4>
          <p className={`border-btm`}>
            {`In the above example the joined table will only gives us data for 
        two rows in table1 even though there are 3 rows, this is because 
        within table2 there are only two rows with the column ‘name’ that 
        match table1.name.`}
            <br />
            <br />
            {`This is because there is no foreign key in table2.name that matches the primary 
        key table1.name. Whenever creating tables there should always be a unique column 
        that remains the same throughout all tables created, this will allow you to link 
        tables through joins. The original table with the unique column is the primary key, 
        any tables coming after that are foreign keys.`}
            <br />
            <br />
            {`In the above example the column containing the primary key in table1 is ‘name’ 
        and in table2 the foreign key is also called ‘name’`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Primary & Foreign key </h4>
          <p className={`border-btm`}>
            {`In the above example the joined table will only gives us data for 
        two rows in table1 even though there are 3 rows, this is because 
        within table2 there are only two rows with the column ‘name’ that 
        match table1.name.`}
            <br />
            <br />
            {`This is because there is no foreign key in table2.name that matches the primary 
        key table1.name. Whenever creating tables there should always be a unique column 
        that remains the same throughout all tables created, this will allow you to link 
        tables through joins. The original table with the unique column is the primary key, 
        any tables coming after that are foreign keys.`}
            <br />
            <br />
            {`In the above example the column containing the primary key in table1 is ‘name’ 
        and in table2 the foreign key is also called ‘name’`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> SQL deleting rows </h4>
          <p className={`border-btm`}>
            {`To delete rows in sql is as follows:`}
            <br />
            <br />
            {`DELETE FROM table WHERE column = value;`}
            <br />
            <br />
            {`The DELETE FROM table keyword allows you to select the 
        table you want to make the deleting from. The WHERE 
        keyword allows you to select column you want the deleted 
        and the value of the column which will be the row that is 
        deleted.`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> SQL deleting tables </h4>
          <p className={`border-btm`}>
            {`To delete a table in full and all its data is as follows:`}
            <br />
            <br />
            {`DROP TABLE table;`}
            <br />
            <br />
            {`The DROP TABLE table keyword allows you to select the table
       within the database you want to delete and then deletes it.`}
            <br />
            <br />
          </p>
        </article>
      </section>
    </main>
  );
};

export default SQL;
