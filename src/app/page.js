import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import Footer from "./components/Footer";
import HomeSection from "./components/sections/Home";

export default function Home() {
  return (
    <main className="h-full">
      <Navbar/>
      <HomeSection/>
      <Footer/>
    </main>
  );
}
