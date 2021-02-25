import React from "react";
import "./CICD.css";

const CICD = () => {
  return (
    <main className={`cicd-home`}>
      <h2>cicd</h2>

      <article className={"tools"}>
        <h3> Online Resources </h3>
        <ul>
          <li>
            - Circle CI:{" "}
            <a
              href="https://webpack.js.org/guides/getting-started/#basic-setup"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here{" "}
            </a>
          </li>
          <li>
            - Prettier:{" "}
            <a
              href="https://prettier.io/"
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

          <h4 className={`center`}> CI/CD </h4>
          <h4 className={`center`}> Continuous Integration </h4>
          <p>
            {`It is a development practice where developers continuously input code into a shared 
        repository, usually several times a day.`}
            <br />
            <br />
            {`Through the process CI you make your code, 
        test, build and then merge your code`}
            <br />
            <br />
            {`It is through CI you make sure there are less bugs within your code by reviewing 
        the code by individual developers on a frequent basis.`}
            <br />
            <br />
            {`There is a great emphasis on testing automation 
        to make sure the app isnt broken`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Code PR </h4>
          <p>
            {`This is the process of writing code in general`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Test </h4>
          <p>
            {`Once you have written your code, your code should usually 
        go through the test step. The test step is usually putting 
        your code through automatic testing like lint tests, 
        typescript and testing.`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Build </h4>
          <p>
            {`Once the tests for your code has passed the build process 
        is when you build your code. This is to make sure your 
        code is compatible with the rest of the code.`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Merge </h4>
          <p className={`border-btm`}>
            {`Once your code has been built the merge process is when push
       your code to the GitHub repository branch you are working in`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Continuous Delivery </h4>
          <p>
            {`This is a development practice that happens after the 
        steps of continuous integration.`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Acceptance test </h4>
          <p>
            {`Once the code has been merged into the GitHub repository, the code 
        from the repository is then run through automatic checks 
        (which can be manually set up) if your code is correct it will 
        pass these tests`}
            <br />
            <br />
            {`CircleCI`}
            <br />
            {`Jenkins`}
            <br />
            <br />
            {`These are both examples of platforms that allow you to run your 
        code within a git hub repository through an acceptance test`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Manual review </h4>
          <p>
            {`Once the code has passed the acceptance test it is given one last 
        review manually (by human) to make sure everything is fine `}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Deploy </h4>
          <p className={`border-btm`}>
            {`Once the code has gone through manual review it can finally 
        be deployed `}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Continuous Deployment </h4>
          <p>
            {`This is an alternative method to continuous delivery, this development 
        practice also happens right after continuous integration.`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Acceptance test </h4>
          <p>
            {`Once the code has been merged into the GitHub repository, the code 
        from the repository is then run through automatic checks 
        (which can be manually set up) if your code is correct it will 
        pass these tests`}
            <br />
            <br />
            {`CircleCI`}
            <br />
            {`Jenkins`}
            <br />
            {`Bamboo`}
            <br />
            {`Teamcity`}
            <br />
            <br />
            {`These are examples of platforms that allow you to run your 
        code within a git hub repository through an acceptance test`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Automatic review </h4>
          <p>
            {`Once the code has gone through the acceptance 
        test it is automatically sent to deployment`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Deploy </h4>
          <p className={`border-btm`}>
            {`The code will now be deployed`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Pipeline </h4>
          <p className={`border-btm`}>
            {`This is the process of creating, testing and 
        deploying an app. All the stages of your production`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> CircleCI </h4>
          <p className={`border-btm`}>
            {`CircleCI can be used to run tests on your project.`}
            <br />
            <br />
            {`Circleci owns the server they run the tests on.`}
            <br />
            <br />
            {`Cirlceci uses a .yml file for you to configure 
        your settings for the test it will perform.`}
            <br />
            <br />
            {`Once your code has been pushed into your GitHub 
        repository, circleci pulls this code onto its 
        server and runs tests on the code.`}
            <br />
            <br />
            {`For more information on CircleCI please check the 
        online resources`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Prettier </h4>
          <p className={`border-btm`}>
            {`A tool that allows you to change your applications 
        syntax to make it cleaner and prettier.`}
            <br />
            <br />
            {`It works with a lot of file formats (html, js, css, jsx,json etc)`}
            <br />
            <br />
            {`Prettier can be used before you push your code to github 
        as a pre commit hook or used on a manual basis.`}
            <br />
            <br />
            {`For more information on Prettier please check the 
        online resources`}
            <br />
            <br />
          </p>
        </article>
      </section>
    </main>
  );
};

export default CICD;
