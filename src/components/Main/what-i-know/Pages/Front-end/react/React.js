import React from "react";
import "./React.css";

const Reactt = () => {
  return (
    <main className={`react-home`}>
      <h2>React</h2>

      <article className={"tools"}>
        <h3> Online Resources </h3>
        <ul>
          <li>
            - React tutorial: <a href="https://reactjs.org/">Click here </a>
          </li>
          <li>
            - React virtual DOM:{" "}
            <a
              href="https://reactjs.org/docs/faq-internals.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here{" "}
            </a>
          </li>
          <li>
            - JSX:{" "}
            <a
              href="https://reactjs.org/docs/introducing-jsx.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here{" "}
            </a>
          </li>
          <li>
            - Embedding React:{" "}
            <a href="https://reactjs.org/docs/add-react-to-a-website.html">
              Click here{" "}
            </a>
          </li>
          <li>
            - React Components:{" "}
            <a href="https://www.w3schools.com/REACT/react_components.asp">
              Click here{" "}
            </a>
          </li>
          <li>
            - React properties (props):{" "}
            <a
              href="https://www.w3schools.com/REACT/react_props.asp"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here{" "}
            </a>
          </li>
          <li>
            - State:{" "}
            <a
              href="https://www.w3schools.com/REACT/react_state.asp"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here{" "}
            </a>
          </li>
          <li>
            - React children components:{" "}
            <a
              href="https://codeburst.io/a-quick-intro-to-reacts-props-children-cb3d2fce4891"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here{" "}
            </a>
          </li>
          <li>
            - Life Cycle hooks:{" "}
            <a
              href="https://reactjs.org/docs/react-component.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here{" "}
            </a>
          </li>
          <li>
            - React Router:{" "}
            <a
              href="https://reactjs.org/docs/react-component.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here{" "}
            </a>
          </li>
          <li>
            - React Modal:{" "}
            <a
              href="https://reactjs.org/docs/portals.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here{" "}
            </a>
          </li>
          <li>
            - React Router:{" "}
            <a
              href="https://reactjs.org/docs/react-component.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here{" "}
            </a>
          </li>
          <li>
            - React Pure components:{" "}
            <a
              href="https://reactjs.org/docs/react-api.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here{" "}
            </a>
          </li>
          <li>
            - React Code splitting:{" "}
            <a
              href="https://reactjs.org/docs/code-splitting.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here{" "}
            </a>
          </li>
          <li>
            - React lazy:{" "}
            <a
              href="https://web.dev/code-splitting-suspense/"
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

          <h4 className={`center`}> General React info </h4>
          <h4 className={`center`}> Definition </h4>
          <p>
            {" "}
            React.js is a javascript framework developed by the team at facebook
            to help write javascript in a simpler and easier way.
          </p>
          <p className={`border-btm`}>
            {" "}
            React uses a components structure and can be used to build
            websites/apps in a lego building block manner.
            <br />
          </p>
          <h4 className={`center`}> Virtual DOM</h4>
          <p className={`border-btm`}>
            The virtual Dom is an object of your website, its a copy of your
            website in its current state.
            <br />
          </p>
          <h4 className={`center`}> JSX</h4>
          <p className={`border-btm`}>
            A syntax which is identical to html which is used to write html in
            react.
            <br />
          </p>

          <h4 className={`center`}> How to use </h4>
          <h4 className={`center`}>
            {" "}
            Embedding React (Using it with html, css and javascript){" "}
          </h4>
          <p className={`border-btm`}>
            {`STEP 1`}
            <br />
            <br />
            {`Create a <div></div> element within your existing HTML file.
      This is where your React code will be mounted and rendered on a webpage`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`<div id="like_button_container"></div>`}
            <br />
            <br />
            {`STEP 2`}
            <br />
            <br />
            {`Add the script tags for react at the bottom of your <body></body> tag`}
            <br />
            <br />
            {`STEP 3`}
            <br />
            <br />
            {`Write your React code within a javascript file. 
      At the end of the file grab the <div> element create 
      I the HTML file and render your react code to it`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`const domContainer = document.querySelector('#like_button_container');`}
            <br />
            <br />
            {`ReactDOM.render(e(LikeButton), domContainer);`}
            <br />
          </p>

          <h4 className={`center`}> React DOM </h4>
          <p className={`border-btm`}>
            {`This allows you to render your page to browsers`}
            <br />
          </p>

          <h4 className={`center`}> How React works </h4>
          <p>
            {`Traditionally browsers render your html, css and javascript files, 
        this still applies to react but in a different way.`}
            <br />
          </p>
          <h4 className={`center`}> HTML </h4>
          <p>
            {`Within your react application your index.html file 
        (which will be rendered onto the screen and is located in the public folder) simply has a <div id=“root”></div>, What goes inside this div is your whole application. The id of root is important, 
        because of this your react app is placed in this div.`}
            <br />
          </p>
          <h4 className={`center`}> CSS </h4>
          <p>
            {`The main css file for the page is in the src folder, it works 
        like traditional css and is called index.css`}
            <br />
          </p>
          <h4 className={`center`}> Javascript </h4>
          <p className={`border-btm`}>
            {`Your main javascript file is index.js`}
            <br />
            <br />
            {`Lastly there is a syntax ReactDom.render(<App/>, document.getElementById(“root”))`}
            <br />
            <br />
            {`This syntax is how your application gets pushed 
         into html and rendered onto a browser.`}
            <br />
            {`The render() method is done on ReactDom (you want to render onto a browser) 
         and the render method takes two arguments.`}
            <br />
            {`The first argument is all your apps code that will in this 
         case is held in the “App” element.`}
            <br />
            {`The second argument is the location where you want all your code to be displayed, 
         in this case it will be displayed in the HTML <div id=“root”></div>`}
            <br />
          </p>

          <h4 className={`center`}> Create-react-app files </h4>
          <p>
            {`Once you use the npx method of creating a react app a host of 
      tools and files will be installed`}
            <br />
          </p>
          <h4 className={`center`}> Readme.md </h4>
          <p>
            {`This is a read me file which will be uploaded to GitHub,
     you can edit this accordingly. It is a MD file type`}
            <br />
          </p>
          <h4 className={`center`}> Package-lock.json </h4>
          <p>
            {`This is a file that makes sure that all the version numbers of the packages and 
      dependencies stay the same once you create your project.`}
            <br />
            {`So if someone else is working on the project and uses npm install they will also
      have the same version numbers of the dependencies.`}
            <br />
            {`It is a json file`}
            <br />
          </p>
          <h4 className={`center`}> Package.json </h4>
          <p>
            {`This is a file where your dependencies, 
      packages and scripts are held.`}
            <br />
            {`This is a JSON file.`}
            <br />
          </p>
          <h4 className={`center`}> .gitignore </h4>
          <p>
            {`This is a file which determines which parts of 
      the project doesn’t get uploaded to GitHub. `}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`node_modules`}
          </p>
          <h4 className={`center`}> node_modules </h4>
          <p>
            {`This is where all the files for your packages 
      are dowloaded and held to be available in the file `}
            <br />
          </p>
          <h4 className={`center`}> Public (directory) </h4>
          <p>
            {`A directory where your index.html, favicon.ico and manifest.json file are held`}
            <br />
          </p>
          <h4 className={`center`}> index.html </h4>
          <p>
            {`The main html file which will get rendered on the webpage.`}
            <br />
            <br />
            {`Your react scripts will be mounted on this page through the <div id=“root”></div>`}
            <br />
          </p>
          <h4 className={`center`}> Favicon.ico </h4>
          <p>
            {`A file which is a icon for your website in the browser, this can be edited`}
            <br />
          </p>
          <h4 className={`center`}> manifest.json </h4>
          <p>
            {`It is within the manifest.json file that you define 
      how the progressive app appears to the user.`}
            <br />
          </p>
          <h4 className={`center`}> src (directory) </h4>
          <p>
            {`This is where all the files needed for your project are displayed.
     It contains the index.js and index.css files which are the traditional css and javascript files for the whole project. 
     It should also contain components and containers needed for you react app.`}
            <br />
          </p>
          <h4 className={`center`}> index.js </h4>
          <p>
            {`This file is the main javascript file for your project also note adding things to this 
      file will apply to all parts of project.`}
            <br />
            {`ReactDOM.render() is a method that comes from the react-dom import.`}
            <br />
            {`It is with this syntax you render your app within the html id =“root” and then through the ID your webpage gets rendered.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`ReactDOM.render(<App/>, document.getElementById(“root”))`}
            <br />
            <br />
            {`This will render the component app within the html element root.`}
            <br />
          </p>
          <h4 className={`center`}> index.css </h4>
          <p>
            {`The css file for the root file of your react project`}
            <br />
          </p>
          <h4 className={`center`}> app.js </h4>
          <p className={`border-btm`}>
            {`The main file where your app code should be hosted`}
            <br />
          </p>

          <h4 className={`center`}> React import and exports </h4>
          <p className={`border-btm`}>
            {`Because REACT uses a babel compiler within webpack you 
      can use the ES6 version of import and exporting modules.`}
            <br />
            <br />
            {`You can import javascript files, css files, packages, functions, objects etc`}
            <br />
            {`You can export functions, variables, objects, arrays etc`}
            <br />
            <br />
            {`import React, {Component} from ‘react’;`}
            <br />
            {`import Component from ‘./Component.js’;`}
            <br />
            {`import ’package name’;`}
            <br />
            <br />
            {`export default file - used for exporting only 1 thing from a javascript page`}
            <br />
            <br />
            {`export { function, variable } - used for exporting multiple 
    things from a javascript webpage`}
            <br />
          </p>

          <h4 className={`center`}> React component structure </h4>
          <p>
            {`React components are broken down into 5 blocks`}
            <br />
          </p>
          <h4 className={`center`}> Atoms </h4>
          <p>
            {`The smallest and most specific component`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`the back button, photo, like button etc`}
            <br />
          </p>
          <h4 className={`center`}> Molecules </h4>
          <p>
            {`The second smallest component, its is a combination of atoms`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`menu bar, likes section, photo section`}
            <br />
          </p>
          <h4 className={`center`}> Organisms </h4>
          <p>
            {`The third smallest component, it is a combination of needed molecules`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`front page, Menu par, Profile bar etc`}
            <br />
          </p>
          <h4 className={`center`}> Templates </h4>
          <p>
            {`The second largest component, it is a combination of all organisms which should be the alpha page`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`the whole page`}
            <br />
          </p>
          <h4 className={`center`}> Pages </h4>
          <p className={`border-btm`}>
            {`The largest component`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`A launched page`}
            <br />
          </p>

          <h4 className={`center`}> React Components </h4>
          <p>
            {`Within the react language there are two types of components, state components and stateless components.`}
            <br />
            {`Dumb components do not have state and are usually functions.`}
            <br />
            {`Smart components usually have state and are usually classes.`}
            <br />
          </p>
          <h4 className={`center`}> Class Component (State) </h4>
          <p>
            {`Classes in javascript allow you to create an object which can 
      be copied over with new values and added functions (which are 
      accessed as methods of the object)(see instantiation in javascript
       objects for more details).`}
            <br />
            <br />
            {`The react language that you import into every javascript file to
     enable react to be used is structured itself within a class format 
     so once you import react onto your javascript file you have access 
     to all of react.`}
            <br />
            <br />
            {`In this specific case in the react class that is imported there is 
      a specific method which we need that allows you to create smart
       components and that is called Component. Below are the steps to create a 
       class component`}
            <br />
          </p>
          <h4 className={`center`}> Import react </h4>
          <p>
            {`import React, { Component } from ‘react’;`}
            <br />
            <br />
            {`Importing the react language to be used in javascript file, 
      also using object destructing to allow us to specifically 
      use the component method from the react language which allows 
      us to create smart components.`}
            <br />
            <br />
            {`If you don’t use object destructuring to use single out the 
      Component method you can still access the Component method 
      because it sill lives in the react language you have imported, 
      it will just have to be accessed when you create a class in 
      the in a different way.`}
            <br />
          </p>
          <h4 className={`center`}> Other imports </h4>
          <p>
            {`import “./App.css”;`}
            <br />
            <br />
            {`After you have imported react all other imports that you want to
     be accessed in your react component should follow. `}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`import React, { Component } from ‘react’;`}
            <br />
            {`import “./App.css”;`}
            <br />
          </p>
          <h4 className={`center`}> Creating a class </h4>
          <p>
            {`class App extends Component {}`}
            <br />
            <br />
            {`The way you create React components is similar to the way 
      you create extensions of classes in instantiated objects. 
      This is because the method Component that lives in the 
      react language is an original class (instantiated object) 
      which when extended allows us to created our own extended 
      version of the object which is a react component.`}
            <br />
            <br />
            {`If you haven’t specifically destructured the Component method
     when you imported react you can still create a class but have 
     to access the component method as a method of react. `}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`class App extends React.Component{}`}
            <br />
          </p>
          <h4 className={`center`}> Constructor/Super and State </h4>
          <p>
            {`constructor () { super(); this.state = {property: value};}`}
            <br />
            <br />
            {`Like an extended instantiated object it is within the 
      constructor function we declare our this properties.`}
            <br />
            {`Because a react component is an extended class we have to call 
      super for our constructor to work and communicate with reacts 
      original class component.`}
            <br />
            {`However within a react component with the this key word we 
      declare our state in the app.`}
            <br />
            {`State refers to what can change within an app.`}
            <br />
          </p>
          <h4 className={`center`}> Optional functions </h4>
          <p>
            {`functionName () =>{console.log()}`}
            <br />
            <br />
            {`Within a Class component after your constructor you can add your 
      functions which you want accessible within your class component. `}
            <br />
            {`This is similar to an instantiated object where after your 
      constructor you can create functions which will be available 
      as methods of the object.`}
            <br />
            {`The functions created in your class have to use the traditional 
      function syntax to work unlike in instantiated objects.`}
            <br />
          </p>
          <h4 className={`center`}> Render/Return </h4>
          <p>
            {`render(){return()}`}
            <br />
            <br />
            {`A component must always have a render function.`}
            <br />
            {`It is within this render function you declare what 
      you want the component to display.`}
            <br />
            {`The render function MUST return and can only return 
      one thing at a time so to return multiple things
     you have to wrap everything within one <div>. `}
            <br />
          </p>
          <h4 className={`center`}> Export Component </h4>
          <p>
            {`export { App };`}
            <br />
            <br />
            {`export default App;`}
            <br />
            <br />
            {`Once a component is created you have to export 
      it so it can be accessed in other javascript files,
       this is done at the end of the react page, you can 
       use object destructuring to export more that one component.`}
            <br />
          </p>
          <h4 className={`center`}> Full Class Component Example</h4>
          <p>
            {`import React, { Component } from “react”;`}
            <br />
            <br />
            {`class App extends Component {`}
            <br />
            <br />
            {`constructor() {`}
            <br />
            {`super();`}
            <br />
            {`this.state = {property: value}`}
            <br />
            {`}`}
            <br />
            <br />
            {`functionName () => {console.log()}`}
            <br />
            <br />
            {`render () { `}
            <br />
            {`return ( `}
            <br />
            {`<div>`}
            <br />
            {`<h1> Hello world </h1>`}
            <br />
            {`<p> welcome to react </p>`}
            <br />
            {`</div>`}
            <br />
            {`)}}`}
            <br />
            <br />
            {`export default Hello;`}
            <br />
            <br />
            {`EXTRA INFO:`}
            <br />
            <br />
            {`1. Smart components come with built in functions you can already use. 
      These are called life-cycle-hooks. An example of a life-cycle-hook is 
      the render(){} function.`}
            <br />
            {`To learn more about life-cycle-hooks visit that section`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Stateless Component </h4>
          <p>
            {`The alternative to a class component is an function component,
     Function components are considered dumb because they do not have 
     state and therefore don’t have to worry about change`}
            <br />
            {`Below are the steps for creating a function component.`}
            <br />
          </p>
          <h4 className={`center`}> Import react </h4>
          <p>
            {`import React from ‘react’;`}
            <br />
            <br />
            {`import react library to use react on page`}
            <br />
          </p>
          <h4 className={`center`}>
            {" "}
            Creating a function Component (stateless){" "}
          </h4>
          <p>
            {`const App = (props) => {`}
            <br />
            {`return (`}
            <br />
            {`<div>`}
            <br />
            {`<p>hello</p>`}
            <br />
            {`<p>{props.greeting}</p> `}
            <br />
            {`</div>`}
            <br />
            {`)}`}
            <br />
            <br />
            {`A function expression called App is created and accepts properties 
      (see react properties for more info below).
      A function must always return something so in this case it is 
      returning a javascript expression.`}
            <br />
          </p>
          <h4 className={`center`}> Export Component </h4>
          <p className={`border-btm`}>
            {`export { App };`}
            <br />
            {`export default App`}
            <br />
            <br />
            {`Export the add function so it is reusable and accessible 
      throughout the rest of your code`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> React properties (props) </h4>
          <p>
            {`Props can be varied pieces of data that can be passed into any type of react component 
      (smart or dumb) to then be used within the component.`}
            <br />
            <br />
            {`Props are passed down as arguments into React components.`}
            <br />
            <br />
            {`You can pass state, custom functions, variables with different 
      javascript data types as props`}
            <br />
          </p>
          <h4 className={`center`}> How to use </h4>
          <h4 className={`center`}> STEP 1 </h4>
          <p>
            {`Pass down the piece of data you want as props into he component 
      that needs to access the props data`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`<Component propsName = {propsValue}/>`}
            <br />
          </p>
          <h4 className={`center`}> Class Component</h4>
          <p>
            {`Now that the value of props has been passed 
      into the component to access it within a class 
      component is as follows.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`class Hello extends Component {`}
            <br />
            <br />
            {`constructor(){`}
            <br />
            {`super()};`}
            <br />
            <br />
            {`render() {`}
            <br />
            {`return( `}
            <br />
            {`<p>{this.props.greeting}</p>`}
            <br />
            {`)}}`}
            <br />
          </p>
          <h4 className={`center`}> Stateless Component</h4>
          <p>
            {`Now that the value of props has been passed 
      into the component to access it within a class 
      component is as follows.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`const Hello (props) => {`}
            <br />
            {`return (`}
            <br />
            {`<div>`}
            <br />
            {`<p>{props.greeting}</p>`}
            <br />
            {`</div>`}
            <br />
            {`)}`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Stateless Component</h4>
          <p>
            {`Refers to what can change in your app.`}
            <br />
            {`State is added in the parent components 
      and effects its children components. `}
            <br />
            {`State is the form of your website in a 
      javascript object.`}
            <br />
            {`State can only be used within a constructor 
      called with super, therefore can only be 
      used by smart components (class components).`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`class App extends React.Component{ `}
            <br />
            {`constructor(props) { `}
            <br />
            {`super (props);`}
            <br />
            {`this.state = { property: value}}`}
            <br />
            {`render() { `}
            <br />
            {`return ( `}
            <br />
            {`<div></div>`}
            <br />
            {`)}}`}
            <br />
            <br />
            {`State is assigned in the class via 
      the this keyword which is similar 
      to object instansiation in which 
      the this keyword is used to assign
       properties in your object.`}
            <br />
            {`Because custom Class Components are extended from the original 
      React Component Class to use state you must call super() which 
      triggers the original react component class.`}
            <br />
            {`Whatever is within state can be passed as properties for components.`}
            <br />
          </p>
          <h4 className={`center`}> Set State</h4>
          <p>
            {`A built in method within react that allows you to 
      change the situation of a state. `}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`this.setState({property: value})`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Children </h4>
          <p>
            {`When creating components (smart or dumb) if you wrap 
      the created component over a value(can be most things, 
      another component etc) the created wrapped component 
      will have access to the value by .children method`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`class App extends React.Component {`}
            <br />
            <br />
            {`render() {`}
            <br />
            {`return (`}
            <br />
            {`<div>`}
            <br />
            {`<CustomComponent> `}
            <br />
            {`<h1>hi</h1>`}
            <br />
            {`</CustomComponent> `}
            <br />
            {`</div>`}
            <br />
            {`)}}`}
            <br />
          </p>
          <h4 className={`center`}> Smart Component</h4>
          <p>
            {`class App2 extends React.Component {`}
            <br />
            <br />
            {`constuctor(props){`}
            <br />
            {`super(props)}`}
            <br />
            <br />
            {`render() {`}
            <br />
            {`return (`}
            <br />
            {`<div>`}
            <br />
            {`{this.props.children}`}
            <br />
            {`</div>`}
            <br />
            {`)}}`}
            <br />
          </p>
          <h4 className={`center`}> Dumb Component</h4>
          <p>
            {`const CustomComponent = (props) => {`}
            <br />
            {`return( `}
            <br />
            {`<div>`}
            <br />
            {`{props.children} `}
            <br />
            {`</div>`}
            <br />
            {`)}`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Life Cycle hooks</h4>
          <p>
            {`Life cycle hooks are built in functions available to us by the 
      react language to help with specific instances with class components. `}
            <br />
            {`Life cycle hooks are very important when creating react components 
      as they allow us to perform specific functions during the stages
      of the components mounting, unmounting and updating.`}
            <br />
            {`Life cycle hooks come in 3 stages`}
            <br />
            <br />
            {`Mounting`}
            <br />
            {`This is the process of when your application is first loaded on the page`}
            <br />
            <br />
            {`Updating`}
            <br />
            <br />
            {`This is the process of when you make an update on the application`}
            <br />
            <br />
            {`Unmounting`}
            <br />
            <br />
            {`This is the process of when your application has been exited.`}
            <br />
            {`It is important to note that life cycle hooks work in order and 
      do not need to be individually called as react knows what to do 
      with them. Below are the lists of lifecycle hooks and the best 
      practises for them.`}
            <br />
          </p>
          <h4 className={`center`}> Mounting</h4>
          <br />
          <h4 className={`center`}> constructor(){} </h4>
          <p>
            {`Normally where state is placed and is first life cycle hook`}
            <br />
          </p>
          <h4 className={`center`}> render(){} </h4>
          <p>
            {`Normally code which you want to be rendered 
      on the page. Note that when your applications 
      state updates the render lifecycle hook.`}
            <br />
          </p>
          <h4 className={`center`}> componentDidMount(){} </h4>
          <p>
            {`Once the smart container has been mounted by the 
      browser and fully rendered this life cycle hook 
      allows you run code and execute code`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Updating </h4>
          <br />
          <h4 className={`center`}> componentDidUpdate(){} </h4>
          <p>
            {`This is invoked once a component has fully updated.
    It allows you to execute code after that instance.`}
            <br />
          </p>
          <h4 className={`center`}> shouldComponentUpdate(){} </h4>
          <p>
            {`This lifecycle hook determines whether a component gets 
      re-rendered or not, it returns a boolean which if true 
      this lifecycle hook won’t work but if false the component 
      will only render once.`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Unmounting </h4>
          <br />
          <h4 className={`center`}> componentWillUnmount(){} </h4>
          <p>
            {`Invoked after the component has been unmounted.
      Is used to clean up active requests and code you
       need closed`}
            <br />
          </p>
          <h4 className={`center`}> componentDidCatch(){} </h4>
          <p className={`border-btm`}>
            {`Automatically catches any errors a props.children component 
      this class may have.`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> componentWillUnmount(){} </h4>
          <p>
            {`Invoked after the component has been unmounted.
      Is used to clean up active requests and code you
       need closed`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> React Routing </h4>
          <p>
            {`React routing is a concept which defines where 
      you are on a single webpage application.`}
            <br />
            {`The state of the route is defined within a method 
      of the class object.`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> How to use</h4>
          <h4 className={`center`}> Step 1 </h4>
          <p>
            {`Create a state with a route.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`this.state = {route: “home”}`}
            <br />
          </p>
          <h4 className={`center`}> Step 2 </h4>
          <p>
            {`Create a function which changes the route state depending on its input`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`onRouteChange = (routeInput) => {`}
            <br />
            {`this.setState({route: routeInput})}`}
            <br />
          </p>
          <h4 className={`center`}> Step 3 </h4>
          <p>
            {`Render your application based on the route state of the app. 
    This could be done with a switch statement to make it easier.`}
            <br />
          </p>
          <h4 className={`center`}> Step 4 </h4>
          <p>
            {`Pass the function that manipulates state as props to 
      components that will manipulate the this.state.route.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`render(){`}
            <br />
            <br />
            {`<div>`}
            <br />
            {`<Nav/>`}
            <br />
            {`<SignIn onRouteChange = {this.onRouteChange}/>`}
            <br />
            {`</div>`}
            <br />
          </p>
          <h4 className={`center`}> Step 5 </h4>
          <p>
            {`Within the component invoke the function.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`onClick = {()=>{this.props.onRouteChange(“signin”)}`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> React Router </h4>
          <p className={`border-btm`}>
            {`Within the component invoke the function.`}
            <br />
            <br />
            {`You can install a third party to help make 
      routing within your react app simple `}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Performance </h4>
          <p>
            {`Before fully deploying your reacting application make sure your 
      code is optimised in the most efficient way with these techniques.`}
            <br />
          </p>
          <h4 className={`center`}> Browser tools </h4>
          <p>
            {`react_perf`}
            <br />
            <br />
            {`Adding the query string react_perf to the end of the url of your 
      application running in a development server will allow you to 
      see deeper analysts of your react app in the browser development 
      tools within the performance section.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`React developer tools - With google chrome you can download the 
      react developer tools to give you better javascript console more 
      related to a react app structure.`}
            <br />
          </p>
          <h4 className={`center`}> Code Splitting </h4>
          <p>
            {`Code splitting allows you to split your javascript files so that 
      only the specific javascript files necessary for the webpage are 
      requested and parsed by the browser. This is done by rendering code
      on the browser when needed. This can be done with importing data for
      specific use cases ina file instead of importing data globally in a 
      file.`}
            <br />
          </p>
          <h4 className={`center`}> Code Splitting (React lazy) </h4>
          <p>
            {`Within the latest version of react you can use a new method called react.lazy 
      to lazy load components when requested.`}
            <br />
          </p>
          <h4 className={`center`}> Rendering </h4>
          <p>
            {`It is important that within your react application you only render 
      components which are necessary when the user takes actions on the 
      react application. This can be done with the life-cycle-hook 
      shouldComponentUpdate(){}`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Pure Components </h4>
          <p className={`border-btm`}>
            {`This is a technique of creating class components with automatic an 
      automatic shouldComponentUpdate(){} life cycle hook integrated.`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> React Modals </h4>
          <p className={`border-btm`}>
            {`Refer to the online resources at the top of the page.`}
            <br />
            <br />
          </p>
        </article>
      </section>
    </main>
  );
};

export default Reactt;
