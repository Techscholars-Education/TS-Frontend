"use client"

import { useState } from "react";
import { toast } from "react-toastify";
import { tsUrl } from '@/config';
import Cookies from "js-cookie";
const useGoogle = () => { 


//   let cookies = Cookies.get("access_token")

		const usegoogle = async () => {
            try {
              const res = await fetch(`${tsUrl}/auth/v1/oauth/login`, {
               method: "GET",
               redirect: "follow"
              });
              const data = await res.text();
              console.log(data);
            } catch (error) {
              toast.error(error.message);
            }
		};

	return {usegoogle };
};
export default useGoogle;