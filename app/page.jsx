import Link from "next/link";
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

export default function Home() {
  return (
    <section className="bg-gray-100">
      <Navbar />
      <Hero />
      <Benefits />

      <div className="text-center my-20 space-y-8">
        <h2 className="text-darkBlue font-semibold text-4xl text-center font-Poppins ">
          Bharat’s Most Trusted Educational platform
        </h2>

        <div>
          <Link
            title="Contact with Councillor"
            href="/councillor"
            className="  font-Poppins text-darkBlue border border-black/40 rounded-xl px-10 py-3 bg-yellowish text-2xl font-medium  hover:-translate-y-2  duration-300  auth-btn"
          >
            Get started
          </Link>
        </div>
      </div>

      <Curriculum />
      <About />
      <Packages />
      <Testimonials />

      <Studenttest />
      <Aboutapp />
      <Footer />
    </section>
  );
}
