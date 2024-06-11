"use client";
import React, { useEffect, useState } from "react";
import { MdDone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
import { Slide } from "react-awesome-reveal";
import { useCourseStore} from "@/hooks/useStore";
import { useRouter } from 'next/navigation'
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Costing = (props) => {

  const router  = useRouter()
  
  const cookies =   Cookies.get('access_token')

  const[formdataOne,setFormDataOne] = useState({
    prices: '',
    name: '',
    auth:'',
    id:''

})
  const[formdataTwo,setFormDataTwo] = useState({
    prices: '',
    name: '',
    auth:'',
    id:''
})
  const[formdataThree,setFormDataThree] = useState({
    prices: '',
    name: '',
   auth:'',
   id:''
})

 

  
  const {course,courseData} = useCourseStore()
   
  const price1  = props.CostingData[0].price
  const price2  = props.CostingData[1].price
  const price3  = props.CostingData[2].price

  const id1  = props.CostingData[0].id
  const id2  = props.CostingData[1].id
  const id3  = props.CostingData[2].id


  
    useEffect(()=>{
      setFormDataOne({ ...formdataOne, name: " Starter" ,prices: price1,auth:cookies,id:id1 })
      setFormDataTwo({ ...formdataTwo, name: "Advanced " ,prices: price2,auth:cookies,id:id2})
      setFormDataThree({ ...formdataThree, name: "Ultimate " ,prices: price3,auth:cookies,id:id3})

       // eslint-disable-next-line react-hooks/exhaustive-deps
    },[props.CostingData])
  




const handleSubmitStarter = () => {
  
  // setFormData({ ...formdata, name: " Starter" ,prices: price1 })
   
  courseData(formdataOne)

  router.replace("/payment")
}

const handleSubmitAdvance = () => {

  // setFormData({ ...formdata, name: "Advanced " ,prices: price2 })

  courseData(formdataTwo)

  router.replace("/payment")
}

const handleSubmitUltimate = () => {

  // setFormData({ ...formdata, name: "Ultimate " ,prices: price3 })

  courseData(formdataThree)

  router.replace("/payment")
}



  return (
    <>
      <ToastContainer/>
  
    <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 lg:gap-5 my-10 w-full lg:w-11/12 xl:w-10/12  px-10 lg:px-2 mx-auto ">
      <Slide
        triggerOnce="true"
        cascade
        damping={0.2}
        direction="up"
        duration={1000}
      >
        <div className="border rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-200 bg-white">
          <div className="px-6 pt-6">
            <h4 className="text-lg font-Poppins font-semibold text-darkBlue/90">
              Starter
            </h4>
            <h2 className="text-3xl font-semibold text-TechBlue py-2" >
              &#8377;{props.CostingData[0].price}
              <span className="text-xs font-normal text-gray-500">/year</span>
            </h2>
            <hr />
          </div>

          <ul className="pt-6 px-6 space-y-4">
            <li className="flex justify-start space-x-2 items-center">
              <MdDone className="bg-TechBlue text-xl text-white rounded-full p-1" />
              <span className="text-gray-600 text-xs md:text-sm">Lectures</span>
            </li>
            <li className="flex justify-start space-x-2 items-center">
              <MdDone className="bg-TechBlue text-xl text-white rounded-full p-1" />
              <span className="text-gray-600 text-xs md:text-sm">DPPs</span>
            </li>
            <li className="flex justify-start space-x-2 items-center  ">
              <MdDone className="bg-TechBlue text-xl text-white rounded-full p-1" />
              <span className="text-gray-600 text-xs md:text-sm">
                Weekly test series
              </span>
            </li>
            <li className="flex justify-start space-x-2 items-center ">
              <RxCross2 className="bg-red-400 text-xl text-white rounded-full p-1" />
              <del className="text-gray-600 text-xs md:text-sm">
                Access the smartest student community
              </del>
            </li>
            <li className="flex justify-start space-x-2 items-center ">
              <RxCross2 className="bg-red-400 text-xl text-white rounded-full p-1" />
              <del className="text-gray-600 text-xs md:text-sm ">
                <span className="font-bold text-gray-600">LIVE</span> doubt
                clearing sessions
              </del>
            </li>
            <li className="flex justify-start space-x-2 items-center ">
              <RxCross2 className="bg-red-400 text-xl text-white rounded-full p-1" />
              <del className="text-gray-600 text-xs md:text-sm ">
                Special Access to{" "}
                <span className="font-bold text-gray-600"> BRAHMASTRA</span>
                (Coming Soon)
              </del>
            </li>
            <li className="flex justify-start space-x-2 items-center ">
              <RxCross2 className="bg-red-400 text-xl text-white rounded-full p-1" />
              <del className="text-gray-600 text-xs md:text-sm ">
                {" "}
                <span className="font-bold">24/7</span> Mentorship guide
              </del>
            </li>
            <li className="flex justify-start space-x-2 items-center ">
              <RxCross2 className="bg-red-400 text-xl text-white rounded-full p-1" />
              <del className="text-gray-600 text-xs md:text-sm ">
                Weekly <span className="font-bold">LIVE</span> Mentorship
                Sessions
              </del>
            </li>
            <li className="flex justify-start space-x-2 items-center ">
              <RxCross2 className="bg-red-400 text-xl text-white rounded-full p-1" />
              <del className="text-gray-600 text-xs md:text-sm ">
                Special Access to{" "}
                <span className="font-bold text-gray-600">
                  {" "}
                  Personal AI Mentor
                </span>
                (Coming Soon)
              </del>
            </li>
          </ul>

          <button className="w-full flex justify-center items-center my-4" onClick={handleSubmitStarter} >
            <Link
              href="#"
              className="border w-5/6 rounded-full px-6 py-3 text-center hover:bg-black hover:shadow-sm hover:text-white hover:border-none hover:shadow-black transition-all ease-linear duration-200 "
            >
            
              Purchase Now
            </Link>
          </button>
        </div>

        {/* 2nd */}
        <div className="border relative rounded-xl bg-TechBlue hover:shadow-xl hover:scale-105 transition-all duration-200 ">
          <div className="px-6 pt-6">
            <h4 className="text-lg font-Poppins font-semibold text-white">
              Advanced
            </h4>
            <h2 className="text-3xl font-semibold text-white py-2">
              &#8377;{props.CostingData[1].price}
              <span className="text-xs font-normal text-gray-100">/year</span>
            </h2>
            <hr />
          </div>

          <ul className="pt-6 px-6 space-y-4">
            <li className="flex justify-start space-x-2 items-center">
              <MdDone className="bg-white text-xl text-TechBlue rounded-full p-1" />
              <span className=" text-xs md:text-sm text-white">Lectures</span>
            </li>
            <li className="flex justify-start space-x-2 items-center">
              <MdDone className="bg-white text-xl text-TechBlue rounded-full p-1" />
              <span className=" text-xs md:text-sm text-white">DPPs</span>
            </li>
            <li className="flex justify-start space-x-2 items-center  ">
              <MdDone className="bg-white text-xl text-TechBlue rounded-full p-1" />
              <span className=" text-xs md:text-sm text-white">
                Weekly test series
              </span>
            </li>
            <li className="flex justify-start space-x-2 items-center ">
              <MdDone className="bg-white text-xl text-TechBlue rounded-full p-1" />
              <span className=" text-xs md:text-sm text-white">
                Access the smartest student community
              </span>
            </li>
            <li className="flex justify-start space-x-2 items-center ">
              <MdDone className="bg-white text-xl text-TechBlue rounded-full p-1" />
              <span className=" text-xs md:text-sm text-white">
                <span className="font-bold text-white-600">LIVE</span> doubt
                clearing sessions
              </span>
            </li>
            <li className="flex justify-start space-x-2 items-center ">
              <MdDone className="bg-white text-xl text-TechBlue rounded-full p-1" />
              <span className=" text-xs md:text-sm text-white">
                Special Access to{" "}
                <span className="font-bold "> BRAHMASTRA</span>
                (Coming Soon)
              </span>
            </li>
            <li className="flex justify-start space-x-2 items-center ">
              <RxCross2 className="bg-red-400 text-xl text-white rounded-full p-1" />
              <del className="text-white text-xs md:text-sm ">
                {" "}
                <span className="font-bold">24/7</span> Mentorship guide
              </del>
            </li>
            <li className="flex justify-start space-x-2 items-center ">
              <RxCross2 className="bg-red-400 text-xl text-white rounded-full p-1" />
              <del className="text-white text-sm ">
                Weekly <span className="font-bold">LIVE</span> Mentorship
                Sessions
              </del>
            </li>
            <li className="flex justify-start space-x-2 items-center ">
              <RxCross2 className="bg-red-400 text-xl text-white rounded-full p-1" />
              <del className="text-white text-xs md:text-sm ">
                Special Access to{" "}
                <span className="font-bold "> Personal AI Mentor</span>
                (Coming Soon)
              </del>
            </li>
          </ul>

          <button className="w-full flex justify-center items-center my-4 " onClick={handleSubmitAdvance}>
            <Link
              href="#"
              className="border w-5/6 rounded-full text-center  px-6 py-3 bg-white text-TechBlue  hover:bg-black hover:shadow-sm hover:text-white hover:border-none hover:shadow-black transition-all ease-linear duration-200"
            >
              Purchase Now
            </Link>
          </button>

          <span
            datacontent="MOST POPULAR"
            className="w-[100px] h-[100px] absolute flex justify-center items-center -top-2 -right-2 overflow-hidden before:w-[180px] before:h-8 before:bg-white before:absolute before:rotate-45 before:-translate-y-4 before:content-[attr(dataContent)] before:flex before:justify-center before:items-center before:text-xs before:pl-6 before:text-TechBlue before:shadow-md "
          ></span>
        </div>

        {/* 3rd */}
        <div className="border rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-200 bg-white">
          <div className="px-6 pt-6">
            <h4 className="text-lg font-Poppins font-semibold text-darkBlue/90">
              Ultimate
            </h4>
            <h2 className="text-3xl font-semibold text-TechBlue py-2">
              &#8377;{props.CostingData[2].price}
              <span className="text-xs font-normal text-gray-500">/year</span>
            </h2>
            <hr />
          </div>

          <ul className="pt-6 px-6 space-y-4">
            <li className="flex justify-start space-x-2 items-center">
              <MdDone className="bg-TechBlue text-xl text-white rounded-full p-1" />
              <span className="text-gray-600 text-xs md:text-sm">Lectures</span>
            </li>
            <li className="flex justify-start space-x-2 items-center">
              <MdDone className="bg-TechBlue text-xl text-white rounded-full p-1" />
              <span className="text-gray-600 text-xs md:text-sm">
                Weekly test series
              </span>
            </li>
            <li className="flex justify-start space-x-2 items-center   ">
              <MdDone className="bg-TechBlue text-xl text-white rounded-full p-1" />
              <span className="text-gray-500 text-xs md:text-sm font-medium">
                Doubt clearing sessions
              </span>
            </li>
            <li className="flex justify-start space-x-2 items-center ">
              <MdDone className="bg-TechBlue text-xl text-white rounded-full p-1" />
              <span className="text-gray-600 text-xs md:text-sm">
                Access the smartest student community
              </span>
            </li>

            <li className="flex justify-start space-x-2 items-center ">
              <MdDone className="bg-TechBlue text-xl text-white rounded-full p-1" />
              <span className=" text-xs md:text-sm text-gray-600">
                <span className="font-bold text-white-600">LIVE</span> doubt
                clearing sessions
              </span>
            </li>
            <li className="flex justify-start space-x-2 items-center ">
              <MdDone className="bg-TechBlue text-xl text-white rounded-full p-1" />
              <span className=" text-xs md:text-sm text-gray-600">
                Special Access to{" "}
                <span className="font-bold "> BRAHMASTRA</span>
                (Coming Soon)
              </span>
            </li>
            <li className="flex justify-start space-x-2 items-center ">
              <MdDone className="bg-TechBlue text-xl text-white rounded-full p-1" />
              <span className="text-gray-600 text-xs md:text-sm ">
                <span className="font-bold">24/7</span> Mentorship guide
              </span>
            </li>
            <li className="flex justify-start space-x-2 items-center ">
              <MdDone className="bg-TechBlue text-xl text-white rounded-full p-1" />
              <span className="text-gray-600 text-xs md:text-sm ">
                Weekly <span className="font-bold">LIVE</span> Mentorship
                Sessions
              </span>
            </li>
            <li className="flex justify-start space-x-2 items-center ">
              <MdDone className="bg-TechBlue text-xl text-white rounded-full p-1" />
              <span className="text-gray-600 text-xs md:text-sm ">
                Special Access to
                <span className="font-bold "> Personal AI Mentor</span>
                (Coming Soon)
              </span>
            </li>
          </ul>

          <button className="w-full flex justify-center items-center my-4 " onClick={handleSubmitUltimate}>
            <Link
              href="#"
              className="border w-5/6 rounded-full px-6 py-3 text-center  hover:bg-black hover:shadow-sm hover:text-white hover:border-none hover:shadow-black transition-all ease-linear duration-200 "
            >
              Purchase Now
            </Link>
          </button>
        </div>
      </Slide>
    </div>

    </>
  );
};

export default Costing;
