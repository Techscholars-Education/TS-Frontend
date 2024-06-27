"use client";
import Cookies from "js-cookie";
import { useState } from "react";
import { toast } from "react-toastify";
import { useCookieStore } from "./useStore";

const useLogin = () => {
  const { cookieData } = useCookieStore();

  const [checking, setChecking] = useState(false);
  const login = async (username, password) => {
    const myHeaders = new Headers();
    console.log(username, password);
    myHeaders.append("Content-Type", "application/json");
    try {
      const res = await fetch("https://api.techscholars.in/auth/v1/login", {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify({ username, password }),
        credentials: "include",
      });
      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      if (data.user_type === 1) {
        toast.success("Login successful");
        const sessionExpirationTime = new Date(
          new Date().getTime() + 5 * 60 * 60 * 1000
        );
        Cookies.set("admin_user", data.user_type, {
          expires: sessionExpirationTime,
        });
        return true; //FOR THE DASHBOARD LOADER PURPOSE
      }
      if (data.user_type === 3) {
        toast.success("Login successful");
        const sessionExpirationTime = new Date(
          new Date().getTime() + 5 * 60 * 60 * 1000
        );
        Cookies.set("access_token", data.access_token, {
          expires: sessionExpirationTime,
        });

        cookieData(data.access_token);

        setChecking(true);
        return true; //FOR THE DASHBOARD LOADER PURPOSE
      } else if (data.detail) {
        toast.error(data.detail);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return { checking, login };
};

export default useLogin;
