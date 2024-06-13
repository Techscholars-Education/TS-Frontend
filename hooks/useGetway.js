"use client";

import { toast } from "react-toastify";
import { useCookieStore } from "./useStore";
import { useRouter } from "next/navigation";

const useGetway = () => {
  const router = useRouter()

  const {cookie} = useCookieStore()

  const getway = async (id) => {
  //  console.log(id);
    const myHeaders = new Headers();
    myHeaders.append("authorization", cookie);
    myHeaders.append("Content-Type", "application/json");
    
    const raw = JSON.stringify({
      "pdt_type": "1",
      "pdt_id": id,
      "ts_id": null,
      "discount_code": null
    });
  
    try {
      const res = await fetch("https://api.techscholars.in/order/subscriptions", {
        method: "POST",
        headers: myHeaders,
        body: raw,
       });
       const data = await res.json();
      //  console.log(data.payment_links.web);
       router.push(data.payment_links.web)

    } catch (error) {
      toast.error(error.message);
    }

  };
  return { getway };
};

export default useGetway;
