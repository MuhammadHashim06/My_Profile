import React from "react";
import "./Contact.css";
export default function Contact() {
  return (
    <div className="Contact">
      <form>
        <h1>Contact Me</h1>
        <input type="text" name="name" id="name" placeholder="Enter your name"/>
        <input type="email" id="email" name="email" placeholder="Enter valid email" />
        <textarea id="message" name="message" placeholder="Your message"></textarea>
        <button>Let's  Talk</button>
      </form>
    </div>
  );
}
