import { useState } from "react";
import { toast } from "react-toastify";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(false);

  const signup = async ({
    first_name,
    last_name,
    phoneno,
    email,
    password,
  }) => {
    const success = handleInputErrors({
      first_name,
      last_name,
      phoneno,
      email,
      password,
    });
    if (!success) return;

    setLoading(true);

    try {
      const res = await fetch("https://api.techscholars.co.in/auth/v1/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name,
          last_name,
          phoneno,
          email,
          password,
        }),
      });

      const data = await res.json();

      if (!data.code) {
        toast.error("You have already account");
      } else {
        toast.success("Account created successfully");
        setChecking(true);
      }

      console.log(data);
      if (data.error) {
        throw new Error(data.error);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { checking, loading, signup };
};

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

function handleInputErrors({
  first_name,
  last_name,
  phoneno,
  email,
  password,
}) {
  if (!first_name || !last_name || !phoneno || !email || !password) {
    toast.error("Please fill in all fields");
    return false;
  }

  if (!validateEmail(email)) {
    toast.error("Invalid email format");
    return;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }

  return true;
}

export default useSignup;
