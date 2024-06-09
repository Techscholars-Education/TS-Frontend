import React from "react";
import Faqs from "@/components/Faqs/Faqs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const page = () => {
  return (
    <>
      <Navbar />
      <section className="mb-10 bg-gray-100">
        <Faqs />
      </section>
      <Footer />
    </>
  );
};

export default page;
