import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import Footer from "./components/Footer";
import HomeSection from "./components/sections/Home";
import Join from "./components/sections/Join";
import Recommend from "./components/sections/Recommend";
import Testimonial from "./components/sections/Testimonial";

export default function Home() {
  return (
    <main className="h-full bg-white">
      <Navbar/>
      <HomeSection/>
      <Join/>
      <Recommend/>
      <Testimonial/>
      <Footer/>
    </main>
  );
}
