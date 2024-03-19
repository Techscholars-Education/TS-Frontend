import React from "react";
import Image from "next/image";
import ratings from "../../public/Home/ratings.svg";
import schdule_time from "../../public/Home/schdule_time.svg";
import live_class from "../../public/Home/live_class.svg";
import login from "../../public/Home/login.svg";
const Benefits = () => {
  return (
    <div className=" w-9/12 mx-auto flex justify-between items-center ">
      <div className="font-Poppins inline-block space-y-2 text-center">
        <div>
          <Image className="mx-auto" src={ratings}></Image>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-darkBlue">
            High Quality Classes
          </h4>
        </div>
        <div>
          <p className="text-darkBlue font-base">
            With an essence of our expert faculty.
          </p>
        </div>
      </div>
      <div className="font-Poppins inline-block space-y-2 text-center">
        <div>
          <Image className="mx-auto" src={schdule_time}></Image>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-darkBlue">
            Doubt Solving Classes
          </h4>
        </div>
        <div>
          <p className="text-darkBlue font-base">
            With an essence of our expert faculty.
          </p>
        </div>
      </div>
      <div className="font-Poppins inline-block space-y-2 text-center">
        <div>
          <Image className="mx-auto" src={live_class}></Image>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-darkBlue">
            High Quality Classes
          </h4>
        </div>
        <div>
          <p className="text-darkBlue font-base">
            With an essence of our expert faculty.
          </p>
        </div>
      </div>
      <div className="font-Poppins inline-block space-y-2 text-center">
        <div>
          <Image className="mx-auto" src={login}></Image>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-darkBlue">
            High Quality Classes
          </h4>
        </div>
        <div>
          <p className="text-darkBlue font-base">
            With an essence of our expert faculty.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
