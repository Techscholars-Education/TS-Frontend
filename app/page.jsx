import Heading from "@/components/Home/Heading";
import Hero from "@/components/Home/Hero";
import Benefits from "@/components/Home/Benefits";
import Curriculum from "@/components/Home/Curriculum";
export default function Home() {
  return (
    <section>
      <Heading />
      <Hero />
      <Benefits />

      <div className="text-center my-20 space-y-8">
        <h2 className="text-darkBlue font-bold text-5xl text-center ">
          Bharat's Best Educational Platform
        </h2>

        <button className=" text-darkBlue border border-black/40 rounded-xl px-10 py-3 bg-yellowish text-2xl font-bold  hover:-translate-y-2  duration-300  auth-btn">
          Get Started
        </button>
      </div>

      <Curriculum />
    </section>
  );
}
