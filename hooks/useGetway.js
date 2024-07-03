"use client";

import { toast } from "react-toastify";
import { useCookieStore, useOrderIDStore } from "./useStore";
import { useRouter } from "next/navigation";
import { tsUrl } from "@/config";

const useGetway = () => {
  const router = useRouter()
  const {orderIdData} = useOrderIDStore()

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
      const res = await fetch(`${tsUrl}/order/subscriptions`, {
        method: "POST",
        headers: myHeaders,
        body: raw,
       });
       const data = await res.json();
      //  console.log(data.order_id);
       orderIdData(data.order_id)
       router.push(data.payment_links.web)

    } catch (error) {
      toast.error(error.message);
    }

  };
  return { getway };
};

export default useGetway;
