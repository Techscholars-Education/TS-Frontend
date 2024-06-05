"use client";
import React from "react";
import Hero from "@/components/Home/Hero";
import Benefits from "@/components/Home/Benefits";
import Curriculum from "@/components/Home/Curriculum";
import About from "@/components/Home/About";
import Testimonials from "@/components/Home/Testimonials";
import Studenttest from "@/components/Home/Studenttest";
import Aboutapp from "@/components/Home/Aboutapp";
import Footer from "@/components/Footer";
import Packages from "@/components/Home/Packages";
import Navbar from "@/components/Navbar";
import Testimonialsslider from "@/components/Home/Testimonialsslider";
import Faculties from "./Faculties";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Script from "next/script";

const Home = () => {
  useGSAP(() => {
    gsap
      .timeline()
      .to(
        ".loading__text",
        {
          delay: 0.2,
          duration: 3,
          opacity: 0,
          yPercent: -400,
          ease: "BezierEasing(0.19,1,0.22,1)",
        },
        "p"
      )
      .to(
        ".title",
        {
          duration: 2,
          delay: 0.3,
          y: -10,
          opacity: 1,
          background: "white",
          ease: "inOut",
        },
        "-=2.5"
      );
  });

  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"
        integrity="sha512-H6cPm97FAsgIKmlBA4s774vqoN24V5gSQL4yBTDOY2su2DeXZVhQPxFK4P6GPdnZqM9fg1G3cMv5wD7e6cFLZQ=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <div id="preloader">
        <div className="loading__text font-Poppins">
          WELCOME TO <br /> TECHSCHOLARS
        </div>
      </div>

      <div className="title">
        <Navbar />
        <Hero />
        <Benefits />
        <Curriculum />
        <About />
        <Packages />
        <Faculties />
        <Studenttest />
        <Testimonials />
        <Testimonialsslider />
        <Aboutapp />
        <Footer />
      </div>
    </>
  );
};

export default Home;
