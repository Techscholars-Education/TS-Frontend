import React from "react";
import Image from "next/image";
import border from "../../public/Home/border.svg";
import quotation from "../../public/Home/quotation.svg";
import Link from "next/link";

{
  /* <div className="relative flex justify-center items-center border-2 border-black ">
<Image src={border} alt="yellow-border"></Image>
<div className=" w-full h-full flex justify-start items-start flex-col p-4 absolute  space-y-4 top-0 ">
  <p className=" leading-relaxed font-Poppins text-sm pt-4">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
    quod fuga autem ab rerum quos.
  </p>
  <div className="flex space-x-4">
    <div className="h-10 w-10 bg-TechBlue rounded-full"></div>
    <div>
      <h3 className="text-darkBlue font-semibold text-sm">
        Naina Sharma
      </h3>
      <p className="text-darkBlue/70 text-sm">Dav School</p>
    </div>
  </div>
</div>
<div className="absolute bottom-0 right-0">
  <Image src={quotation} alt="quotation"></Image>
</div>
</div>
<div className="relative flex justify-center items-center border-2 border-black ">
<Image src={border} alt="yellow-border"></Image>
<div className=" w-full h-full flex justify-start items-start flex-col p-4 absolute  space-y-4 top-0 ">
  <p className=" leading-relaxed font-Poppins text-sm pt-4">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
    quod fuga autem ab rerum quos.
  </p>
  <div className="flex space-x-4">
    <div className="h-10 w-10 bg-TechBlue rounded-full"></div>
    <div>
      <h3 className="text-darkBlue font-semibold text-sm">
        Naina Sharma
      </h3>
      <p className="text-darkBlue/70 text-sm">Dav School</p>
    </div>
  </div>
</div>
<div className="absolute bottom-0 right-0">
  <Image src={quotation} alt="quotation"></Image>
</div>
</div>
<div className="relative flex justify-center items-center border-2 border-black ">
<Image src={border} alt="yellow-border"></Image>
<div className=" w-full h-full flex justify-start items-start flex-col p-4 absolute  space-y-4 top-0 ">
  <p className=" leading-relaxed font-Poppins text-sm pt-4">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
    quod fuga autem ab rerum quos.
  </p>
  <div className="flex space-x-4">
    <div className="h-10 w-10 bg-TechBlue rounded-full"></div>
    <div>
      <h3 className="text-darkBlue font-semibold text-sm">
        Naina Sharma
      </h3>
      <p className="text-darkBlue/70 text-sm">Dav School</p>
    </div>
  </div>
</div>
<div className="absolute bottom-0 right-0">
  <Image src={quotation} alt="quotation"></Image>
</div>
</div> */
}

const Studenttest = () => {
  return (
    <section className="bg-[#F8F8F8] my-16 py-16 font-Poppins w-full mx-auto  ">
      <div className=" w-full mx-auto  rounded-xl">
        <div className=" text-center">
          <h5 className="text-xs font-medium bg-gray-300 text-TechBlue font-Poppins border py-1 rounded-full px-4 inline-block">
            Testimonials
          </h5>
        </div>
        <h2 className="text-darkBlue font-semibold text-4xl text-center my-4 font-Poppins ">
          What our students have to say
        </h2>
      </div>
      <div className=" my-24 w-11/12 mx-auto grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-10">
        <div className=" w-[80%] mx-auto  sm:w-full ">
          <div className=" rounded-xl border relative">
            <div className=" top-0 p-6 xl:top-[10%] ">
              <p className="text-base sm:text-xs md:text-sm lg:text-base ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae, totam. Lorem ipsum dolor sit amet.
              </p>
            </div>
            <div className=" my-2 px-4  xl:bottom-0 ">
              <div className="flex items-center space-x-2">
                <div className="w-[28px] h-[28px] md:w-[30px] md:h-[30px] lg:h-[40px] lg:w-[40px] bg-TechBlue rounded-full"></div>
                <p className="text-base md:text-sm lg:text-base xl:text-base ">
                  Naina Sharma
                </p>
              </div>
            </div>

            <Image
              className="absolute -bottom-6 -right-2 md:w-12 lg:w-20 xl:w-12 xl:-bottom-4"
              src={quotation}
            ></Image>
          </div>
        </div>
        <div className=" w-[80%] mx-auto  sm:w-full ">
          <div className=" rounded-xl border relative">
            <div className=" top-0 p-6 xl:top-[10%] ">
              <p className="text-base sm:text-xs md:text-sm lg:text-base ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae, totam. Lorem ipsum dolor sit amet.
              </p>
            </div>
            <div className=" my-2 px-4  xl:bottom-0 ">
              <div className="flex items-center space-x-2">
                <div className="w-[28px] h-[28px] md:w-[30px] md:h-[30px] lg:h-[40px] lg:w-[40px] bg-TechBlue rounded-full"></div>
                <p className="text-base md:text-sm lg:text-base xl:text-base ">
                  Naina Sharma
                </p>
              </div>
            </div>

            <Image
              className="absolute -bottom-6 -right-2 md:w-12 lg:w-20 xl:w-12 xl:-bottom-4"
              src={quotation}
            ></Image>
          </div>
        </div>
        <div className=" w-[80%] mx-auto  sm:w-full ">
          <div className=" rounded-xl border relative">
            <div className=" top-0 p-6 xl:top-[10%] ">
              <p className="text-base sm:text-xs md:text-sm lg:text-base ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae, totam. Lorem ipsum dolor sit amet.
              </p>
            </div>
            <div className=" my-2 px-4  xl:bottom-0 ">
              <div className="flex items-center space-x-2">
                <div className="w-[28px] h-[28px] md:w-[30px] md:h-[30px] lg:h-[40px] lg:w-[40px] bg-TechBlue rounded-full"></div>
                <p className="text-base md:text-sm lg:text-base xl:text-base ">
                  Naina Sharma
                </p>
              </div>
            </div>

            <Image
              className="absolute -bottom-6 -right-2 md:w-12 lg:w-20 xl:w-12 xl:-bottom-4"
              src={quotation}
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Studenttest;
