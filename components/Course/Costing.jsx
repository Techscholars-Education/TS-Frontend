"use client";
import React, { useEffect, useState } from "react";
import { MdDone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { useCourseStore } from "@/hooks/useStore";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { encryptData } from "@/utils";
const Costing = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  // console.log(props);



  const router = useRouter();
  const cookies = Cookies.get("access_token");

  const initialFormState = {
    prices: "",
    name: "",
    auth: "",
    id: "",
    mainName: "",
  };

  const [formdataOne, setFormDataOne] = useState(initialFormState);
  const [formdataTwo, setFormDataTwo] = useState(initialFormState);
  const [formdataThree, setFormDataThree] = useState(initialFormState);

  const { course, courseData } = useCourseStore();

  useEffect(() => {
    if (props.CostingData && props.CostingData.length > 0) {
      setFormDataOne({
        ...formdataOne,
        name: "Starter",
        prices: props.CostingData[0].price,
        auth: cookies,
        id: props.CostingData[0].id,
        mainName: props.CostingData[0].description,
      });
      setFormDataTwo({
        ...formdataTwo,
        name: "Advanced",
        prices: props.CostingData[1].price,
        auth: cookies,
        id: props.CostingData[1].id,
        mainName: props.CostingData[1].description,
      });
      setFormDataThree({
        ...formdataThree,
        name: "Ultimate",
        prices: props.CostingData[2].price,
        auth: cookies,
        id: props.CostingData[2].id,
        mainName: props.CostingData[2].description,
      });
    }
         // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.CostingData]);

  const handleSubmit = (formdata, id) => {
    courseData(formdata);
    const encryptedParams = encryptData(id);
    router.replace(`/payment/${encodeURIComponent(encryptedParams)}`);
  };
  

  const listItems = [
    { text: "Lectures", checked: true },
    { text: "DPPs", checked: true },
    { text: "Weekly test series", checked: true },
    { text: "All India Test series", checked: false },
    { text: "LIVE doubt clearing sessions", checked: false },
    { text: "Access to smartest student community", checked: false },
    { text: "One shot Revision series", checked: false },
    { text: "Scholars AI (beta)", checked: false },
    { text: "Personalised Performance Analysis", checked: false },
    { text: "One - One Mentorship sessions", checked: false },
    { text: "Access to Digital student library", checked: false },

    {
      text: "Strategy Workshops(with certifications)",
      checked: false,
    },
    {
      text: "Councilling Workshops(with certifications)",
      checked: false,
    },
  ];
  const listItems2 = [
    { text: "Lectures", checked: true },
    { text: "DPPs", checked: true },
    { text: "Weekly test series", checked: true },
    { text: "All India Test series", checked: true },
    { text: "LIVE doubt clearing sessions", checked: true },
    { text: "Access to smartest student community", checked: true },
    { text: "One shot Revision series", checked: true },
    { text: "Scholars AI (beta)", checked: false },
    { text: "Personalised Performance Analysis", checked: false },
    { text: "One - One Mentorship sessions", checked: false },
    { text: "Access to Digital student library", checked: false },

    {
      text: "Strategy Workshops(with certifications)",
      checked: false,
    },
    {
      text: "Councilling Workshops(with certifications)",
      checked: false,
    },
  ];
  const listItems3 = [
    { text: "Lectures", checked: true },
    { text: "DPPs", checked: true },
    { text: "Weekly test series", checked: true },
    { text: "All India Test series", checked: true },
    { text: "LIVE doubt clearing sessions", checked: true },
    { text: "Access to smartest student community", checked: true },
    { text: "One shot Revision series", checked: true },
    { text: "Scholars AI (beta)", checked: true },
    { text: "Personalised Performance Analysis", checked: true },
    { text: "One - One Mentorship sessions", checked: true },
    { text: "Access to Digital student library", checked: true },

    {
      text: "Strategy Workshops(with certifications)",
      checked: true,
    },
    {
      text: "Councilling Workshops(with certifications)",
      checked: true,
    },
  ];

  return (
    <>
 <ToastContainer />
    <div
      className={`grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 lg:gap-5 my-10 w-full lg:w-11/12  ${
        props.Calling ? "xl:w-11/12" : "xl:w-10/12"
      } 2xl:w-[1200px]  px-10 lg:px-2 mx-auto `}
    >
      {/* 1st */}
      <div className="border rounded-xl hover:shadow-xl  transition-all duration-200 bg-white font-Inter ">
        <div className="px-6 pt-6">
          <h4 className="text-lg font-Inter font-semibold text-darkBlue/90">
            Starter
          </h4>
          <h2 className="text-3xl font-bold text-TechBlue py-2">
            &#8377;{props.CostingData[0].price}
            <span className="text-xs font-normal text-gray-500">/Year</span>
          </h2>
          <hr />
        </div>

        <div className="relative pt-6 px-6 font-Inter">
          <ul className="space-y-4">
            {listItems.slice(0, 5).map((item, index) => (
              <ListItem key={index} item={item} />
            ))}
          </ul>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isExpanded ? "max-h-[1000px]" : "max-h-0"
            }`}
          >
            <ul className="space-y-4">
              {listItems.slice(5).map((item, index) => (
                <ListItem
                  key={index + 5}
                  item={item}
                  style={{
                    opacity: isExpanded ? 1 : 0,
                    transform: isExpanded
                      ? "translateY(0)"
                      : "translateY(20px)",
                    transition: `opacity 500ms, transform 500ms`,
                    transitionDelay: `${index * 100}ms`,
                  }}
                />
              ))}
            </ul>
          </div>
          {!isExpanded && (
            <div className="flex justify-center mt-4">
              <button
                className="text-xl font-bold"
                onClick={() => setIsExpanded(true)}
              >
                ...
              </button>
            </div>
          )}
        </div>

        <div className="w-full flex justify-center items-center my-6">
          <button
           onClick={() => handleSubmit(formdataOne, formdataOne.id)}
            className="border border-gray-400 w-5/6 rounded-full px-4 md:px-6 py-2 md:py-3 text-center hover:bg-black hover:text-white duration-200 font-Poppins font-semibold "
          >
            Purchase Now
          </button>
        </div>
      </div>

      {/* 2nd */}
      <div className="border relative rounded-xl bg-TechBlue   transition-all duration-200 font-Inter">
        <div className="px-6 pt-6">
          <h4 className="text-lg font-semibold text-white">Advanced</h4>
          <h2 className="text-3xl font-bold text-white py-2">
            &#8377;{props.CostingData[1].price}
            <span className="text-xs font-normal text-gray-100">/Year</span>
          </h2>
          <hr className="border-gray-400" />
        </div>

        <div className="relative pt-6 px-6 font-Inter ">
          <ul className="space-y-4">
            {listItems2.slice(0, 5).map((item, index) => (
              <ListItem key={index} item={item} isSecond={true} />
            ))}
          </ul>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isExpanded ? "max-h-[1000px]" : "max-h-0"
            }`}
          >
            <ul className="space-y-4">
              {listItems2.slice(5).map((item, index) => (
                <ListItem
                  isSecond={true}
                  key={index + 5}
                  item={item}
                  style={{
                    opacity: isExpanded ? 1 : 0,
                    transform: isExpanded
                      ? "translateY(0)"
                      : "translateY(20px)",
                    transition: `opacity 500ms, transform 500ms`,
                    transitionDelay: `${index * 100}ms`,
                  }}
                />
              ))}
            </ul>
          </div>
          {!isExpanded && (
            <div className="flex justify-center mt-4">
              <button
                className="text-xl font-bold text-white"
                onClick={() => setIsExpanded(true)}
              >
                ...
              </button>
            </div>
          )}
        </div>
        <div className="w-full flex justify-center items-center my-6">
          <button
             onClick={() => handleSubmit(formdataTwo, formdataTwo.id)}
            className="border border-gray-400 w-5/6 rounded-full bg-white text-TechBlue px-4 md:px-6 py-2 md:py-3 text-center hover:bg-black hover:text-white duration-200 font-Poppins font-semibold"
          >
            Purchase Now
          </button>
        </div>
        <span
          datacontent="MOST POPULAR"
          className="w-[100px] h-[100px] absolute font-bold flex justify-center items-center -top-2 -right-2 overflow-hidden before:w-[180px] before:h-8 before:bg-white before:absolute before:rotate-45 before:-translate-y-4 before:content-[attr(dataContent)] before:flex before:justify-center before:items-center before:text-xs before:pl-6 before:text-TechBlue before:shadow-md"
        ></span>
      </div>

      {/* 3rd */}
      <div className="border rounded-xl hover:shadow-xl  transition-all duration-200 bg-white font-Inter">
        <div className="px-6 pt-6">
          <h4 className="text-lg font-Inter font-semibold text-darkBlue/90">
            Ultimate
          </h4>
          <h2 className="text-3xl font-bold text-TechBlue py-2">
            &#8377;{props.CostingData[2].price}
            <span className="text-xs font-normal text-gray-500">/Year</span>
          </h2>
          <hr />
        </div>

        <div className="relative pt-6 px-6 font-Inter">
          <ul className="space-y-4">
            {listItems3.slice(0, 5).map((item, index) => (
              <ListItem key={index} item={item} />
            ))}
          </ul>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isExpanded ? "max-h-[1000px]" : "max-h-0"
            }`}
          >
            <ul className="space-y-4">
              {listItems3.slice(5).map((item, index) => (
                <ListItem
                  key={index + 5}
                  item={item}
                  style={{
                    opacity: isExpanded ? 1 : 0,
                    transform: isExpanded
                      ? "translateY(0)"
                      : "translateY(20px)",
                    transition: `opacity 500ms, transform 500ms`,
                    transitionDelay: `${index * 100}ms`,
                  }}
                />
              ))}
            </ul>
          </div>
          {!isExpanded && (
            <div className="flex justify-center mt-4">
              <button
                className="text-xl font-bold"
                onClick={() => setIsExpanded(true)}
              >
                ...
              </button>
            </div>
          )}
        </div>
        <div className="w-full flex justify-center items-center my-6">
          <button
           onClick={() => handleSubmit(formdataThree, formdataThree.id)}
            className="border border-gray-400 w-5/6 rounded-full px-4 md:px-6 py-2 md:py-3 text-center hover:bg-black hover:text-white duration-200 font-Poppins font-semibold "
          >
            Purchase Now
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Costing;

const ListItem = ({ item, style, isSecond }) => (
  <li
    className="flex justify-start space-x-2 items-center my-2.5"
    style={style}
  >
    {item.checked ? (
      <MdDone
        className={`${
          !isSecond ? "bg-blue-600  text-white" : "bg-white text-TechBlue"
        }  text-xl rounded-full p-1`}
      />
    ) : (
      <RxCross2 className="bg-red-400 text-xl text-white rounded-full p-1" />
    )}
    <span
      className={`${
        isSecond ? `text-white` : "text-gray-500"
      } font-medium font-Poppins text-xs md:text-sm ${
        !item.checked && "line-through"
      }`}
    >
      {item.text}
    </span>
  </li>
);
