import React, { Component } from "react";
import "./Home.css";
import profile from "./assets/profile.png";
import Footer from "../../Footer/Footer.js";

class Home extends Component {
  render() {
    return (
      <main className={`home`}>
        <div className={`header-text`}>
          <h1>welcome to bens website</h1>
          <h3>
            When you develop a mockup page or backend API is not ready for data
            fetching and you have to make Frontend Development with static data
            until it comes, react-lorem-ipsum will create your gibberish texts
            for you
          </h3>
        </div>
        <img src={profile} className={`profile-pic`} alt={`profile-pic`} />
        <Footer className={`footer`} />
      </main>
    );
  }
}

export default Home;
