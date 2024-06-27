"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import addtocart from "@/public/payment/addtocart.png";
import { useCookieStore, useCourseStore } from "@/hooks/useStore";
import gif1 from "@/public/Ts-Loader.gif";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from 'next/navigation';
import img1 from "@/public/tick.gif"
import img2 from "@/public/pending.gif"
import img3 from "@/public/cross.gif"
import img4 from "@/public/error.gif"
import Link from "next/link";

const Page = () => {
  const params = useParams();
  const id  = params.id;
  const [order, setOrder] = useState();
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [status, setStatus] = useState('loading');
  const {cookie} = useCookieStore()
   

 useEffect(()=>{
  if (!id) return;
    
        const fetchData = async () => {
          const myHeaders = new Headers();
          myHeaders.append("authorization", cookie);
          myHeaders.append("Content-Type", "application/json");
       
          const raw = JSON.stringify({
            "order_id": id
          });
                
          const res = await fetch("https://api.techscholars.in/order/handleJuspayResponse", {
            method: "POST",
            headers: myHeaders,
            body: raw,
           }); 
           const data = await res.json();
           setOrder(data)
           setStatus(data.status)
          try {
           
          } catch (error) {
            setError(error.message);
          } 
        }
    
        fetchData();;

// eslint-disable-next-line react-hooks/exhaustive-deps             
 },[id])

 const formatDateTime = (isoString) => {
  const date = new Date(isoString);

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based, so add 1
  const day = date.getDate().toString().padStart(2, '0');

  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');

  const formattedDate = `${day}/${month}/${year}`;
  const formattedTime = `${hours}:${minutes}:${seconds}`;

  return { formattedDate, formattedTime };
};

const { formattedDate, formattedTime } = formatDateTime(order ? order.date_created : '');
  

  return (
    <>
      <ToastContainer />
      <section className={`grid grid-cols-1 lg:grid-cols-2 gap-12 w-full md:w-11/12 lg:md:w-10/12 md:mx-auto min-h-[80vh] py-24 mx-auto ${isModalOpen ? "blur-sm" : ""}`}>
        <div className="px-10 font-Poppins">
          <div className="pb-6">
            <h3 className="font-Poppins font-semibold text-xl lg:text-2xl xl:text-3xl text-darkBlue">
              Order Summary
            </h3>
          </div>
          <hr />
          <div className="py-6 flex items-center">
            <div className="rounded-xl">
              <Image
                src={addtocart}
                className="rounded-xl border w-16 md:24 lg:w-24"
                alt="add-to-cart"
              ></Image>
            </div>
            <div className="flex w-full p-4 font-Poppins">
              <div className="w-3/4 text-start col-span-1 flex flex-col justify-center md:space-y-2 pr-2">
                <h4 className="text-base xl:text-xl font-semibold font-Poppins">
                  {}
                </h4>
                <p className="text-gray-600 text-xs xl:text-sm">
                  The course validity will end within 365 days
                </p>
              </div>
              <div className="w-1/4 text-end md:text-center">
                <h2 className="text-base md:text-2xl xl:text-4xl font-semibold">
                  &#8377;{}
                </h2>
              </div>
            </div>
          </div>
          <hr />
          <div className="py-6">
            <div className="flex justify-between space-x-2 md:space-x-8">
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
            <div className="flex justify-between">
              <p className="text-gray-600 text-sm md:text-base">Subtotal</p>
              <p className="text-TechBlue text-sm md:text-base font-semibold">
                &#8377;{}
              </p>
            </div>
          </div>
          <hr />
          <div className="py-6">
            <div className="flex justify-between">
              <p className="text-gray-600 text-base md:text-xl">Grand Total</p>
              <p className="text-TechBlue text-lg md:text-4xl font-semibold">
                &#8377;{}
              </p>
            </div>
          </div>
          <hr />
        </div>

        <div className="px-10 font-Poppins">
          <div className="pb-6">
            <h3 className="font-Poppins font-semibold text-xl lg:text-2xl xl:text-3xl text-darkBlue">
              Payment method
            </h3>
          </div>
          <hr />

          {/* Go for payment */}
          <div className="mt-10">
            <button
              className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-4 bg-TechBlue/90 text-sm font-medium text-white hover:bg-TechBlue transition-all text-[1.7vw] hover:text-black duration-200 ease-linear"
            >
              Go for Payment
            </button>
          </div>
        </div>
      </section>
       <div className={` ${isModalOpen ? "blur-sm" : ""}`}>

      <Footer />
       </div>
  
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-[35vw] lg:h-auto">
          {status === 'loading' && (
          <div className="h-[40vh]">
          <Image
              src={gif1}
              alt="gif-loader"
              className="lg:h-[20vh] lg:w-[10vw] h-[20vh] w-[35vw] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
            />
          </div>
        )}
        {status === 'CHARGED' && (
          <div> 
  <div className="flex justify-center mb-2">
  <Image
              src={img1}
              alt="gif-loader"
              className="lg:h-[5vh] lg:w-[2.5vw] h-[20vh] w-[5vw]  "
            />
  </div>
            <div className="text-green-500 text-xl font-semibold text-center mb-3">Payment Success!</div>
            <div className="text-center font-bold text-2xl mb-3">Rs.{order ? order.amount : ""} </div>
            <div className="text-center mb-4 flex flex-col gap-3">
              <div className="border-t pt-4 flex justify-between">
                 <p className="text-gray-500">Transaction ID </p>
                 <p className="font-semibold">{order ? order.order_id : ""}</p>
               </div>
              <div className="flex justify-between">
                 <p className="text-gray-500">Payment Time</p>
                 <p className="font-semibold">{formattedDate},{formattedTime}</p>
               </div>
              <div className="flex justify-between">
                 <p className="text-gray-500">Payment Method</p>
                 <p className="font-semibold">{order ? order.payment_method : ""} {order ? order.payment_method_type : ""}</p>
               </div>
              <div className="flex justify-between">
                 <p className="text-gray-500">Name</p>
                 <p className="font-semibold">{order ? order.customer_id : ""}</p>
               </div>
              
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between"> <p className="text-gray-500">Course Fee :</p> <p className="font-semibold">{order ? order.amount : ""}</p></div>
              {/* <div className="flex justify-between"> <p className="text-gray-500">GST (18%) :</p> </div> */}
              <div className="flex justify-between"> <p className="text-gray-500">Total :</p> <p className="font-semibold">{order ? order.effective_amount : ""}</p> </div>
              
            </div>
          </div>
        )}
        {status === 'AUTHORIZATION_FAILED' && (
          <div>
          <div className="flex justify-center mb-2">
          <Image
              src={img3}
              alt="gif-loader"
              className="lg:h-[5vh] lg:w-[3vw] h-[20vh] w-[5vw]"
            />
          </div>
          <div className="text-red-500 text-2xl font-bold text-center mb-4">Payment Failed</div>
          </div>
        )}
        {status === 'PENDING_VBV' && (
          <div>
          <div className="flex justify-center mb-2">
          <Image
              src={img2}
              alt="gif-loader"
              className="lg:h-[5vh] lg:w-[3vw] h-[20vh] w-[5vw]"
            />
          </div>
          <div className="text-yellow-500 text-2xl font-bold text-center mb-4">Payment Pending</div>
          </div>
        )}
        {!status && (
          <div>
          <div className="flex justify-center mb-2">
          <Image
              src={img4}
              alt="gif-loader"
              className="lg:h-[5vh] lg:w-[3vw] h-[20vh] w-[5vw]"
            />
          </div>
          <div className="text-red-500 text-2xl font-bold text-center mb-4">Error Fetching Payment Status</div>
          </div>
        )}
        {status === 'NEW' && (
                 <div>
                  <h1  className="text-blue-500 text-2xl font-bold text-center mb-4">Payment is not complete yet <br /> Please Complete your payment</h1>
                  <Link href={"/dashboard/courses"} className="text-yellow-500 text-2xl font-bold text-center mb-4 hover:text-black transition-all ease-in-out duration-200">Go Back To Courses</Link>
                 </div>
        )}
            
          </div>
        </div>
      )}
    </>
  );
};

export default Page;
