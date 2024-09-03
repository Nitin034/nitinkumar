import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcons from "../Components/Lilcons";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between  md:w-[80%]"
    >
      <LiIcons reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            rel="noreferrer"
            target="_blank"
            className="text-primary capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | <a className="dark:text-primaryback xs:text-sm">{address}</a>{" "}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mt-16 dark:text-primaryback">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top  dark:bg-light  md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Graphic Design Intern"
            company="aashman Foundation"
            companyLink="https://www.aashmanfoundation.org"
            time="June 2022 to September 2022"
            address="Delhi, India"
            work="Worked with graphics team and Understand how to build Advertisement Poster
    Designed graphics and Ux using Adobe Photoshop and lllustrator
    Understanding using of proper color and fonts "
          />
          <Details
            position="JavaScript developer"
            company="caddeskindia.com"
            companyLink="https://caddeskindia.com/"
            time="November 2022 to may 2023"
            address="Delhi, India"
            work="Worked with JavaScript team and Understand how to build Complex site
     Designed and Create A full Front-end Website
     Understanding using of Hokes and components
     Started with React.js using React.router
     Managing Ui Using HTML, CSS JavaScript, TailwindCss and React.js
     Creating reusable components to optimize code and speed of React.js"
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
