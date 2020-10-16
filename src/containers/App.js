import React, { Component } from "react";
import "./App.css";
import Navbar1 from "../components/Navbar1/Navbar.js";
import profile from "../assets/profile.png";
import Footer from "../components/Footer/Footer.js";

class App extends Component {
  render() {
    return (
      <div className={`app`}>
        <Navbar1 />
        <main>
          <div className={`header-text`}>
            <h1>welcome to bens website</h1>
            <h3>
              When you develop a mockup page or backend API is not ready for
              data fetching and you have to make Frontend Development with
              static data until it comes, react-lorem-ipsum will create your
              gibberish texts for you
            </h3>
          </div>
          <img src={profile} className={`profile-pic`} alt={`profile-pic`} />
        </main>
        <Footer className={`footer`} />
      </div>
    );
  }
}

export default App;
