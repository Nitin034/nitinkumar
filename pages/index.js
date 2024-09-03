import { Inter } from "next/font/google";
import React from "react";
import AnimatedText from "../Components/AnimatedText";
import Link from "next/link";
import {
  EmailIcon,
  LinkedInIcon,
  GithubIcon,
  InstagramIcon,
} from "../Components/lcons";
import { SiFiverr, SiUpwork } from "react-icons/si";
import { motion } from "framer-motion";
import Layout from "../Components/Layout";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

const MotionLink = motion(Link);

export default function Home() {
  return (
      <main className="flex items-center text-dark dark:text-light w-full min-h-screen">
        <Layout className="pt-0 pl-6 lg:pt-0 sm:pt-0 ">
          <div className="flex items-center justify-between w-full lg:w-full lg:flex-col">
            <div className="w-1/2 lg:w-full lg:text-center">
              <AnimatedText
                text="Full-Stack Web Developer🖥️"
                className="text-7xl text-left m-10 lg:m-5 xl:text-5xl lg:text-center lg:text-6xl md:text-5xl sm:text-3xl"
              />
              <p className="my-4 text-2xl md:text-xl sm:text-lg font-medium mx-10">
                Hi, Im <span className="text-primary">Nitin Yadav. </span>A
                passionate Full-stack,Developer based in Noida, Delhi-NCR
                India.📍
              </p>

              <div className="flex items-center self-start m-10 lg:self-center lg:justify-center">
                <MotionLink
                  href="/Resume"
                  className="flex items-center bg-dark text-light p-2 rounded-full m-1 text-lg lg:text-sm font-semibold hover:bg-primary hover:text-dark border-2 border-solid border-transparent hover:border-dark"
                  whileHover={{ scale: 0.9 }}
                >
                  Resume
                </MotionLink>
                <MotionLink
                  href="mailto:12nitinkumaryd@gmail.com"
                  target={"_blank"}
                  className="w-11 lg:w-8 flex items-center bg-dark text-light p-2.5 rounded-full m-1 text-lg font-semibold hover:bg-primary hover:text-dark border-2 border-solid border-transparent hover:border-dark"
                  whileHover={{ scale: 0.9 }}
                >
                  <EmailIcon />
                </MotionLink>
                <MotionLink
                  href="https://www.linkedin.com/in/nitinkumaryd67/"
                  target={"_blank"}
                  className=" w-11 lg:w-8 flex items-center bg-dark text-light p-2.5 rounded-full m-1 text-lg font-semibold hover:bg-primary hover:text-dark border-2 border-solid border-transparent hover:border-dark"
                  whileHover={{ scale: 0.9 }}
                >
                  <LinkedInIcon />
                </MotionLink>
                <MotionLink
                  href="https://github.com/Nitin034"
                  target={"_blank"}
                  className=" w-11 lg:w-8 flex items-center bg-dark text-light p-2.5 rounded-full m-1 text-lg font-semibold hover:bg-primary hover:text-dark border-2 border-solid border-transparent hover:border-dark"
                  whileHover={{ scale: 0.9 }}
                >
                  <GithubIcon />
                </MotionLink>
                <MotionLink
                  href="https://www.fiverr.com/nitinkumar67"
                  target={"_blank"}
                  className=" w-11 lg:w-8 flex items-center bg-dark text-light p-3 lg:p-1.5 rounded-full m-1 text-lg font-semibold hover:bg-primary hover:text-dark border-2 border-solid border-transparent hover:border-dark"
                  whileHover={{ scale: 0.9 }}
                >
                  <SiFiverr />
                </MotionLink>
                <MotionLink
                  href="https://www.upwork.com/freelancers/~01d2a96f87e012c4c1"
                  target={"_blank"}
                  className=" w-11 lg:w-8 flex items-center bg-dark text-light p-3 lg:p-1.5 rounded-full m-1 text-lg font-semibold hover:bg-primary hover:text-dark border-2 border-solid border-transparent hover:border-dark"
                  whileHover={{ scale: 0.9 }}
                >
                  <SiUpwork />
                </MotionLink>
              </div>
            </div>
            <div className="images lg:hidden md:hidden sm:hidden w-1/2 h-[80%] absolute bottom-0 right-[100px]">
              <Image
                src="/Images/shape2.png"
                width={800} // Adjust width as needed
               height={800} // Adjust height as needed

                alt="Nsw"
                className="shape "
                priority="true"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
              <Image
                src="/Images/Me2.png"
                width={600} // Adjust width as needed
                height={600} // Adjust height as needed

                alt="Nsw"
                className="girl"
                priority="true"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
          </div>
        </Layout>
      </main>
  );
}
