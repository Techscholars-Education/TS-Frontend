import React from "react";
import Image from "next/image";
import Phonepic from "../../public/Home/Phonepic.png";
import playstore from "../../public/Home/playstore.svg";
import applestore from "../../public/Home/applestore.svg";
import Logo from "../../public/Logo.svg";
const Mobile = () => {
  return (
    <section className="flex  w-11/12 mx-auto font-Poppins space-x-10 ">
      <div className="w-1/2 flex justify-center  relative ">
        <Image src={Phonepic}></Image>
        <div className="flex justify-center items-center absolute top-36 space-x-3">
          <Image src={Logo}></Image>
          <h4 className="font-Poppins  text-yellowish font-semibold">
            TECHSCHOLARS
          </h4>
        </div>
      </div>
      <div className=" w-1/2 flex flex-col justify-center items-center space-y-4  pl-10 ">
        <div>
          <h2 className="text-5xl font-semibold text-darkBlue leading-normal">
            Start achieving your acadamic excellence <br />
            with TechScholars.
          </h2>
        </div>
        <div className="w-full space-x-4 ">
          <button>
            <Image className="w-60" src={playstore}></Image>
          </button>
          <button>
            <Image className="w-60" src={applestore}></Image>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Mobile;
