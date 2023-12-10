import React from "react";
import "./SkillsxEperience.css";

const SkillsxEperience = () => {
  return (
    <div id="box3">
      <div className="skills">
        <h1>Technical Skills</h1>
        <div className="table">
          <p>
            HTML 5 : <span style={{ float: "right" }}>75%</span>
          </p>
          <div className="rating-bar">
            <div className="rating-fill" style={{ width: "75%" }}></div>
          </div>
          <p>
            CSS 3 : <span style={{ float: "right" }}>75%</span>
          </p>
          <div className="rating-bar">
            <div className="rating-fill" style={{ width: "75%" }}></div>
          </div>
          <p>
            JavaScript : <span style={{ float: "right" }}>75%</span>
          </p>
          <div className="rating-bar">
            <div className="rating-fill" style={{ width: "75%" }}></div>
          </div>
          <p>
            React.Js : <span style={{ float: "right" }}>75%</span>
          </p>
          <div className="rating-bar">
            <div className="rating-fill" style={{ width: "75%" }}></div>
          </div>
          <p>
            Communication Skills : <span style={{ float: "right" }}>75%</span>
          </p>
          <div className="rating-bar">
            <div className="rating-fill" style={{ width: "75%" }}></div>
          </div>
        </div>
      </div>
      <div className="inner">
        {/* <h1>Experience</h1> */}
        <div className="experience">
          <div className="textbox">
            <h2>
              Web Internship at Tier Limited
              <br /> <span>(June 2023 - August 2023)</span>
            </h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum.
            </p>
          </div>
          <div className="textbox">
            <h2>
              Member of PR Team in Ultimate Tech Crew <br />{" "}
              <span>(Joined Community : June 2023)</span>
            </h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsxEperience;
