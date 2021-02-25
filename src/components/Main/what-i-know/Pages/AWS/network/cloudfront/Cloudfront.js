import React from "react";
import "./Cloudfront.css";

const Cloudfront = () => {
  return (
    <main className={`cloudfront-home`}>
      <h2>cloudfront</h2>

      <article className={"tools"}>
        <h3> Online Resources </h3>
        <ul>
          <li>
            - Cloudfront:{" "}
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

          <h4 className={`center`}> Cloudfront </h4>
          <h4 className={`center`}> Definition </h4>
          <p className={`border-btm`}>
            {`This AWS service allows you to deliver files at 
        high speeds by caching data.`}
            <br />
            <br />
            {`Cloudfront allows you to cache content from origins by 
        utilising amazon edge locations.`}
            <br />
            <br />
            {`Cloudfront origins can be a S3 bucket, E2 instance, 
        Elastic load balancer or Route53`}
            <br />
            <br />
            {`Cloudfront is a CDN (Content delivery network)`}
            <br />
            <br />
            {`CDN’s are a network of distributed servers that deliver web 
         content and other files to a user based on their geographical 
         location of the user, origin of the webpage and where the
          CDN server is placed`}
            <br />
            <br />
            {`If you don’t have CDN’s when a user requests a web content they will 
         always have to request it from your server, no matter their 
         location within the world.`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Edge location </h4>
          <p className={`border-btm`}>
            {`This is a location where your content from your origin 
        server will be cached and delivered to the user.`}
            <br />
            <br />
            {`There are many edge locations throughout the world.`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Origin </h4>
          <p className={`border-btm`}>
            {`This is the location where your original server files are held.
        It is these files that will be cached within edge locations.`}
            <br />
            <br />
            {`Origins can be data held within a S3 bucket, E2 instance, 
        Elastic load balancer or Route53 `}
            <br />
            <br />
            {`They can also be servers already created by a developer.`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Distributions </h4>
          <p>
            {`Allows you to choose which edge locations you want 
        your files to be cached.`}
            <br />
            <br />
            {`There two distribution types:`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Web Distribution </h4>
          <p>
            {`Used for the delivery of websites.`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> RTMP </h4>
          <p className={`border-btm`}>
            {`Used for the deliver of websites.`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> How cloudfront works </h4>
          <p className={`border-btm`}>
            {`1. Files are originally held within the origin (this 
        can be AWS services or an originally server).`}
            <br />
            <br />
            {`2. A user will request a file from your server, before reaching 
        your server the request is sent to an edge location.`}
            <br />
            <br />
            {`3. If the files are cached within the edge location the edge 
        location will respond with the files.`}
            <br />
            <br />
            {`4. If the files are not cached within the edge location, the 
        edge location will request this file from the server and then 
        cache the file within its edge location for a certain amount 
        of time, it will also respond to the user with file retrieved 
        from the origin. If another user makes the same request to the
         same edge location within the time frame it is cached there, 
         the edge location will respond to the user with the request 
         instead of going to the origin once again.`}
            <br />
            <br />
          </p>
        </article>
      </section>
    </main>
  );
};

export default Cloudfront;
