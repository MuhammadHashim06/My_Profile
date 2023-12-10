import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="footer">
      <span id="bar"></span>
      <h1>
        Hashim<span>'s</span> Portfolio
      </h1>
      <p>All rights reserved Hashim-porfolio @ 2023</p>
      <div className="gettouch">
        <a href="mailto:muhammad.hashimsid@gmail.com">
          <i className="fa-regular fa-envelope"></i>
        </a>
        <a href="https://wa.me/+923121669884">
          <i className="fa-brands fa-whatsapp"></i>
        </a>
      </div>
    </div>
  );
}
