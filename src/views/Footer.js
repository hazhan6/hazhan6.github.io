import React from "react";

const Footer = () => {
  return (
    <div className="position-relative">
      <div className="d-flex p-3 justify-content-end bottom-0 end-0">
        <small>
          Copyright © {new Date().getFullYear()} Developed by Hazal Hangul
        </small>
      </div>
    </div>
  );
};

export default Footer;
