import React from "react";
import "./HTML.css";

const HTML = () => {
  return (
    <main className={`html-home`}>
      <h2>html</h2>

      <article className={"tools"}>
        <h3> Online Resources </h3>
        <ul>
          <li>
            - HTML tutorial:{" "}
            <a
              href="https://www.w3schools.com/html/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here{" "}
            </a>
          </li>
          <li>
            - HTML5 tutorial:{" "}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here{" "}
            </a>
          </li>
          <li>
            - HTML tag reference:{" "}
            <a
              href="https://www.w3schools.com/tags/default.asp"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here{" "}
            </a>
          </li>
          <li>
            - HTML attribute reference:{" "}
            <a
              href="https://www.w3schools.com/tags/ref_attributes.asp"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here{" "}
            </a>
          </li>
          <li>
            - HTML form:{" "}
            <a
              href="https://www.w3schools.com/html/html_forms.asp"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here{" "}
            </a>
          </li>
          <li>
            - HTML input reference:{" "}
            <a
              href="https://www.w3schools.com/html/html_form_input_types.asp"
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
          <h4>
            {" "}
            (Below are quick notes and tips about the subject, for more better
            information on the subject please refer to the resources above)
          </h4>
          <h4 className={`center`}> General HTML info </h4>
          <h5 className={`center`}> Definition </h5>
          <p> HTML stands for Hyper text mark up language </p>
          <h5 className={`center`}> HTML syntax </h5>
          <p>
            {" "}
            A traditional html document follows the following syntax:
            <br />
            <br />
            {`<!DOCTYPE html>`}
            <br />
            {`<html>`}
            <br />
            {`<head>`}
            <br />
            {`<title></title>`}
            <br />
            {`</head>`}
            <br />
            {`<body>`}
            <br />
            {`</body>`}
            <br />
            {`</html>`}
          </p>
          <h5 className={`center`}> HTML tags </h5>
          <p>
            These are key words used to define what should be displayed within a
            browser, it is through html tags we can define the content of our
            webpage within our codebase.
          </p>
          <p>
            EXAMPLE:
            <br />
            <br />
            {`<h1> Hello </h1>`}
          </p>
          <h5 className={`center`}> HTML self closing tags </h5>
          <p>
            Some html tags are self closing meaning they do not have a closing
            tag.
          </p>
          <p>
            EXAMPLE:
            <br />
            <br />
            {`<img src=“#”/>`}
          </p>
          <h5 className={`center`}> HTML comments </h5>
          <p>
            Used to make comments for developers in the code within your HTML.
          </p>
          <p>
            EXAMPLE:
            <br />
            <br />
            {`<!-- -->`}
          </p>
          <h5 className={`center`}> index.html </h5>
          <p>This is should be the root html file for your application.</p>
          <p>It is usually the first page served to the client from a server</p>
          <p className={`border-btm`}>
            EXAMPLE:
            <br />
            <br />
            {`touch index.html`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Common HTML tag reference </h4>
          <ul className={`border-btm`}>
            <li>{`- <!DOCTYPE > - defines what document type it is to the browser`}</li>
            <br />
            <li>{`- <h1></h1> - Creates a Header where you can enter a title (h1 - h6)`}</li>
            <br />
            <li>{`- <p></p> - Creates a tag where you can enter a paragraph`}</li>
            <br />
            <li>{`- <ol></ol> - Makes a number list`}</li>
            <br />
            <li>{`- <ul></ul> - Makes a unordered list`}</li>
            <br />
            <li>{`- <li></li> - allows you to list items within the list`}</li>
            <br />
            <li>{`- <br> - allows you to insert a line break`}</li>
            <br />
            <li>{`-  <img src=“”> - Allows you to add a image `}</li>
            <br />
            <li>{`- <a href=“”></a> -allows you to add hyperlinks to link pages to another`}</li>
            <br />
            <li>{`- <form></>form> - allows you to create forms`}</li>
            <br />
            <li>{`- <input>- Allows you to create input from the client into your web app, it comes with a host of attributes which define the input.`}</li>
            <br />
            <li>{`- <select></select> - Allows you to create a drop down list it is used in conjunction with the <option></option>`}</li>
            <br />
            <li>{`- <div></div> - Used to divide and seperate content within your html`}</li>
            <br />
            <li>{`- <span></span> - Sames as <div> but in line and more specific`}</li>
            <br />
            <li>{`- <style></style> - Allows you implement CSS within your html.`}</li>
            <br />
            <li>{`- <nav></nav> - a navigation div to store navigation elements on a webpage`}</li>
            <br />
            <li>{`- <main></main>- a main div where you store the main content elements of a website on your page`}</li>
            <br />
            <li>{`- <footer></footer> - a footer div where you store the last contents of your page`}</li>
            <br />
            <li>{`- <button></button>- allows you to add a button to the page`}</li>
            <br />
            <li>{`- <script></script> - This allows you to write javascript in HTML either within the tag or by adding a src attribute which links a javascript file to the HTML.`}</li>
            <br />
            <li>{`- <meta>- A tag which provides meta data about the html file. This information is parsed by browsers and isn’t rendered. For responsive design use the syntax <meta name=“viewport” content=“width=device-width, initial scale=1.0”>`}</li>
            <br />
            <li>{`- <video/> - allows you to add video to html. EXAMPLE: <video src=“” controls></video>`}</li>
            <br />
          </ul>

          <h4 className={`center`}> HTML attributes </h4>
          <p>
            {`Tags in html have attributes which means allow special properties within the tag for example <img src=“”> with src being the attribute. List of attributes are as follows`}
          </p>
          <h5 className={`center`}>Common HTML attributes list </h5>
          <ul className={`border-btm`}>
            <li>{`- class - Allows you to identify a element for css/ javascript`}</li>
            <br />
            <li>{`- src - included in a <img src””/> or <script src =""> tag normally and is used to find the source of the directory of data`}</li>
            <br />
            <li>{`- href - usually included within an <a></a> or <link> tag and is used to add hyperlinks`}</li>
            <br />
            <li>{`- alt - normally included within a <img src=“” alt=“”> and is used to describe in text the image that should be placed within the <img> tag.`}</li>
            <br />
            <li>{`- style - Allows you to add inline css style to html elements `}</li>
            <br />
            <li>{`- id - Allows you to identify a element for css/ javascript`}</li>
            <br />
          </ul>

          <h4 className={`center`}> HTML forms </h4>
          <p>
            Html forms are very common when create web applications as it allows
            you to take user information.
          </p>
          <h5 className={`center`}>HTML form element </h5>
          <ul>
            <li>{`- <form></Form> - Allows you to create a form`}</li>
            <br />
            <li>{`- <select></select> - Allows you to create a dropdown menu`}</li>
            <br />
            <li>{`- <textarea></textarea> - allows the user to input text of a larger degree`}</li>
            <br />
            <li>{`- <option></option> - Allows you to add list items to your dropdown menu and works in conjunction with the select element`}</li>
            <br />
            <li>{`- <input> - Allows you to add a host of input types through a host of attributes`}</li>
            <br />
            <li>{`- <button></button> - Allows you to add a button.`}</li>
          </ul>
        </article>
      </section>
    </main>
  );
};

export default HTML;
