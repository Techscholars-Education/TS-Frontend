"use client";
import Cookies from "js-cookie";
import { useState } from "react";
import { toast } from "react-toastify";
import { useCookieStore } from "./useStore";

const useLogin = () => {

  const {cookieData} = useCookieStore()

  const [checking, setChecking] = useState(false);
  const login = async (username, password) => {
    const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
    try {
      const res = await fetch("https://api.techscholars.in/auth/v1/login", {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify({ username, password }),
        credentials: 'include'
      });
      const data = await res.json();
 
      if (data.error) {
        throw new Error(data.error);
      }

      if (data.access_token) {
        toast.success("Login successful");
        const sessionExpirationTime = new Date(
          new Date().getTime() + 5 * 60 * 60 * 1000
        );
        Cookies.set("access_token", data.access_token, {
          expires: sessionExpirationTime,
        });
  
        cookieData(data.access_token)
        
        // window.location.reload();
        setChecking(true);
      } else if (data.detail) {
        toast.error(data.detail);
      } else {
        toast.error("Email or password is not correct");
      }
    } catch (error) {
      toast.error(error.message);
    }

  };
  
  return { checking, login };
};

export default useLogin;
