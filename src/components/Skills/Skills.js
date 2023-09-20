import React from "react";
import { techstack } from "../../assets";
import Title from "../Layouts/Title";

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full h-[800px] py-20  border-b-[1px] border-b-black "
    >
      <div className="flex justify-center items-center text-center">
        <Title title="" des="Skills" />
      </div>
      <div className="flex justify-center items-center">
        <img src={techstack} alt="image" height="800px" width="800px" />
      </div>
    </section>
  );
};

export default Skills;
