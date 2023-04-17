import React from "react";
import "./about.css";

const About = () => {
  return (
    <section
      id="about"
      className="container min-vh-100 mb-5 d-flex flex-column justify-content-center align-items-center text-center text-md-start gap-5"
    >
      <div className="row gap-5 justify-content-end">
        <div className="col-12 col-md-5">
          <h2
            className="pb-2 about-headers"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            HAZAL HANGUL
          </h2>
          <h4
            className="pb-2"
            data-aos="fade-down"
            data-aos-delay="250"
            data-aos-easing="linear"
          >
            Frontend / Mobile Developer
          </h4>
          <h5
            className="lh-base"
            data-aos="fade-down"
            data-aos-delay="350"
            data-aos-easing="linear"
          >
            I'm a self-taught Front End developer from Turkey. Curious to learn
            more about developing scalable distribution systems, love problem
            solving, and care about writing and maintainable code.
          </h5>
        </div>
        <div className="col-12 col-md-5">
          <div
            className="h3 about-headers mb-3"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            SKILLS
          </div>
          <div className="row gap-4">
            <div
              className="col lh-base"
              data-aos="fade-down"
              data-aos-delay="350"
              data-aos-easing="linear"
            >
              <h5 className="about-skills">React</h5>
              <h5 className="about-skills">React Native</h5>
              <h5 className="about-skills">Redux</h5>
              <h5 className="about-skills">MaterialUI</h5>
              <h5 className="about-skills">TailwindCSS</h5>
              <h5 className="about-skills">Bootstrap</h5>
              <h5 className="about-skills">NodeJS</h5>
            </div>
            <div
              className="col lh-base "
              data-aos="fade-down"
              data-aos-delay="350"
              data-aos-easing="linear"
            >
              <h5 className="about-skills">Git/Github</h5>
              <h5 className="about-skills">Jira</h5>
              <h5 className="about-skills">Postman</h5>
              <h5 className="about-skills">Altair</h5>
              <h5 className=" about-skills">PostgreSQL</h5>
              <h5 className=" about-skills">Responsive Web Design</h5>
            </div>
            <div
              className="col lh-base "
              data-aos="fade-down"
              data-aos-delay="350"
              data-aos-easing="linear"
            >
              <h5 className="about-skills">JavaScript</h5>
              <h5 className="about-skills">HTML</h5>
              <h5 className="about-skills">CSS</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
