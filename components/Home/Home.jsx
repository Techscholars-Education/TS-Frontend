"use client";
import React, { useEffect } from "react";
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
    gsap.to(
      ".bar",
      {
        delay: 1.5,
        height: 0,
        stagger: {
          amount: 0.5,
        },
        ease: "power4.inOut",
      },
      "1.5"
    );

    gsap.to(".welcome h1", {
      y: "-110%",
      opacity: 0,
      rotationZ: "10",
      duration: 2,
      ease: "power4.out",
      stagger: 0.2,
    });
    gsap.to(".too h1", {
      x: "-110%",
      opacity: 0,
      rotationZ: "10",
      duration: 2,
      ease: "power4.out",
      stagger: 0.2,
    });
    gsap.to(".tech h1", {
      y: "110%",
      opacity: 0,
      rotationZ: "10",
      duration: 2,
      ease: "power4.out",
      stagger: 0.2,
    });

    gsap.to(".counter", {
      delay: 1.5,
      opacity: 0,
    });

    gsap.to(
      ".title",
      {
        duration: 2,
        delay: 0.2,
        y: -10,
        opacity: 1,
        display: "block",
        background: "white",
        ease: "inOut",
      },
      "-=2.5"
    );
    gsap.to(".overlay", {
      duration: 1.1,
      delay: 3.7,
      width: 0,
      display: "none",
      background: "black",
    });
  });

  useEffect(() => {
    function starLoader() {
      let counterElement = document.querySelector(".counter");
      let currentValue = 0;

      function updateCounter() {
        if (currentValue === 100) {
          return;
        }
        currentValue += Math.floor(Math.random() * 10) + 1;

        if (currentValue > 100) {
          currentValue = 100;
        }
        counterElement.textContent = currentValue;
        let delay = Math.floor(Math.random() * 100) + 30;
        setTimeout(updateCounter, delay);
      }

      updateCounter();
    }
    starLoader();
  });

  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"
        integrity="sha512-H6cPm97FAsgIKmlBA4s774vqoN24V5gSQL4yBTDOY2su2DeXZVhQPxFK4P6GPdnZqM9fg1G3cMv5wD7e6cFLZQ=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />

      <div className="overlay">
        <div>
          <div className="font-bold text-[6vw] max-lg:text-[15vw] absolute z-40 heading_text text-white">
            <div className="welcome flex justify-center">
              <h1>W</h1>
              <h1>E</h1>
              <h1>L</h1>
              <h1>C</h1>
              <h1>O</h1>
              <h1>M</h1>
              <h1>E </h1>
            </div>
            <div className="too flex justify-center">
              <h1>T</h1>
              <h1>O</h1>
            </div>
            <div className="tech flex justify-center">
              <h1>T</h1>
              <h1>E</h1>
              <h1>C</h1>
              <h1>H</h1>
              <h1>S</h1>
              <h1>H</h1>
              <h1>O</h1>
              <h1>L</h1>
              <h1>A</h1>
              <h1>R</h1>
              <h1>S</h1>
            </div>
          </div>
          <h1 className="absolute z-40 top-[33vw] right-10 counter max-lg:top-[180vw] max-lg:right-36 max-lg:text-[15vw] text-white">
            0
          </h1>
        </div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div className="title">
        <Navbar />
        <Hero />
        <Benefits />
        <Curriculum />
        <About />
        <Packages />
        <Faculties calling={"home"} />
        <Testimonials />
        <Testimonialsslider />
        <Studenttest />
        <Aboutapp />
        <Footer />
      </div>
    </>
  );
};

export default Home;
