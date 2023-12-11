import React from "react";
import Services from "./Services";

const About = () => {
  const skills = [
    { name: "UI & UX DESIGNING", image: "/src/assets/icons/ruler-pen.png" },
    { name: "WEB DEVELOPMENT", image: "/src/assets/icons/code.png" },
    { name: "MOBILE DEVELOPMENT", image: "/src/assets/icons/android.png" },
    {
      name: "WEB SCRAPING WITH PYTHON",
      image: "/src/assets/icons/python-svg.png",
    },
  ];
  return (
    <div className="md:px-10 px-7 sm:-mt-24" id="about">
      <Services />
    </div>
  );
};

export default About;
