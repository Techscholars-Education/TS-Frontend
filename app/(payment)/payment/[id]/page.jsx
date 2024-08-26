"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import addtocart from "@/public/payment/addtocart.png";
import { useCourseStore } from "@/hooks/useStore";
import useGetway from "@/hooks/useGetway";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "next/navigation";
import { decryptData } from "@/utils";

const Page = () => {
  const params = useParams();
  const encryptedParams = params.id;
  const { course, courseData } = useCourseStore();

  const { getway } = useGetway();

  const [prices, setPrices] = useState(0);
  const [, setId] = useState(0);
  const [, setCName] = useState("");
  const [mainName, setMainName] = useState("");

  useEffect(() => {
    if (course) {
      setMainName(course.mainName);
      setCName(course.name);
      setPrices(course.prices);
      setId(course.id);
    } else {
      setPrices(0);
      setId(0);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [course.prices]);

  const handleGetway = async (event) => {
    event.preventDefault();
    if (encryptedParams) {
      const decryptedParams = decryptData(decodeURIComponent(encryptedParams));
      await getway(decryptedParams);
    } else {
      toast.error("Please select package first");
      courseData(0);
    }
  };

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
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Page;
