"use client"
import { useCookieStore, useProductJEEStore, useProductStore } from '@/hooks/useStore';
import { useParams } from 'next/navigation'
import { useEffect, useLayoutEffect, useState } from 'react';
import gif1 from "@/public/Ts-Loader.gif";
import Image from 'next/image';
import {tsUrl } from '@/config';

const PaymentStatusPage = () => {
  const params = useParams()
  
  const [order, setOrder] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const[value9,setValue9] = useState()
  const[value10,setValue10] = useState()

  const {cookie} = useCookieStore()
  const id = params.id

  // const {fetchData,classFor11 } = useProductStore();

  // useEffect(() => {
  //   fetchData();
  //   const cat = localStorage.getItem("userProductJee-storage");
  //   const s =  JSON.parse(cat)
    
  //   console.log(classFor11);
  // }, [fetchData]);
  


  useLayoutEffect(() => {
    if (!id) return;

    const fetchData = async () => {


      // const myHeaders = new Headers();
      // myHeaders.append("authorization", cookie);
      // myHeaders.append("Content-Type", "application/json");
   
      // const raw = JSON.stringify({
      //   "order_id": id
      // });
            
      // const res = await fetch("https://api.techscholars.co.in/order/handleJuspayResponse", {
      //   method: "POST",
      //   headers: myHeaders,
      //   body: raw,
      //  }); 
      //  const data = await res.json();
      //  setOrder(data)
      //   console.log(data);
      // try {
       
      // } catch (error) {
      //   setError(error.message);
      // } finally {
      //   setLoading(false);
      // }

   

const requestOptions = {
  method: "GET",
  redirect: "follow",
  headers: {
    'Accept': 'application/json',
  },
};
   
try {
  const res = await fetch(`${tsUrl}/pdt/v1/product?category_id=4`, {
  requestOptions
   });
   const data = await res.json();
   console.log(data);
   console.log(data.products);
   const item9 = data.products.filter((product) => product.class_for === "9");
   const item10 = data.products.filter((product) => product.class_for === "10");

       setValue9(item9);
      setValue10(item10);

} catch (error) {
  console.log(error.message);
}

    };

    fetchData();;
  }, [id]);

  console.log(value10);


  const paymentStatus = 'paid';

  if (loading) {
    return <div className="h-screen w-full flex items-center justify-center">
    <Image
      src={gif1}
      alt="gif-loader"
      className="lg:h-[20vh] lg:w-[10vw] h-[20vh] w-[35vw]  "
    />
  </div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-4">Payment Status</h2>
        <div
          className={`p-4 rounded-md ${
            paymentStatus === 'paid'
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
          }`}
        >
          <p className="font-semibold">
            {paymentStatus === 'paid' ? 'Payment Successful' : 'Payment Failed'}
          </p>
          {paymentStatus === 'paid' ? (
            <p className="mt-2">
              Your payment has been processed successfully.
            </p>
          ) : (
            <p className="mt-2">
              There was an issue processing your payment. Please try again later.
            </p>
          )}
        </div>
      </div>
    </div> 
  
  );
};

export default PaymentStatusPage;


