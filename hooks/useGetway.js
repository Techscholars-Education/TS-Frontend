"use client";

import { toast } from "react-toastify";

const useGetway = () => {

  const getway = async () => {
    try {
      const res = await fetch("https://api.techscholars.co.in/order/subscriptions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          pdt_type: "1",
          pdt_id: 1,
          ts_id: null,
          uid: 1,
          discount_code: null
        }),
        mode: 'no-cors'
      });
      const data = await res.json();
      console.log(data);

      if (data.error) {
        throw new Error(data.error);
      }


    } catch (error) {
      toast.error(error.message);
    }
  };
  return { getway };
};

export default useGetway;
