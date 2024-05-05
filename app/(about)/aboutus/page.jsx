import React from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
const page = () => {
  return (
    <>
      <Navbar />
      <section className="my-10 w-4/5 mx-auto">
        <h1 className="text-darkBlue  font-Poppins font-semibold text-4xl text-center">
          About TechScholars
        </h1>

        <p className="text-base text-darkBlue font-Poppins my-10">
          Techscholars is an innovative EdTech organisation dedicated to
          democratising access to high-quality STEM education across India.
          Committed to revolutionising the EdTech landscape, we are driven by a
          singular mission: to provide exceptional learning experiences at an
          affordable cost. <br /> <br /> At TechScholars, we specialise in
          offering online coaching classes tailored for students in Class 9 -
          Class 12, as well as preparation for competitive exams such as JEE,
          NEET, BITSAT, WBJEE, MHTCET, and CUET. <br /> <br /> Our comprehensive
          curriculum and cutting-edge teaching methodologies ensure that
          students receive the best-in-class education, empowering them to excel
          in their academic pursuits and beyond. Join us in our quest to reshape
          the future of education in India, one student at a time. <br /> <br />
          Connect with us to embark on a transformative learning journey that
          transcends boundaries and unlocks limitless opportunities.
        </p>
        <div className="flex justify-center mt-24 items-center ">
          <Link
            href="/"
            className="bg-darkBlue text-white w-44 h-12 rounded-xl  flex justify-center items-center mx-8 auth-btn duration-300"
          >
            Back
          </Link>
        </div>
      </section>
    </>
  );
};

export default page;
