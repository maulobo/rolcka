import Navbar from "./components/navbar/navbar";
import Hero from "./components/home/hero/hero";
import Nosotros from "./components/home/nosotros/nosotros";
import Servicios from "./components/home/servicios/servicios";
import Confian from "./components/home/confian/confian";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Nosotros />
      <Servicios />
      <Confian />
    </main>
  );
}
