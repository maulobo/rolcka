import Image from "next/image";
import React from "react";
import pileta from "/public/images/pileta.jpg";
import "./scards.css";

export default function SCards2() {
  return (
    <div className="py-[var(--padding-y)] flex flex-wrap items-center gap-8 justify-center  text-[var(--text-color-light)] ">
      <div className="bg-slate-600 w-full md:w-auto  shadow rounded-3xl ">
        <section className="h-full flex  min-w-80 flex-wrap justify-center  ">
          <div className="h-full min-w-56 ">
            <Image src={pileta} height={300} alt="pileta" className="h-full" />
          </div>
          <div className=" md:max-w-80 md:min-w-32 p-8 flex flex-col gap-2  ">
            <h3 className="text-2xl">CISTERNAS</h3>
            <h3 className="text-2xl">CISTERNA DE GASOIL 20 m³</h3>
            <p>
              Tanque de almacenamiento de combustible: 20m³ o 20.000 litros.
              Batea de seguridad Bomba surtidora con caudalímetro y filtro.
              Tablero antiexplosivo.
            </p>
            <h3>CISTERNA DE AGUA 3.500 lts.</h3>
            <p>
              Tanque de almacenamiento de agua no potable: 3,5m³ o 3.500 litros.
              Bomba surtidora 1/2hp
            </p>
          </div>
        </section>
      </div>
      <div className="bg-slate-600 w-full md:w-auto shadow rounded-3xl">
        <section className="h-full flex min-w-80  flex-wrap justify-center  ">
          <div className=" md:max-w-80 min-w-32 text-right p-8">
            <h3 className="text-2xl">TANQUES</h3>
            <h3 className="text-2xl">TANQUE DE AGUA 3x9</h3>
            <p>
              Tanque de almacenamiento de agua no potable: 27m³ o 27.000 litros.
              Batea de seguridad
            </p>
            <h3>TANQUE DE AGUA 3x12</h3>
            <p>
              Tanque de almacenamiento de agua no potable: 36m³ o 36.000 litros.
              Batea de seguridad
            </p>
          </div>
          <div className="h-full min-w-40 ">
            <Image src={pileta} height={300} alt="pileta" className="h-full" />
          </div>
        </section>
      </div>
    </div>
  );
}
