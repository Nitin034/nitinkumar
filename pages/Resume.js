import React from "react";
import Link from "next/link";

/* ---------- your ORIGINAL class strings (unchanged), defined once ---------- */
const H2 =
  "text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm xs:text-xs lg:mt-2 mt-4 text-dark/50 dark:text-light/50";
const H4 =
  "text-xl xl:text-lg lg:text-base md:text-base sm:text-sm xs:text-sm font-semibold mt-1";
const H4_SM =
  "text-base xl:text-sm lg:text-xs md:text-sm sm:text-xs font-semibold";
const MUTED =
  "text-dark/70 dark:text-light/70 xl:text-sm lg:text-xs md:text-sm sm:text-xs";
const BODY =
  "text-lg text-dark dark:text-light xl:text-sm lg:text-xs md:text-sm sm:text-xs";
const COMPANY =
  "text-xl xl:text-lg lg:text-base md:text-base sm:text-sm xs:text-sm font-semibold mt-4 text-dark dark:text-light inline-block";
const LINK =
  "text-dark dark:text-light block break-all xl:text-sm lg:text-xs md:text-sm sm:text-xs";
const BULLETS = "xl:text-sm lg:text-xs md:text-sm sm:text-xs";

/* ---------- small building blocks ---------- */
const Bullets = ({ items }) => (
  <div className={BULLETS}>
    {items.map((text) => (
      <p key={text} className="flex gap-1">
        <span>•</span>
        <span>{text}</span>
      </p>
    ))}
  </div>
);

/* url is optional: with a url the company name becomes a link, without it plain text */
const Job = ({ company, url, role, client, dates, type, bullets }) => (
  <div>
    <h2 className={COMPANY}>
      {url ? (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:opacity-70"
        >
          {company}
        </a>
      ) : (
        company
      )}
    </h2>
    <p className={`${BODY} inline-block ml-2`}>| {role}</p>
    {client && <p className={MUTED}>{client}</p>}
    <p className={MUTED}>{dates}</p>
    {type && <p className={BULLETS}>({type})</p>}
    {bullets && <Bullets items={bullets} />}
  </div>
);

const Project = ({ name, kind, note }) => (
  <div>
    <h2 className={COMPANY}>{name}</h2>
    <p className={`${BODY} inline-block ml-2`}>| {kind}</p>
    <p className={MUTED}>{note}</p>
  </div>
);

const SkillGroup = ({ title, lines }) => (
  <>
    <h4 className={H4}>{title}</h4>
    {lines.map((line) => (
      <p key={line} className={BODY}>
        {line}
      </p>
    ))}
  </>
);

/* ---------- content ---------- */
const onixBullets = [
  "Designed and developed 100+ end-to-end ETL pipelines on the Hadoop ecosystem for daily to 15-minute refresh cycles, ingesting data from 10+ source servers, with a built-in audit framework that logs every pipeline run for monitoring and traceability",
  "Managed and stabilized 500+ daily production ETL jobs, reducing failures from 10+/day to 1–2/day through robust error handling and pipeline redesign",
  "Optimized 50+ long-running ETL pipelines from 1+ hour to 10–20 minutes, ensuring faster data availability for downstream regulatory reports and business teams",
  "Delivered end-to-end regulatory reports for 17 CDSL departments, covering daily and monthly SEBI compliance reports for business teams and Depository Participants (DPs), and prepared monthly data for Tableau dashboards in collaboration with the Tableau team",
  "Built reusable automation utilities for recurring data-handling and maintenance tasks, cutting manual effort from 30–40 minutes to under 10 minutes per operation and reducing the risk of manual errors",
];

const kanmotechBullets = [
  "Designed and automated 8 SSIS packages for recurring data extraction, transformation, and reporting workflows, reducing manual processing effort",
  "Contributed to a team-based data migration of approximately 3 billion records, performing source-to-target reconciliation and validation to ensure data accuracy and integrity",
  "Developed and maintained 2 CIMS regulatory reports consumed directly by RBI, ensuring compliance with regulatory requirements",
  "Handled data warehouse operations and production ETL support using Hue, covering scheduling, monitoring, debugging, performance optimization, and incident resolution to meet defined SLAs",
  "Worked with MIS, Business Analysts, Compliance, and technical teams to translate business requirements into reliable data and reporting solutions",
];

const catDeskBullets = [
  "Worked with JavaScript team and Understand how to build Complex site",
  "Designed and Create A full Front-end Website",
  "Understanding using of Hokes and components",
  "Started with React.js using React.router",
  "Managing Ui Using HTML, CSS JavaScript, TailwindCss and React.js",
  "Creating reusable components to optimize code and speed of React.js",
];

const aasmanBullets = [
  "Worked with graphics team and Understand how to build Advertisement Poster",
  "Designed graphics and Ux using Blender and Canva",
  "Understanding using of proper color and fonts",
];

const Resume = () => {
  return (
    <main className="w-full min-w-0 dark:text-light">
      <div className="w-full max-w-full min-w-0 lg:px-2">
        {/* ---------- HEADER ---------- */}
        <div>
          <h1 className="font-bold text-6xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl flex items-center justify-center">
            Nitin Kumar
          </h1>
          <h4 className="font-medium text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm xs:text-xs flex items-center justify-center">
            www.nitinkumar.in
          </h4>
          <span className="font-medium text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm xs:text-xs flex items-center justify-center text-center flex-wrap break-words">
            EMAIL - 12nitinkumaryd@gmail.com | CONTACT - +91 6388079991
          </span>
          <p className="mt-3 text-center italic text-lg xl:text-base lg:text-sm md:text-xs sm:text-[10px] xs:text-[9px]">
            Hadoop-ecosystem data engineer skilled in building, optimizing, and
            automating large-scale ETL pipelines, with regulatory reporting
            experience for SEBI and RBI.
          </p>
          <hr className="w-full  my-5 lg:my-3" />
        </div>

        <div className=" grid w-full max-w-full grid-cols-2 md:grid-cols-1 gap-x-6 lg:gap-x-4">
          {/* ================= LEFT COLUMN ================= */}
          <div className="min-w-0 break-words">
            {/* EDUCATION */}
            <div>
              <h2 className={H2}>EDUCATION</h2>
              <h4 className={H4}>Jaipur National University</h4>
              <h4 className={H4_SM}>B.tech | Computer Science</h4>
              <p className={MUTED}>July 2018 - July 2022 | India</p>

              <h4 className={`${H4} mt-2`}>Saraswati Vidya Mandir</h4>
              <h4 className={H4_SM}>12TH (PCM) | 87.4%</h4>
              <p className={MUTED}>June 2017 | India</p>

              <h4 className={`${H4} mt-2`}>Saraswati Vidya Mandir</h4>
              <h4 className={H4_SM}>10TH | 84.16%</h4>
              <p className={MUTED}>June 2015 | India</p>
            </div>

            {/* CERTIFICATIONS */}
            <div>
              <h2 className={H2}>CERTIFICATIONS</h2>
              <h4 className={H4}>ISMS (Information Security Management System)</h4>
              <p className={MUTED}>Salesforce | Certified with 90%</p>
              <h4 className={`${H4} mt-2`}>Ignite AI (AI Fundamentals)</h4>
              <p className={MUTED}>Onix | In partnership with Google</p>
              <h4 className={`${H4} mt-2`}>L100 - Birds (Data Validation Software)</h4>
              <p className={MUTED}>Onix | via LearnRush</p>
            </div>

            {/* SKILLS */}
            <div>
              <h2 className={H2}>SKILLS</h2>
              <SkillGroup
                title="DATA ENGINEERING"
                lines={[
                  "Hadoop • Hive • Impala • PySpark",
                  "Sqoop • Oozie • HDFS • Cloudera Manager",
                  "Python • SQL • Shell Scripting",
                  "Oracle • MySQL • SSIS • SSMS",
                  "Tableau • Linux • Git • Excel",
                ]}
              />
              <SkillGroup
                title="PROGRAMMING"
                lines={[
                  "Over 10,000+ lines.",
                  "Html/Css • JavaScript • BootStrap",
                  "TailwindCss • React.Js •Next.js • Redux",
                  "Express.js • Node.js • Mongo Db •SQL",
                ]}
              />
            </div>

            {/* OTHER */}
            <div>
              <h2 className={H2}>OTHER</h2>
              <p className={BODY}>Git • Vs Studio • Post man </p>
              <p className={BODY}>Blender • Canva • Figma </p>
            </div>

            {/* LINKS */}
            <div>
              <h2 className={H2}>LINKS</h2>
              <Link href="https://www.nitinkumar.in" className={LINK}>
                Portfolio://nitinkumar
              </Link>
              <p className="text-[10px] text-dark/70 dark:text-light/70 xl:text-sm lg:text-xs md:text-xs sm:text-[10px] break-words">
                Login email - demoemail@gmail.com | Password - Goodworknitin
              </p>
              <Link
                href="https://www.linkedin.com/in/nitinkumaryd67/"
                className={LINK}
              >
                Linkedln://nitinkumar
              </Link>
              <Link href="https://github.com/Nitin034" className={LINK}>
                GitHub://nitinkumar
              </Link>
              <Link
                href="https://instagram.com/never_settle_67?igshid=MzNlNGNkZWQ4Mg=="
                className={LINK}
              >
                Instagram://nitinkumar
              </Link>
              <Link href="/Contect" className={LINK}>
                Facebook://nitinkumar
              </Link>
            </div>

            {/* PROJECTS (moved under Links) */}
            <div className="mb-10">
              <h2 className={H2}>PROJECTS</h2>
              <Project
                name="Personal Portfolio Website"
                kind="FULL STACK BASSED PROJECT"
                note="Live on Vercel. Secure login, OTP email verification with resend option, live chat support, and separate fully functional user and admin panels. Built with Next.js, React, Node.js, MongoDB, Tailwind CSS, Framer Motion and Resend."
              />
              <Project
                name="Clich Fit Gym"
                kind="FULL STACK BASSED PROJECT"
                note="CheckOut Live project"
              />
              <Project
                name="E-commerce School Website (LTSPB)"
                kind="FULL STACK BASSED PROJECT"
                note="Product listings, cart and checkout using React, Node.js, Express, MongoDB and Tailwind CSS"
              />
              <Project
                name="Text Converter"
                kind="FULL STACK BASSED PROJECT"
                note="Text conversion tool using HTML, CSS, JavaScript, React and Node.js"
              />
              <Project
                name="Cripto mining"
                kind="API BASSED PROJECT"
                note="CheckOut code on GitHub"
              />
              <Project
                name="Spotyfiy"
                kind="API BASSED PROJECT"
                note="CheckOut code on GitHub"
              />
              <Project
                name="News"
                kind="API BASSED PROJECT"
                note="Fetches and displays live news articles using Next.js and Node.js/Express. CheckOut code on GitHub"
              />
            </div>
          </div>

          {/* ================= RIGHT COLUMN ================= */}
          <div className="mb-10 min-w-0 break-words md:order-first">
            <div>
              <h2 className={H2}>EXPERIENCE</h2>
              <h4 className={H4}>
                Total Experience - 2 Years (Data Engineering) + 9 Months
                Internships
              </h4>

              {/* Company links: put the real website of each company in url="..." */}
              <Job
                company="Onix Technology Services"
                url="https://www.onixnet.com/"
                role="Data Engineer"
                client="Client: Central Depository Services (India) Limited (CDSL), Mumbai | 30+ member team"
                dates="June 2025 - Present | Mumbai, India"
                bullets={onixBullets}
              />

              <Job
                company="Kanmotech Pvt Ltd"
                url="https://www.kanmotech.com/" 
                role="Software Engineer (ETL / Data Engineering)"
                client="Client: Suryoday Small Finance Bank Limited, Navi Mumbai"
                dates="October 2024 - June 2025 | Navi Mumbai, India"
                bullets={kanmotechBullets}
              />

              <Job
                company="Freelancing"
                role="Full Stack Developer"
                dates="Freelancing Experience - 1.5 Year"
              />

              <Job
                company="Cat Desk & It Desk"
                url="" /* TODO: add company website */
                role="Front-end Intern"
                dates="November 2022 - May 2023 | Remote India"
                type="Internship"
                bullets={catDeskBullets}
              />

              <Job
                company="Aasman Foundation"
                 url="" /* TODO: add company website */
                role="Graphics Intern"
                dates="June 2022 - September 2022 | Remote India"
                type="Internship"
                bullets={aasmanBullets}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Resume;