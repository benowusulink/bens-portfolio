import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
  render() {
    return (
      <main id={`contact`}>
        <h2> Contact </h2>
        <section id={`contact-section`}>
          <article>
            <h4>Email</h4>
            <ion-icon name="mail-outline"></ion-icon>
            <p> benowusu@hotmail.co.uk</p>
          </article>
          <article>
            <h4>Phone Number</h4>
            <ion-icon name="call-outline"></ion-icon>
            <p> 07340176983</p>
          </article>
        </section>
      </main>
    );
  }
}

export default Contact;
