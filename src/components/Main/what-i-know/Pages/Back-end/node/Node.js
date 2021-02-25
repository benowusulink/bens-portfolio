import React from "react";
import "./Node.css";

const Node = () => {
  return (
    <main className={`node-home`}>
      <h2>node</h2>

      <article className={"tools"}>
        <h3> Online Resources </h3>
        <ul>
          <li>
            - Node install:{" "}
            <a
              href="https://nodejs.org/en/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here{" "}
            </a>
          </li>
          <li>
            - Node install (brew):{" "}
            <a
              href="https://changelog.com/posts/install-node-js-with-homebrew-on-os-x"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here{" "}
            </a>
          </li>
          <li>
            - Node properties:{" "}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/API/Node"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here{" "}
            </a>
          </li>
          <li>
            - Nodemon:{" "}
            <a
              href="https://www.npmjs.com/package/nodemon"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here{" "}
            </a>
          </li>
          <li>
            - Node Server:{" "}
            <a
              href="https://www.w3schools.com/nodejs/nodejs_http.asp"
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

          <h4 className={`center`}> Node </h4>
          <h4 className={`center`}> Definition </h4>
          <p className={`border-btm`}>
            {" "}
            {`Allows you to run javascript outside of the browser and within the terminal, 
        it is the ideal way to make servers. Wherever you want to use javascript if you download node.js you can 
        use it wherever it is downloaded.`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Installation </h4>
          <p>
            {" "}
            {`You can install node in two ways`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Internet download </h4>
          <p>
            {" "}
            {`Go on the node website and download node.js onto your device`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Brew (terminal) </h4>
          <p className={`border-btm`}>
            {" "}
            {`Within your terminal type the syntax provided by 
        the brew node package. (provided in online resources)`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> How to use </h4>
          <p className={`border-btm`}>
            {" "}
            {`To use javascript in the terminal:`}
            <br />
            <br />
            {`To use javascript in the terminal:`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`node (PRESS ENTER)`}
            <br />
            {`console.log(“hi”) = hi`}
            <br />
            <br />
            {`This will run the javascript function console log 
        and display the string “hi” in your terminal.`}
            <br />
            <br />
          </p>

          <h4 className={`center`}>
            {" "}
            Running Node on specific javascript files
          </h4>
          <p className={`border-btm`}>
            {" "}
            {`You can use node to run specific javascript files. 
        If you do this node will parse all code on the file then exit. `}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`TERMINAL  touch script.js `}
            <br />
            <br />
            {`Then within the same directory run the command:`}
            <br />
            <br />
            {`node script.js`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Node global</h4>
          <p className={`border-btm`}>
            {" "}
            {`Since node can be run anywhere (not specifically in browser) there isn’t 
        a traditional window object (which is browser specific) instead Node uses the global object. `}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`console.log(global)`}
            <br />
            <br />
            {`This will show you all the properties of the global object`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Exporting/Importing Node modules</h4>
          <p className={`border-btm`}>
            {" "}
            {`Node hasn’t yet introduced ES6 import into its 
        language so you have to use the old syntax to import and export modules.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`FileName: script.js`}
            <br />
            <br />
            {`const a = require(“./script2.js”)`}
            <br />
            <br />
            {`const aa = a.largenumber`}
            <br />
            {`const b = 6`}
            <br />
            {`console.log(aa+b)`}
            <br />
            <br />
            {`FileName: script2.js`}
            <br />
            <br />
            {`const largenumber = 345;`}
            <br />
            <br />
            {`module.exports={`}
            <br />
            {`largenumber: largenumber`}
            <br />
            {`}`}
            <br />
            <br />
            {`node script.js = the sum of aa(which was imported from script 2) and b which is 351`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Modules</h4>
          <p> {`There are 3 types of modules you can use within node.js`}</p>
          <h4 className={`center`}> Created modules</h4>
          <p>
            {" "}
            {`These are modules which you can create yourself and import and export within javascript files.`}
            <br />
            <br />
            {`The modules can contain most javascript types and functions`}
            <br />
            <br />
            {`See the above example on EXPORT/IMPORTING for example.`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Built in Node modules</h4>
          <p>
            {" "}
            {`These are modules which are built in within the node language like ‘http’(a module used to make web servers)`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`const http = require(“http”)`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Built in Node modules</h4>
          <p className={`border-btm`}>
            {" "}
            {`These are modules which you can download via the terminal and import and use with your file.`}
            <br />
            <br />
            {`There must be a .json file to install external modules, this is done with npm init`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`TERMINAL (WITHIN FILE DIRECTORY)`}
            <br />
            <br />
            {`npm install “module name”`}
            <br />
            <br />
            {`FILE`}
            <br />
            <br />
            {`const module = require(“module name”)`}
            <br />
            <br />
            {`Your external module will now be available to use
       within your file within the “module” variable.`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Nodemon Module packagae </h4>
          <p className={`border-btm`}>
            {" "}
            {`This is an external module (npm file) which can be used to assist you using javascript in your files.`}
            <br />
            <br />
            {`The purpose of nodemon is to listen to any updated changes you make to a javascript file it is linked to and show you the results in the terminal.`}
            <br />
            <br />
            {`Step 1`}
            <br />
            <br />
            {`Create a json file with npm init in the directory you want it created.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`npm init`}
            <br />
            <br />
            {`Step 2`}
            <br />
            <br />
            {`Download and install nodemon as a dev dependency.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`npm install --save-dev nodemon`}
            <br />
            <br />
            {`Step 3`}
            <br />
            <br />
            {`Add nodemon to your start script within your package.json file.
Allow it to listen to changes on the selected javascript file.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`“scripts” :{`}
            <br />
            {`“start” : “scriptName.js nodemon”`}
            <br />
            {`}`}
            <br />
            <br />
            {`Then in the same directory use the syntax in the terminal:      
        npm install --save -dev nodemon(dev will save it as a developer 
        dependency meaning it is used to help create the app but not 
        needed when deploying the app).`}
            <br />
            <br />
            {`Then go to your json file and make sure you add “nodemon 
        (plus javascript filename) to your scripts, 
        nodemon will then start listening to the javascript file. npm start`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Node server </h4>
          <p>
            {" "}
            {`Because node allows you to use javascript without a browser and 
        on a device it is possible to use node as a server side language.`}
            <br />
            {`The purpose of nodemon is to listen to any updated changes you make to a javascript file it is linked to and show you the results in the terminal.`}
            <br />
            {`Node can be used to receive and respond with data to and from the client.`}
            <br />
            {`Below are the following tools and the steps in order to set up a server using node.`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Node module "http" </h4>
          <p>
            {" "}
            {`This is a module needed to import before you start working on a server.`}
            <br />
            {`It is a module that exits within the Node javascript language so for it to be used 
        it has to be imported within your javascript node file.`}
            <br />
            {`This syntax allows the javascript file to receive the http protocol which 
        will be used to send and receive json files.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`const http = require(“http”)`}
            <br />
            <br />
          </p>
          <h4 className={`center`}>
            {" "}
            - .createServer((request, response) => {}){" "}
          </h4>
          <p>
            {" "}
            {`The .createServer() method is used to create a server within your javascript node file.`}
            <br />
            {`The method receives a function with two parameters (request and response).`}
            <br />
            {`The request parameter refers to the data that the server will receive and 
        the response is the data the server will respond back to the client that
         made the request.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`const http = require(“http”)`}
            <br />
            <br />
            {`const server = http.createServer((request, response) =>{})`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Requests </h4>
          <p>
            {" "}
            {`Within the .createServer() method one of the parameters received are the requests.`}
            <br />
            {`Requests are data you receive from the client.`}
            <br />
            {`Within the requests you can extract useful information which can be used 
        to help process the response of the request or use for other purposes.`}
            <br />
            {`Below are the list of useful information you can get from requests.`}
            <br />
            <br />
            <br />
            {`Request.headers`}
            <br />
            <br />
            {`Provides you with useful information about the client. `}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`req.headers`}
            <br />
            <br />
            <br />
            {`Request.method`}
            <br />
            <br />
            {`Provides you with the http method type (GET, PUT, POST, DELETE etc)`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`req.method`}
            <br />
            <br />
            <br />
            {`Request.url`}
            <br />
            <br />
            {`Provides you with the unique url of the client making a request.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`req.url`}
            <br />
            <br />
            <br />
            {`Request.params`}
            <br />
            <br />
            {`Contains root information about the request`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`req.params`}
            <br />
            <br />
            <br />
            {`Request.query`}
            <br />
            <br />
            {`Provides you with the query string information attached to the url`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`req.query`}
            <br />
            <br />
            <br />
            {`Request.body`}
            <br />
            <br />
            {`Provides you with the data within the body of the request`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`req.body`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Responses </h4>
          <p>
            {" "}
            {`Within the .createServer() method the second parameter that the function receives is the response.`}
            <br />
            {`The response is what the server will respond back to the client with.`}
            <br />
            {`Responses usually come with two methods that are needed to send data back to the client.`}
            <br />
            <br />
            <br />
            {`Response.setHeaders`}
            <br />
            <br />
            {`This method defines headers of the response back to the client. 
        The .setHeader() method comes with two parameters, the first declaring 
        the content type and the second defining what type of content file.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`response.setHeader({“Content-Type” : “application/json”})`}
            <br />
            <br />
            <br />
            {`Response.send`}
            <br />
            <br />
            {`This methods sends the file back to client.`}
            <br />
            {`Remember when sending json data it needs to be turned into json before it can be sent to the client, hence the JSON.stringify()
       method which converts javascript objects into json.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`response.send(JSON.stringify(data))`}
            <br />
            <br />
            <br />
            {`Response.json`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`res.json`}
            <br />
            <br />
            {`Request.status`}
            <br />
            <br />
            <br />
            {`This allows you to send a status code back to the client `}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`res.status(404)`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Listen </h4>
          <p className={`border-btm`}>
            {" "}
            {`This method is attached to the server you create at the end and accepts a parameter 
        which is the port that the client is from (localhost: 3000).`}
            <br />
            {`The purpose of the .listen() method is to provide a connection between client and server and listen to requests made and respond accordingly.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`server.listen(3000)`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Full Node server example </h4>
          <p className={`border-btm`}>
            {" "}
            {`const http = require(“http”)`}
            <br />
            <br />
            {`const server = http.createServer((request, response) =>{`}
            <br />
            <br />
            {`EXAMPLE DATA TO SEND TO CLIENT:`}
            <br />
            <br />
            {`const object = {name: “ben”, surname: “Owusu”}`}
            <br />
            <br />
            {`response.setHeader({“Content-Type”, “application/json”})`}
            <br />
            {`response.send(JSON.stringify(object))`}
            <br />
            {`})`}
            <br />
            <br />
            {`server.listen(3000)`}
            <br />
            <br />
          </p>
        </article>
      </section>
    </main>
  );
};

export default Node;
