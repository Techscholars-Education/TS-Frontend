"use client";
import Cookies from "js-cookie";
import { useState } from "react";
import { toast } from "react-toastify";

const useGetway = () => {

  const [checking, setChecking] = useState(false);
  const getway = async (pdt_type,pdt_id,ts_id,uid,discount_code) => {
    try {
      const res = await fetch("https://api.techscholars.in/order/subscriptions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({pdt_type,pdt_id,ts_id,uid,discount_code }),
        mode: 'no-cors',
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
