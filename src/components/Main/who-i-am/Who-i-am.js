import React from "react";
import "./Who-i-am.css";
import profile from "../../../assets/profile.png";
import Navbar2 from '../../Navbars/Navbar2/Navbar2.js';

const WhoIAm = ({onRouteChange}) => {
  return (
    <main className ={`who-i-am-main`}>
    <Navbar2 onRouteChange = {onRouteChange} />
    <main className={`who-i-am-content`}>
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
    </main>
  );
};

export default WhoIAm;
