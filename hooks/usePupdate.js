"use client";
import axios from "axios";
const usePupdate = () => {
  const updatePassword = async (password) => {
    try {
      const response = await axios.put(
        "https://api.techscholars.co.in/auth/reset/password/verify",
        {
          password,
        }
      );
      if (response.status === 200) {
        return {
          type: "success",
          message:
            "Password updated successfully. Try to login with new password",
        };
      }
    } catch (error) {
      if (response.status === 401) {
        return { type: "error", message: "User cannot be authenticated" };
      } else {
        return { type: "error", message: "Something went wrong" };
      }
    }
  };
  return { updatePassword };
};

export default usePupdate;
