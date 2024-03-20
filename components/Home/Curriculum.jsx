import React from "react";
import Image from "next/image";
import jee from "../../public/Home/jee.svg";
import neet from "../../public/Home/neet.svg";
import foundation from "../../public/Home/foundation.svg";
const Curriculum = () => {
  return (
    <section className="bg-yellowish py-12">
      <div className=" w-9/12 mx-auto  rounded-xl">
        <h5 className="text-lg text-center font-bold text-darkBlue font-Poppins">
          Curriculum
        </h5>

        <h2 className="text-darkBlue font-bold text-5xl text-center my-10 font-Poppins ">
          Explore our exam categories
        </h2>

        {/* Exam categories */}
        <div className="space-x-10 flex justify-center items-center">
          <div className=" w-1/3  font-Poppins border-2 border-darkBlue p-6  hover:rotate-0 hover:skew-x-0 hover:skew-y-0 duration-500 exam-card rounded-2xl">
            <div className=" bg-darkBlue rounded-full h-20 w-20 flex justify-center items-center p-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-500 drop-shadow-md">
              <Image className="h-8 w-8  " src={jee}></Image>
            </div>

            <div className="p-4">
              <h1 className="text-2xl text-darkBlue  shadow-effect font-semibold group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-500 drop-shadow-md">
                JEE
              </h1>
            </div>
            <p className="text-darkBlue group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-500 text-lg drop-shadow-md px-4">
              Join our classes
            </p>

            <ul className="text-darkBlue group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-500 drop-shadow-md my-4">
              <li className="border border-darkBlue rounded-xl p-2 inline-block mx-2 my-2">
                11<sup>th</sup> Class
              </li>
              <li className="border border-darkBlue rounded-xl p-2 inline-block mx-2 my-2">
                12<sup>th</sup> Class
              </li>
              <li className="border border-darkBlue rounded-xl p-2 inline-block mx-2 my-2">
                Target 13<sup>th</sup>
              </li>
            </ul>
          </div>
          <div className=" w-1/3  font-Poppins border-2 border-darkBlue p-6  hover:rotate-0 hover:skew-x-0 hover:skew-y-0 duration-500 exam-card rounded-2xl">
            <div className=" bg-darkBlue rounded-full h-20 w-20 flex justify-center items-center p-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-500 drop-shadow-md">
              <Image className="h-8 w-8  " src={neet}></Image>
            </div>

            <div className="p-4">
              <h1 className="text-2xl text-darkBlue  shadow-effect font-semibold group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-500 drop-shadow-md">
                NEET
              </h1>
            </div>
            <p className="text-darkBlue group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-500 text-lg drop-shadow-md px-4">
              Join our classes
            </p>

            <ul className="text-darkBlue group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-500 drop-shadow-md my-4">
              <li className="border border-darkBlue rounded-xl p-2 inline-block mx-2 my-2">
                11<sup>th</sup> Class
              </li>
              <li className="border border-darkBlue rounded-xl p-2 inline-block mx-2 my-2">
                12<sup>th</sup> Class
              </li>
              <li className="border border-darkBlue rounded-xl p-2 inline-block mx-2 my-2">
                Target 13<sup>th</sup>
              </li>
            </ul>
          </div>
          <div className=" w-1/3  font-Poppins border-2 border-darkBlue p-6  hover:rotate-0 hover:skew-x-0 hover:skew-y-0 duration-500 exam-card rounded-2xl">
            <div className=" bg-darkBlue rounded-full h-20 w-20 flex justify-center items-center p-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-500 drop-shadow-md">
              <Image className="h-8 w-8  " src={foundation}></Image>
            </div>

            <div className="p-4">
              <h1 className="text-2xl text-darkBlue  shadow-effect font-semibold group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-500 drop-shadow-md">
                FOUNDATION
              </h1>
            </div>
            <p className="text-darkBlue group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-500 text-lg drop-shadow-md px-4">
              Join our classes
            </p>

            <ul className="text-darkBlue group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-500 drop-shadow-md my-4">
              <li className="border border-darkBlue rounded-xl p-2 inline-block mx-2 my-2">
                9<sup>th</sup> Class
              </li>
              <li className="border border-darkBlue rounded-xl p-2 inline-block mx-2 my-2">
                10<sup>th</sup> Class
              </li>
            </ul>
          </div>
        </div>

        <div className="my-20 flex  space-x-4 w-11/12 mx-auto font-Poppins">
          <div className=" space-y-4 w-3/6 ">
            <h5 className="text-lg text-start font-bold text-darkBlue">
              Benefits
            </h5>

            <h2 className="text-darkBlue font-bold text-5xl">
              Benefits when using our services
            </h2>
          </div>
          <div className="space-y-4 w-3/6 flex justify-center items-center">
            <p className="text-lg font-Poppins ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus optio commodi sunt! Ducimus error quisquam doloribus
              ad mollitia eligendi repellendus, aliquam dolore odit ea vero
              laudantium voluptate optio, inventore facilis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
