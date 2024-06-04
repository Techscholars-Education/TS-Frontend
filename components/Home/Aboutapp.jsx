import React from "react";
import Image from "next/image";
import mobile from "../../public/Home/mobile.png";

const Aboutapp = () => {
  return (
    <>
      <div className=" w-full mx-auto  rounded-xl py-6">
        <h2 className="text-darkBlue font-semibold text-xl  md:text-4xl px-10 md:px-0 text-center my-4 font-Poppins ">
          Join Bharat&#8216;s Most Trusted Educational Platform Today
        </h2>
        <div className="my-4 text-center  ">
          <p className="font-Poppins px-6 leading-normal  md:px-20 lg:px-44 text-xs md:text-sm text-gray-600 tracking-wide ">
            Explore our YouTube Channel and subscribe to get access to quality
            education for free.
          </p>
        </div>
      </div>
      <section className=" flex flex-col md:flex md:flex-row justify-between  w-11/12 mx-auto font-Poppins md:space-x-10 py-10 ">
        <div className=" w-full md:w-1/3 flex justify-center  ">
          <Image src={mobile} alt="Techscholar-app-image"></Image>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4  md:w-2/3 ">
          <div className="aspect-video w-full  ">
            <iframe
              src="https://www.youtube.com/embed/tg6ME1kCp4w"
              allow="accelerometer; autoplay; encrypted-media; gyroscope;
              picture-in-picture"
              allowFullScreen
              className="w-full h-full
              rounded-xl"
            ></iframe>
          </div>
          <div className="aspect-video w-full  ">
            <iframe
              src="https://www.youtube.com/embed/CPM-0u2Kur4"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-xl"
            ></iframe>
          </div>
          <div className="aspect-video w-full  ">
            <iframe
              src="https://www.youtube.com/embed/rUkguB8jF4E"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-xl"
            ></iframe>
          </div>
          <div className="aspect-video w-full  ">
            <iframe
              src="https://www.youtube.com/embed/ruIdI5hhsts"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-xl"
            ></iframe>
          </div>
          <div className="aspect-video w-full ">
            <iframe
              src="https://www.youtube.com/embed/h8lc5yGuX34"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full  rounded-xl"
            ></iframe>
          </div>
          <div className="aspect-video w-full  ">
            <iframe
              src="https://www.youtube.com/embed/-huQQkX66sU"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-xl"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutapp;
