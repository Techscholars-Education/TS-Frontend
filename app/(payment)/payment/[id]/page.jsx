"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import addtocart from "@/public/payment/addtocart.png";
import phonepe from "@/public/payment/phonepe.svg";
import gpay from "@/public/payment/gpay.png";
import paytm from "@/public/payment/paytm.png";
import amazonpay from "@/public/payment/amazonpay.png";
import paymentcards from "@/public/payment/paymentcards.png";
import Cardinfo from "@/components/Payment/Cardinfo";
import Qrcode from "@/components/Payment/Qrcode";

import { useCourseStore } from "@/hooks/useStore";
import useGetway from "@/hooks/useGetway";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from 'next/navigation'

const Page = () => {
  
  const params = useParams()
  const {course,courseData} = useCourseStore()

  const {getway} = useGetway()


  const [prices, setPrices] = useState(0)
  const [id,setId] = useState(0)
  const [cName,setCName] = useState("")
  const [mainName,setMainName] = useState("")
  
  // const dropdownRef = useRef(null);
  // const [isOpen, setIsOpen] = useState(false);
  // const [paymentMethod, setPaymentMethod] = useState("");
  // const toggleDropdown = () => {
  //   setIsOpen(!isOpen);
  // };

  // const handleOptionClick = () => {
  //   setIsOpen(false);
  // };

  // const handleClickOutside = (event) => {
  //   if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //     setIsOpen(false);
  //   }
  // };

  // useEffect(() => {
  //   if (isOpen) {
  //     document.addEventListener("mousedown", handleClickOutside);
  //   } else {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   }

  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [isOpen]);

  useEffect(()=>{
    if(course){
      setMainName(course.mainName)
      setCName(course.name)
      setPrices(course.prices)
      setId(course.id);
    }else{
      setPrices(0)
      setId(0);
    }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[course.prices])

  const handleGetway = async(event) => {
    event.preventDefault();
    if(id === Number(params.id-9856748585)){
      await getway(id)
    }else{
      toast.error("Please select package first")
      courseData(0)
    } 
   }


  return (
    <>
      <ToastContainer />
      <section className=" grid grid-cols-1 lg:grid-cols-2 gap-12 w-full md:w-11/12 lg:md:w-10/12 md:mx-auto min-h-[80vh] py-24  mx-auto  ">
        <div className=" px-10 font-Poppins ">
          <div className="pb-6">
            <h3 className="font-Poppins font-semibold text-xl lg:text-2xl xl:text-3xl text-darkBlue">
              Order Summary
            </h3>
          </div>
          <hr />
          <div className="py-6 flex items-center   ">
            <div className=" rounded-xl ">
              <Image
                src={addtocart}
                className="rounded-xl border w-16 md:24 lg:w-24 "
                alt="add-to-cart"
              ></Image>
            </div>
            <div className=" flex  w-full p-4 font-Poppins  ">
              <div className=" w-3/4 text-start col-span-1 flex flex-col justify-center md:space-y-2 pr-2">
                <h4 className=" text-base xl:text-xl font-semibold font-Poppins">
                 {mainName}
                </h4>
                <p className="text-gray-600 text-xs xl:text-sm">
                  The course validity will end within 365 days
                </p>
              </div>
              <div className=" w-1/4  text-end md:text-center">
                <h2 className="text-base md:text-2xl xl:text-4xl font-semibold">
                  &#8377;{prices}
                </h2>
              </div>
            </div>
          </div>
          <hr />
          <div className="py-6">
            <div className=" flex justify-between space-x-2 md:space-x-8">
              <input
                className="border-2 border-gray-300 outline-none py-2 xl:py-4 px-2 text-sm xl:text-base rounded w-full"
                placeholder="Gift or discount code"
                type="text"
              />
              <button className="text-white bg-TechBlue py-2 xl:py-4 px-8 rounded text-base">
                Apply
              </button>
            </div>
          </div>
          <hr />
          <div className="py-6">
            <div className=" flex justify-between">
              <p className="text-gray-600 text-sm md:text-base ">Subtotal</p>
              <p className="text-TechBlue text-sm md:text-base font-semibold">
                &#8377;{prices}
              </p>
            </div>
            {/* <div className=" flex justify-between">
              <p className="text-gray-600 text-sm md:text-base">GST 18%</p>
              <p className="text-TechBlue  text-sm md:text-base font-semibold">
                &#8377;{gst}
              </p>
            </div> */}
          </div>
          <hr />
          <div className="py-6">
            <div className=" flex justify-between">
              <p className="text-gray-600 text-base md:text-xl">Grand Total</p>
              <p className="text-TechBlue text-lg md:text-4xl font-semibold">
                &#8377;{Number(prices)}
              </p>
            </div>
          </div>
          <hr />
        </div>

        <div className=" px-10 font-Poppins ">
          <div className="pb-6">
            <h3 className="font-Poppins font-semibold text-xl lg:text-2xl xl:text-3xl text-darkBlue">
             Payment method
            </h3>
          </div>
          <hr />
             
              {/* Go for payment */}

              <div className="mt-10">
                <button
               onClick={handleGetway}
                className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-4 bg-TechBlue/90 text-sm font-medium text-white hover:bg-TechBlue transition-all text-[1.7vw] hover:text-black duration-200 ease-linear "
                >
                     Go for Payment
                </button>
              </div>


          {/* Available payment methods */}
          {/* <div
            className="relative inline-block text-left font-Poppins py-4  "
            ref={dropdownRef}
          >
            <div>
              <button
                type="button"
                className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-4 bg-TechBlue/90 text-sm font-medium text-white hover:bg-TechBlue transition-all "
                id="options-menu"
                aria-expanded={isOpen}
                aria-haspopup="true"
                onClick={toggleDropdown}
              >
                Available payment Methods
                <svg
                  className={`ml-2 -mr-1 h-5 w-5 ${
                    isOpen ? "rotate-180" : ""
                  } transition-all`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            {isOpen && (
              <div
                className="origin-top-right z-50 absolute right-0 mt-2 w-[290px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none transition ease-out duration-200"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <div className="py-1" role="none">
                  <button
                    className=" relative px-4 py-3 font-medium hover:text-TechBlue text-xs lg:text-sm text-gray-700 hover:bg-gray-100 flex items-center justify-between w-full"
                    role="menuitem"
                    onClick={() => {
                      setPaymentMethod("upi");
                      handleOptionClick();
                    }}
                  >
                    UPI{" "}
                    <span className="flex items-center  space-x-2">
                      <Image
                        className="w-16"
                        src={phonepe}
                        alt="phonepe-icon"
                      ></Image>
                      <Image
                        className="w-8 mt-1"
                        src={gpay}
                        alt="gpay-icon"
                      ></Image>
                      <Image
                        className="w-16 mt-2"
                        src={amazonpay}
                        alt="amazonpay-icon"
                      ></Image>
                      <Image
                        className="w-10"
                        src={paytm}
                        alt="paytm-icon"
                      ></Image>
                    </span>
                  </button>
                  <button
                    className="px-4 py-3 font-medium hover:text-TechBlue text-xs lg:text-sm text-gray-700 hover:bg-gray-100 flex items-center justify-between w-full"
                    role="menuitem"
                    onClick={() => {
                      setPaymentMethod("credit");
                      handleOptionClick();
                    }}
                  >
                    Credit card{" "}
                    <span className="flex items-center  space-x-2">
                      <Image
                        className="w-16"
                        src={paymentcards}
                        alt="visa-cards-icons"
                      ></Image>
                    </span>
                  </button>
                  <button
                    className="px-4 py-3 font-medium hover:text-TechBlue text-xs lg:text-sm text-gray-700 hover:bg-gray-100 flex items-center justify-between w-full"
                    role="menuitem"
                    onClick={() => {
                      setPaymentMethod("debit");
                      handleOptionClick();
                    }}
                  >
                    Debit card{" "}
                    <span className="flex items-center  space-x-2">
                      <Image
                        className="w-16"
                        src={paymentcards}
                        alt="visa-cards-icons"
                      ></Image>
                    </span>
                  </button>
                </div>
              </div>
            )}
          </div> */}

          {/* QR CODE || CARD DETAILS */}

          {/* {paymentMethod === "" ? (
            <div className=" text-sm xl:text-xl font-Poppins text-gray-600">
              Please select the payment method from the above list to proceed
              furthur.
            </div>
          ) : (
            <>
              {paymentMethod === "upi" ? (
                <Qrcode />
              ) : (
                <>
                  {paymentMethod === "debit" ? (
                    <Cardinfo cardType="Debit" />
                  ) : (
                    <Cardinfo cardType="Credit" />
                  )}
                </>
              )}
            </>
          )} */}
        </div>
      </section>
      <Footer />
    </>

    // <div>
    //   <button onClick={handleGetway}>click</button>
    // </div>
  );
};

export default Page;
