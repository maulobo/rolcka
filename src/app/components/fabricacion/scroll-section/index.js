"use client";
import { useRef } from "react";
import "./lateral.css";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import pileta from "/public/simbols/Pileta_red.png";
import cisterna from "/public/simbols/cisterna_red.png";
import trailers from "/public/simbols/Modulos_red.png";
import skid from "/public/simbols/Skid_red.png";

gsap.registerPlugin(ScrollTrigger);

const LateralScroll = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const sections = gsap.utils.toArray(".panel");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        end: () => "+=" + containerRef.current.offsetWidth,
      },
    });
  }, []);

  return (
    <div className="container bg-black" ref={containerRef}>
      {/* page 1 */}
      <section className="panel flex flex-col items-center justify-evenly px-[var(--padding-x)] py-[var(--padding-y)]  ">
        <div className="flex w-full text-right justify-end">
          <p className="md:w-[700px]">
            Nuestros servicios están orientados a un propósito común y a
            objetivos claros en cada proyecto: cumplir con las necesidades de
            nuestros clientes mediante una atención personalizada. Por ello, nos
            enfocamos en desarrollar productos certificados de alta calidad,
            efectivos e innovadores, que cumplen con los requisitos específicos
            de nuestros clientes y se construyen bajo rigurosos estándares y
            normativas de seguridad vigentes.
          </p>
        </div>
        {/* <div className="flex w-full justify-end ">
          <h3 className="border-solid border-2 rounded-xl border-red-500 py-2 px-8 text-red-500">
            NUESTROS SERVICIOS
          </h3>
        </div> */}
      </section>
      {/* page 2 */}
      <section className=" relative panel flex flex-col  px-[var(--padding-x)] py-[var(--padding-y)]">
        <div className="flex-1 flex  align-middle items-center ">
          <Image src={pileta} width={200} height={200} alt="pileta" />
          <h2 className="md:block hidden">PILETAS</h2>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <h3 className="text-3xl ">PILETAS DE ACUMULACIÓN DE AGUA Y LODO</h3>
          <p className="md:block hidden">
            Diseñadas para contener y gestionar eficientemente el agua y lodo
            producidos durante las operaciones petroleras, formando parte
            esencial del sistema de separación y tratamiento de fluidos.
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <h3 className="text-3xl ">PILETAS DE AGITACIÓN DE LODOS</h3>
          <p className="md:block hidden">
            Espacialmente diseñada para agitar y mezclar lodos, asegurando una
            suspensión homogénea de partículas sólidas en el líquido. La
            agitación es crucial para facilitar el procesamiento de lodos.
          </p>
        </div>
        <p className="absolute bottom-0 right-0">
          MEDIDAS GENERALES Y PERSONALIZADAS.
        </p>
      </section>
      {/* page 3 */}
      <section className=" relative panel  flex flex-col  px-[var(--padding-x)] py-[var(--padding-y)]">
        <div className="flex-1 flex flex-col gap-4">
          <h3 className="text-3xl">PILETAS DE DESFOGUE</h3>
          <p>
            Destinada a contener y gestionar los efluentes generados durante las
            operaciones, con sistemas de control y tratamiento para cumplir con
            las normativas ambientales.
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <h3 className="text-3xl">PILETAS CON ZARANDA</h3>
          <p>
            Equipadas con zaranda para separar eficientemente partículas sólidas
            de fluidos como lodos, garantizando que el fluido descargado esté
            libre de impurezas.
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <h3 className="text-3xl">PILETAS DE ENSAYO</h3>
          <p>
            Un espacio controlado para realizar pruebas y experimentos con
            diferentes fluidos, sustancias o procesos relacionados con la
            industria petrolera. Ideal para evaluar el rendimiento de equipos y
            probar nuevas tecnologías.
          </p>
        </div>
        <p className="absolute bottom-0 right-0">
          MEDIDAS GENERALES Y PERSONALIZADAS.
        </p>
      </section>
      {/* page 4 */}
      <section className=" panel flex flex-col  px-[var(--padding-x)] py-[var(--padding-y)] justify-evenly  ">
        <div className="flex flex-col gap-4">
          <div className="flex-1 flex  align-middle items-center ">
            <Image src={cisterna} width={200} height={200} alt="cisterna" />
            <h2 className="md:block hidden">CISTERNAS</h2>
          </div>
          <h3 className="text-3xl">CISTERNAS Y TANQUES PARA GAS OIL</h3>
          <p>
            Contenedores diseñados para el almacenamiento y transporte seguro de
            combustible diesel y otros derivados del petróleo, construidos con
            materiales resistentes y características específicas.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex-1 flex  align-middle items-center ">
            <Image src={trailers} width={200} height={200} alt="trailers" />
            <h2 className="md:block hidden">TRAILERS</h2>
          </div>
          <h3 className="text-3xl">TRAILERS Y MODULOS HABITACIONALES</h3>
          <p>
            Vehículos de transporte y estructuras móviles que ofrecen soluciones
            flexibles para oficinas móviles, dormitorios o instalaciones
            temporales en sitios remotos.
          </p>
        </div>
      </section>
      {/* page 5 */}
      <section className=" panel flex flex-col  px-[var(--padding-x)] py-[var(--padding-y)] justify-evenly  ">
        <div className="flex flex-col gap-4">
          <h3 className="text-3xl">ESTRUCTURAS Y PLATAFORMAS</h3>
          <p>
            Elementos diseñados para proporcionar soporte y acceso a equipos en
            diferentes entornos industriales, ideales para instalaciones de
            procesamiento, perforación u otras operaciones petroleras y de gas.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex-1 flex  align-middle items-center ">
            <Image src={skid} width={200} height={200} alt="skid" />
            <h2 className="md:block hidden">PIPING</h2>
          </div>
          <h3 className="text-3xl">PIPING</h3>
          <p>
            Sistemas de tuberías diseñados para transportar lodos, petróleo, gas
            natural y otros líquidos o gases industriales. Diseño, fabricación,
            instalación, reparación de tuberías
          </p>
        </div>
      </section>
    </div>
  );
};

export default LateralScroll;
