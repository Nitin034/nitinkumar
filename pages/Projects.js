import React from "react";
import Layout from "../Components/Layout";
import AnimatedText from "../Components/AnimatedText";
import Link from "next/link";
import { GithubIcon, LinkArrow } from "../Components/lcons";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const MotionLink = motion(Link);

const FeaturedProject = ({
  type,
  title,
  summary,
  images = [],
  img,
  link,
  github,
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <article className="w-full flex items-center justify-between relative rounded-2xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 ">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <MotionLink
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
         <Slider {...settings}>
  {images.map((img, index) => (
    <Image
      key={index}
      src={img}
      alt={`${title}-${index}`}
      width={500} // Specify width
      height={300} // Specify height
      className="w-full h-auto"
    />
  ))}
</Slider>
      </MotionLink>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primary xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold  dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link
            href={github}
            target="_blank"
            className="w-10 dark:text-primaryback"
          >
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className=" flex ml-4  rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:text-primaryback sm:px-4 sm:text-base "
          >
            Visit Project
            <LinkArrow className=" w-4 m-1" />
          </Link>
        </div>
      </div>
    </article>
  );
};
const Project = ({ title, type, images = [], link, github }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark  dark:border-light  xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <MotionLink
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
         <Slider {...settings}>
  {images.map((img, index) => (
    <Image
      key={index}
      src={img}
      alt={`${title}-${index}`}
      width={500} // Specify width
      height={300} // Specify height
      className="w-full h-auto"
    />
          ))}
        </Slider>
      </MotionLink>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl lg:text-lg md:text-base ">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold  dark:text-light lg:text-2xl">
            {title}
          </h2>
        </Link>
        <div className=" w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className=" flex text-lg underline font-semibold dark:text-primaryback md:text-base "
          >
            Visit
            <LinkArrow className=" w-4 m-1" />
          </Link>
          <Link
            href={github}
            target="_blank"
            className="w-8 md:w-6 dark:text-primaryback"
          >
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination and Knowledge!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Official Learning tree school Website"
                images={[
                  "/Images/Ltspb11.png",
                  "/Images/Ltspb.1.png",
                  "/Images/Ltspb-2.png",
                ]}
                summary="Visit LTSPB School's website, meticulously built by me using JavaScript and Next.js for both the frontend and backend development. The backend is powered by MongoDB, while Cloudinary efficiently manages image storage. Authentication is handled securely with Resend Mail Verifier. The website features sleek animations powered by Shadcn and Aeternity UI, ensuring an engaging user experience. It includes a complete staff management system, a full student management system, and an advanced admissions inquiry system. Designed for top SEO ranking and optimized for fast loading times, this site ensures both functionality and user satisfaction."
                link="https://github.com/Nitin034/Ltspbh"
                github="https://github.com/Nitin034/Ltspbh"
                type="Live Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Popular cryptocurrency in world applications"
                images={[
                  "/Images/criptoApp.png",
                  "/Images/cripto-2.png",
                  "/Images/cripto-3.png",
                  "/Images/cripto-4.png",
                ]}
                link="/https://github.com/Nitin034/www.nswCrypto.com"
                github="https://github.com/Nitin034/www.nswCrypto.com"
                type="Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Full stack job portal"
                images={[
                  "/Images/jobport.png",
                  "/Images/jobport-2.png",
                  "/Images/jobport-3.png",
                ]}
                link="/https://github.com/Nitin034/Jobportal"
                github="https://github.com/Nitin034/Jobportal"
                type="Project"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Official Tsm Fitness Gym Jaipur"
                images={[
                  "/Images/imgym-1.png",
                  "/Images/tsmgym-2.png",
                  "/Images/tsmgym-3.png",
                  "/Images/tsmgym-4.png",
                ]}
                summary="Visit TSM Gym Jaipur's website, built and maintained by me using JavaScript, Next.js, and Tailwind CSS for a smooth and modern user experience. I implemented Nodemailer for secure email verification. The site features a comprehensive one-to-one online training platform and a full eCommerce store where you can purchase supplements and gym equipment. Payments are handled seamlessly via Razorpay, and I have integrated a delivery pin code system for easy and accurate shipping. The website ensures a complete fitness and shopping experience."
                link="/"
                github="/"
                type="Live Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Marvel Fun game "
                images={[
                  "/Images/game.png",
                  "/Images/game.png",
                  "/Images/game.png",
                ]}
                img="/Images/game.png"
                link="/https://github.com/Nitin034/www.game.io.in"
                github="https://github.com/Nitin034/www.game.io.in"
                type="Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Html quiz for interview"
                images={["/Images/ques .png", "/Images/ques .png"]}
                link="/"
                github="/"
                type="Project"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="NSW News Web"
                images={[
                  "/Images/news-1.png",
                  "/Images/news-2.png",
                  "/Images/news-4.png",
                ]}
                summary="Visit my news website, a project built using React.js and Bootstrap as part of a knowledge-based initiative. This API-driven platform leverages the News API (developer version) to deliver top stories across various sectors such as sports, stocks, gaming, entertainment, and today’s top headlines. While the API is limited due to its developer version, you can still explore a wide range of articles and news from diverse categories. Enjoy a sleek, modern interface for staying informed with real-time updates."
                link="/"
                github="/"
                type="Live Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Chat Application "
                images={[
                  "/Images/chatApp.png",
                  "/Images/chatApp-2.png",
                ]}
                img="/Images/game.png"
                link="/"
                github="/"
                type="Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Alarm "
                images={["/Images/Alarm.png", "/Images/Alam 2.png"]}
                link="/"
                github="/"
                type="Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Today Top Jokes"
                images={[
                  "/Images/Jokebook.png",
                  "/Images/jokebook-2.png",
                ]}
                link="/https://github.com/Nitin034/www.nswjokes.com"
                github="https://github.com/Nitin034/www.nswjokes.com"
                type="Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Ture feedback aplication"
                images={["/Images/Messageapp.png", "/Images/Messageapp.png"]}
                link="/"
                github="/"
                type="Project"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
