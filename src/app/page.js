import Image from "next/image";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/home/hero/hero";
import Nosotross from "./components/home/nosotros/nosotros";
import Nosotros from "./components/home/nosotros/nosotros";
import Mision from "./components/home/nosotros/mision-vision";
import Servicios from "./components/home/servicios/servicios";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Nosotros />
      <Servicios />
    </main>
  );
}
