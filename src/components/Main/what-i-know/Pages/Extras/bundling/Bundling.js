import React from "react";
import "./Bundling.css";

const Bundling = () => {
  return (
    <main className={`bundling-home`}>
      <h2>bundling</h2>

      <article className={"tools"}>
        <h3> Online Resources </h3>
        <ul>
          <li>
            - Webpack 5 installation:{" "}
            <a
              href="https://webpack.js.org/guides/getting-started/#basic-setup"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here{" "}
            </a>
          </li>
          <li>
            - Babel:{" "}
            <a
              href="https://hub.docker.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here{" "}
            </a>
          </li>
          <li>
            - ES lint:{" "}
            <a
              href="https://eslint.org/docs/user-guide/getting-started"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here{" "}
            </a>
          </li>
          <li>
            - ES lint rules:{" "}
            <a
              href="https://eslint.org/docs/rules/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here{" "}
            </a>
          </li>
          <li>
            - Parcel:{" "}
            <a
              href="https://parceljs.org/getting_started.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here{" "}
            </a>
          </li>
          <li>
            - Rollup:{" "}
            <a
              href="https://rollupjs.org/guide/en/#installation"
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

          <h4 className={`center`}> Bundling </h4>
          <h4 className={`center`}> Definition </h4>
          <p className={`border-btm`}>
            {`Bundling allows you to take your html, css and javascript 
        code code and minify them so they delete all white space and 
        simplify the code and then decrease the size in memory, the 
        following are the 3 main bundling tools for web development.`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Webpack 4</h4>
          <p>
            {`Please note the following example is for Webpack version 4.
        For a more updated example of webpack please refer to the 
        online resources`}
            <br />
            <br />
            {`Webpack bundles all your assets (all your files) into static files 
        that can be read by the web browser.`}
            <br />
            <br />
            {`Webapck can be broken down into 4 points:`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Entry </h4>
          <p>
            {`The entry in web pack defines the start point of where you 
        want web pack to begin analysing and bundling your code. 
        The entry is usually the root javascript file for your code which is 
        usually index.js file.`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Output</h4>
          <p>
            {`Once web pack has analysed, minified and bundled your code the 
        output defines where you would like to place the finished minified
         code. This is usually placed within a build directory that lives 
         within your app.`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Loaders</h4>
          <p>
            {`Loaders within web pack are tools which take your code 
        and convert them into simpler syntax.`}
            <br />
            <br />
            {`Example of this is babel and eslint.`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Plug ins</h4>
          <p>
            {`These are additional packages you can add to make webpack more 
        effficient. Eslint Rules and babel presets are example of plugins`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Babel</h4>
          <p className={`border-btm`}>
            {`Babel allows you to write any version of javascript (es6,es7 etc)
       within your codebase and then converts the syntax into a version of 
       javascript that all browsers can understand.`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> ES Lint</h4>
          <p className={`border-btm`}>
            {`ES lint is a package that checks over all your syntax and checks to see 
        if there are any errors, if there are any errors you can decide how to 
        display the error, you can also define what rues define an error.`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> ES Lint rules</h4>
          <p className={`border-btm`}>
            {`npm install -—save-dev eslint-config-airbnb`}
            <br />
            <br />
            {`npm install -—save-dev eslint-plugin-import`}
            <br />
            <br />
            {`npm install -—save-dev eslint-plugin-jsx-ally`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> How to use</h4>
          <h4 className={`center`}> Step 1</h4>
          <p>
            {`Create a directory called build within your app directory`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Step 2</h4>
          <p>
            {`Within your html file add a script tag with the src bundle.js`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`Within your html file add a script tag with the src bundle.js`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Step 3</h4>
          <p>
            {`Install webpack, webpack dev server and web pack cli into 
        your application.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`npm install —only =dev webpack webpack-dev-server webpack-cli`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Step 4</h4>
          <p>
            {`Create a npm start script with the following value, This make sure 
        the server is being run on npm start and also it is listen to the 
        file webpack.config.js in development mode.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`webpack-dev-server --config ./webpack.config.js --mode development`}
            <br />
            <br />
            {`Once that is done create a webpack.config.js file within your apps 
        main directory`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`(Terminal)`}
            <br />
            <br />
            {`touch webpack.config.js`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Step 5</h4>
          <p>
            {`Within your webpack.config file create a module.exports with the
       following properties and values.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`module.exports = {`}
            <br />
            {`entry: [`}
            <br />
            {`'./src/index.js],`}
            <br />
            {`output:{`}
            <br />
            {`path: __dirname + "/dist",`}
            <br />
            {`publicPath: "/",`}
            <br />
            {`filename: "bundle.js"},`}
            <br />
            {`devServer: {`}
            <br />
            {`contentBase: "./dist"`}
            <br />
            {`}};`}
            <br />
            <br />
            {`entry - the entry value is where you want the 
        entry of webpack to begin`}
            <br />
            <br />
            {`output - the output Is where you want the webpack 
        files to be minified.`}
            <br />
            <br />
            {`path - the path value is where you want the
       webpack minified files to be placed after they 
       are minified `}
            <br />
            <br />
            {`publicPath - this is where your main index.html files 
        lives with your <script src=“bundle.js”></script>`}
            <br />
            <br />
            {`filename - this is the name of your bundle.js file`}
            <br />
            <br />
            {`devServer: {contentBase : - this is where your bundled files 
        lives. Your development server will run based on the bundled 
        files within this folder.`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Step 6</h4>
          <p>
            {`Next use npm start to make sure your app is connected to the 
        webpack dev server and that weback is successfully implemented 
        within your app.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`npm start`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Step 7</h4>
          <p>
            {`Install babel, babel loader and babel preset environment.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`npm install babel-core babel-loader@7 babel-preset-env babel-preset-react babel-eslint`}
            <br />
            <br />
            {`babel-core - This is the main babel package `}
            <br />
            <br />
            {`babel-loader@7 - This package allows you to run your code 
        through babel as well as webpack `}
            <br />
            <br />
            {`babel-preset-env - this package allows babel to check what 
        browser you are running the app on and convert the syntax 
        of your code to be available in the oldest version of your 
        browser.`}
            <br />
            <br />
            {`babel-preset-react - This package allows you to write react 
        jsx and babel will convert it into javascript for the browser 
        to understand.`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Step 8</h4>
          <p>
            {`Now that you have installed babel it is now time to implement babel to be 
        a part of webpack. To do this is as follows.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`“babel” : {`}
            <br />
            {`“presets”: [`}
            <br />
            {`“env”, react ]}`}
            <br />
            <br />
            {`Now within your webpack.config.js add babel so when your files 
        are being run through webpack it is also being run  
        through babel via the babel-loader`}
            <br />
            <br />
            {`module: {`}
            <br />
            {`rules: [{`}
            <br />
            {`test: /\.(js|jsx)$/,`}
            <br />
            {`exclude: /node_modules/,`}
            <br />
            {`use: [‘babel-loader’]`}
            <br />
            {`}]}`}
            <br />
            <br />
            {`rules - This object defines the rules of the package 
        you are use with webpack in this case babel-loader`}
            <br />
            <br />
            {`test - This defines what languages you want converted 
        (copy and paste)`}
            <br />
            <br />
            {`exclude - this property allows you to define which folders you don’t want to go 
        through the package you are using, in this case we don’t want the node_modules 
        folder to go through the babel-loader `}
            <br />
            <br />
            {`publicPath - this is where your main index.html files 
        lives with your <script src=“bundle.js”></script>`}
            <br />
            <br />
            {`filename - this is the name of your bundle.js file`}
            <br />
            <br />
            {`devServer: {contentBase : - this is where your bundled files 
        lives. Your development server will run based on the bundled 
        files within this folder.`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Step 9</h4>
          <p>
            {`Add a resolve property within your webpack.config file, 
        this resolve property allows you to import javascript 
        files without having to use the extension .js, this is 
        optional but can be useful.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`resolve: {`}
            <br />
            {`extensions : [“.js”, “.jsx”]}`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Step 10</h4>
          <p>
            {`Download es lint with the ES lint loader and then add it to 
        your webpack.config.js file so es lint can be run with webpack.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`npm install eslint --save-dev`}
            <br />
            {`npm install eslint-loader --save-dev`}
            <br />
            {`npm install eslint-plugin-import --save-dev`}
            <br />
            {`npm install eslint-config-airbnb`}
            <br />
            <br />
            {`(Within webpack.config file)`}
            <br />
            <br />
            {`module: {`}
            <br />
            {`rules: [{`}
            <br />
            {`test: /\.(js|jsx)$/,`}
            <br />
            {`exclude: /node_modules/,`}
            <br />
            {`use: [‘eslint-loader’]`}
            <br />
            {`}]}`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Step 11</h4>
          <p>
            {`Now that you have installed and implemented eslint into 
        your codebase the next step is to give eslint instructions. 
        To do this create a .eslintrc file and create a json string.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`{`}
            <br />
            {`"rules":{}`}
            <br />
            {`}`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Step 12</h4>
          <p>
            {`Now that you have installed and implemented eslint into 
        your codebase the next step is to give eslint instructions. 
        To do this create a .eslintrc file and create a json string.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`(Within your .eslintrc file)`}
            <br />
            <br />
            {`{`}
            <br />
            {`“parser”: “babel-eslint”,`}
            <br />
            {`“rules” : {}`}
            <br />
            {`}`}
            <br />
          </p>
          <h4 className={`center`}> Step 13</h4>
          <p>
            {`To add external rules to eslint is as follows`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`{`}
            <br />
            {`“parser”: “babel-eslint”,`}
            <br />
            {`“rules” : {},`}
            <br />
            {`“extends”: [“airbnb-base”]`}
            <br />
            {`}`}
            <br />
          </p>
          <h4 className={`center`}> Step 14</h4>
          <p className={`border-btm`}>
            {`Within your package.json file add a build script with the value webpack`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`"build" : "webpack"`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Parcel.js</h4>
          <h4 className={`center`}> How to use</h4>
          <h4 className={`center`}> Step 1</h4>
          <p>
            {`Within your project npm install parcel-bundler babel-preset-env`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`npm install —save-dev parcel-bundler babel-preset-env`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Step 2</h4>
          <p>
            {`Either create .babelrc file or create a json string within your 
        package.json file (like in webpack instructions above) which 
        contain all your babel instructions.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`{`}
            <br />
            {`‘presets’ : [‘env’]`}
            <br />
            {`}`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Step 3</h4>
          <p className={`border-btm`}>
            {`Set up your npm start script to run parcel on the file 
        index.html(Your root html file)`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`(Within package.json file)`}
            <br />
            <br />
            {`“start” : ‘parcel  -p8080 index.html --open”,`}
            <br />
            {`“build” : “parcel build index.html”`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Rollup </h4>
          <p className={`border-btm`}>
            {`Please refer to the online resources for more information`}
            <br />
            <br />
          </p>
        </article>
      </section>
    </main>
  );
};

export default Bundling;
