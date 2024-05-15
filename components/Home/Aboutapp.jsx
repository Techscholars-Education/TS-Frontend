import React from "react";
import Image from "next/image";
import Phone from "../../public/Home/Phone.svg";
import playstore from "../../public/Home/playstore.svg";
import applestore from "../../public/Home/applestore.svg";

const Aboutapp = () => {
  return (
    <section className=" flex flex-col-reverse md:flex md:flex-row  w-11/12 mx-auto font-Poppins md:space-x-10 ">
      <div className=" w-full md:w-1/2 flex justify-center  ">
        <Image src={Phone} alt="Techscholar-app-image"></Image>
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center space-y-4 md:pl-10 ">
        <div>
          <h2 className=" text-center md:text-start text-3xl lg:text-3xl xl:text-5xl font-semibold text-darkBlue xl:leading-normal">
            Start achieving your acadamic excellence with TechScholars.
          </h2>
        </div>
        <div className="w-full space-x-4 flex justify-center items-center  md:block ">
          <button>
            <Image
              className=" w-32 md:w-20 lg:w-32 xl:w-40"
              src={playstore}
              alt="play-store-icon"
            ></Image>
          </button>
          <button>
            <Image
              className=" w-32 md:w-20 lg:w-32 xl:w-40"
              src={applestore}
              alt="app-store-icon"
            ></Image>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Aboutapp;
