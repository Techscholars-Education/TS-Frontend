"use client";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const useLogin = () => {
  const login = async (username, password) => {
    try {
      const res = await fetch("https://api.techscholars.co.in/auth/v1/login", {
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
        const sessionExpirationTime = 5 * 60 * 60;
        Cookies.set("authCookie", data.access_token, {
          expires: sessionExpirationTime,
        });
        window.location.reload();
      } else {
        toast.error("Email or password is not correct");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return { login };
};

export default useLogin;
