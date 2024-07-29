import Image from "next/image";
import React from "react";
import pileta from "/public/images/pileta1.jpeg";
import "./scards.css";

export default function SCards() {
  return (
    <div className="py-[var(--padding-y)] flex flex-wrap items-center gap-8 justify-center  text-[var(--text-color-light)] ">
      <div className="bg-slate-600 w-full md:w-auto flex md:shadow rounded-3xl">
        <section className="h-full relative flex min-w-80 flex-wrap md:justify-center md:items-center   ">
          <div className="h-full min-w-40  flex items-center	  ">
            <Image
              src={pileta}
              height={250}
              alt="pileta"
              className="h-full w-full"
            />
          </div>
          <div className=" md:max-w-80 min-w-32 md:text-left flex flex-col p-8 gap-4">
            <h3 className="text-2xl">ACUMULACIÓN</h3>
            <p>
              Tanques fabricados con chapa de ¼ de espesor sobre patines de IPN.
              Cuenta con Escalera a 45°, barandas perimetrales y rodapié
              Capacidades: 60m3, 70m3 y 80m3 Con certificado de estanquidad
            </p>
            <p>Largo 10,50 mts.</p>
          </div>
        </section>
      </div>
      <div className="bg-slate-600 w-full md:w-auto md:shadow rounded-3xl ">
        <section className="h-full flex min-w-80 flex-wrap md:justify-center  md:items-center	 ">
          <div className="md:max-w-80 min-w-32 md:text-right p-8 flex flex-col gap-4 ">
            <h3>AGITACIÓN DE LODO</h3>
            <p>
              Tanques de 70 m3 fabricados con chapa de ¼ de espesor, sobre
              patines de IPN. Cuenta con Escalera a 45°, barandas perimetrales y
              rodapié Sistema de remoción de lodos, compuesto por 3 conjuntos de
              moto-reductores Sistema eléctrico antiexplosivos Con certificado
              de estanquidad
            </p>
          </div>
          <div className="h-full min-w-40 flex  md:justify-center md:items-center">
            <Image
              src={pileta}
              height={250}
              alt="pileta"
              className="h-full w-full"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
