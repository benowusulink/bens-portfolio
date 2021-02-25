import React from "react";
import "./Sessions.css";

const Sessions = () => {
  return (
    <main className={`sessions-home`}>
      <h2>sessions</h2>

      <article className={"tools"}>
        <h3> Online Resources </h3>
        <ul>
          <li>
            - JWT:{" "}
            <a href="https://jwt.io/" target="_blank" rel="noopener noreferrer">
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

          <h4 className={`center`}> Sessions </h4>
          <h4 className={`center`}> Definition </h4>
          <p className={`border-btm`}>
            {`Sessions and authentication are an important part of an app that
       handles sign ins, users and registration.`}
            <br />
            <br />
            {`In modern apps users expect to see their profile and to always 
        be logged into an app even when the page is refreshed.`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Authentication methods </h4>
          <p className={`border-btm`}>
            {`There are two types of methods used web based authentication`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Cookie based authentication (cookies) </h4>
          <p>
            {`This is the default, tried and tested authentication method used by web browsers.`}
            <br />
            <br />
            {`Think of cookies as temporary passwords that clients and servers send between 
        one another to authenticate data being sent.`}
            <br />
            <br />
            {`Each user has a temporary cookie when they start a session (logs in) and the 
        cookie and session is destroyed after an amount of time or if the user logs out.`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Step 1 </h4>
          <p>
            {`Client sends a post request to the server with 
        username and password.`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Step 2 </h4>
          <p>
            {`The server checks if the password and user exists within the database 
        and if true the server creates and stores a cookie and sends a response 
        with a “HTTP 200 OK” and within the response header a Set-Cookie: 
        session = “random string”`}
            <br />
            <br />
            {`This is the temporary cookie that will now be used within the client 
        and server to authenticate information being sent.`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Step 3 </h4>
          <p>
            {`Once the client receives and stores the cookie. Whenever any request is sent to the server and vice 
        versa the cookie will also be sent and be verified by either client and server.`}
            <br />
            <br />
            {`This is done so you can have a session with your unique details without having to verify each time`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Step 4 </h4>
          <p className={`border-btm`}>
            {`After a certain period of time or after a user logs out the cookie originally
       created by the server for authentication is destroyed. To create a new session 
       with cookies the user will have to register or login once again.`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> JSON web tokens </h4>
          <p className={`border-btm`}>
            {`JWT aka JSON web tokens is popular with single page applications and is more modern.`}
            <br />
            <br />
            {`Works similar to cookies`}
            <br />
            <br />
            {`For more information please refer to the online resources`}
            <br />
            <br />
          </p>
        </article>
      </section>
    </main>
  );
};

export default Sessions;
