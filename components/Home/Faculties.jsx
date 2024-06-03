import React from "react";
import Image from "next/image";
import coursePoster from "@/public/Course/coursePoster.svg";
const Faculties = () => {
  return (
    <section className="bg-white py-6 font-Poppins w-full mx-auto bg-gradient-to-r from-TechBlue/5 to-white ">
      <div className=" w-full mx-auto  rounded-xl ">
        <div className=" text-center">
          <h5 className="text-xs font-medium bg-gray-300 text-TechBlue font-Poppins border py-1 rounded-full px-4 inline-block">
            Faculities
          </h5>
        </div>
        <h2 className="text-darkBlue font-semibold text-2xl  md:text-4xl text-center my-4 font-Poppins ">
          Learn from Bharat&#39;s top faculties
        </h2>
      </div>
      <section className="text-gray-600 body-font font-Poppins">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden p-2 bg-white shadow-md hover:shadow-xl hover:scale-105 duration-200 ">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={coursePoster}
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Karan Sharma
                  </h1>
                  <h6 className=" text-sm font-normal text-gray-500 mb-3">
                    M-Tech | IIT Kanpur
                  </h6>
                  <p className="leading-relaxed mb-3 text-gray-600">
                    More than 12+ years of experience in teaching.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <span className="text-red-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Mathematics
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden p-2 bg-white shadow-md hover:shadow-xl hover:scale-105 duration-200 ">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={coursePoster}
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Neha Kapoor
                  </h1>
                  <h6 className=" text-sm font-normal text-gray-500 mb-3">
                    M-Tech | IIIT Hyderabad
                  </h6>
                  <p className="leading-relaxed mb-3 text-gray-600">
                    More than 12+ years of experience in teaching.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <span className="text-red-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Chemistry
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden p-2 bg-white shadow-md hover:shadow-xl hover:scale-105 duration-200 ">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={coursePoster}
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Puneet Mishra
                  </h1>
                  <h6 className=" text-sm font-normal text-gray-500 mb-3">
                    M-Tech | IIT Bombay
                  </h6>
                  <p className="leading-relaxed mb-3 text-gray-600">
                    More than 14+ years of experience in teaching.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <span className="text-red-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Physics
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Faculties;
