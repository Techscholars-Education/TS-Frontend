import React, { Suspense } from "react";
import Forgotpassword from "@/components/ForgotPassword/Forgotpassword";
const page = () => {
  return (
    <Suspense>
      <Forgotpassword />
    </Suspense>
  );
};

export default page;
