import { alquiler } from "@/app/data/data";
import React from "react";
import "./s-servicios.css";
import Image from "next/image";

export default function SServicios() {
  return (
    <section className=" flex flex-col px-[var(--padding-x)] py-[var(--padding-y)] min-h-96 back-ss gap-8 text-[var(--text-color-light)]">
      <section className=" min-h-40  flex flex-col justify-center  px-4 ">
        <h2 className="text-center bg-slate-50 text-black">
          Alquiler de equipos
        </h2>
        <h3 className="text-white  p-2">Para la industria de oil & gas</h3>
      </section>
      <div className="flex justify-evenly w-full flex-wrap gap-8 ">
        {alquiler.map(({ src, text }, index) => {
          return (
            <div
              key={`${index}_alquiler`}
              className="flex flex-col items-center gap-2"
            >
              <Image src={src} height={300} alt={src} width={300} />

              <h3>{text}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}
