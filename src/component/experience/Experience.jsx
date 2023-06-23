import React from "react";
import "./experience.css";
import ListExperiences from "./components/listExperiences";

export const Experience = () => {
  return (
    <section id="experience">
      <h5>What skills i have</h5>
      <h2>My Experience</h2>
      <div className="container small_text">Below is a graphical map✍🏽 of both my development and designing skills🧠✅ alongside
      the experience duration I have in them</div>
      <div className="container">
        <ListExperiences />
      </div>
    </section>
  );
};
export default Experience;
