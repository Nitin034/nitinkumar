import React from "react";
import Progress from "@ramonak/react-progress-bar";

const ProgressBar = () => {
  return (
    <div className=" 2xl:grid grid-cols-2 gap-10 2xl:mx-10 xs:mx-2  sm:mx-2  flex xl:flex-col lg:grid-cols-1 lg:flex-col items-center justify-between">
      <div className="z-50 items-center w-max mt-20 p-10 gap-10  shadow-2xl shadow-dark m-3 rounded-xl dark:shadow-light dark:text-primaryback ">
        <div className="w-80 xs:w-52  lg:w-[30rem] md:w-96">
          <p>Html/CSS</p>
          <Progress completed={96} bgColor="#2896b2" animateOnRender={true} />
        </div>
        <div className="w-80 xs:w-52  lg:w-[30rem] md:w-96">
          <p>BootStrap</p>
          <Progress completed={95} bgColor="#2896b2" animateOnRender={true} />
        </div>
        <div className="w-80 xs:w-52  lg:w-[30rem] md:w-96">
          <p>Tailwind CSS </p>
          <Progress completed={95} bgColor="#2896b2" animateOnRender={true} />
        </div>
        <div className="w-80 xs:w-52  lg:w-[30rem] md:w-96">
          <p>JavaScript</p>
          <Progress completed={85} bgColor="#2896b2" animateOnRender={true} />
        </div>
        <div className="w-80 xs:w-52  lg:w-[30rem] md:w-96">
          <p>React js</p>
          <Progress completed={85} bgColor="#2896b2" animateOnRender={true} />
        </div>
      </div>
      <div className="z-50 items-center w-max mt-20 p-10 gap-10  shadow-2xl  shadow-dark m-3 rounded-xl dark:shadow-light dark:text-primaryback ">
        <div className="w-80 xs:w-52  lg:w-[30rem] md:w-96">
          <p>Next.js</p>
          <Progress completed={80} bgColor="#2896b2" animateOnRender={true} />
        </div>
        <div className="w-80 xs:w-52  lg:w-[30rem] md:w-96">
          <p>Node.js</p>
          <Progress completed={80} bgColor="#2896b2" animateOnRender={true} />
        </div>
        <div className="w-80 xs:w-52  lg:w-[30rem] md:w-96">
          <p>Express.js</p>
          <Progress completed={70} bgColor="#2896b2" animateOnRender={true} />
        </div>
        <div className="w-80 xs:w-52  lg:w-[30rem] md:w-96">
          <p>Type script</p>
          <Progress completed={60} bgColor="#2896b2" animateOnRender={true} />
        </div>
        <div className="w-80 xs:w-52  lg:w-[30rem] md:w-96">
          <p>Mongo Db</p>
          <Progress completed={75} bgColor="#2896b2" animateOnRender={true} />
        </div>
      </div>
      <div className="z-50 items-center w-max mt-20  p-10 gap-10   shadow-2xl  shadow-dark m-3 rounded-xl dark:shadow-light dark:text-primaryback">
        <div className="w-80 xs:w-52  lg:w-[30rem] md:w-96">
          <p>Figma</p>
          <Progress completed={70} bgColor="#2896b2" animateOnRender={true} />
        </div>
        <div className="w-80 xs:w-52  lg:w-[30rem] md:w-96">
          <p>Blender</p>
          <Progress completed={50} bgColor="#2896b2" animateOnRender={true} />
        </div>
        <div className="w-80 xs:w-52  lg:w-[30rem] md:w-96">
          <p>Canva </p>
          <Progress completed={65} bgColor="#2896b2" animateOnRender={true} />
        </div>
        <div className="w-80 xs:w-52  lg:w-[30rem] md:w-96">
          <p>light room</p>
          <Progress completed={50} bgColor="#2896b2" animateOnRender={true} />
        </div>
        <div className="w-80 xs:w-52  lg:w-[30rem] md:w-96">
          <p>DaVinci Resolve</p>
          <Progress completed={40} bgColor="#2896b2" animateOnRender={true} />
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
