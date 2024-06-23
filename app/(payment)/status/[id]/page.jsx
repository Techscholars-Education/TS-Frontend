"use client"
import { useCookieStore } from '@/hooks/useStore';
import { useParams } from 'next/navigation'
import { useEffect, useLayoutEffect, useState } from 'react';
import gif1 from "@/public/Ts-Loader.gif";
import Image from 'next/image';

const PaymentStatusPage = () => {
  const params = useParams()
  
  const [order, setOrder] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const[value13,setValue13] = useState()
  const[value12,setValue12] = useState()
  const[value11,setValue11] = useState()

  const {cookie} = useCookieStore()
  const id = params.id
    
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
  redirect: "follow"
};
   
try {
  const res = await fetch("https://api.techscholars.co.in/pdt/v1/product?category_id=2", {
  requestOptions
   });
   const data = await res.json();
   console.log(data.products);
   const item13 = data.products.filter((product) => product.class_for === "13");
   const item12 = data.products.filter((product) => product.class_for === "12");
   const item11 = data.products.filter((product) => product.class_for === "11");
      
      setValue13(item13);
      setValue12(item12);
      setValue11(item11);
} catch (error) {
  console.log(error.message);
}

    };

    fetchData();;
  }, [id]);

  // console.log(order.status);
  console.log(value12);

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


