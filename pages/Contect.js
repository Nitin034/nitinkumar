import React from "react";
import { GrLinkedin } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { BiLogoWhatsappSquare } from "react-icons/bi";
import { FaInstagramSquare } from "react-icons/fa";
import Image from "next/image";

const Help = () => {
  return (
    <section className="dark:bg-dark dark:text-light">
      <div className="container max-w-5xl px-4 py-12 mx-auto">
        <div className="grid gap-4 mx-4 2xl:grid-cols-12">
          <div className="col-span-12 2xl:col-span-3">
            <div className="text-center 2xl:text-left mb-14  before:block xs:before:w-14 before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto 2xl:before:mx-0 before:dark:bg-primaryback">
              <h3 className="text-3xl font-semibold">Nitin Yadav</h3>
              <span className="text-sm font-bold tracking-wider uppercase dark:text-light">
                Never settle word
              </span>
            </div>
          </div>
          <div className="relative col-span-12 px-4 space-y-6 2xl:col-span-9">
            <div className="col-span-12 space-y-12 relative px-4 2xl:col-span-8 2xl:space-y-8 2xl:before:absolute 2xl:before:top-2 2xl:before:bottom-0 2xl:before:w-0.5 2xl:before:-left-3 before:dark:bg-primaryDark">
              <div className="flex flex-col 2xl:relative 2xl:before:absolute 2xl:before:top-2 2xl:before:w-4 2xl:before:h-4 2xl:before:rounded-full 2xl:before:left-[-35px] 2xl:before:z-[1] before:dark:bg-primaryback">
                <h3
                  href="https://www.linkedin.com/in/nitinkumaryd67/"
                  className="text-3xl font-semibold tracking-wide"
                >
                  <GrLinkedin className="text-2xl flex" />
                  Linkedin{" "}
                </h3>
                <a
                  href="https://www.linkedin.com/in/nitinkumaryd67/"
                  className="text-xs tracking-wide  dark:text-primaryDark"
                >
                  nitinkumaryd67
                </a>
                <Image className="w-52  my-10 " src="/Images/linkqr.png" alt="" />
              </div>
              <div className="flex flex-col 2xl:relative 2xl:before:absolute 2xl:before:top-2 2xl:before:w-4 2xl:before:h-4 2xl:before:rounded-full 2xl:before:left-[-35px] 2xl:before:z-[1] before:dark:bg-primaryback">
                <h3
                  href="https://github.com/Nitin034"
                  className="text-3xl font-semibold tracking-wide"
                >
                  <BsGithub className="text-3xl flex" />
                  Github
                </h3>
                <a
                  href="https://github.com/Nitin034"
                  className="text-xs tracking-wide  dark:text-primaryDark"
                >
                  Nitin034
                </a>
                <Image
                  className="w-52  my-10 "
                  src="/Images/githubQr.png"
                  alt=""
                />
              </div>
              <div className="flex flex-col 2xl:relative 2xl:before:absolute 2xl:before:top-2 2xl:before:w-4 2xl:before:h-4 2xl:before:rounded-full 2xl:before:left-[-35px] 2xl:before:z-[1] before:dark:bg-primaryback">
                <h3
                  href="https://instagram.com/never_settle_67?igshid=MzNlNGNkZWQ4Mg=="
                  className="text-3xl font-semibold tracking-wide"
                >
                  <FaInstagramSquare className="text-3xl flex" />
                  Instagram
                </h3>
                <a
                  href="https://instagram.com/never_settle_67?igshid=MzNlNGNkZWQ4Mg=="
                  className="text-xs tracking-wide  dark:text-primaryDark"
                >
                  never_settle_67
                </a>
                <Image
                  className="w-52  my-10 "
                  src="/Images/instagramqr.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col 2xl:relative 2xl:before:absolute 2xl:before:top-2 2xl:before:w-4 2xl:before:h-4 2xl:before:rounded-full 2xl:before:left-[-35px] 2xl:before:z-[1] before:dark:bg-primaryback">
                <h3 className="text-3xl font-semibold tracking-wide">
                  <MdEmail className="text-3xl flex" />
                  Email
                </h3>
                <a
                  href="https://12nitinkumaryd@gmail.com"
                  className="text-xs tracking-wide  = dark:text-primaryDark"
                >
                  12nitinkumaryd@gmail.com
                </a>
                <Image
                  className="w-52  my-10 "
                  src="/Images/emailQr.png"
                  alt=""
                />
              </div>
              <div className="flex flex-col 2xl:relative 2xl:before:absolute 2xl:before:top-2 2xl:before:w-4 2xl:before:h-4 2xl:before:rounded-full 2xl:before:left-[-35px] 2xl:before:z-[1] before:dark:bg-primaryback">
                <h3 className="text-3xl font-semibold tracking-wide">
                  <BiLogoWhatsappSquare className="text-4xl flex" />
                  Whatsapp
                </h3>
                <a
                  href="https://whatsapp"
                  className="text-xs tracking-wide uppercase dark:text-primaryDark"
                >
                  Nitin Yadav
                </a>
                <Image
                  className="w-52  my-10 "
                  src="/Images/whatappqr.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Help;
