"use client";
import React, { useRef } from "react";
import Mision from "./mision-vision";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

const Nosotros = () => {
  const nosRef = useRef(null);
  const pRef = useRef(null);
  const contRef2 = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: contRef2.current,
        start: "top bottom",
      },
    });

    tl.from(nosRef.current, {
      duration: 1,
      opacity: 0,
      scale: 0.2,
      ease: "power3.inOut",
    }).from(pRef.current, {
      duration: 1,
      opacity: 0,
      scale: 0.2,
      ease: "power3.inOut",
    });
  }, []);
  return (
    <>
      {/* ---------------nosotros --------------- */}
      <div
        ref={contRef2}
        className="px-[var(--padding-x)] py-[var(--padding-y)] flex flex-wrap items-center  h-full bg-[var(--bg-color-dark)] min-h-96 text-[var(--text-color-light)]"
      >
        <section className="flex-1 min-w-56 text-center ">
          <h2 ref={nosRef}>NOSOTROS</h2>
        </section>
        <section className="flex-1  min-w-56 text-center">
          <p ref={pRef}>
            Somos un Equipo de Profesionales Especialistas comprometidos con el
            desarrollo industrial, social y ambiental del sector Oil & Gas.
            Aportamos nuestros conocimientos al crecimiento de cada empresa que
            comparte nuestros valores y nuestra pasión por lo que realizamos día
            a día.
          </p>
        </section>
      </div>
      {/* ---------------section 2 --------------- */}
      <Mision />
    </>
  );
};

export default Nosotros;
