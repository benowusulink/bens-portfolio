import React from "react";
import "./Redux.css";

const Redux = () => {
  return (
    <main className={`redux-home`}>
      <h2>redux</h2>

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
            - Redux tutorial:{" "}
            <a href="https://redux.js.org/introduction/getting-started">
              Click here{" "}
            </a>
          </li>
          <li>
            - Actions:{" "}
            <a
              href="https://redux.js.org/basics/actions#:~:text=Actions%20are%20payloads%20of%20information,dispatch()%20."
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here{" "}
            </a>
          </li>
          <li>
            - Reducers:{" "}
            <a
              href="https://redux.js.org/basics/reducers"
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

          <h4 className={`center`}> Redux </h4>
          <h4 className={`center`}> Definition </h4>
          <p className={`border-btm`}>
            {" "}
            {`Redux is a form of state management, within react app there’s an object 
        called state which describes the state of your app, sometimes the state can 
        ecome overwhelming on your app so redux is used to simplify this process.`}
            <br />
            <br />
            {`With redux smart components (class components) within react won’t require its 
        own state but instead will use props. `}
            <br />
            <br />
            {`Instead all the state within the app is stored in something called a store, a store 
        has all the state of the app in one massive object.`}
            <br />
            <br />
            {`Within the store you pass down the state into smart components within 
        your app via props.`}
            <br />
            <br />
            {`Any updates that happen to the class components updates the state 
        stored within the store.`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Actions </h4>
          <p className={`border-btm`}>
            {" "}
            {`First when using react-redux you will have to create some actions.`}
            <br />
            <br />
            {`Actions describe what happened within the app, for example if a user types within a search field that is an action.`}
            <br />
            <br />
            {`It is code that causes an update to the state when something happens`}
            <br />
            <br />
            {`Refer to the online resources above for more information`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`Import KEYBOARD_PRESS from ‘./constants’;`}
            <br />
            {`const searchKeyPress = (text) => {`}
            <br />
            {`return(`}
            <br />
            {`{type: KEYBOARD_PRESS,`}
            <br />
            {` payload: text})}`}
            <br />
            {`Refer to the online resources above for more information`}
          </p>

          <h4 className={`center`}> Actions </h4>
          <p className={`border-btm`}>
            {" "}
            {`First when using react-redux you will have to create some actions.`}
            <br />
            <br />
            {`Actions describe what happened within the app, for example if a user types within a search field that is an action.`}
            <br />
            <br />
            {`It is code that causes an update to the state when something happens`}
            <br />
            <br />
            {`Refer to the online resources above for more information`}
            <br />
          </p>

          <h4 className={`center`}> Constants </h4>
          <p className={`border-btm`}>
            {" "}
            {`Within the object that an action returns the type property is referenced 
        by a variable. This variable is a string which describes the action that was taken.`}
            <br />
            <br />
            {`This variable also references the action in your reducer. You do not import the action function 
        but you import the variable with the action type into your reducer and this references the 
        action.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`Within reducer.js file`}
            <br />
            <br />
            {`Import KEYBOARD_PRESS from ‘./constants’`}
            <br />
            <br />
            {`This will reference the action function searchKeyPress in the reducer file instead of 
        imposing the whole function.`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Reducer </h4>
          <p>
            {" "}
            {`After an action has happened it is the job of the reducer to apply 
        this change to the overall state of your app.`}
            <br />
            <br />
            {`Reducers create the initial state of your app.`}
            <br />
            <br />
            {`Reducers have functions that apply the actions to the state of the app, this is done by 
        accepting the initial state of your app as a parameter, the action as a second parameter 
        applying the changes to the state of the app and returning a created new overall state of 
        the app which is the new initial state of the app.`}
            <br />
            <br />
            {`Remember actions are referenced from the constants.js variables and not 
        from the actions.js file. `}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`Import KEYBOARD_PRESS from ‘./constants’;`}
            <br />
            <br />
            {`const initialState = {searchField: “”};`}
            <br />
            <br />
            {`const useSearchField = (state = initial state, action = {}){`}
            <br />
            <br />
            {`switch (action.type) {`}
            <br />
            {`case KEYBOARD_PRESS :`}
            <br />
            {`return(`}
            <br />
            {`Object.assign({}, state, {searchField : action.payload})`}
            <br />
            {`default:`}
            <br />
            {`return (`}
            <br />
            {`state`}
            <br />
            {`)}}`}
            <br />
            <br />
            {`const initialState - This is the one and only state of
       your app, all your app state is held within this state.`}
            <br />
            <br />
            {`const initialState = {searchField: “”};`}
            <br />
            <br />
            {`const useSearchField = (state = initialState, action ={}) - a function is created that first takes the initial state 
      of our app as a parameter and and the action which is a returned object from the actions function, it is referenced in 
      this file as a variable from the constants.js file (KEYBOARD_PRESS) and the object has the type and the payload which 
      is passed into the function.`}
            <br />
            <br />
            {`switch (action.type){case KEYBOARD_PRESS : return(Object.assign({}, state, {searchField : action.payload}) default: 
      return (state) - The switch statement takes in the action.type and depending on the result of the action type creates 
      a new state object which is returned and now used as the new initial state of the app. The default statement returns 
      the initial state if there are no changes.`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Combine reducers </h4>
          <p className={`border-btm`}>
            {" "}
            {`To combine reducers into one whole reducer which will be entered into the store is as follows.`}
            <br />
            <br />
            {`Within your index,js file`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`Import {createStore, combineReducers} from ‘redux’;`}
            <br />
            <br />
            {`Import {reducer1, reducer2} from ‘./reducers.js’;`}
            <br />
            <br />
            {`const rootReducer = combineReducers({reducer1, reducer2})`}
            <br />
            <br />
            {`const store = createStore(rootReducer)`}
            <br />
            <br />
            {`Now your store can be passed as a property of of the <Provider>`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> How to use </h4>
          <h4 className={`center`}> Step 1 </h4>
          <p>
            {" "}
            {`First install redux and react-dux into your application via the terminal. Make sure its downloaded by 
        checking package.json`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`npm install redux`}
            <br />
            <br />
            {`npm install react-redux`}
            <br />
          </p>
          <h4 className={`center`}> Step 2 </h4>
          <p>
            {" "}
            {`Then create 3 javascript files`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`actions.js`}
            <br />
            {`constants.js`}
            <br />
            {`reducers.js`}
            <br />
          </p>
          <h4 className={`center`}> Step 3 </h4>
          <p>
            {" "}
            {`Create an action and a reducer`}
            <br />
          </p>
          <h4 className={`center`}> Step 4 </h4>
          <p>
            {" "}
            {`Within your index.js file of your app import react-redux with Provider and 
        connect packages and redux with createStore package.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`import {Provider, connect} from ‘react-redux’;`}
            <br />
            {`import {createStore} from ‘redux’;`}
            <br />
          </p>
          <h4 className={`center`}> Step 5 </h4>
          <p>
            {" "}
            {`Import your main reducer file and then create a store to put it in, 
        within this store will hold all the state of your app. `}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`import {mainReducer} from ‘./reducer.js’;`}
            <br />
            <br />
            {`const store = createStore(mainReducer)`}
            <br />
          </p>
          <h4 className={`center`}> Step 6 </h4>
          <p>
            {" "}
            {`The Provider package imported from react-redux takes care of 
        passing the state to all components instead of you manually having 
        to go into each smart component and do it. You wrap the Provider 
        package which is a component around your app and create a property 
        called store which has the variable store.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`ReactDOM.render(<div>`}
            <br />
            {`<Provider store ={store}>`}
            <br />
            {`<App />`}
            <br />
            {`</Provider>`}
            <br />
            {`</div>,document.getElementById('root'))`}
            <br />
          </p>
          <h4 className={`center`}> Step 7 </h4>
          <p>
            {" "}
            {`Now you have to connect which smart components you want to be aware of the 
        state that is stored within the store. The components that will have state will 
        be able to access it and manipulate it. This is done with the connect package 
        from react-redux.`}
            <br />
            <br />
            {`First you import all the relevant actions the smart component uses into your 
        relevant smart component file.`}
            <br />
            <br />
            {`Import the connect package from react-redux, this package works with the Provider package
       within your index.js to access and manipulate state `}
            <br />
            <br />
            {`Export connect(mapStateToProps, mapDispatchToProps)`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`import {connect} from ‘react-redux’;`}
            <br />
            <br />
            {`import {action} from ‘action.js’;`}
            <br />
            <br />
            {`export default connect(mapStateToProps, mapDispatchToProps)(App)`}
            <br />
          </p>
          <h4 className={`center`}> Step 8 </h4>
          <p>
            {" "}
            {`Now you have to connect which smart components you want to be aware of the 
        state that is stored within the store. The components that will have state will 
        be able to access it and manipulate it. This is done with the connect package 
        from react-redux.`}
            <br />
            <br />
            {`This is done by a function called mapStateToProps() which is passed into the connect() 
        function in the export default, it is one of the parameters of the export default.`}
            <br />
            <br />
            {`The state can now be accessed within your smart app via props.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`const mapStateToProps = (state) => {`}
            <br />
            <br />
            {`return(`}
            <br />
            {`{stateYouAreInterestedIn : state.reducerName.stateYouAreInterestedIn}`}
            <br />
            {`)}`}
            <br />
            <br />
            {`(state) - The function receives a parameter which is the initial state of the app which lives in the reducer.js file.
       It is passed into this file by the Provider and connect link. `}
            <br />
            <br />
            {`The function returns an object, this object should return the parts of the state your smart 
        component is interested in accessing and manipulating.`}
            <br />
            <br />
            {`stateYouAreInterestedIn : - the property for the object should be the part of the state you are interested in, the state lives in your reducer.js file. 
        This is the name that will be passed as props within your smart component.`}
            <br />
            <br />
            {`state.reducerName.stateYouAreInterestedIn - The value of the objects should first have access to the state 
        (which is passed into this function as a parameter).`}
            <br />
            {`It should then have access to the name of the reducer that manipulates the state you are interested in.`}
            <br />
            {`It should then have access to the state that your are interested in and the state being manipulated by 
        the reducer in the reducer.js file.`}
            <br />
          </p>
          <h4 className={`center`}> Step 9 </h4>
          <p className={`border-btm`}>
            {" "}
            {`Once the state you are interested in manipulating Is implemented within your app it is now time to 
        implement your actions that will manipulate your state in your reducer.`}
            <br />
            <br />
            {`Within our code base this is done by creating a function called mapDispatchToProps()`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`const mapDispatchToProps = (dispatch) => {`}
            <br />
            <br />
            {`return(`}
            <br />
            {`{`}
            <br />
            {`actionNameWithinYourCodeBase :`}
            <br />
            {`(whateverParametersTheActionNeeds) =>{`}
            <br />
            {`{ dispatch(actionImportedFromActionjsFile(whateverParametersTheActionNeeds))}}`}
            <br />
            <br />
            {`(dispatch) - This parameter within the function allows you to use dispatch which allows you to trigger 
        the action living within your actions.js file within your codebase.`}
            <br />
            <br />
            {`The function returns an object.`}
            <br />
            <br />
            {`actionNameWithinYourCodeBase : - This property will represent the action within your smart app codebase. 
        This will also be the name of the prop which can be used within your codebase.`}
            <br />
            <br />
            {`(whateverParametersTheActionNeeds) => {- The value of the property is a function. The function parameters 
        are whatever values the action needs within the actions.js file to send to the reducer which lives in the 
        reducer.js file.`}
            <br />
            <br />
            {`dispatch(actionImportedFromActionjsFile(whateverParametersTheActionNeeds)) - The dispatch function which is the passed 
        from the original mapDispatchToProps allows you to activate the action in your actions.js file that is needed within 
        your codebase.`}
            <br />
            {`It does this by accepting the imported action (the original action imported from the action.js file) as an argument which is 
        actionImportedFromActionjsFile. You can the pass the parameters the action needs as an argument of the action.`}
            <br />
          </p>

          <h4 className={`center`}> Middleware </h4>
          <h4 className={`center`}> Redux-Logger </h4>
          <p>
            {" "}
            {`This middleware package automatically console.logs actions for you.`}
            <br />
          </p>
          <h4 className={`center`}> Redux-Thunk </h4>
          <p>
            {" "}
            {`This middleware allows your state to be asynchronous. It allows your 
        actions within your action.js file to return functions instead of objects.`}
            <br />
          </p>
        </article>
      </section>
    </main>
  );
};

export default Redux;
