import React from "react";
import "./Express.css";

const Express = () => {
  return (
    <main className={`express-home`}>
      <h2>express</h2>

      <article className={"tools"}>
        <h3> Online Resources </h3>
        <ul>
          <li>
            - Express installation:{" "}
            <a
              href="https://expressjs.com/en/starter/installing.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here{" "}
            </a>
          </li>
          <li>
            - Express routing:{" "}
            <a
              href="https://expressjs.com/en/guide/routing.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here{" "}
            </a>
          </li>
          <li>
            - Express middleware:{" "}
            <a
              href="https://expressjs.com/en/guide/using-middleware.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here{" "}
            </a>
          </li>
          <li>
            - Body parser:{" "}
            <a
              href="https://www.npmjs.com/package/body-parser"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here{" "}
            </a>
          </li>
          <li>
            - Express static file response:{" "}
            <a
              href="https://expressjs.com/en/starter/static-files.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here{" "}
            </a>
          </li>
          <li>
            - Postman:{" "}
            <a
              href="https://www.postman.com/downloads/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here{" "}
            </a>
          </li>
          <li>
            - Bcrypt:{" "}
            <a
              href="https://www.npmjs.com/package/bcryptjs"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here{" "}
            </a>
          </li>
          <li>
            - Cors:{" "}
            <a
              href="https://www.npmjs.com/package/cors"
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

          <h4 className={`center`}> Express </h4>
          <h4 className={`center`}> Definition </h4>
          <p className={`border-btm`}>
            {`Express.js is a javascript server side framework that is used for building servers.`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Installation </h4>
          <p>
            {`Make sure node.js is installed on your computer 
        before installing express`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Step 1 </h4>
          <p>
            {`Install the npm package express into your web application`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`npm install express`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Step 2 </h4>
          <p className={`border-btm`}>
            {`Import express into your javascript file 
        and then cache express to be re used within your code`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`const express = require(“express”);`}
            <br />
            <br />
            {`const app = express();`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Creating a server with express.js </h4>
          <p>
            {`Make sure express is installed within your web app.`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Express methods </h4>
          <p>
            {`Express makes sending and receiving request and 
        responses very easy compared to traditional 
        node.js server. `}
            <br />
            <br />
            {`When the client sends a request to the
       server it is done via a method type(GET,PUT,POST,DELETE).`}
            <br />
            <br />
            {`Express.js is smart enough to automatically receive the data 
        type and processes a response based on where the data was sent.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`app.get(“/“,(request, response)=>{})`}
            <br />
            <br />
            {`app - refers to express `}
            <br />
            <br />
            {`.get() -  refers to the request type that was sent from the client. 
      In this case a GET request was made. 
      The .get() method accepts two parameters.`}
            <br />
            <br />
            {`(“/“, - The first parameter defines the path(usually the url) of where the get request 
        was made. In this example the get request was made from the root path.`}
            <br />
            <br />
            {`(request, response)=>{} - The second parameter is a function, this function itself 
      receives two parameters (request, response). The request is the data sent by the client and 
      the response is the data sent back to the client from the server.`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> .json() </h4>
          <p>
            {`This is a method which is attached to 
        the responses you send back to the client.`}
            <br />
            {`It is through this method we can send data back to the client. 
        This method is very smart and works like .setHeader() and .end()
         as what ever you send via the .json() method automatically has 
         its headers set and coverts objects into json automatically 
         (meaning you don’t need to use JSON.stringify()). You can also 
         send other types of files besides json like html etc.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`const user = {name: “ben”, surname:”Owusu”}`}
            <br />
            {`response.json(user)`}
            <br />
            <br />
            {`The user object is sent as json back to the client`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> .listen() </h4>
          <p>
            {`This method is attached to the server you create 
        at the end and accepts a parameter which is the 
        port that the client is from (localhost: 3000).`}
            <br />
            {`The purpose of the .listen() method is to provide a 
        connection between client and server and listen to 
        requests made and respond accordingly.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`app.listen(3000)`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Full server example </h4>
          <p className={`border-btm`}>
            {`const express = require(“express”);`}
            <br />
            {`const app = express();`}
            <br />
            <br />
            {`app.get(“/“, (req, res) => {`}
            <br />
            <br />
            {`const obj = {name: “ben”, surname: “owusu”}`}
            <br />
            {`res.json(obj)`}
            <br />
            {`})`}
            <br />
            <br />
            {`app.listen(3000)`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Middleware </h4>
          <p className={`border-btm`}>
            {`Middleware is a concept used in server side side programming 
        which allows data that is sent to and and from the server to 
        be manipulated before it is accessed within our code.`}
            <br />
            <br />
            {`To use middleware you use the .use() method which accepts 3 
        parameters.`}
            <br />
            <br />
            {`The first parameter is the request, which is the data that 
        is being sent from the client to the server but is first 
        being intercepted by the middleware.`}
            <br />
            <br />
            {`The second parameter is the response, this Is the data sent
       from the server to the client but is first intercepted by the 
       middleware to be manipulated and then sent back to the server.`}
            <br />
            <br />
            {`The third parameter is the next() method. This method allows 
        the data that has been first manipulated by the middleware to
         now be sent down to the server to now be further manipulated 
         and then sent back to the client.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`app.use((request, response, next) =>{`}
            <br />
            <br />
            {`next()`}
            <br />
            {`})`}
            <br />
            <br />
            {`In the example the middle ware is being using on 
        the variable called app.`}
            <br />
            <br />
            {`Nothing happens in the function so the data received 
        by the middleware will automatically be passed down 
        further to the server.`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Body-parser </h4>
          <p>
            {`Body parser is a middleware that allows you to access the 
        body of a request made by the client to the server.`}
            <br />
            <br />
            {`This should always be used with express servers`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> How to use </h4>
          <h4 className={`center`}> Step 1 </h4>
          <p>
            {`Download the npm package body-parser`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`npm install body-parser`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Step 2 </h4>
          <p className={`border-btm`}>
            {`Import body-parser into your app and apply it to your middlware`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`const express = require(“express”)`}
            <br />
            {`const bodyParser = require(“body-parser”)`}
            <br />
            <br />
            {`const app = express();`}
            <br />
            <br />
            {`(json);`}
            <br />
            {`app.use(bodyParser.json());`}
            <br />
            <br />
            {`(html form)`}
            <br />
            {`app.use(bodyParser.urlencoded({extended: false}));`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Static file responses </h4>
          <p className={`border-btm`}>
            {`Static files are files like html pages. To send via 
        the server back to a client a static file is as follows.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`const express = require(“express”);`}
            <br />
            {`const app = express();`}
            <br />
            <br />
            {`app.use(express.static(__dirname + “/public/index.html”))`}
            <br />
            <br />
            {`app.listen(3000)`}
            <br />
            <br />
            {`Static files are sent within the 
        middleware with the express.static() method.`}
            <br />
            {`It is within the static method you define the location 
        of the file you want to send.`}
            <br />
            {` __dirname refers to the directory the server file is held.`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Postman desktop app </h4>
          <p className={`border-btm`}>
            {`Postman is a desktop client that allows you to mimic a client 
        and send GET,PUT,POST,DELETE requests to a server and receive
         a response. It is helpful for the development of applications.`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Bcrypt.js </h4>
          <p className={`border-btm`}>
            {`This is a module which is used to hash(encrypt) 
        passwords so it is safe for login.`}
            <br />
            {`This should be used in conjunction with the HTTPS protocol. `}
            <br />
            <br />
          </p>

          <h4 className={`center`}> How to use </h4>
          <h4 className={`center`}> Step 1 </h4>
          <p>
            {`Install the npm package bcrypt.js and 
        import it within your app (client and server)`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`npm install bcryptjs`}
            <br />
            <br />
            {`const bcrypt = require(“bcryptjs”)`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Step 2 </h4>
          <p>
            {`Turn your password into a hash within the 
        client before sending it to the server`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`const saltRounds = 10;`}
            <br />
            {`const salt = bcrypt.genSaltSync(saltRounds);`}
            <br />
            {`const hash = bcrypt.hashSync(password, salt);`}
            <br />
            <br />
            {`This ultimately creates a variable called hash which stores your password and 
        then converts it into a hash. Your password is now stored within the ‘hash’ 
        variable, which you can now store in a database or manipulate how you want.`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Step 3 </h4>
          <p className={`border-btm`}>
            {`Within your server compare the hash sent by the client 
        with the password that already exists within your database`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`const isValid = bcrypt.compareSync(client password, hash(from database);`}
            <br />
            <br />
            {`This compares the password from the client to the one from the server, if they match the const isValid will be true.`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Cors </h4>
          <p className={`border-btm`}>
            {`This npm package allows you to control which urls 
        have access to your server.`}
            <br />
            <br />
            {`This is extremely important because if this isn’t defined 
        anyone can have access to your server.`}
            <br />
            <br />
            {`Cors is a middleware`}
            <br />
            <br />
          </p>
        </article>
      </section>
    </main>
  );
};

export default Express;
