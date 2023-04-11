import React from "react";
import "./works.css";

const works = [
  {
    title: "Blog",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam",
    img: "./images/blog.svg",
  },
  {
    title: "Weather App",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam",
    img: "./images/weather.svg",
  },
  {
    title: "Social Media App",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam",
    img: "./images/social-media.svg",
  },
];

const Works = () => {
  return (
    <section
      id="works"
      className="container min-vh-100 d-flex flex-column justify-content-center align-items-center text-center gap-5"
    >
      <h1>Works</h1>
      <div className="d-flex justify-content-around gap-5 row w-75">
        {works.map((work) => (
          <div class="card col-md-4 col-12">
            <div
              class="card-info"
              style={{
                backgroundPositionY: "center",
                backgroundPositionX: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundImage: `url(${work?.img})`,
              }}
            >
              <p class="title">{work.title} </p>
              <p class="description">{work.description} </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
