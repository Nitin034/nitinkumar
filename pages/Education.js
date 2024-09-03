import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcons from "../Components/Lilcons";

const Details = ({
  study,
  institute,
  instituteLink,
  Score,
  year,
  Dis,
  address,
}) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[70%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcons reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg ">
          {study}&nbsp;
          <a
            href={instituteLink}
            rel="noreferrer"
            target="_blank"
            className="text-primary capitalize"
          >
            @{institute}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {year} | {address}
        </span>
        <h4>{Score}</h4>
        <p className="font-medium w-full md:text-sm">{Dis}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mt-16 dark:text-primaryback">
        Education
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            study="Bachelor of Technology (CSE)"
            institute="Jaipur National University"
            instituteLink="https://www.jnujaipur.ac.in"
            year="July 2018 July 2022"
            address="Jagatpura Jaipur,(Rj)India"
            Score="Score-62%"
            Dis="I'm Nitin Kumar, A proud graduate of Jaipur National University(Rj), where I pursued my B.Tech journey in Computer Science Engineering from 2018 to 2022, I honed a versatile skill set that has paved the way for my current services. I specialized in both front-end and back-end programming languages, equipping me with the ability to create robust and user-friendly web applications. Thanks to my college education, I can seamlessly develop and maintain websites and applications, offering valuable services in today's tech-driven world."
          />
          <Details
            study="Secondary school(10th)"
            institute="Saraswati Vidya Mandir(Svmict)"
            instituteLink="https://m.facebook.com/svmict/"
            year="June 2015"
            address="TirwaGanj Kannauj, (Up)India"
            Score="Score-84.16%"
            Dis="I'm Nitin Yadav, And I completed my 10th grade education at Saraswati Vidya Mandir in My Home-Town, under the Up Board during the academic Year 2014-2015. I proudly secured an impressive score of 84.16% during this crucial phase of my academic journey."
          />
          <Details
            study="Secondary Higher school(12th)"
            institute="Saraswati Vidya Mandir"
            instituteLink="https://m.facebook.com/svmict/"
            year="June 2017"
            address="TirwaGanj Kannauj, (Up)India"
            Score="Score-87.4%"
            Dis="I completed my 12th grade education at Saraswati Vidya Mandir in my hometown under the Up Board during the academic year 2016-2017. Building upon my strong foundation from 10th grade, I continued to excel in my studies during this period.,"
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
