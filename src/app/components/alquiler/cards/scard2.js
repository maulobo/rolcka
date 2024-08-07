import Image from "next/image";
import React from "react";
import pileta from "/public/images/pileta.jpg";
import "./scards.css";
import { CarouselDemo } from "@/components/ui/caroutdemo";
import { imgGa } from "@/app/data/data";
import { imgTa } from "@/app/data/data";

export default function SCards2() {
  return (
    <div className="py-[var(--padding-y)] flex flex-wrap items-center gap-8 justify-center  text-[var(--text-color-light)] ">
      <div className="bg-slate-600 w-full md:w-auto  md:shadow rounded-3xl flex flex-col gap-4 ">
        <section className="h-full flex min-w-96  flex-wrap justify-center  md:items-center  ">
          <div className="flex items-center	align-middle justify-center p-14  ">
            <CarouselDemo images={imgGa} />
          </div>
          <div className=" md:max-w-[600px] md:min-w-32 p-8 flex flex-col gap-4 ">
            <h3>CISTERNAS DE GASOIL</h3>
            <p>
              tanque de alamacenamiento de combustible con kit de sustraccion
              equipado con bomba, caudalimentro y filtro.
            </p>
            <p>
              Batea de contencion y tablero antiexplosivo. Bomba surtidora 1/2hp
            </p>
            <p>Capacidades: 5m3 , 10m3 y 20m3</p>
          </div>
        </section>
      </div>
      <div className="bg-slate-600 w-full md:w-auto md:shadow rounded-3xl ">
        <section className="h-full flex min-w-80  flex-wrap justify-center  md:items-center   ">
          <div className=" md:max-w-[600px] min-w-32 text-right p-8 flex flex-col gap-2">
            <h3>TANQUE DE AGUA</h3>
            <p>Tanque de almacenamiento de agua no potable</p>
            <h3>Dimensiones: 3x9mts</h3>
            <p>27m³ o 27.000 litros</p>
            <h3>Dimensiones: 3x12mts</h3>
            <p>36m³ o 36.000 litros.</p> <p>Ambas cuentan con manifold.</p>
          </div>
          <div className="h-full min-w-40 md:items-center  ">
            <div className="flex items-center	align-middle justify-center p-14  ">
              <CarouselDemo images={imgTa} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
