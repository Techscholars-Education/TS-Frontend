import React from "react";
import Image from "next/image";
import border from "../../public/Home/border.svg";
import quotation from "../../public/Home/quotation.svg";
const Studenttest = () => {
  return (
    <section className="bg-gray-100 pb-12 font-Poppins w-11/12 mx-auto">
      <div className=" w-9/12 mx-auto rounded-xl">
        <h5 className="text-lg text-center font-bold text-darkBlue font-Poppins">
          Testimonials
        </h5>

        <h2 className="text-darkBlue font-bold text-5xl text-center mt-10 mb-6 font-Poppins ">
          What our Students have to say for us.
        </h2>

        <div className="flex space-x-10 my-24">
          <div className="relative  ">
            <Image src={border}></Image>
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
              <Image src={quotation}></Image>
            </div>
          </div>
          <div className="relative  ">
            <Image src={border}></Image>
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
              <Image src={quotation}></Image>
            </div>
          </div>
          <div className="relative  ">
            <Image src={border}></Image>
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
              <Image src={quotation}></Image>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Studenttest;
