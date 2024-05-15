import React from "react";
import Image from "next/image";
import Phone from "../../public/Home/Phone.svg";
import playstore from "../../public/Home/playstore.svg";
import applestore from "../../public/Home/applestore.svg";
import Logo from "../../public/Logo.svg";
const Aboutapp = () => {
  return (
    <section className="flex  w-11/12 mx-auto font-Poppins space-x-10 ">
      <div className="w-1/2 flex justify-center  relative ">
        <Image src={Phone} alt="Techscholar-app-image"></Image>
      </div>
      <div className=" w-1/2 flex flex-col justify-center items-center space-y-4  pl-10 ">
        <div>
          <h2 className="text-3xl font-semibold text-darkBlue leading-normal">
            Start achieving your acadamic excellence <br />
            with TechScholars.
          </h2>
        </div>
        <div className="w-full space-x-4 ">
          <button>
            <Image
              className=" w-12 md:w-20 lg:w-32"
              src={playstore}
              alt="play-store-icon"
            ></Image>
          </button>
          <button>
            <Image
              className=" w-12 md:w-20 lg:w-32"
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
