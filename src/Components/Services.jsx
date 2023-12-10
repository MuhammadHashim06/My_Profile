import React from "react";
import "./Services.css";
export default function Services() {
  return (
    <div className="services">
      <h1>Services</h1>
      <div className="outerbox">
        <div className="innerbox">
          <h1>
            <i className="fa-solid fa-crop-simple"></i>
          </h1>
          <h1>UI DESIGN</h1>
          <p>
            I specialize in custom web development, using cutting-edge
            technologies to deliver exceptional user experiences. My expertise
            also includes UI/UX design, crafting visually appealing and
            intuitive interfaces for seamless interactions across all devices
          </p>
        </div>
        <div className="innerbox">
          <h1>
            <i className="fa-solid fa-code"></i>
          </h1>
          <h1>WEB DEVELOPMENT</h1>
          <p>
            Custom web development with a focus on exceptional user experiences.
            Specializing in responsive web design for captivating,
            device-friendly interfaces.
          </p>
        </div>
        <div className="innerbox">
          <h1>
            <i className="fa-brands fa-android"></i>
          </h1>
          <h1>APP DEVELOPMENT</h1>
          <p>
            In app design, I excel in creating visually captivating and
            intuitive interfaces, optimizing user experiences for seamless
            interactions and engaging mobile applications.
          </p>
        </div>
      </div>
    </div>
  );
}
