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
      <div className=" flex justify-start space-x-4">
        <div>
          <Image src={testseriesicon} alt="flame-icon"></Image>
        </div>

        <div>
          <p className="text-xs text-gray-500">Foundation</p>
          <h3 className="text-darkBlue text-lg">Class {props.class}</h3>
        </div>
      </div>
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

        <ul className="my-2 list-disc ml-4 text-base font-medium">
          <li>Accessible till 31st May</li>
          <li>Total 03 tests will be held in this series</li>
        </ul>
      </div>

      <div className="flex space-x-2 justify-start my-4">
        <Image src={timer} alt="timer-icon" />
        <span className="text-sm">365 days</span>
        <Image src={videoicon} alt="video-icon" />
        <span className="text-sm">MCQ test</span>
      </div>

      <div className="flex justify-between mt-6">
        <div className="flex -space-x-4 rtl:space-x-reverse">
          <Image
            className="w-8 h-8 border-2 border-white rounded-full bg-green-300"
            src={avatar}
            alt="avatar-picture"
            width="40"
            height="40"
          />
          <Image
            className="w-8 h-8 border-2 border-white rounded-full bg-green-300"
            src={avatar}
            alt="avatar-picture"
            width="40"
            height="40"
          />
          <Image
            className="w-8 h-8 border-2 border-white rounded-full bg-green-300"
            src={avatar}
            alt="avatar-picture"
            width="40"
            height="40"
          />
          <a
            className="flex items-center justify-center w-8 h-8 px-2 text-xs font-medium text-white bg-darkBlue  border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
            href="#"
          >
            +99
          </a>
        </div>

        <Link
          href="/test-series/subjects"
          className="rounded-2xl text-sm bg-yellowish text-darkBlue  px-4 py-2"
        >
          Get started
        </Link>
      </div>
    </div>
  );
};

export default Testseries1card;
