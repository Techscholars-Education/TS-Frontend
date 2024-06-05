"use client";
import Cookies from "js-cookie";
import { useState } from "react";
import { toast } from "react-toastify";

const useLogin = () => {
  const [checking, setChecking] = useState(false);
  const login = async (username, password) => {
    try {
      const res = await fetch("https://api.techscholars.in/auth/v1/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
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
        Cookies.set("authCookie", data.access_token, {
          expires: sessionExpirationTime,
        });
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
