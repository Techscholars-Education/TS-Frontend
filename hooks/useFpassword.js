"use client";
import axios from "axios";
const useFpassword = () => {
  const forgotPassword = async (email) => {
    try {
      const response = await axios.post(
        "https://api.techscholars.in/auth/reset/password",
        {
          email,
        }
      );
      if (response.status === 200) {
        return {
          type: "success",
          message:
            "Link to update password will be sent to your entered email shortly",
        };
      }
    } catch (error) {
      if (response.status === 400) {
        return { type: "error", message: "The email is not registered" };
      } else {
        return { type: "error", message: "Something went wrong" };
      }
    }
  };
  return { forgotPassword };
};

export default useFpassword;
