"use client"
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react';

const PaymentStatusPage = () => {
  const params = useParams()
  const id  = "a96f8dc1d29e426699a28cac3725294c"
  
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        const response = await fetch(`https://smartgatewayuat.hdfcbank.com/payment-page/order/ordeh_${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();;
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Payment Status for ID: {id}</h1>
      {data ? (
        <div>
          <p>Status: {data.status}</p>
          <p>Amount: {data.amount}</p>
          <p>Date: {data.date}</p>
         
        </div>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export default PaymentStatusPage;
