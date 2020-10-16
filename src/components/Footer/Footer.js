import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <ul id={`footer-ul`}>
          <li>
            <ion-icon name="call-outline"></ion-icon>
            <p>{`Contact Number:`}</p>
            <p>{`07340176983`}</p>
          </li>
          <li>
            <ion-icon name="mail-outline"></ion-icon>
            <p>{`Email:`}</p>
            <p>{`benowusu@hotmail.co.uk`}</p>
          </li>
        </ul>
      </footer>
    );
  }
}

export default Footer;
