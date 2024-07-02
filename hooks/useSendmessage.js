import { tsUrl } from "@/config";
import axios from "axios";

const useSendmessage = () => {
  const sendMessage = async (email, message) => {
    try {
      const response = await axios.post(
        `${tsUrl}/pdt/v1/get_in_touch/send_email`,
        { email, message },
        { headers: { "Content-Type": "application/json" } }
      );
      const data = response.data;

      if (data.error || data.code !== "200") {
        throw new Error(data.error || "Unknown error occurred");
      }

      return data;
    } catch (error) {
      throw error; // Throw the error so it can be caught in handleSubmit
    }
  };

  return { sendMessage };
};

export default useSendmessage;
