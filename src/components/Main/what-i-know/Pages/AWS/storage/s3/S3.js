import React from "react";
import "./S3.css";

const S3 = () => {
  return (
    <main className={`s3-home`}>
      <h2>s3</h2>

      <article className={"tools"}>
        <h3> Online Resources </h3>
        <ul>
          <li>
            - S3: <a href="https://aws.amazon.com/s3/">Click here </a>
          </li>
          <li>
            - S3 static web hosting:{" "}
            <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html">
              Click here{" "}
            </a>
          </li>
          <li>
            - Buckets:{" "}
            <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingBucket.html">
              Click here{" "}
            </a>
          </li>
          <li>
            - Objects:{" "}
            <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingMetadata.html">
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

          <h4 className={`center`}> S3 </h4>
          <h4 className={`center`}> Definition </h4>
          <p className={`border-btm`}>
            {`S3 aka simple storage service is a safe place for you to 
        store and retrieve any type of file from anywhere on the web.`}
            <br />
            <br />
            {`It is secure durable and highly scalable.`}
            <br />
            <br />
            {`S3 is object based which means it allows you to upload files`}
            <br />
            <br />
            {`The files are allowed to be 0 to 5tb.`}
            <br />
            <br />
            {`Within S3 you have unlimited storage.`}
            <br />
            <br />
            {`You can use s3for static web hosting`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Buckets </h4>
          <p className={`border-btm`}>
            {`Files within S3 are stored within buckets, buckets are 
        directories in which you can upload your files into within S3`}
            <br />
            <br />
            {`When you name your bucket the name has to be unique as it 
        is a global dns link`}
            <br />
            <br />
            {`When you have successfully uploaded a file to S3 you will receive 
        a http status 200 ok if the upload was successful.`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Objects </h4>
          <p className={`border-btm`}>
            {`S3 is object based. When you upload a file 
        the format within S3 is the following `}
            <br />
            <br />
            {`key: value`}
            <br />
            <br />
            {`Key - The name of the file in the object `}
            <br />
            {`Value - The file in the object`}
            <br />
            {`Versions - you can have multiple versions of the same file`}
            <br />
            {`Metadata - this is information about the data`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> S3 Features </h4>
          <h4 className={`center`}> Tiers </h4>
          <p>
            {`There are different tiers to choose from`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Life Cycle Management </h4>
          <p>
            {`Allows you to change tiers and options for your 
        objects within your buckets`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Versioning </h4>
          <p>
            {`Allows you can have multiple versions of the same file`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Encryption </h4>
          <p>
            {`Allows you to encrypt your files stored`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> MFA delete </h4>
          <p>
            {`Allows MFA before deleting files`}
            <br />
            <br />
          </p>
          <h4 className={`center`}>
            {" "}
            Secure data bucket lists and access control policies{" "}
          </h4>
          <p>
            {`Allows you to control settings of buckets and objects`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Cross reigon replication </h4>
          <p>
            {`This allows you to create new buckets in different reigons.`}
            <br />
            {`The changes in the original bucket apply to the copied bucket.`}
            <br />
            <br />
          </p>
        </article>
      </section>
    </main>
  );
};

export default S3;
