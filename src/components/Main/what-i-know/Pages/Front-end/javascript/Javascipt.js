import React from "react";
import "./Javascript.css";

const Javascript = () => {
  return (
    <main className={`javascript-home`}>
      <h2>javascript</h2>

      <article className={"tools"}>
        <h3> Online Resources </h3>
        <ul>
          <li>
            - Javascript tutorial:{" "}
            <a
              href="https://www.w3schools.com/js/default.asp"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here{" "}
            </a>
          </li>
          <li>
            - Javascript Runtime Environment:{" "}
            <a
              href="https://medium.com/@olinations/the-javascript-runtime-environment-d58fa2e60dd0#:~:text=Each%20browser%20has%20a%20JS%20Runtime%20Environment.&text=AJAX%2C%20the%20DOM%20tree%2C%20and,Engine%20that%20parses%20the%20code."
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here{" "}
            </a>
          </li>
          <li>
            - Javascript Keywords:{" "}
            <a
              href="https://www.w3schools.com/js/js_reserved.asp"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here{" "}
            </a>
          </li>
          <li>
            - Javascript Functions:{" "}
            <a
              href="https://www.w3schools.com/jsref/jsref_obj_global.asp"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here{" "}
            </a>
          </li>
          <li>
            - Javascript Datatypes:{" "}
            <a
              href="https://www.w3schools.com/js/js_datatypes.asp"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here{" "}
            </a>
          </li>
          <li>
            - Javascript Operators:{" "}
            <a
              href="https://www.w3schools.com/js/js_operators.asp"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here{" "}
            </a>
          </li>
          <li>
            - Javascript Conditionals:{" "}
            <a
              href="https://www.w3schools.com/js/js_if_else.asp"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here{" "}
            </a>
          </li>
          <li>
            - JSON:{" "}
            <a
              href="https://www.w3schools.com/js/js_json_intro.asp"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here{" "}
            </a>
          </li>
          <li>
            - AJAX:{" "}
            <a
              href="https://www.w3schools.com/js/js_ajax_intro.asp"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here{" "}
            </a>
          </li>
          <li>
            - Babel:{" "}
            <a
              href="https://babeljs.io/"
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

          <h4 className={`center`}> General Javascript info </h4>
          <h4 className={`center`}> Definition </h4>
          <p>
            {" "}
            Javascript is an object-orientated language used to perform
            interactive actions on web applications{" "}
          </p>
          <h4 className={`center`}> Info about Javascript </h4>
          <p>
            Lightweight - Javascript is a lightweight (doesn’t take up much
            memory) cross platform, object orientated language.{" "}
          </p>
          <p>
            Single threaded - Javascript is a single threaded language that is
            non blocking, this means it has only one call stack(multi threaded
            languages have more than one call stack)
          </p>
          <p>
            Javascript is a synchronous language but due to the runtime
            environment can become asynchronous due to the javascript runtime
            environment.{" "}
          </p>
          <p>
            Synchronous programming - this means that code gets executed one at
            a time
          </p>
          <p>
            Frameworks - Javascript is adapted by many frameworks to make it
            more efficient to use
            <br />
            <br />
            {`Example:`}
            <br />
            React, Angular, Vue, Jquery etc{" "}
          </p>
          <p>
            Debugger - This is a special reserved javascript keyword which when
            put into your javascript code forces whatever javascript client to
            stop parsing your code. With this technique you can go through your
            code step by step after the debugger to help with debugging your
            code and finding solutions to javascript problems.
            <br />
            <br />
            {`Example:`}
            <br />
            just use the syntax ‘debugger’ anywhere within your code.
          </p>
          <p className={`border-btm`}>
            Comments - To write comments within javascript is as follows: // or
            /* */
            <br />
            <br />
          </p>

          <h4 className={`center`}> Javascript Runtime Environment</h4>
          <p>
            The javascript runtime environment consists of many components and
            allows javascript to become ascynchronous and more efficient{" "}
          </p>
          <h4 className={`center`}> Javascript Engine</h4>
          <p>
            A javascript engine is what all browsers use to read and parse
            javascript(v8 engine = google chrome). It consists of two parts:{" "}
          </p>
          <p>- Memory heap- This is where the memory allocation happens. </p>
          <p>- Call stack - This where your scripts are read and executed. </p>
          <h4 className={`center`}> Web APIs</h4>
          <p>
            Web apis are additional functions available to us via the browser to
            allow us to perform asynchronous tasks. The task is given to the web
            api from the javascript engine and its conditions are processed
            within the web api.
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`setTimeout(()=>{`}
            <br />
            {`console.log(“hi”)},3000)`}
            <br />
            <br />
            {`This is a method provided by the browser which will print to the console “hi” but only after 3 seconds`}
            <br />
            <br />
            {`Example 2:`}
            <br />
            <br />
            {`window.fetch() is a WEB API`}
          </p>
          <h4 className={`center`}> Callback Queue</h4>
          <p>
            Call back queues place the full processed asynchronous task (from
            web api usually) into its list. Once this is done it interacts with
            the event loop to see if there is any available space on the call
            stack(javascript engine). Since events in the call back queue are
            always waiting there are made methods in javascript that are call
            back functions.
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`.addEventListener() is a call back function because it waits for a interaction before it 
       is executed in the call stack`}
          </p>
          <h4 className={`center`}> Event Loop</h4>
          <p className={`border-btm`}>
            The event loop is a component in the javascript runtime environment
            which consistently checks the call stack to see if there’s any
            available space on the call stack. It is always checking the call
            stack to see if it is free to perform tasks.
            <br />
            <br />
          </p>

          <h4 className={`center`}> How to use</h4>
          <h4 className={`center`}> Script Tag</h4>
          <p>
            {`STEP 1`}
            <br />
            <br />
            {`Within your HTML file create a <script></script> tag and make the src attribute reference the path of the javascript file. 
        Place the <script></script> tag at the bottom of the <body></body> tag within your HTML file.`}
            <br />
            {`Example:`}
            <br />
            <br />
            {`<body>`}
            <br />
            <br />
            {`<script src = “./script.js”></script>`}
            <br />
            {`</body>`}
            <br />
            <br />
            {`STEP 2`}
            <br />
            <br />
            {`Create a javascript file `}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`touch script.js`}
          </p>
          <h4 className={`center`}> Within Script Tag</h4>
          <p className={`border-btm`}>
            {`STEP 1`}
            <br />
            <br />
            {`You can write javascript directly within a <script></script> tag within HTML`}
            <br />
            {`Example:`}
            <br />
            <br />
            {`<script>`}
            <br />
            {`const ben = “ben”;`}
            <br />
            {`</script>`}
            <br />
            <br />
          </p>

          <h4 className={`center`}>
            {" "}
            Javascript Keywords & Built in functions
          </h4>
          <h4 className={`center`}> Javascript Keywords</h4>
          <p>
            These are reserved keywords in the Javascript language.
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`const`}
          </p>
          <h4 className={`center`}> Javascript Built in functions</h4>
          <p className={`border-btm`}>
            There are already made built in functions already available to us by
            javascript{" "}
          </p>

          <h4 className={`center`}> Javascript Keywords</h4>
          <p>Javascript has 7 data types.</p>
          <h4 className={`center`}> Numbers</h4>
          <p>
            Whole numbers.
            <br />
            <br />
            {`const number = 10`}
          </p>
          <h4 className={`center`}> Float</h4>
          <p>
            Decimal numbers.
            <br />
            <br />
            {`const float = 1.5`}
          </p>
          <h4 className={`center`}> Numbers</h4>
          <p>
            Whole numbers.
            <br />
            <br />
            {`const number = 10`}
          </p>
          <h4 className={`center`}> String</h4>
          <p>
            Text.
            <br />
            <br />
            {`const string = "text";`}
          </p>
          <h4 className={`center`}> Undefined</h4>
          <p>When a javascript variable is unassigned.</p>
          <h4 className={`center`}> Objects</h4>
          <p>
            These organise your data into a property: value format.
            <br />
            <br />
            {`const object = {`}
            <br />
            {`key: “value”,`}
            <br />
            {`key2: 2`}
            <br />
            {`}`}
          </p>
          <h4 className={`center`}> Booleans</h4>
          <p>
            True or false value.
            <br />
            <br />
            {`const boolean = true;`}
          </p>
          <h4 className={`center`}> Symbol</h4>
          <p>
            This is a unique way to lock in a value.
            <br />
            <br />
            {`let sym = symbol(“jack”)`}
          </p>
          <h4 className={`center`}> Null</h4>
          <p className={"border-btm"}>
            This means the value of a variable is nothing .
            <br />
            <br />
            {`const nothing = null;`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Javascript Variables</h4>
          <p>
            Variables are used to hold (cache) values (javascript types) which
            can be used for later usage.
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`var example = "example"`}
          </p>
          <h4 className={`center`}> Javascript Variables types</h4>
          <h4 className={`center`}> Var </h4>
          <p>
            The traditional way to create variables in javascript, has different
            scope properties to let and const in which within a function the
            variable still has access to the window scope. Can be reassigned a
            new value.
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`var example = "example"`}
          </p>
          <h4 className={`center`}> Let </h4>
          <p>
            {`Modern version of var in which values within the let can be reassigned. Be careful with let because once you use 
      let within the { part of a function it creates a new scope within the function compared to var which still shares 
        the window scope [ES6]`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`let example = "example"`}
          </p>
          <h4 className={`center`}> Const </h4>
          <p>
            {`Similar to let but values within a const cannot be reassigned a new value. 
        You can however change the properties of a const object`}
            <br />
            <br />
            {`Example 1:`}
            <br />
            <br />
            {`const example = "example"`}
            <br />
            <br />
            {`Example 2:`}
            <br />
            <br />
            {`const obj = {`}
            <br />
            {`player: “name”,`}
            <br />
            {`experience: 100`}
            <br />
            {`}`}
            <br />
            <br />
            {`obj.experience = 200`}
            <br />
            <br />
            {`The experience number within the object of a const variable will be changed to 200 
        however you can’t reassign the const object to a new value.`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Extra Info </h4>
          <p>
            1. Reference type
            <br />
            <br />
            Example: let opt 1 = 15; let opt2 = opt1; let opt3 = 15;
            <br />
            This means that let opt1 and opt 2 are the same but even though the
            value of opt 3 is the same it is not the same reference type.
          </p>
          <p>
            2. Scope
            <br />
            <br />
            It is important to understand what variable has access to what
            scope, normally anything within {} is within its own scope(not
            always the case).
          </p>
          <p className={`border-btm`}>
            3. Camel Case
            <br />
            <br />
            The traditional way to name variables in javascript is camel casing.
            <br />
            <br />
            EXAMPLE:
            <br />
            var firstName = “ben”
            <br />
            <br />
          </p>

          <h4 className={`center`}> Javascript Operators </h4>
          <p>
            Javascript operators allow you to manipulate values within
            javascript
          </p>
          <p className={`border-btm`}>
            {" "}
            = - Allows you to assign a value to a variable
            <br />
            <br />
            {`Example:`}
            <br />
            {`const num = 8;`}
          </p>
          <p className={`border-btm`}>
            {" "}
            !== - Doesn’t equal.
            <br />
            <br />
            {`Example:`}
            <br />
            {`3 !== 3 `}
            <br />
            <br />
            {`Will result in the boolean FALSE because 3 does equal 3.`}
          </p>
          <p className={`border-btm`}>
            {" "}
            === - Does equal.
            <br />
            <br />
            {`Example:`}
            <br />
            {`2 === 2`}
            <br />
            <br />
            {`Will result in the boolean TRUE because 2 DOES equal 2 .`}
          </p>
          <p className={`border-btm`}>
            {" "}
            {`> - Greather than.`}
            <br />
            <br />
            {`Example:`}
            <br />
            {`2 > 1`}
            <br />
            <br />
            {`Will result in the boolean TRUE because 2 is greater than 1.`}
          </p>
          <p className={`border-btm`}>
            {" "}
            {`< - Less than.`}
            <br />
            <br />
            {`Example:`}
            <br />
            {`2 < 1`}
            <br />
            <br />
            {`Will result in the boolean TRUE because 2 is greater than 1`}
          </p>
          <p className={`border-btm`}>
            {" "}
            {`>= - Greater than or equals to`}
            <br />
            <br />
            {`Example:`}
            <br />
            {`2 >= 1`}
            <br />
            <br />
            {`Will result in the boolean TRUE because 2 is greater than or equal to 1.`}
          </p>
          <p className={`border-btm`}>
            {" "}
            {`<= Less than or equals to`}
            <br />
            <br />
            {`Example:`}
            <br />
            {`2 <= 1`}
            <br />
            <br />
            {`Will result in the boolean FALSE because 2 isnt smaller than or equal to 1.`}
          </p>
          <p className={`border-btm`}>
            {" "}
            {`- - this allows you to subtract values`}
            <br />
          </p>
          <p className={`border-btm`}>
            {" "}
            {`+ -  allows you to add values`}
            <br />
          </p>
          <p className={`border-btm`}>
            {" "}
            {`* - allows you to multiply values`}
            <br />
          </p>
          <p className={`border-btm`}>
            {" "}
            {`/ - allows you to divide values`}
            <br />
          </p>
          <p className={`border-btm`}>
            {" "}
            {`**2,**3 [ES7] - allows you to square or cube a number`}
            <br />
          </p>
          <p className={`border-btm`}>
            {" "}
            {`% - gives you the remainder of a value`}
            <br />
          </p>
          <p className={`border-btm`}>
            {" "}
            {`|| - this allows you to add an OR extender in your condition`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`const name = "ben";`}
            <br />
            <br />
            {`if(name === "ben"|| name === "sos"){`}
            <br />
            {`alert("hey ben or sos")}`}
            <br />
            {`else{`}
            <br />
            {`alert("wrong name")}`}
            <br />
            <br />
            {`If variable name is “ben” OR “sos” then an alert will come with “hey ben or sos” if not 
        then an alert of “wrong name” will show.`}
          </p>
          <p className={`border-btm`}>
            {" "}
            {`&& - this allow add an AND extender to your condition`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`var name = "ben"; var name2 = "owusu";`}
            <br />
            <br />
            {`if(name === "ben" && name2 === "owusu"){`}
            <br />
            {`alert("hi")}`}
            <br />
            {`else{`}
            <br />
            {`alert("wrong name")}`}
            <br />
            <br />
            {`This means that if the two variables (name and name2) are both equal to the strings
        “ben” & “owusu” then an alert of “hi”.
        If the two variables do not both equal the two string values 
        then an alert of "wrong name will appear`}
          </p>
          <p className={`border-btm`}>
            {" "}
            {`! - This allows you to reverse the action of what you do`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`var name = "ben"; var name2 = "owusu";`}
            <br />
            <br />
            {`if(!(name === "ben" && name2 === "owusu")){`}
            <br />
            {`alert("hi")}`}
            <br />
            {`else{`}
            <br />
            {`alert("wrong name")}`}
            <br />
            <br />
            {`This means even though the two variables are ben and owusu it will not alert
       "hi" because it has been told to do the opposite.`}
          </p>
          <p className={`border-btm`}>
            {" "}
            {`Typeof defines the value type of a variable`}
            <br />
            {`Example:`}
            <br />
            <br />
            {`var number = 32;`}
            <br />
            {`console.log(typeof number);`}
            <br />
            {`The result of the console.log will be number because the variable 
        number is a number type.`}
            <br />
          </p>
          <h4 className={`center`}> Extra Info (Javascript Operators) </h4>
          <p className={`border-btm`}>
            1. When using more than 1 math operator like maths they will be
            executed in terms of specificity.
            <br />
            <br />
          </p>

          <h4 className={`center`}> Javascript Conditionals </h4>
          <p>
            Javascript Conditionals are conditions you tell javascript to
            perform when certain actions are performed, it reads like English.
          </p>
          <h4 className={`center`}> IF statement </h4>
          <p>
            {" "}
            {`The If conditional statement executes code if the condition is true`}
            <br />
            {`Example:`}
            <br />
            <br />
            {`var name = “ben”;`}
            <br />
            {`If (name === “ben”){`}
            <br />
            {`alert(“hi ben”);};`}
            <br />
            <br />
            {`Because the variable name is “ben” which equals to TRUE there will be an alert “hi ben”`}
          </p>
          <h4 className={`center`}> ELSE statement </h4>
          <p>
            {" "}
            {`The else conditional statement executes code if the condition is false`}
            <br />
            {`Example:`}
            <br />
            <br />
            {`var name = “ben”;`}
            <br />
            {`If (name === “ben”){`}
            <br />
            {`alert(“hi ben”)};`}
            <br />
            {`else{`}
            <br />
            {`alert("wrong name")}`}
            <br />
            {`If the name doesn’t equal name "ben" then a alert with a message “who is this” should appear
      as the condition is FALSE`}
          </p>
          <h4 className={`center`}> ELSE IF statement </h4>
          <p>
            {" "}
            {`Allows you to add an additional if statement. So this code will execute if this also true`}
            <br />
            {`Example:`}
            <br />
            <br />
            {`var name = “sally”;`}
            <br />
            {`If (name === “ben”){`}
            <br />
            {`alert(“hi ben”)};`}
            <br />
            {`else if (name === “sally”){`}
            <br />
            {`alert("hi sally")}`}
            <br />
            {`Because the variable name is a string “sally” the else if conditional statement code 
        will execute as the condition is TRUE, which is an alert “hi sally”`}
          </p>
          <h4 className={`center`}> Ternary operator </h4>
          <p>
            {" "}
            {`This is a shortcut way to use an if and else statement`}
            <br />
            {`Example:`}
            <br />
            <br />
            {`var example = true;`}
            <br />
            {`example ? alert(“hi ben”) : alert(“who is this”);`}
            <br />
            <br />
            {`Because variable example is true the string “hi ben” will be displayed, if the blue variable was false it will display “who is this”`}
          </p>
          <h4 className={`center`}> SWITCH statement </h4>
          <p className={`border-btm`}>
            {" "}
            {`Switch statements are used for multiple outcomes.`}
            <br />
            {`Example:`}
            <br />
            <br />
            {`var name = “ben”;`}
            <br />
            <br />
            {`switch (name){`}
            <br />
            {`case "bob":`}
            <br />
            {`alert("hi bob");`}
            <br />
            {`break`}
            <br />
            {`case "ben":`}
            <br />
            {`alert("hi ben");`}
            <br />
            {`break`}
            <br />
            {`default:`}
            <br />
            {`alert("hi");}`}
            <br />
            {`Because the variable name is a string “ben" an alert of "hi ben" will execute.
      The switch statement is used to define multiple outcomes`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Javascript Data Structures </h4>
          <h4 className={`center`}> Arrays </h4>
          <p>
            {`These organise your data in a list format, arrays are used with [], they can hold values of 
        different javascript types even other arrays.`}
            <br />
            {`Example:`}
            <br />
            <br />
            {`var list = [true, "hi", 2,];`}
            <br />
            {`console.log(list[1])`}
            <br />
            <br />
            {`this will console.log the string “hi” from the list.`}
            <br />
          </p>
          <h4 className={`center`}> Array Methods </h4>
          <p>
            {`Arrays come with a list of methods which you can use to manipulate the data within them.`}
            <br />
            <br />
            {`.length() - this will show us the length of list.`}
            <br />
            <br />
            {`.push() - allows you to insert into an array.`}
            <br />
            <br />
            {`.shift() - removes first item in array`}
            <br />
            <br />
            {`.pop() - removes last item in array.`}
            <br />
            <br />
            {`.concat() - allows you to add a new array to an array.`}
            <br />
            <br />
            {`.includes() - Allows you to check if the array included a value `}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Advanced Arrays </h4>
          <h4 className={`center`}> Looping Arrays </h4>
          <h4 className={`center`}> Map </h4>
          <p>
            {`Map this method of looping is a function.`}
            <br />
            <br />
            {`The map functions first parameter is the data it receives.
      The map function loops through all the data within an array.
    It then stores the looped data into a new variable.
    The old data is not manipulated.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`const array = [1, 2, 3, 4]`}
            <br />
            <br />
            {`const mapArray = array.map((num) => {`}
            <br />
            {`return(num * 2)});`}
            <br />
            <br />
            {`console.log (mapArray);`}
            <br />
            <br />
            {`This will loop through the array multiply each number in the array by 2, then exit and store the new values in the variable mapArray it will 
        then console.log the new array which should be [2,4,6,8]`}
            <br />
            <br />
            {`EXTRA INFO:`}
            <br />
            <br />
            {`1. The map function also takes multiple parameters besides the array it accepts. 
        An example of this is the index`}
            <br />
          </p>
          <h4 className={`center`}> Filter </h4>
          <p>
            {`Filter is identically structured like a map function but the difference is 
        within the function you have to set a condition.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`const array = [1, 2, 3, 4]`}
            <br />
            <br />
            {`const filterArray = array.filter(num => {return num > 2});`}
            <br />
            {`console.log(filterArray)`}
            <br />
            <br />
            {`This will loop through the array and only store the values which 
        the condition is TRUE in a new variable called filterArray`}
            <br />
          </p>
          <h4 className={`center`}> Reduce </h4>
          <p>
            {`Reduce is the more powerful of the two previous looping methods (map, filter) like map and filter 
        it is a function which accepts the data its looping through as a parameter, has to return something 
        and automatically stores the looped values in a variable but it also accepts a second parameter which 
        is the accumulator which states the default starting value.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`const reduceArray = array.reduce((acc, num) => {`}
            <br />
            {`return(acc + num)}, 5);`}
            <br />
            {`console.log(reduceArray);`}
            <br />
            <br />
            {`Answer: 15`}
            <br />
            <br />
            {`The Accumulator is the first parameter of the function with the data being looped through the 
        second parameter. It is structured like a normal map and filter loop but after the function is 
        where you set your accumulator which in this case is 5. In the case the reduceArray variable 
        will consist of the number 15 because the accumulator remembers the previous value and adds to it.`}
            <br />
          </p>
          <h4 className={`center`}> For loop </h4>
          <p className={`border-btm`}>
            {`The for loop can be used to access all or parts of data and loop through them.
      It is written like a function where it takes attributes and produces a result.                                                                              
      The for loop can be broken down into 4 steps.`}
            <br />
            <br />
            {`STEP 1`}
            <br />
            <br />
            {`At the beginning of a for loop you start by indicating at what position do you want the loop to start.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`for(var i = 0;)`}
            <br />
            <br />
            {`STEP 2`}
            <br />
            <br />
            {`The second part of the for loop is indicating at what position 
        you want the loop to finish.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`for(var I = 0; I < 10;)`}
            <br />
            <br />
            {`This indicates that I want the loop to start
        at the position 0 and stop at the position less than 10 which is 9.`}
            <br />
            <br />
            {`STEP 3`}
            <br />
            <br />
            {`The third part of the for loop is for incrementation.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`for(var I = 0; I < 10; I++)`}
            <br />
            <br />
            {`This indicated that I want the loop to start at the position 
         0(from the beginning) stop at the position just under 10(so 9) 
         and go up positions one at a time(increment by 1)`}
            <br />
            <br />
            {`STEP 4`}
            <br />
            <br />
            {`The final step of a for loop is to indicate what 
         you want to do with the data you have looped through`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`for(var i = 0; i =< 10; i++)`}
            <br />
            {`{console.log(i)}`}
            <br />
            <br />
            {`This indicates that I want to start that loop at position 0, I want the loop to end at the number less than 10 which is 9 and I want it to go up in positions of 1.   
         I Then want to console.log all the data I have looped through`}
            <br />
            <br />
          </p>

          <h4 className={`center`}>Objects </h4>
          <p className={`border-btm`}>
            {`These organise your data into a key:value format`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`var data = {name: "ben", age: 26, married: false}`}
            <br />
            <br />
            {`data.name = “ben”`}
            <br />
            <br />
            {`To change the value of a property within the object is as follows:`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`object.name = “sally”`}
            <br />
            <br />
            {`To add a property and value to an existing object is as follows:`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`object.hobby = “football”;`}
            <br />
            <br />
            {`You can also add functions 
        to objects Functions inside of objects become methods.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`var obj = {name: "ben", gender: "male", shout: function()`}
            <br />
            {`{console.log("ahhhhh”)}};`}
            <br />
            <br />
            {`obj.shout()= “ahhhhh”`}
            <br />
            <br />
          </p>

          <h4 className={`center`}>Objects </h4>
          <h4 className={`center`}>Dynamic Properties </h4>
          <p>
            {`You can make the properties within an object dynamic`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`const name = “John snow”;`}
            <br />
            <br />
            {`const object = {[name] : “hi”, [1+3] : 5};`}
            <br />
            <br />
            {`console.log(object)`}
            <br />
            <br />
            {`RESULT:`}
            <br />
            <br />
            {`{“John snow” : “hi”, 4 : 5}`}
            <br />
          </p>
          <h4 className={`center`}>Looping through objects</h4>
          <p>{`To loop through an object you must first turn it into an array,
       you can do this via 3 methods.`}</p>
          <h4 className={`center`}>object.keys()</h4>
          <p>
            {`Object.keys() accepts an argument which is the object you want to loop through. 
It will then loop through the objects PROPERTIES and return it in the format of an array.
You can then loop through the array with array methods.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`let obj = {Name1: “ben”, Name2: “bob”, Name3: “black”}`}
            <br />
            <br />
            {`let obj2 = Object.keys(obj)`}
            <br />
            <br />
            {`console.log(obj2)`}
            <br />
            <br />
            {`RESULT:`}
            <br />
            <br />
            {`[“name1”, “name2”, “name3”]`}
            <br />
          </p>
          <h4 className={`center`}>object.values()</h4>
          <p>
            {`Object.values() accepts an argument which is the object you want to loop through. 
It will then loop through the objects VALUES and return it in the format of an array.
You can then loop through the array with array methods.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`let obj = {Name1: “ben”, Name2: “bob”, Name3: “black”}`}
            <br />
            <br />
            {`let obj2 = Object.values(obj)`}
            <br />
            <br />
            {`console.log(obj2)`}
            <br />
            <br />
            {`RESULT:`}
            <br />
            <br />
            {`[“ben”, “bob”, “black”]`}
            <br />
          </p>
          <h4 className={`center`}>object.entries()</h4>
          <p>
            {`Object.entries() accepts an argument which is the object you want to loop through. 
It will then loop through the objects PROPERTIES & VALUES then return it in the format of an array.
You can then loop through the array with array methods.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`let obj = {Name1: “ben”, Name2: “bob”, Name3: “black”}`}
            <br />
            <br />
            {`let obj2 = Object.entries(obj)`}
            <br />
            <br />
            {`console.log(obj2)`}
            <br />
            <br />
            {`RESULT:`}
            <br />
            <br />
            {`[“name1” : “ben”, “name2” : “bob”, “name3” : “black”]`}
            <br />
          </p>
          <h4 className={`center`}>THIS</h4>
          <p>
            {`THIS is a special keyword in javascript that is 
         used to refer to the parent object you are within.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`const obj = {`}
            <br />
            {`name:”ben”,`}
            <br />
            {`height: 102,`}
            <br />
            {`heightDifference: function(inputHeight){`}
            <br />
            {`return(`}
            <br />
            {`inputHeight - this.height`}
            <br />
            {`)}}`}
            <br />
            <br />
            {`INPUT: obj.heightdifference(105)`}
            <br />
            <br />
            {`The THIS statement is used to refer to the height within the 
        object which is already set at the value 102.`}
            <br />
            {`The result of the INPUT will 3.`}
          </p>
          <h4 className={`center`}>Object instansiation</h4>
          <p>
            {`This technique allows you to create new objects and 
         methods based on a current object.`}
            <br />
            {`This is done with the keyword Class.`}
            <br />
            {`Classes are always named with a capital letter.`}
            <br />
            <br />
            {`STEP 1`}
            <br />
            <br />
            {`First start by creating and naming a class function`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`class Player {}`}
            <br />
            <br />
            {`STEP 2`}
            <br />
            <br />
            {`Add a constructor to the class.
      It is within the constructor parameters you will receive the new values for 
      the properties of the new object you want copied.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`class Player {`}
            <br />
            {`constructor(name, type){}}`}
            <br />
            <br />
            {`STEP 3`}
            <br />
            <br />
            {`Set the properties and values of the original object you want to be copied with the this keyword. 
      This is done within the constructor.
      Dynamic values are accepted through the constructor`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`class Player {`}
            <br />
            {`constructor(name, type){`}
            <br />
            {`this.name = name,`}
            <br />
            {`this.type = type}}`}
            <br />
            <br />
            {`STEP 4`}
            <br />
            <br />
            {`You can also add additional functions which will be methods of your object. 
This is done after the constructor but still within the class object. The parameters from the 
constructor can still be used in the custom methods you make.  `}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`class Player {`}
            <br />
            {`constructor(name, type){`}
            <br />
            {`this.name = name,`}
            <br />
            {`this.type = type}`}
            <br />
            {`introduce () {`}
            <br />
            {`console.log("hello my name is {name} and I am a {type} type")`}
            <br />
            {`}}`}
            <br />
            <br />
            {`In this case the function created can be accessed as a method of 
        the class called introduce()`}
            <br />
            <br />
            {`STEP 5`}
            <br />
            <br />
            {`With the base object set you can make now make different types of the object by extending the object.
        The super keyword has to be added when you extend a player and refers to the parameters it has received 
        which is given to the constructor of the original class player object, super HAS to be added when you 
        extend a class.
        You can also add new functions which will be methods to the extended class ONLY.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`class Player {`}
            <br />
            {`constructor(name, type){`}
            <br />
            {`this.name = name,`}
            <br />
            {`this.type = type}`}
            <br />
            {`introduce () {`}
            <br />
            {`console.log("hello my name is {name} and I am a {type} type")`}
            <br />
            {`}}`}
            <br />
            <br />
            {`class Wizard extends Player {`}
            <br />
            {`constructor(name, type){`}
            <br />
            {`super(name, type)}`}
            <br />
            {`play () {`}
            <br />
            {`introduce () {`}
            <br />
            {`console.log({this.type})`}
            <br />
            {`}}`}
            <br />
            <br />
            {`STEP 6`}
            <br />
            <br />
            {`You can now create new objects 
        very easily with the properties already set and methods created.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`class Player {`}
            <br />
            {`constructor(name, type){`}
            <br />
            {`this.name = name,`}
            <br />
            {`this.type = type}`}
            <br />
            {`introduce () {`}
            <br />
            {`console.log("hello my name is {name} and I am a {type} type")`}
            <br />
            {`}}`}
            <br />
            <br />
            {`class Wizard extends Player {`}
            <br />
            {`constructor(name, type){`}
            <br />
            {`super(name, type)}`}
            <br />
            {`play () {`}
            <br />
            {`introduce () {`}
            <br />
            {`console.log({this.type})`}
            <br />
            {`}}`}
            <br />
            <br />
            {`const wizard1 = new Wizard(“ben”, “wizard”)`}
            <br />
            <br />
            {`This will create a new object with properties and values that come from 
         the extended class wizard which receives its original properties and 
         values from the class player. The method play will also be available to 
         the new wizard1 object and can be accessed.`}
            <br />
          </p>
          <h4 className={`center`}>NEW keyword</h4>
          <p>
            {`The new keyword is used to create a new empty object. It is used when 
          you are creating new objects via the constructor method.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`const player1 = new Wizard()`}
            <br />
            <br />
            {`This creates a new object called player1 with 
        the properties from the extended Wizard class.`}
          </p>
          <h4 className={`center`}>Object destructuring</h4>
          <p>
            {`This allows you to access multiple properties from a object more efficiently.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`const example = {name: “ben”, surname: “Owusu”} `}
            <br />
            <br />
            {`const {name, surname} = example;`}
            <br />
            <br />
            {`This means you can now refer to the object 
        properties via their names instead of example.name`}
          </p>
          <h4 className={`center`}>Window Object</h4>
          <p className={`border-btm`}>
            {`The window object in javascript is a representation of the browser available to us in our code. 
          It comes with a host of functions(window methods) that we can use by default in our programming. `}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`window.fetch() - allows you to fetch data from across the internet.`}
            <br />
          </p>

          <h4 className={`center`}>Javascript Functions</h4>
          <p>
            Javascript functions are pieces of code which allow javascript to
            perform actions.
          </p>
          <p>You can have one or multiple actions.</p>
          <p>
            They are used to stop yourself from repeating actions within your
            code.
          </p>
          <p>
            A javascript function receives an input(can be empty) it then
            performs the function and then lastly returns the value of the
            function.
          </p>
          <p>
            JavaScript functions can accept something called arguments.
            Arguments are external values that are given to the function to help
            evaluate and return.{" "}
          </p>
          <br />
          <h4 className={`center`}>How to use</h4>
          <h4 className={`center`}>Step 1</h4>
          <h4 className={`center`}>Function Declaration</h4>
          <p>
            {`Example1:`}
            <br />
            <br />
            {`function sayHello(){`}
            <br />
            {`console.log(“say hello”)}`}
            <br />
            <br />
            {`Example2:`}
            <br />
            <br />
            {`sayHello = () => {`}
            <br />
            {`console.log(“say hello”)}`}
            <br />
          </p>
          <h4 className={`center`}>Function Expression</h4>
          <p>
            {`Example1:`}
            <br />
            <br />
            {`const sayHello = function(){`}
            <br />
            {`console.log(“say hello”)}`}
            <br />
            <br />
            {`Example2:`}
            <br />
            <br />
            {`const sayHello = () =>{`}
            <br />
            {`console.log(“say hello”)}`}
            <br />
          </p>
          <h4 className={`center`}>Step 2</h4>
          <p>
            {`Invoke the function (call the function)`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`sayHello()`}
            <br />
          </p>
          <h4 className={`center`}>Arguments</h4>
          <p>
            {`Javascript arguments are values you can add to the call function.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`alert(“hello how are you”)`}
            <br />
            <br />
            {`The argument of this function is the value 
        string “hello how are you”`}
            <br />
          </p>
          <h4 className={`center`}>Anonymous Function</h4>
          <p>
            {`Anonymous functions are functions that don’t have a name 
        and therefore cannot be called.`}
            <br />
            {`They are usually attached to a method like .addeventlistener(click,()=>{return()) 
        and are called only by their parent scope`}
            <br />
          </p>
          <h4 className={`center`}>Callback Function</h4>
          <p>
            {`CallBack functions are already made functions which 
        you pass into another function`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`function example () {};`}
            <br />
            <br />
            {`document.queryselector(“.blue”).add eventlistener(“click”, example)`}
            <br />
            <br />
            {`The function example is only called when someone clicks 
        on blue and is a callback function.`}
            <br />
          </p>
          <h4 className={`center`}>Return</h4>
          <p>
            {`Return is a process within a function which has to be done.`}
            <br />
            {`Once your function has performed its task it must RETURN a 
        result.`}
            <br />
            {`Return is usually the last process of a function and exits 
        the function.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`function multiply(a, b){`}
            <br />
            {`return(a * b)}`}
            <br />
            <br />
            {`multiply(5,10)`}
            <br />
            <br />
            {`should return me the value 50`}
            <br />
          </p>
          <h4 className={`center`}>Javascript Methods</h4>
          <p className={`border-btm`}>
            {`methods are the functions of an object.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`console(object).log(method)`}
            <br />
            <br />
            {`you are telling the object console 
        to do a log method, which should console 
        log.`}
            <br />
          </p>
          <h4 className={`center`}>Javascript Dom, Selectors and Editors</h4>
          <p>
            {`DOM aka document object model is a virtual copy of a webpage 
        created by the browsers javascript engine.`}
            <br />
            {`The Dom is created to allow you to edit your webpage freely 
        and is a property of the window object.`}
            <br />
          </p>
          <h4 className={`center`}>Accessing DOM</h4>
          <p>
            {`To access the DOM is as follows`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`console.log(document)`}
            <br />
            <br />
            {`This will console log the DOM`}
            <br />
          </p>
          <h4 className={`center`}>Caching Selectors </h4>
          <p>
            {`It is important to store selectors within variables 
        to save time and memory. `}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`var h1 = document.queryselector(“h1”);`}
            <br />
            <br />
            {`I can now use the syntax h1 in the console 
        instead of document.queryselector(“h1”)`}
            <br />
          </p>
          <h4 className={`center`}>DOM Selectors </h4>
          <p>
            {`Dom selectors are methods used to grab HTML elements.`}
            <br />
            {`You can grab HTML elements directly or by their class or ID name`}
            <br />
            {`The list of Dom selectors are as follows:`}
            <br />
          </p>
          <h4 className={`center`}>getElementsByTagName() </h4>
          <p>
            {`This allows you to select an element of the Dom by tag name (h1, p, img).`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`document.getElementsByTagName(“h1”);`}
            <br />
          </p>
          <h4 className={`center`}>getElementsByClassName() </h4>
          <p>
            {`This allows you to select an element of the Dom by a class name.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`(<h1 class=“Paul”>)`}
            <br />
            {`document.getElementsByClassName(“Paul”);`}
            <br />
          </p>
          <h4 className={`center`}>getElementsById() </h4>
          <p>
            {`This allows you to select an element of the Dom by ID name.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`(<div id=“bay”>)`}
            <br />
            {`document.getElementById(“bay”);`}
            <br />
          </p>
          <h4 className={`center`}>querySelector() </h4>
          <p>
            {`This allows you to access any element which is part of the Dom.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`document.getElementsByTagName(“h1”);`}
            <br />
          </p>
          <h4 className={`center`}>getElementsById() </h4>
          <p>
            {`This allows you to select an element of the Dom by tag name (h1, p, img).`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`document.queryselectorall(“li”);`}
            <br />
          </p>
          <h4 className={`center`}>DOM editors </h4>
          <h4 className={`center`}>.style </h4>
          <p>
            {`This allows you to style html elements with CSS 
        properties(dangerous as it doesn’t separate concerns).`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`document.querySelector(“h1”).style.background= “yellow”;`}
            <br />
            <br />
            {`This will change the h1 tags background to yellow.`}
            <br />
          </p>
          <h4 className={`center`}>.src </h4>
          <p>
            {`This allows you to change the image source of a html tag`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`document.querySelector(“img”).src = “http://google.com”`}
            <br />
          </p>
          <h4 className={`center`}>.textContent </h4>
          <p>
            {`Changes the text content of html elements.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`var tag = document.querySelector(“p”).textContent = “hi”;`}
            <br />
            <br />
            {`This will change the text in the p tag selected to “hi`}
            <br />
          </p>
          <h4 className={`center`}>.getAttribute </h4>
          <p>
            {`This allows you to get the attribute of any html elements if present.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`<li random=“23” >`}
            <br />
            <br />
            {`document.querySelector(“li”).getAttribute(“random”)`}
            <br />
            <br />
            {`I will get the value of the attribute to random which is 23`}
          </p>
          <h4 className={`center`}>.setAttribute </h4>
          <p>
            {`This allows you to change an attribute within a html element.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`<li random=“23” >`}
            <br />
            <br />
            {`document.querySelector(“li”).setAttribute(“random”, “1000”); = <li random=“1000”>`}
            <br />
            <br />
            {`This allows you to change the attribute from 23 to 1000.`}
          </p>
          <h4 className={`center`}>.className </h4>
          <p>
            {`This allows you to add CSS custom properties that have been custom 
        created and allows you to apply them to html elements`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`document.querySelectorAll(“li”)[3].className = “blue”`}
            <br />
            <br />
            {`This will change the second <li> 
        to have the properties of the CSS file called blue`}
            <br />
          </p>
          <h4 className={`center`}>.classlist.add/remove/toggle </h4>
          <p>
            {`Similar to classname it also allows you to add custom CSS 
        to html elements but comes with 3 additional methods attached`}
            <br />
            {` .add which adds the custom css style similar to class name`}
            <br />
            {`  .remove which removes the custom style`}
            <br />
            {`  .toggle which toggles on and off the custom css`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`document.querySelectorAll(“li”[3].classList.add(“blue”)`}
            <br />
            <br />
            {`This will make the second <li> have the custom properties of the css class .blue`}
          </p>
          <h4 className={`center`}>.parentElement </h4>
          <p>
            {`This allows you to see the parent of an element.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`document.querySelector(“li”).parentElement = <ul>`}
            <br />
            <br />
            {`This shows me the parent element of <li> which in this case is <ul>`}
          </p>
          <h4 className={`center`}>.children </h4>
          <p>
            {`This shows you all the tags currently present within an element.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`document.querySelector(“ul”).children = <li>`}
            <br />
            <br />
            {`This will show me all the tags currently present within the <ul> 
        tag which usually and in this case are the <li> tags`}
          </p>
          <h4 className={`center`}>.createElement </h4>
          <p>
            {`This allows you to create an element within your DOM.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`var h1 = document.createElement(“h1”);`}
            <br />
            <br />
            {`This will create a h1 element in the Dom.`}
          </p>
          <h4 className={`center`}>.appendChild </h4>
          <p>
            {`This allows you to attach elements to existing elements.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`var ul = document.querySelector(“ul”);`}
            <br />
            {`var li = document.createElement(“li”);`}
            <br />
            <br />
            {`ul.appendChild(“li”);`}
            <br />
            <br />
            {`This will attach the <li> to the <ul>`}
          </p>
          <h4 className={`center`}>.createTextNode </h4>
          <p>
            {`This allows you to create text to existing or new elements within the Dom.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`var h1 = document.createElement(“h1”);`}
            <br />
            {`h1.appendChild(document.createTextNode(“testing”))`}
            <br />
            <br />
            {`This will attach the text “testing” to a <h1> tag created.`}
            <br />
          </p>
          <h4 className={`center`}>.value </h4>
          <p className={`border-btm`}>
            {`Gives you the value of an input`}
            <br />
          </p>

          <h4 className={`center`}> Javascript Dom Events </h4>
          <p>
            {`Dom events allow javascript to add handlers or listeners 
        on HTML elements inside the Dom like html and css.`}
            <br />
            <br />
            {`To add a Dom event is as follows.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`button.addEventListener(“click”, function(){`}
            <br />
            {`console.log(“click”)})`}
            <br />
          </p>
          <h4 className={`center`}> .addEventListener </h4>
          <p className={`border-btm`}>
            {`This allows you to add a host(check tools references) of 
        listeners (mouse enter, keyboard clicking etc) to an element.`}
            <br />
            {`It takes two arguments one is the action you are listening to and 
        the second is an anonymous or call back function.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`button.addEventListener(“click”, function(){`}
            <br />
            {`console.log(“click”)})`}
            <br />
            <br />
            {`this will allow you to console log how many times the button is clicked.`}
            <br />
          </p>

          <h4 className={`center`}> HTTP/HTTPS </h4>
          <p>
            {`http is the protocol (the set standard) of how we send and receive 
        data over the internet. http is a common language for client to server 
        communications via requests and responses.`}
            <br />
            <br />
            {`http was built to allow html to send and receive data (through the <a>. 
        It has evolved to allow you to send and receive data through 
        javascript with AJAX.`}
            <br />
            <br />
            {`Https is the same as http but used for the sending of sensitive information from 
        client to server. Secure way to send data from a client to server, it is encrypted 
        so the data can only be understood between the client and server with a key `}
            <br />
          </p>
          <h4 className={`center`}> Requests </h4>
          <p>
            {`Requests are when a client is seeking information from a server.`}
            <br />
            <br />
            {`The client uses the http protocol along with the method of request`}
            <br />
            <br />
            {`Depending on the method of request will determine your response.`}
            <br />
          </p>
          <h4 className={`center`}> Request Methods </h4>
          <h4 className={`center`}> Get </h4>
          <p>
            {`This allows the client to ask the server for a 
        specific page or information.`}
          </p>
          <h4 className={`center`}> Put </h4>
          <p>
            {`This allows the client to send and update existing 
        data within a server.`}
          </p>
          <h4 className={`center`}> Post </h4>
          <p>
            {`This allows the client to send and store data on the server.`}
          </p>
          <h4 className={`center`}> Delete </h4>
          <p>
            {`this allows the client to ask the server to delete certain 
        information.`}
          </p>
          <h4 className={`center`}> Responses </h4>
          <p>
            {`Responses are what the servers send back to 
        the client once it has received a request.`}
            <br />
            <br />
            {`There are 2 things a sever send as a response.`}
            <br />
          </p>
          <h4 className={`center`}> HTTP status message </h4>
          <p>
            {`This is a message which is attached to the 
        document you receive in the response.`}
            <br />
            <br />
            {`This status messages describes what sort of 
        response we will receive to the server .`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`Status code : 404`}
          </p>
          <h4 className={`center`}> Document </h4>
          <p>
            {`This is the document type that the server 
        responds with after a request is sent from the client.`}
            <br />
            <br />
            {`It usually has a body and header.`}
            <br />
          </p>
          <h4 className={`center`}> Query Strings </h4>
          <p className={`border-btm`}>
            {`This is a method to send data to a server via the url.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`http://google.com/?name=ben`}
            <br />
          </p>
          <h4 className={`center`}> JSON </h4>
          <p>
            {`Json aka javascript object notation is a format that allows us 
        to exchange data as text via the protocol http to and from a 
        client and a server.`}
            <br />
            <br />
            {`Json is used as the common data type that both the client
        and server can understand. `}
            <br />
            <br />
            {`The format of a json file is similar to a javascript object 
         but the property is also in quotes (like a string)`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`const json = {“firstName”: “Benjamin”, “lastName”: “Owusu”}`}
            <br />
            <br />
            {`Json can be read by clients and servers.`}
          </p>
          <h4 className={`center`}> Converting Object to JSON </h4>
          <h4 className={`center`}> json.stringfiy </h4>
          <p>
            {`The way to convert data from a javascript object into a json file  
        to send from client to server is as follows.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`The format of a json file is similar to a javascript object 
         but the property is also in quotes (like a string)`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`var object = {name:”ben”, age: “25”}`}
            <br />
            <br />
            {`var myJson = JSON.stringify(object)`}
            <br />
            <br />
            {`The object which is stored within the object variable is now converted 
        into Json and stored within the variable myJson.`}
          </p>
          <h4 className={`center`}> Converting JSON to Object </h4>
          <h4 className={`center`}> json.parse </h4>
          <p className={`border-btm`}>
            {`The way to convert json data file back into an 
        object in javascript.`}
            <br />
            <br />
            {`JSON.parse() accepts the json file as an argument, converts it into a 
         javascript object and then stores it within a variable.`}
            <br />
            <br />
            {`It is better to use the shortcut .json()`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`var object = {name:”ben”, age: “25”}`}
            <br />
            <br />
            {`Incoming json file from server:`}
            <br />
            {`{“name”:”ben”, ”age”:”25”}`}
            <br />
            <br />
            {`var object = JSON.parse{{“name”:”ben”, “age”:”25”})`}
            <br />
          </p>
          <h4 className={`center`}> json.parse </h4>
          <p className={`border-btm`}>
            {`The way to convert json data file back into an 
        object in javascript.`}
            <br />
            <br />
            {`JSON.parse() accepts the json file as an argument, converts it into a 
         javascript object and then stores it within a variable.`}
            <br />
            <br />
            {`It is better to use the shortcut .json()`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`var object = {name:”ben”, age: “25”}`}
            <br />
            <br />
            {`Incoming json file from server:`}
            <br />
            {`{“name”:”ben”, ”age”:”25”}`}
            <br />
            <br />
            {`var object = JSON.parse{{“name”:”ben”, “age”:”25”})`}
            <br />
          </p>
          <h4 className={`center`}> Ajax </h4>
          <p>
            {`This a method for web applications to communicate with 
        servers with javascript after the page has been loaded 
        and request small pieces of data to update parts of a webpage.`}
            <br />
            <br />
            {`Ajax uses an accumulation of technologies which each have a part 
         to play to allow Ajax to perform. `}
            <br />
          </p>
          <h4 className={`center`}> http request </h4>
          <p>
            {`window.fetch()`}
            <br />
            <br />
            {`The first step of Ajax is when an event occurs on a webpage`}
            <br />
            <br />
            {`Once an event has occurred an http request object is 
         created and sent to the server`}
            <br />
          </p>
          <h4 className={`center`}> Server </h4>
          <p>
            {`The server will process the http request and then create and 
        send a response to go back to the browser`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Browser </h4>
          <p className={`border-btm`}>
            {`window.fetch().then((response)=>{ `}
            <br />
            {`return(response.json())})`}
            <br />
            <br />
            {`The browser will then process the request 
       using javascript and then update the web content`}
            <br />
          </p>
          <h4 className={`center`}> Sending and Receiving json </h4>
          <h4 className={`center`}> Sending JSON data </h4>
          <p>
            {`To send data from client to server the data must first be a JSON object.`}
            <br />
            {`Depending on what http request you make will define the parameters of the request 
         from client to server.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`fetch(“http://localhost:3000/example”, {`}
            <br />
            {`headers : {“content-type” : “application/json”},`}
            <br />
            {`body : JSON.stringify({`}
            <br />
            {`Name: “ben”,`}
            <br />
            {`Age: 25 })`}
            <br />
            <br />
            {`The fetch method is used to create a http request from client to server.`}
            <br />
            {`The fetch method takes a second argument which is an object.`}
            <br />
            {`Within this object you can define the method, headers and body of a request.`}
            <br />
          </p>
          <h4 className={`center`}> Receiving data</h4>
          <p>
            {`Once the data has been sent you can now manipulate the 
        JSON response you have received from the server.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`.then((res) => { return (res.json())})`}
            <br />
          </p>
        </article>
      </section>
    </main>
  );
};

export default Javascript;
