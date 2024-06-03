import { alquiler } from "@/app/data/data";
import React from "react";

export default function Alquiler() {
  return (
    <section className=" px-[var(--padding-x)] py-[var(--padding-y)] min-h-96">
      <div className="w-full bg-[var(--bg-grey)] h-full  flex flex-col gap-8 justify-center items-center px-[var(--padding-x)] py-[var(--padding-y)]">
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
        <button className="border-solid border-2 rounded-2xl border-red-500 py-2 px-8 text-red-500">
          INFO
        </button>
      </div>
    </section>
  );
}
