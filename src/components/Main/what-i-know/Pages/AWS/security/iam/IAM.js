import React from "react";
import "./IAM.css";

const IAM = () => {
  return (
    <main className={`iam-home`}>
      <h2>iam</h2>

      <article className={"tools"}>
        <h3> Online Resources </h3>
        <ul>
          <li>
            - IAM: <a href="https://aws.amazon.com/cloudfront/">Click here </a>
          </li>
          <li>
            - Policies:{" "}
            <a href="https://aws.amazon.com/cloudfront/">Click here </a>
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

          <h4 className={`center`}> IAM </h4>
          <h4 className={`center`}> Definition </h4>
          <p className={`border-btm`}>
            {`IAM aka identity access management this service allows you 
        to manage users and their level of access to your AWS console.`}
            <br />
            <br />
            {`IAM allows you to manage the following within you AWS account.`}
            <br />
            <br />
            {`1. Gives you a centralised place to manage your AWS account`}
            <br />
            <br />
            {`2. Allows you to give shared access to the account and 
        grant permissions to access your account`}
            <br />
            <br />
            {`3. Allows you to sign in via different ways`}
            <br />
            <br />
            {`4. Has multi factor authentication to access it.`}
            <br />
            <br />
            {`5. Allows you to set up your own password rotation policy.`}
            <br />
            <br />
            {`6. Integrates with many AWS services`}
            <br />
            <br />
            {`7. Supports PCI DSS compliance`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Users </h4>
          <p className={`border-btm`}>
            {`Individuals who have access.`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Programmatic access </h4>
          <p>
            {`Programmatic access allows you to invoke actions on your 
        AWS services either through an application that you write 
        or through a third-party tool.`}
            <br />
            <br />
            {`If you allow Programmatic access the user will be given a 
        secret key and password that will allow them to interact 
        with the AWS services in your account.`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> AWS management console </h4>
          <p className={`border-btm`}>
            {`This allows you to give the user access to your 
        AWS management console.`}
            <br />
            <br />
            {`This will give the user a password that will
       be used to log in traditionally.`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Groups </h4>
          <p className={`border-btm`}>
            {`A collection of users.`}
            <br />
            <br />
            {`Each user within the group will receive the 
        permissions of the group.`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Policies </h4>
          <p className={`border-btm`}>
            {`Policies are made up of documents.`}
            <br />
            <br />
            {`These documents are in JSON format.`}
            <br />
            <br />
            {`They give permissions as to what users, 
        groups and roles are able to do.`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Roles </h4>
          <p className={`border-btm`}>
            {`These allow you to create roles and then assign 
        them to AWS resources.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`Allowing the S3 service to have access to the EC2 service.`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Security status </h4>
          <p className={`border-btm`}>
            {`When you are in your IAM console you will be 
        shown a security status.`}
            <br />
            <br />
            {`This is a checklist of what you need to do to 
        make sure your AWS account is secure.`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> IAM users link </h4>
          <p className={`border-btm`}>
            {`Within IAM you are provided with a url that 
        can be given to other users to access you AWS account.`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Billing alarm </h4>
          <p className={`border-btm`}>
            {`This allows you to set an initial amount you want to spend on
       AWS services and notifies you when you are close and reached 
       the limit.`}
            <br />
            <br />
          </p>
        </article>
      </section>
    </main>
  );
};

export default IAM;
