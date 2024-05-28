import React from "react";
import Link from "next/link";
import Image from "next/image";
import avatar from "../../public/Dashboard/avatar.jpg";
import testseriesicon from "../../public/Dashboard/testseriesicon.svg";
import timer from "../../public/Dashboard/timer.svg";
import videoicon from "../../public/Dashboard/videoicon.svg";
import coursePoster from "../../public/Course/coursePoster.svg";
const Testseries1card = (props) => {
  return (
    <div className="bg-white max-w-xs  font-Poppins rounded-xl p-6">
      
      <div className="rounded-xl my-4">
        <Image src={coursePoster} alt="foundation-course-thumbnail" />
      </div>

      <div className="font-Poppins space-y-4">
        <div className="my-2">
          <h4 className="font-semibold text-darkBlue text-lg">
            Mock Test Series
          </h4>
        </div>
        <div className="my-2">
          <p className="text-base">
            The Test series covers the entire syllabus for the exam and
            prioritizes important subjects and topics.
          </p>
        </div>

        
      </div>

     
    </div>
  );
};

export default Testseries1card;
