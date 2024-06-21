"use client"
import { useCookieStore } from '@/hooks/useStore';
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react';
import gif1 from "@/public/Ts-Loader.gif";
import Image from 'next/image';

const PaymentStatusPage = () => {
  const params = useParams()
  
  const [order, setOrder] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const {cookie} = useCookieStore()
  const id = params.id
    
  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {


      const myHeaders = new Headers();
      myHeaders.append("authorization", cookie);
      myHeaders.append("Content-Type", "application/json");
   
      const raw = JSON.stringify({
        "order_id": id
      });
            
      const res = await fetch("https://api.techscholars.co.in/order/handleJuspayResponse", {
        method: "POST",
        headers: myHeaders,
        body: raw,
       });
       const data = await res.json();
       setOrder(data)
        console.log(data);
      try {
       
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();;
  }, [id]);

  console.log(order.status);

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


// I need Figma for payment status, API to update the user that you are now a premium member when the user buys that course after the user can see my course route, and Admin APIs.