import React, { useRef, useEffect } from "react";
import AnimatedText from "../Components/AnimatedText";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Layout from "../Components/Layout";
import Skills from "./Skills";
import Image from "next/image";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const About = () => {
  return (
    <>
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="px-8 col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:col-span-8 md:order-2">
              <h2 className="md-4 text-lg font-bold uppercase text-dark/75  dark:text-primaryback/75 ">
                Biography
              </h2>
              <p className="font-medium">
                As a full stack web developer, I specialize in crafting visually
                captivating and interactive websites that leverage cutting-edge
                technologies. My expertise spans both frontend and backend
                development, with a strong focus on creating graphics-heavy,
                animated websites. I primarily work with frameworks like React
                and Next.js, utilizing JavaScript to build dynamic user
                interfaces that are both responsive and engaging.
              </p>
              <p className="my-1 font-medium">
                To bring these interfaces to life, I incorporate animations
                using GSAP enabling fluid transitions and effects that enhance
                the user experience. I also integrate design tools like Canva
                for custom graphics and Blender for 3D modeling, ensuring each
                project is visually distinct and aesthetically impressive.
              </p>
              <p className="my-1 font-medium">
                With a deep understanding of the technical and creative aspects
                of web development, I aim to deliver websites that not only
                function seamlessly but also leave a lasting visual impact. My
                passion lies in merging creativity with technology to create
                immersive digital experiences.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:col-span-8 md:order-1">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src="/Images/P_20230211_113546.jpg"
                alt="nitin"
                className="w-full h-auto rounded-2xl"
                priority="true"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                width={0} height={0}
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl dark:text-primary">
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75  dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Satisfied clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl dark:text-primary">
                  <AnimatedNumbers value={35} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75  dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Projects completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl dark:text-primary">
                  <AnimatedNumbers value={1} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75  dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Years of experience
                </h2><span className="text-[10px] font-medium capitalize text-dark/75  dark:text-light/75 md:text-lg sm:text-xs xs:text-xm">freelance*</span>
              </div>
            </div>
          </div>
          <Skills />
        </Layout>
      </main>
    </>
  );
};

export default About;
