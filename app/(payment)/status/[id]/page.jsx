"use client"
import { useCookieStore } from '@/hooks/useStore';
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react';

const PaymentStatusPage = () => {
  const params = useParams()
  
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const {cookie} = useCookieStore()
  const id = params.id
   
  console.log(params.id);
 
  
  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {


      
      try {
       
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();;
  }, [id]);

  const paymentStatus = 'paid';

  if (loading) {
    return <div>Loading...</div>;
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
