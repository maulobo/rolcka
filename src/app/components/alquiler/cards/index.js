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
            <h3 className="text-2xl">ACUMULACION</h3>
            <p>70m3 y 80 m3 sobre patines.</p>
            <p>
              Tanque principal con dos (2) bocas para limpieza, una base o
              patín, techo con chapa antideslizante, 2 bocas acceso personal,
              escalera de acceso, barandas, accesorios y refuerzos interiores
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
              Tanque principal con dos (2) bocas para limpieza, una base o
              patín, techo con chapa antideslizante, dos (2) bocas acceso
              personal, escalera de acceso, barandas, accesorios y refuerzos
              interiores.
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
