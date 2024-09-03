import React from "react";
import Progress from "./Progress";
import Experience from "./Experience";
import Education from "./Education";
import RoundedProgres from "./RoundedProgres";

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-10 w-full text-center md:text-6xl md:mt-32 dark:text-primaryback">
        Skills
      </h2>
      <RoundedProgres />
      <Progress />
      <Education />
      <Experience />
    </>
  );
};

export default Skills;
