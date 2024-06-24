"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Hero from "@/components/Home/Hero";
import Benefits from "@/components/Home/Benefits";
import Curriculum from "@/components/Home/Curriculum";
import About from "@/components/Home/About";
import Testimonials from "@/components/Home/Testimonials";
import Studenttest from "@/components/Home/Studenttest";
import Aboutapp from "@/components/Home/Aboutapp";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Testimonialsslider from "@/components/Home/Testimonialsslider";
import Faculties from "./Faculties";
import Price from "./Price";
import sciencebook from "@/public/sciencebook.gif";
const Home = () => {
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoaded ? (
        <div className="h-screen w-full flex items-center justify-center">
          <Image
            src={sciencebook}
            alt="science-book-loader"
            className="lg:h-[20vh] lg:w-[10vw] h-[20vh] w-[35vw]  "
          />
        </div>
      ) : (
        <>
          <Navbar />
          <Hero />
          <Benefits />
          <Curriculum />
          <About />
          <Price />
          <Faculties calling={"home"} />
          <Testimonials />
          <Testimonialsslider />
          <Studenttest />
          <Aboutapp />
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
