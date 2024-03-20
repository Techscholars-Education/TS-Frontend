import React from "react";
import Image from "next/image";
import arrowRight from "../../public/Home/arrow-right.svg";
import parents from "../../public/Home/parents.jpg";
import Marquee from "react-fast-marquee";
import quoteup from "../../public/Home/quoteup.svg";
import star from "../../public/Home/star.svg";
const Testimonials = () => {
  return (
    <section className="bg-gray-100 pb-12 font-Poppins w-11/12 mx-auto">
      <div className=" w-9/12 mx-auto rounded-xl">
        <h5 className="text-lg text-center font-bold text-darkBlue font-Poppins">
          Testimonials
        </h5>

        <h2 className="text-darkBlue font-bold text-5xl text-center mt-10 mb-6 font-Poppins ">
          What our parents have to say about us.
        </h2>

        <p className="text-base text-darkBlue/70 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit, amet consectetur adipisicing elit. Reiciendis, quasi.
        </p>
      </div>

      <div className="flex justify-between items-center my-16">
        <div className="bg-white flex justify-center items-center w-16 h-16">
          <Image src={arrowRight}></Image>
        </div>

        <div className="flex w-4/6 ">
          <Image className=" mx-auto" src={parents}></Image>
        </div>

        <div className="bg-yellowish flex justify-center items-center w-16 h-16">
          <Image className="rotate-180" src={arrowRight}></Image>
        </div>
      </div>

      {/* Testimonials */}
      <Marquee
        className="flex space-x-4"
        autoFill={true}
        direction="left"
        speed={50}
      >
        <div className="border-2 border-yellowish bg-white p-4 rounded-xl mx-4 max-w-xl  ">
          <div>
            <Image src={quoteup} />
          </div>

          <div className="my-6">
            <p className="text-base text-darkBlue/70">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione,
              laboriosam. Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Nam, voluptate. Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>
          </div>

          <div className="flex items-center justify-between font-Poppins ">
            <div className="w-1/2 flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full bg-yellowish"></div>

              <h4 className="font-semibold text-darkBlue">John Doe</h4>
            </div>
            <div className="flex justify-center items-center space-x-4">
              <Image src={star}></Image>
              <p className="text-darkBlue font-semibold">4.3</p>
            </div>
          </div>
        </div>
      </Marquee>
    </section>
  );
};

export default Testimonials;
