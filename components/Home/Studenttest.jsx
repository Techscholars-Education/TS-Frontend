import React from "react";
import Image from "next/image";
import border from "../../public/Home/border.svg";
import quotation from "../../public/Home/quotation.svg";
import Link from "next/link";
const Studenttest = () => {
  return (
    <section className="bg-gray-100 pb-12 font-Poppins mx-auto">
      <div className="  mx-auto rounded-xl">
        <p className="text-darkBlue font-base text-xl text-center mt-10 mb-6 font-Poppins w-9/12 mx-auto ">
          Maximize your potential with Techscholars personalised mentorship,
          performance analytics, and collaborative community
        </p>
        <div className="text-center my-10">
          <Link
            href="/course"
            className=" font-Poppins text-darkBlue border border-black/40 rounded-xl px-10 py-3 bg-yellowish text-2xl font-medium  hover:-translate-y-2  duration-300  auth-btn"
          >
            Get started
          </Link>
          <p className="text-darkBlue font-base text-xl text-center mt-10 mb-6 font-Poppins ">
            Testimonials
          </p>

          <h2 className="text-5xl font-semibold text-center text-darkBlue">
            What our students have to say for us
          </h2>
        </div>
        <div className="flex space-x-10 my-24  justify-center ">
          <div className="relative ">
            <Image src={border} alt="yellow-border "></Image>
            <div className=" max-w-sm absolute top-10 left-4 px-3 space-y-4">
              <p className=" leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                quod fuga autem ab rerum quos. Repellendus delectus Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. Corrupti, ducimus!
              </p>
              <div className="flex items-center space-x-4">
                <div className="h-10 w-10 bg-yellowish rounded-full"></div>
                <div>
                  <h3 className="text-darkBlue font-semibold">Naina Sharma</h3>
                  <p className="text-darkBlue/70">Dav School</p>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 right-0">
              <Image src={quotation} alt="quotation"></Image>
            </div>
          </div>
          <div className="relative ">
            <Image src={border} alt="yellow-border"></Image>
            <div className=" max-w-sm absolute top-10 left-4 px-3 space-y-4">
              <p className=" leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                quod fuga autem ab rerum quos. Repellendus delectus Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. Corrupti, ducimus!
              </p>
              <div className="flex items-center space-x-4">
                <div className="h-10 w-10 bg-yellowish rounded-full"></div>
                <div>
                  <h3 className="text-darkBlue font-semibold">Naina Sharma</h3>
                  <p className="text-darkBlue/70">Dav School</p>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 right-0">
              <Image src={quotation} alt="quotation"></Image>
            </div>
          </div>
          <div className="relative  ">
            <Image src={border} alt="yellow-border"></Image>
            <div className=" max-w-sm absolute top-10 left-4 px-3 space-y-4">
              <p className=" leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                quod fuga autem ab rerum quos. Repellendus delectus Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. Corrupti, ducimus!
              </p>
              <div className="flex items-center space-x-4">
                <div className="h-10 w-10 bg-yellowish rounded-full"></div>
                <div>
                  <h3 className="text-darkBlue font-semibold">Naina Sharma</h3>
                  <p className="text-darkBlue/70">Dav School</p>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 right-0">
              <Image src={quotation} alt="quotation"></Image>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Studenttest;
