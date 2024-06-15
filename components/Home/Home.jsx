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
const Home = () => {
  return (
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
  );
};

export default Home;
