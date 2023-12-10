import React from "react";
import profileimg from "./Socialicon/Profile2.png";
import './Aboutme.css'
import CV from './Muhammad_Hashim_CV.pdf'
export default function Aboutme() {
  return (
    <div className="aboutme">
      <div className="box2">
        <div className="profimage2">
          <img src={profileimg} alt="" />
        </div>
        <div className="content2">
          <h1>Mern Stack Web Developer</h1>
          <p>
            Web developer with 2+ years of Experience. I had develop webpages
            and websites using <span>Html, CSS, JavaScript & React JS</span> .
            My Services includes making Captivating websites that function
            impeccably and boast stunning aesthetics. A Motivated Dedicated and
            efficient worker who meets deadlines and exceed exceptions. Contact
            me today to transform your vision into captivating websites
          </p>
          <a href={CV} download><button>Download CV</button> </a>
        </div>
      </div>
    </div>
  );
}
