import React from "react";
import Link from "next/link";

const Resume = () => {
  return (
    <main className="w-full h-auto flex flex-col items-center justify-between dark:text-light ">
      <div className="lg:mx-2">
        <div>
          <h1 className="font-bold text-6xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl flex items-center justify-center">
            Nitin Kumar
          </h1>
          <h4 className="font-medium text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm xs:text-xs flex items-center justify-center">
            www.nitinkumar.in
          </h4>
          <span className="font-medium text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm xs:text-xs flex items-center justify-center">
            EMAIL - 12nitinkumaryd@gmail.com | CONTACT - 6388079991
          </span>
          <hr className="w-full  my-5 lg:my-3" />
        </div>
        <div className=" grid w-full grid-cols-2  ">
          <div className="">
            <div>
              <h2 className="text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm xs:text-xs lg:mt-2 mt-4 text-dark/50 dark:text-light/50">
                EDUCATION
              </h2>
              <h4 className="text-xl xl:text-lg lg:text-base md:text-sm sm:text-xs xs:text-[10px] font-semibold mt-1">
                Jaipur National University
              </h4>
              <h4 className="text-base xl:text-sm lg:text-xs md:text-[10px] sm:text-[8px]   font-semibold">
                B.tech | Computer Science
              </h4>
              <p className=" text-dark/70 dark:text-light/70 xl:text-sm lg:text-xs md:text-[9px] sm:text-[7px] ">
                July 2022 | India
              </p>

              <h4 className="text-xl xl:text-lg lg:text-base md:text-sm sm:text-xs xs:text-[10px] font-semibold mt-2">
                Saraswati Vidya Mandir
              </h4>
              <h4 className="text-base xl:text-sm lg:text-xs md:text-[10px] sm:text-[8px]  font-semibold">
                12TH | 87.4%
              </h4>
              <p className=" text-dark/70 dark:text-light/70 xl:text-sm lg:text-xs md:text-[9px] sm:text-[7px] ">
                June 2017 | India
              </p>

              <h4 className="text-xl xl:text-lg lg:text-base md:text-sm sm:text-xs xs:text-[10px] font-semibold mt-2">
                Saraswati Vidya Mandir
              </h4>
              <h4 className="text-base xl:text-sm lg:text-xs md:text-[10px] sm:text-[8px]  font-semibold">
                10TH | 84.16%
              </h4>
              <p className=" text-dark/70 dark:text-light/70 xl:text-sm lg:text-xs md:text-[9px] sm:text-[7px] ">
                June 2015 | India
              </p>
            </div>
            <div>
              <h2 className="text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm xs:text-xs lg:mt-2 mt-4 text-dark/50 dark:text-light/50">
                LINKS
              </h2>
              <Link
                href="/www.nitinkumar.com"
                className="text-dark dark:text-light flex xl:text-sm lg:text-xs md:text-[11px] sm:text-[9px]"
              >
                Portfolio://nitinkumar
              </Link>
              <p className="text-[10px] text-dark/70 dark:text-light/70 xl:text-sm lg:text-xs md:text-[5px] sm:text-[4px]">
                Login email - demoemail@gmail.com | Password - Goodworknitin
              </p>
              <Link
                href="https://www.linkedin.com/in/nitinkumaryd67/"
                className="text-dark dark:text-light flex xl:text-sm lg:text-xs md:text-[9px] sm:text-[7px] "
              >
                Linkedln://nitinkumar
              </Link>
              <Link
                href="https://github.com/Nitin034"
                className="text-dark dark:text-light flex xl:text-sm lg:text-xs md:text-[9px] sm:text-[7px] "
              >
                GitHub://nitinkumar
              </Link>
              <Link
                href="https://instagram.com/never_settle_67?igshid=MzNlNGNkZWQ4Mg=="
                className="text-dark dark:text-light flex xl:text-sm lg:text-xs md:text-[9px] sm:text-[7px] "
              >
                Instagram://nitinkumar
              </Link>
              <Link
                href="/Contect"
                className="text-dark dark:text-light flex xl:text-sm lg:text-xs md:text-[9px] sm:text-[7px] "
              >
                Facebook://nitinkumar
              </Link>
            </div>
            <div>
              <h2 className="text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm xs:text-xs lg:mt-2 mt-4 text-dark/50 dark:text-light/50">
                SKILLS
              </h2>
              <h4 className="text-xl xl:text-lg lg:text-base md:text-sm sm:text-xs xs:text-[10px] font-semibold mt-1">
                PROGRAMMING
              </h4>
              <h4 className="text-base xl:text-sm lg:text-xs md:text-[10px] sm:text-[8px]  font-semibold">
                Over 10,000+ lines.
              </h4>
              <p className="text-lg text-dark dark:text-light xl:text-sm lg:text-xs md:text-[9px] sm:text-[7px] ">
                Html/Css • JavaScript • BootStrap{" "}
              </p>
              <p className="text-lg text-dark dark:text-light xl:text-sm lg:text-xs md:text-[9px] sm:text-[7px] ">
                TailwindCss • React.Js •Next.js • Redux
              </p>
              <p className="text-lg text-dark dark:text-light xl:text-sm lg:text-xs md:text-[9px] sm:text-[7px] ">
                Express.js • Node.js • Mongo Db •SQL
              </p>
            </div>
            <div className="mb-10">
              <h2 className="text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm xs:text-xs lg:mt-2 mt-4 text-dark/50 dark:text-light/50">
                OTHER
              </h2>
              <p className="text-lg text-dark dark:text-light xl:text-sm lg:text-xs md:text-[9px] sm:text-[7px] ">
                Git • Vs Studio • Post man{" "}
              </p>
              <p className="text-lg text-dark dark:text-light xl:text-sm lg:text-xs md:text-[9px] sm:text-[7px] ">
                Blender • Canva • Figma{" "}
              </p>

              <h4 className="text-xl xl:text-lg lg:text-base md:text-sm sm:text-xs xs:text-[10px] font-semibold mt-1">
                Freelancing Experience - 1.5 Year
              </h4>
            </div>
          </div>
          <div className="mb-10">
            <div>
              <h2 className="text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm xs:text-xs lg:mt-2 mt-4 text-dark/50 dark:text-light/50">
                EXPERIENCE
              </h2>
              <h4 className="text-xl xl:text-lg lg:text-base md:text-sm sm:text-xs xs:text-[10px] font-semibold mt-1">
                Total Experience - 9* Months
              </h4>
              <div>
                <h2 className="text-xl xl:text-lg lg:text-base md:text-sm sm:text-xs xs:text-[10px] font-semibold mt-4 text-dark dark:text-light inline-block">
                  COMPANY 1
                </h2>
                <p className="text-lg text-dark dark:text-light inline-block xl:text-sm lg:text-xs md:text-[9px] sm:text-[7px] ">
                  {" "}
                  | Cat Desk & It Desk{" "}
                </p>
                <p className=" text-dark/70 dark:text-light/70 xl:text-sm lg:text-xs md:text-[9px] sm:text-[7px] ">
                  November 2022 - May 2023 | Remote India
                </p>
                <div className="xl:text-sm lg:text-xs md:text-[9px] sm:text-[7px]">
                  (Internship)
                  <p>
                    •Worked with JavaScript team and Understand how to build
                    Complex site
                  </p>
                  <p>•Designed and Create A full Front-end Website</p>
                  <p>•Understanding using of Hokes and components</p>
                  <p>•Started with React.js using React.router</p>
                  <p>
                    •Managing Ui Using HTML, CSS JavaScript, TailwindCss and
                    React.js
                  </p>
                  <p>
                    •Creating reusable components to optimize code and speed of
                    React.js
                  </p>
                </div>
                <h2 className="text-xl xl:text-lg lg:text-base md:text-sm sm:text-xs xs:text-[10px] font-semibold mt-4 text-dark dark:text-light inline-block">
                  COMPANY 2
                </h2>
                <p className="text-lg text-dark dark:text-light inline-block xl:text-sm lg:text-xs md:text-[9px] sm:text-[7px] ">
                  {" "}
                  | Aasman Foundation{" "}
                </p>
                <p className=" text-dark/70 dark:text-light/70 xl:text-sm lg:text-xs md:text-[9px] sm:text-[7px] ">
                  June 2022 - September 2022 | Remote India
                </p>
                <div className="xl:text-sm lg:text-xs md:text-[9px] sm:text-[7px]">
                  (Internship)
                  <p>
                    •Worked with graphics team and Understand how to build
                    Advertisement Poster
                  </p>
                  <p>•Designed graphics and Ux using Blender and Canva</p>
                  <p>•Understanding using of proper color and fonts</p>
                </div>
                <div>
                  <h2 className="text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm xs:text-xs lg:mt-2 mt-4 text-dark/50 dark:text-light/50">
                    PROJECTS
                  </h2>
                  <h2 className="text-xl xl:text-lg lg:text-base md:text-sm sm:text-xs xs:text-[10px] font-semibold mt-4 text-dark dark:text-light inline-block">
                    NeverSettle67world{" "}
                  </h2>
                  <p className="text-lg text-dark dark:text-light inline-block xl:text-sm lg:text-xs md:text-[9px] sm:text-[7px] ">
                    {" "}
                    | FULL STACK BASSED PROJECT{" "}
                  </p>
                  <p className=" text-dark/70 dark:text-light/70 xl:text-sm lg:text-xs md:text-[9px] sm:text-[7px] ">
                    CheckOut Instagam and Official Website build from screch
                  </p>
                  <h2 className="text-xl xl:text-lg lg:text-base md:text-sm sm:text-xs xs:text-[10px] font-semibold mt-4 text-dark dark:text-light inline-block">
                    Clich Fit Gym{" "}
                  </h2>
                  <p className="text-lg text-dark dark:text-light inline-block xl:text-sm lg:text-xs md:text-[9px] sm:text-[7px] ">
                    {" "}
                    | FULL STACK BASSED PROJECT{" "}
                  </p>
                  <p className=" text-dark/70 dark:text-light/70 xl:text-sm lg:text-xs md:text-[9px] sm:text-[7px] ">
                    CheckOut Live project
                  </p>
                  <h2 className="text-xl xl:text-lg lg:text-base md:text-sm sm:text-xs xs:text-[10px] font-semibold mt-4 text-dark dark:text-light inline-block">
                    Cripto mining
                  </h2>
                  <p className="text-lg text-dark dark:text-light inline-block xl:text-sm lg:text-xs md:text-[9px] sm:text-[7px] ">
                    {" "}
                    | API BASSED PROJECT{" "}
                  </p>
                  <p className=" text-dark/70 dark:text-light/70 xl:text-sm lg:text-xs md:text-[9px] sm:text-[7px] ">
                    CheckOut code on GitHub
                  </p>
                  <h2 className="text-xl xl:text-lg lg:text-base md:text-sm sm:text-xs xs:text-[10px] font-semibold mt-4 text-dark dark:text-light inline-block">
                    Spotyfiy
                  </h2>
                  <p className="text-lg text-dark dark:text-light inline-block xl:text-sm lg:text-xs md:text-[9px] sm:text-[7px] ">
                    {" "}
                    | API BASSED PROJECT{" "}
                  </p>
                  <p className=" text-dark/70 dark:text-light/70 xl:text-sm lg:text-xs md:text-[9px] sm:text-[7px] ">
                    CheckOut code on GitHub
                  </p>
                  <h2 className="text-xl xl:text-lg lg:text-base md:text-sm sm:text-xs xs:text-[10px] font-semibold mt-4 text-dark dark:text-light inline-block">
                    News{" "}
                  </h2>
                  <p className="text-lg text-dark dark:text-light inline-block xl:text-sm lg:text-xs md:text-[9px] sm:text-[7px] ">
                    {" "}
                    | API BASSED PROJECT{" "}
                  </p>
                  <p className=" text-dark/70 dark:text-light/70 xl:text-sm lg:text-xs md:text-[9px] sm:text-[7px] ">
                    CheckOut code on GitHub
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Resume;
