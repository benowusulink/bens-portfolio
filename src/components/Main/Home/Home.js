import React, { Component } from "react";
import "./Home.css";
import profile from "./assets/profile.png";
import Footer from "../../Footer/Footer.js";

class Home extends Component {
  render() {
    return (
      <main className={`home`}>
        <div className={`header-text`}>
          <h1>Hello ! </h1>
          <h1>Welcome to Ben's personal website</h1>
          <h3>
            My name is Benjamin and thank you for visiting my online portfolio.
            I am a developer who has experience working on the front and back
            end. Please take the time to explore my website and I hope you like
            what you see.
          </h3>
          <h6>
            {" "}
            This website was created by me from scratch with React and deployed
            via AWS.
          </h6>
        </div>
        <img src={profile} className={`profile-pic`} alt={`profile-pic`} />
        <Footer className={`footer`} />
      </main>
    );
  }
}

export default Home;
