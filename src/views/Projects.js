import React from "react";
import "./projects.css";

const projects = [
  {
    title: "Blog",
    description:
      " Built with HTML, JS, React, Redux, Tailwind-CSS. Also used react-dom-router, React-Hooks, API Calls.",
    img: "./images/blog.svg",
  },
  {
    title: "Weather App",
    description:
      " Designed with HTML, CSS, JS, React/Redux . Used OpenWeatherMap's API.",
    img: "./images/weather.svg",
  },
  {
    title: "Social Media App",
    description: "MERN Stack Social Media Application. Design with Bootstrap.",
    img: "./images/social-media.svg",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="container min-vh-100 d-flex flex-column justify-content-center align-items-center text-center gap-5"
    >
      <div className="projects-text">
        <h2>Projects</h2>
      </div>
      <div className="d-flex justify-content-around gap-5 row w-75">
        {projects.map((work, index) => (
          <div key={index} className="card col-md-4 col-12">
            <div
              className="card-info"
              style={{
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundImage: `url(${work?.img})`,
              }}
            >
              <p className="title">{work.title} </p>
              <p className="description">{work.description} </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
