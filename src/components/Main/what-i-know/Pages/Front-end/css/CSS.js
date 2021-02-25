import React from "react";
import "./CSS.css";

const CSS = () => {
  return (
    <main className={`css-home`}>
      <h2>css</h2>

      <article className={"tools"}>
        <h3> Online Resources </h3>
        <ul>
          <li>
            - CSS tutorial:{" "}
            <a
              href="https://www.w3schools.com/css/css_howto.asp"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here{" "}
            </a>
          </li>
          <li>
            - CSS selectors:{" "}
            <a
              href="https://www.w3schools.com/cssref/css_selectors.asp"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here{" "}
            </a>
          </li>
          <li>
            - CSS functions:{" "}
            <a
              href="https://www.w3schools.com/css/css_pseudo_classes.asp"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here{" "}
            </a>
          </li>
          <li>
            - CSS properties reference:{" "}
            <a
              href="https://www.w3schools.com/cssref/default.asp"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here{" "}
            </a>
          </li>
          <li>
            - CSS box model:{" "}
            <a
              href="https://www.w3schools.com/css/css_boxmodel.asp"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here{" "}
            </a>
          </li>
          <li>
            - CSS flex box:{" "}
            <a
              href="https://www.w3schools.com/css/css3_flexbox.asp"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here{" "}
            </a>
          </li>
          <li>
            - CSS media queries:{" "}
            <a
              href="https://www.w3schools.com/cssref/css3_pr_mediaquery.asp"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here{" "}
            </a>
          </li>
          <li>
            - CSS minifier:{" "}
            <a
              href="https://cssminifier.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here{" "}
            </a>
          </li>
          <li>
            - Bootstrap:{" "}
            <a
              href="https://getbootstrap.com/"
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
          <h4 className={`center`}> General CSS info </h4>
          <h4 className={`center`}> Definition </h4>
          <p>
            {" "}
            CSS aka cascading style sheets is used to style web applications{" "}
          </p>
          <h4 className={`center`}> CSS syntax </h4>
          <p>
            {" "}
            The format for css syntax is as follows:
            <br />
            <br />
            {`Selector {`}
            <br />
            {`Property: Value`}
            <br />
            {`}`}
          </p>
          <h5 className={`center`}> How to use </h5>
          <h4 className={`center`}>
            {" "}
            1. Linking CSS file to HTML via CSS file{" "}
          </h4>
          <p>
            Create a css file and link it to your HTML file
            <br />
            <br />
            Example:
            <br />
            <br />
            {`<link rel=“stylesheet” type=“text/css’ href=“path location of the file”>`}
          </p>
          <h6 className={`center`}> 2. HTML Style attribute</h6>
          <p>
            You can use CSS with a style attribute within a HTML tag
            <br />
            <br />
            Example:
            <br />
            <br />
            {`<p style=“font-size: 120%”>`}
          </p>
          <h6 className={`center`}> 3. HTML Style tag</h6>
          <p className={`border-btm`}>
            {`Within your HTML file you can use a <style></style> tag and input CSS directly into your HTML file `}
            <br />
            <br />
            Example:
            <br />
            <br />
            {`<style>`}
            <br />
            {`p {`}
            <br />
            {`font-size : 10px`}
            <br />
            {`}`}
            <br />
            {`</style>`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Classes and ID's </h4>
          <h4 className={`center`}> Classes</h4>
          <p>
            Classes allows you to identify HTML elements within CSS or
            Javacript. They are attributes to HTML elements and within CSS allow
            you to select multiple HTML elements to edit
            <br />
            <br />
            Example:
            <br />
            <br />
            {`(Within HTML file)`}
            <br />
            <br />
            {`<p class=“example”></p>`}
            <br />
            <br />
            {`(Within CSS File)`}
            <br />
            <br />
            {`.example {`}
            <br />
            {`Property: Value;`}
            <br />
            {`}`}
          </p>

          <h4 className={`center`}> ID</h4>
          <p className={`border-btm`}>
            {" "}
            Similar to a class but can be used on only one HTML element
            <br />
            <br />
            Example:
            <br />
            <br />
            {`(Within HTML file)`}
            <br />
            <br />
            {`<p id=“example”></p>`}
            <br />
            <br />
            {`(Within CSS File)`}
            <br />
            <br />
            {`#example {`}
            <br />
            {`Property: Value;`}
            <br />
            {`}`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> CSS styling format</h4>
          <p className={`border-btm`}>
            - tag - to change all tags with the same name with the same css
            properties.
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`body:`}
            <br />
            {`{Property: Value}`}
            <br />
            <br />
            - * - Selects all elements of the html.
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`*:`}
            <br />
            {`{Property: Value}`}
            <br />
            <br />
            - Apply same CSS properties to multiple selectors.
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`selector(h1), selector(h2) {`}
            <br />
            {`Property: value;}`}
            <br />
            <br />
            - Apply properties to selector within a selector.
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`selector(h1) selector(p) {`}
            <br />
            {`Property: value;}`}
            <br />
            <br />
            - Apply properties to selector within a parent tag.
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`Selector > selector {`}
            <br />
            {`Property: value;}`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> CSS Pseudo-classes</h4>
          <p className={`border-btm`}>
            {`CSS Selectors can have a function on them `}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`.button:hover{`}
            <br />

            {`Property: value;}`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Common CSS property list</h4>
          <p className={`border-btm`}>
            {`- Color: - Changes the colour of a HTML element to the values of 
          colour. (Accepts RGBA, HEX and regular values)`}
            <br />
            <br />
            {`- Font size: - changes the font size of a HTML element`}
            <br />
            <br />
            {`- Font-family: - changes the style of the font of a HTML element`}
            <br />
            <br />
            {`- Text-align: - allows you to position elements within a HTML element`}
            <br />
            <br />
            {`- Height,width: - edits the height and width of the content of a HTML element`}
            <br />
            <br />
            {`- Border: allows you to edit the border of a HTML element `}
            <br />
            <br />
            {`- Padding: - allows you to edit the padding of a HTML element`}
            <br />
            <br />
            {`- Margin: - allows you to edit the margin of a HTML element`}
            <br />
            <br />
            {`- List-style: - allows you to edit the style of bullet points in <li> elements`}
            <br />
            <br />
            {`- Opacity: - allows you to change the strength of opacity within a HTML element`}
            <br />
            <br />
            {`- Overflow: - A properties in css which prevents images from being bigger than its container`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Custom Fonts</h4>
          <p class={`border-btm`}>
            You can add custom fonts into your web application.
            <br />
            <br />
            {`STEP 1`}
            <br />
            <br />
            {`Within your html file add a <link> tag that references where your font will be hosted.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet">`}
            <br />
            <br />
            {`STEP 2`}
            <br />
            <br />
            {`Within your css file add the font`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`font-family: 'Roboto', sans-serif;`}
            <br />
            <br />
            {`EXTRA INFO:`}
            <br />
            <br />
            {`1. You can also use the @font-face selector within CSS to use downloaded fonts`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> CSS box model</h4>
          <p>
            CSS Box model an important concept in CSS to help style html
            tags/elements. It consists of 4 layers for you to customise your
            html tags/elements. From the bottom the layers are.
            <br />
            <br />
          </p>
          <h4 className={`center`}> Content</h4>
          <p>
            This refers to the actual text or images displayed within the html
            element This can de edited with the width and height CSS properties
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`p {`}
            <br />
            {`width : 100px;`}
            <br />
            {`height: 100px`}
            <br />
            {`}`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Padding</h4>
          <p>
            This refers to the invisible space between the content and the
            border of the text or images (content). This can be edited with the
            padding CSS properties
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`p {`}
            <br />
            {`padding : 10px;`}
            <br />
            {`}`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Border</h4>
          <p>
            This is a visual border outside of the padding which surrounds the
            content. This can be edited with the border CSS properties
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`p {`}
            <br />
            {`border: solid black 2px`}
            <br />
            {`}`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Margin</h4>
          <p className={`border-btm`}>
            This refers to the invisible space outside of the border to separate
            HTML element/tags. This can be edited with the CSS margin properties
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`p {`}
            <br />
            {`margin: 10px`}
            <br />
            {`}`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Margin</h4>
          <p>
            There are many methods to use for page layout on web applications.
            Below are the following methods{" "}
          </p>
          <h4 className={`center`}> Bootstrap</h4>
          <p>
            Bootstrap made by twitter is the best way to layout webpages and
            uses ready made web components and grid layout system for your web
            app.
            <br />
            <br />
            Bootstrap components allow you to use ready made components such as
            navigation bars to your website.
            <br />
            <br />
            The grid system allows you to arrange the layout of content on your
            website.
          </p>
          <h4 className={`center`}> Flex-Box</h4>
          <p className={`border-btm`}>
            Flex-Box is a native way to arrange content on a webpage via CSS.
            For more info please visit the link in online resources.
            <br />
            <br />
          </p>

          <h4 className={`center`}>Responsive Design & Media Queries</h4>
          <p>
            Media queries allow to edit webpage content depending on the device
            requirements.
            <br />
            <br />
            Example:
            <br />
            <br />
            STEP 1
            <br />
            <br />
            Add a link tag into your html file.
            <br />
            <br />
            {`<link rel=“stylesheet” type=“text/css’ href=“path of CSS file”>`}
            <br />
            <br />
            STEP 2
            <br />
            <br />
            Within your css you can start a media query by using this syntax:
            <br />
            <br />
            {`@media screen(media type) and (max/min-width: whatever pixels (media feature)) {`}
            <br />
            <br />
            {`css code }`}
            <br />
            <br />
            {`@media - Allows you to start a media query within your css code`}
            <br />
            <br />
            {`screen - this the type of screen you want the render your css onto which in this case is screen (always use screen). This is called a media type.`}
            <br />
            <br />
            {`max/min-width:whatever pixels - This is the condition you want your media query to be activated on. This is referred to as a media feature. You can 
           add more media features together with the and or not keywords`}
            <br />
            <br />
          </p>
        </article>
      </section>
    </main>
  );
};

export default CSS;
