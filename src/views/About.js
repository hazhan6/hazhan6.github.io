import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="container min-vh-100 d-flex flex-column justify-content-center align-items-center text-center gap-5"
    >
      <div className="row w-75">
        <div className="col">
          <h3>Hazal Hangul</h3>
          <h5>Frontend / Mobile Developer</h5>
          <h6 className="lh-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.{" "}
          </h6>
        </div>
        <div className="col">
          <h3>Skills</h3>
          <h6 className="lh-base">
            React, React Native
            <br /> JavaScript, HTML, CSS
            <br /> NodeJS
            <br /> Redux
            <br /> Material-UI
            <br /> Bootstrap
            <br /> Tailwind CSS
            <br /> REST API, GraphQL
            <br /> Responsive Web Design
          </h6>
        </div>
      </div>
    </section>
  );
};

export default About;
