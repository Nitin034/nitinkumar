import React from "react";
import Layout from "../Components/Layout";
import AnimatedText from "../Components/AnimatedText";
import { motion } from "framer-motion";
import {
  TbDevicesCode,
  TbPencilStar,
  TbDeviceMobileCheck,
  TbSettingsCode,
  TbWorldWww,
} from "react-icons/tb";
import { SlSocialInstagram } from "react-icons/sl";
import { GiMechanicGarage } from "react-icons/gi";
import { SiPagespeedinsights } from "react-icons/si";
import { RiSeoLine } from "react-icons/ri";
import { BiLogoFigma } from "react-icons/bi";

const Service = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-3 shadow-dark cursor-pointer absolute dark:text-light dark:bg-primary lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-light xs:dark:text-light xs:font-bold lg:p-6 md:p-4 xs:text-xs xs:p-2"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
    >
      {name}
    </motion.div>
  );
};

const Services = () => {
  return (
    <main className=" flex w-full flex-col items-center justify-center">
      <Layout className="-mt-32 lg:mt-4">
        <AnimatedText
          text="Services"
          className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
        />
        <div
          className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightlg lg:dark:bg-circularDarklg
            md:bg-circularLightMd md:dark:bg-circularDarkMd
            sm:bg-circularLightSm sm:dark:bg-circularDarkSm"
        >
          <motion.div
            className="flex items-center justify-center rounded-full font-semibold  dark:text-light dark:bg-primary bg-dark text-light p-3 shadow-dark cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            What i Do.
          </motion.div>
          <Service name="UI/UX design" x="-20vw" y="2vw" />
          <Service name="Web Development" x="-5vw" y="-10vw" />
          <Service name="Web Branding" x="20vw" y="6vw" />
          <Service name="Web Animation" x="0vw" y="12vw" />
          <Service name="Web Testing for Perfection " x="-20vw" y="-15vw" />
          <Service name="Web Hosting" x="15vw" y="-12vw" />
          <Service name="Web Responsiveness" x="32vw" y="-5vw" />
          <Service name="Web SEO" x="0vw" y="-20vw" />
          <Service name="Web Logo Design" x="-25vw" y="18vw" />
          <Service name="Maintenance" x="18vw" y="18vw" />
        </div>
      </Layout>
      <div className="mx-10">
        <main className="w-full mb-16 flex flex-col items-center justify-center">
          <AnimatedText
            text="What I Do!"
            className="  lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <h1 className="text-xs text-dark dark:text-light flex items-center justify-center mb-16">
            I offer the full spectrum of services to help org work better
          </h1>

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-3 sm:col-span-12 md:col-span-6 lg:col-span-6 text-dark dark:text-light  ">
              <div className=" shadow-primaryDark shadow-inner p-8">
                <TbDevicesCode className="w-20 h-20 flex text-primaryback items-center mx-auto" />
                <h1 className="text-xl font-bold mt-5 text-primaryDark ">
                  Web Development
                </h1>
                <p className="my-2 p-1 h-52 overflow-hidden  hover:overflow-y-scroll ">
                  I provide Crafting responsive and dynamic web experiences with
                  HTML, CSS, and JavaScript, powered by the sleek design of
                  Tailwind CSS and the interactivity of React and Next.js, all
                  seamlessly orchestrated by Node.js on the server side.
                </p>

                <button className="my-3 mx-auto flex border px-3 py-2 text-xs hover:border-2 font-bold border-primary">
                  Hire Me
                </button>
              </div>
            </div>
            <div className="col-span-3 sm:col-span-12 md:col-span-6 lg:col-span-6 text-dark dark:text-light  ">
              <div className=" shadow-primaryDark shadow-inner p-8">
                <TbPencilStar className="w-20 h-20 flex text-primaryback items-center mx-auto" />
                <h1 className="text-xl font-bold mt-5 text-primaryDark ">
                  UI/UX design
                </h1>
                <p className="my-2 p-1 h-52 overflow-hidden  hover:overflow-y-scroll">
                  I excel in providing top-notch UI/UX design services, crafting
                  seamless user experiences with precision, and employing the
                  creative power of Figma and Canva to bring your vision to
                  life.
                </p>

                <button className="my-3 mx-auto flex border px-3 py-2 text-xs hover:border-2 font-bold border-primary">
                  Hire Me
                </button>
              </div>
            </div>
            <div className="col-span-3 sm:col-span-12 md:col-span-6 lg:col-span-6 text-dark dark:text-light  ">
              <div className=" shadow-primaryDark shadow-inner p-8">
                <SlSocialInstagram className="w-20 h-20 flex text-primaryback items-center mx-auto" />
                <h1 className="text-xl font-bold mt-5 text-primaryDark ">
                  Web Branding
                </h1>
                <p className="my-2 p-1 h-52 overflow-hidden  hover:overflow-y-scroll">
                  I offer the finest web branding services, tailor-made to
                  elevate your websites identity and resonate with your
                  audience, turning your digital presence into an unforgettable
                  brand story.
                </p>

                <button className="my-3 mx-auto flex border px-3 py-2 text-xs hover:border-2 font-bold border-primary">
                  Hire Me
                </button>
              </div>
            </div>
            <div className="col-span-3 sm:col-span-12 md:col-span-6 lg:col-span-6 text-dark dark:text-light  ">
              <div className=" shadow-primaryDark shadow-inner p-8">
                <GiMechanicGarage className="w-20 h-20 flex text-primaryback items-center mx-auto" />
                <h1 className="text-xl font-bold mt-5 text-primaryDark ">
                  Web Animation
                </h1>
                <p className="my-2 p-1 h-52 overflow-hidden  hover:overflow-y-scroll">
                  I specialize in delivering exceptional 3D web animation
                  services, transforming your website into a captivating visual
                  experience that leaves a lasting impression.
                </p>

                <button className="my-3 mx-auto flex border px-3 py-2 text-xs hover:border-2 font-bold border-primary">
                  Hire Me
                </button>
              </div>
            </div>
            <div className="col-span-3 sm:col-span-12 md:col-span-6 lg:col-span-6 text-dark dark:text-light  ">
              <div className=" shadow-primaryDark shadow-inner p-8">
                <SiPagespeedinsights className="w-20 h-20 flex text-primaryback items-center mx-auto" />
                <h1 className="text-xl font-bold mt-5 text-primaryDark ">
                  Web Testing for Perfection
                </h1>
                <p className="my-2 p-1 h-52 overflow-hidden  hover:overflow-y-scroll">
                  I excel in providing top-tier web testing and optimizing
                  website performance, ensuring your website not only meets
                  coding standards but also delivers a seamless and
                  lightning-fast user experience
                </p>

                <button className="my-3 mx-auto flex border px-3 py-2 text-xs hover:border-2 font-bold border-primary">
                  Hire Me
                </button>
              </div>
            </div>
            <div className="col-span-3 sm:col-span-12 md:col-span-6 lg:col-span-6 text-dark dark:text-light  ">
              <div className=" shadow-primaryDark shadow-inner p-8">
                <TbWorldWww className="w-20 h-20 flex text-primaryback items-center mx-auto" />
                <h1 className="text-xl font-bold mt-5 text-primaryDark ">
                  Web Hosting
                </h1>
                <p className="my-2 p-1 h-52 overflow-hidden  hover:overflow-y-scroll">
                  I offer premium web hosting services that go beyond coding,
                  providing a reliable and secure foundation for your website,
                  ensuring its always online and performing at its best.
                </p>

                <button className="my-3 mx-auto flex border px-3 py-2 text-xs hover:border-2 font-bold border-primary">
                  Hire Me
                </button>
              </div>
            </div>
            <div className="col-span-3 sm:col-span-12 md:col-span-6 lg:col-span-6 text-dark dark:text-light  ">
              <div className=" shadow-primaryDark shadow-inner p-8">
                <TbDeviceMobileCheck className="w-20 h-20 flex text-primaryback items-center mx-auto" />
                <h1 className="text-xl font-bold mt-5 text-primaryDark ">
                  Web Responsiveness
                </h1>
                <p className="my-2 p-1 h-52 overflow-hidden  hover:overflow-y-scroll">
                  I specialize in crafting websites with unparalleled web
                  responsiveness, guaranteeing your site adapts flawlessly to
                  every device and screen size, offering a seamless user
                  experience for all visitors.
                </p>

                <button className="my-3 mx-auto flex border px-3 py-2 text-xs hover:border-2 font-bold border-primary">
                  Hire Me
                </button>
              </div>
            </div>
            <div className="col-span-3 sm:col-span-12 md:col-span-6 lg:col-span-6 text-dark dark:text-light  ">
              <div className=" shadow-primaryDark shadow-inner p-8">
                <RiSeoLine className="w-20 h-20 flex text-primaryback items-center mx-auto" />
                <h1 className="text-xl font-bold mt-5 text-primaryDark ">
                  Web SEO
                </h1>
                <p className="my-2 p-1 h-52 overflow-hidden  hover:overflow-y-scroll">
                  I excel in enhancing web SEO for your website through precise
                  coding techniques, ensuring your online presence ranks at the
                  top, attracting organic traffic and maximizing your digital
                  visibility.
                </p>

                <button className="my-3 mx-auto flex border px-3 py-2 text-xs hover:border-2 font-bold border-primary">
                  Hire Me
                </button>
              </div>
            </div>
            <div className="col-span-3 sm:col-span-12 md:col-span-6 lg:col-span-6 text-dark dark:text-light  ">
              <div className=" shadow-primaryDark shadow-inner p-8">
                <BiLogoFigma className="w-20 h-20 flex text-primaryback items-center mx-auto" />
                <h1 className="text-xl font-bold mt-5 text-primaryDark ">
                  Web Logo Design
                </h1>
                <p className="my-2 p-1 h-52 overflow-hidden  hover:overflow-y-scroll">
                  I offer a comprehensive package of services, combining expert
                  website logo design with seamless website coding, ensuring
                  your digital identity not only looks exceptional but functions
                  flawlessly.
                </p>

                <button className="my-3 mx-auto flex border px-3 py-2 text-xs hover:border-2 font-bold border-primary">
                  Hire Me
                </button>
              </div>
            </div>
            <div className="col-span-3 sm:col-span-12 md:col-span-6 lg:col-span-6 text-dark dark:text-light  ">
              <div className=" shadow-primaryDark shadow-inner p-8">
                <TbSettingsCode className="w-20 h-20 flex text-primaryback items-center mx-auto" />
                <h1 className="text-xl font-bold mt-5 text-primaryDark ">
                  Maintenance
                </h1>
                <p className="my-2 p-1 h-52 overflow-hidden  hover:overflow-y-scroll">
                  I specialize in enhancing website meaningfulness, whether you
                  have an existing site or are starting fresh with me, ensuring
                  your digital presence conveys a powerful message and engages
                  your audience effectively. I offer a full suite of services to
                  achieve this.
                </p>

                <button className="my-3 mx-auto flex border px-3 py-2 text-xs hover:border-2 font-bold border-primary">
                  Hire Me
                </button>
              </div>
            </div>
            {/* <div className="col-span-3 sm:col-span-12 md:col-span-6 lg:col-span-6 text-dark dark:text-light  ">
             <div className=" shadow-primaryDark shadow-inner p-8">
             <TbPencilStar className="w-20 h-20 flex text-primaryback items-center mx-auto"/> 
             <h1 className="text-xl font-bold mt-5 text-primaryDark ">Online Your bussness</h1>
             <p className="my-2 p-1">Web development is the buildingand maintenance of websites; it's the work that happens behind the screen</p>

             <button className="my-3 mx-auto flex border px-3 py-2 text-xs hover:border-2 font-bold border-primary" >Hire Me</button>
             </div>
            </div> */}
          </div>
        </main>
      </div>
    </main>
  );
};

export default Services;
