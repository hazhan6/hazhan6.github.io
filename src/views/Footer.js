import React from "react";

const Footer = () => {
  return (
    <div className="position-relative">
      <div className="m-3 position-fixed bottom-0 end-0">
        Copyright © {new Date().getFullYear()} Developed by Hazal Hangul
      </div>
    </div>
  );
};

export default Footer;
