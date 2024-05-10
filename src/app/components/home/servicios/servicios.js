import React from "react";
import { Fabricacion, alquiler } from "@/app/data/data";

const Servicios = () => {
  return (
    <div>
      <section className=" min-h-40 bg-black text-yellow-50 flex flex-col justify-center items-center px-[var(--padding-x)] py-[var(--padding-y)]">
        <h2 className="text-center">NUESTROS SERVICIOS</h2>
        <h3 className=" bg-slate-50 text-black">ALQUILER Y FABRICACION</h3>
      </section>
      {/* ALQUIlER */}
      <section className=" px-[var(--padding-x)] py-[var(--padding-y)] min-h-96">
        <div className="w-full bg-gray-400 h-full  flex flex-col gap-8 justify-center items-center px-[var(--padding-x)] py-[var(--padding-y)]">
          <h2>ALQUILER</h2>
          <div className="grid md:grid-cols-3  gap-16 grid-row-3 ">
            {alquiler.map(({ A, B, C, D }, index) => {
              return (
                <div
                  key={`${index}_alquiler`}
                  className="flex flex-col items-center gap-2"
                >
                  <div className=" h-40 w-40 border-2 rounded-3xl border-white flex flex-col items-center justify-center ">
                    <h4>{A}</h4>
                    <h4>{B}</h4>
                  </div>
                  <h3>{C}</h3>
                  <h4>{D}</h4>
                </div>
              );
            })}
          </div>
          <button>BOTON</button>
        </div>
      </section>
      {/* Fabricacion */}
      <section className=" px-[var(--padding-x)] py-[var(--padding-y)] min-h-96 bg-yellow-100">
        <div className="w-full bg-gray-400 h-full  flex flex-col gap-8 justify-center items-center px-[var(--padding-x)] py-[var(--padding-y)]">
          <h2>FABRICACION</h2>
          <div className="grid md:grid-cols-3  gap-16 grid-row-3 ">
            {Fabricacion.map(({ A, B, C, D }, index) => {
              return (
                <div
                  key={`${index}_fabricacion`}
                  className="flex flex-col items-center gap-2"
                >
                  <div className=" h-40 w-40 border-2 rounded-3xl border-white flex flex-col items-center justify-center ">
                    <h4>{A}</h4>
                    <h4>{B}</h4>
                  </div>
                  <h3>{C}</h3>
                  <h4>{D}</h4>
                </div>
              );
            })}
          </div>
          <button className="border-solid border-2 rounded-2xl border-red-500 py-2 px-8 text-red-500">
            INFO
          </button>
        </div>
      </section>
    </div>
  );
};

export default Servicios;
