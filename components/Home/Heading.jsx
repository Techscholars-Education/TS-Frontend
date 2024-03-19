import React from "react";
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const Heading = () => {
  return (
    <div className="bg-[#FFE01B]">
      <p
        className={`${inter.className} text-center py-2 text-md tracking-widest uppercase font-base`}
      >
        Your unfair advantage - Accelerate your journey towards success!
      </p>
    </div>
  );
};

export default Heading;
