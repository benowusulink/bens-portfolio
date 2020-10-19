import React from "react";
import "./Who-i-am.css";
import profile from "../../../assets/profile.png";

const WhoIAm = () => {
  return (
    <main className={`home home2`}>
      <h2>{`who i am`}</h2>
      <img src={profile} id={`who-i-am-img`} alt={`profile pic`} />

      <section id={`who-i-am-info`}>
        <p>
          {" "}
          Our mission: to help people learn to code for free. We accomplish this
          by creating thousands of videos, articles, and interactive coding
          lessons - all freely available to the public. We also have thousands
          of freeCodeCamp study groups around the world.
          <br />
          Our mission: to help people learn to code for free. We accomplish this
          by creating thousands of videos, articles, and interactive coding
          lessons - all freely available to the public. We also have thousands
          of freeCodeCamp study groups around the world. Our mission: to help
          people learn to code for free. We accomplish this by creating
          thousands of videos, articles, and interactive coding lessons - all
          freely available to the public. We also have thousands of freeCodeCamp
          study groups around the world.
          <br />
          Our mission: to help people learn to code for free. We accomplish this
          by creating thousands of videos, articles, and interactive coding
          lessons - all freely available to the public. We also have thousands
          of freeCodeCamp study groups around the world. Our mission: to help
          people learn to code for free. We accomplish this by creating
          thousands of videos, articles, and interactive coding lessons - all
          freely available to the public. We also have thousands of freeCodeCamp
          study groups around the world. Our mission: to help people learn to
          code for free. We accomplish this by creating thousands of videos,
          articles, and interactive coding lessons - all freely available to the
          public. We also have thousands of freeCodeCamp study groups around the
          world.
        </p>
      </section>
    </main>
  );
};

export default WhoIAm;
