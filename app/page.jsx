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

import React from "react";

const Home = () => {
  return (
    <section className="bg-white">
      <Navbar />
      <Hero />
      <Benefits />
      <Curriculum />
      <About />
      <Packages />
      <Testimonials />
      <Testimonialsslider />
      <Studenttest />
      <Aboutapp />
      <Footer />
    </section>
  );
};

export default Home;
