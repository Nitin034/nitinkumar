import React, { useState, useEffect } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const RoundedProgress = () => {
  const [percentage, setPercentage] = useState(0);
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  // Use useEffect to update the percentage after the component mounts
  useEffect(() => {
    const targetPercentage = 90; // Change this to your desired percentage
    const animationDuration = 1000; // Change this to control the animation speed (in milliseconds)

    // Animate the progress bar from 0% to the target percentage
    let startTime;
    function animate(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min(3, (timestamp - startTime) / animationDuration);
      setPercentage(progress * targetPercentage);
      if (progress < 1) requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }, []);
  useEffect(() => {
    const targetPercentage1 = 80; // Change this to your desired percentage
    const animationDuration1 = 800; // Change this to control the animation speed (in milliseconds)

    // Animate the progress bar from 0% to the target percentage
    let startTime;
    function animate1(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min(
        1,
        (timestamp - startTime) / animationDuration1
      );
      setPercentage1(progress * targetPercentage1);
      if (progress < 1) requestAnimationFrame(animate1);
    }

    requestAnimationFrame(animate1);
  }, []);
  useEffect(() => {
    const targetPercentage2 = 55; // Change this to your desired percentage
    const animationDuration2 = 500; // Change this to control the animation speed (in milliseconds)

    // Animate the progress bar from 0% to the target percentage
    let startTime;
    function animate2(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min(
        1,
        (timestamp - startTime) / animationDuration2
      );
      setPercentage2(progress * targetPercentage2);
      if (progress < 1) requestAnimationFrame(animate2);
    }

    requestAnimationFrame(animate2);
  }, []);

  return (
    <div className="h-auto pt-10 px-20 lg:pt-5 lg:px-1 xl:flex-col lg:grid-cols-1 lg:flex-col  ">
      <div className="grid grid-cols-2 gap-10  lg:grid-cols-1 lg:flex-col">
        <div className="flex items-center flex-wrap max-w-md px-10 lg:px-2 my-10 bg-light/10 dark:bg-dark  shadow-2xl dark:shadow-light rounded-2xl h-20">
          <div className="flex items-center justify-center -m-6 overflow-hidden bg-light dark:bg-dark  rounded-full ">
            <div className="w-32 h-32 transform translate-x-1 translate-y-1">
              <div className="ml-1 mt-1 " style={{ width: 110, height: 110 }}>
                <CircularProgressbar
                  value={percentage}
                  text={`${Math.round(percentage)}%`}
                />
              </div>
            </div>
          </div>
          <p className="ml-10 font-bold text-dark dark:text-light lg:text-sm ">
            Font-end
          </p>

          <span className="ml-auto text-sm font-medium text-primaryback lg:text-xs xl:text-xs">
            Over 6,000+ lines
          </span>
        </div>

        <div className="flex items-center flex-wrap max-w-md px-10 lg:px-2 bg-light/10  dark:bg-dark  my-10 shadow-2xl dark:shadow-light rounded-2xl h-20">
          <div className="flex items-center justify-center -m-6 overflow-hidden bg-light  dark:bg-dark rounded-full">
            <div className="w-32 h-32 transform translate-x-1 translate-y-1">
              <div className="ml-1 mt-1 " style={{ width: 110, height: 110 }}>
                <CircularProgressbar
                  value={percentage1}
                  text={`${Math.round(percentage1)}%`}
                />
              </div>
            </div>
          </div>
          <p className="ml-10  font-bold text-dark dark:text-light lg:text-sm">
            Back-end
          </p>

          <span className="ml-auto text-sm font-medium text-primaryback  lg:text-xs xl:text-xs ">
            Over 3,000+ lines
          </span>
        </div>

        <div className="flex items-center flex-wrap max-w-md px-10 lg:px-2 bg-light/10  dark:bg-dark  my-10 shadow-2xl dark:shadow-light rounded-2xl h-20">
          <div className="flex items-center justify-center -m-6 overflow-hidden bg-light  dark:bg-dark rounded-full">
            <div className="w-32 h-32 transform translate-x-1 translate-y-1">
              <div className="ml-1 mt-1 " style={{ width: 110, height: 110 }}>
                <CircularProgressbar
                  value={percentage2}
                  text={`${Math.round(percentage2)}%`}
                />
              </div>
            </div>
          </div>
          <p className="ml-10 lg:ml-5 xl:ml-5 font-bold text-dark dark:text-light  lg:text-sm  ">
            Graphic design
          </p>

          <span className="ml-auto text-sm font-medium text-primaryback lg:text-xs xl:text-xs  ">
            Over 5+ design
          </span>
        </div>
      </div>
    </div>
  );
};

export default RoundedProgress;
