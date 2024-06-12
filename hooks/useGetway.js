"use client";

import { toast } from "react-toastify";
import { useCookieStore } from "./useStore";
import Cookies from "js-cookie";

const useGetway = () => {

  const {cookie} = useCookieStore()

  const getway = async (id) => {

    let token = Cookies.get("access_token")
    // console.log(cookie);
    const myHeaders = new Headers();
    myHeaders.append("authorization", cookie);
    myHeaders.append("Content-Type", "application/json");
    
    const raw = JSON.stringify({
      "pdt_type": "1",
      "pdt_id": 4,
      "ts_id": null,
      "discount_code": null
    });
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,

    };
    
    fetch("https://api.techscholars.in/order/subscriptions", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  };
  return { getway };
};

export default useGetway;
