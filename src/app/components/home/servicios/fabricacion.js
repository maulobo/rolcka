import { Fabricacion } from "@/app/data/data";
import Image from "next/image";
import React from "react";

export default function FabricacionMod() {
  return (
    <section className=" px-[var(--padding-x)] py-[var(--padding-y)] min-h-96 bg-image-fab text-white">
      <div className="w-full bg-[var(--bg-grey)] h-full  flex flex-col gap-8 justify-center items-center px-[var(--padding-x)] py-[var(--padding-y)] ">
        <h2>FABRICACION</h2>
        <div className="grid md:grid-cols-3  gap-16 grid-row-3 ">
          {Fabricacion.map(({ src, text }, index) => {
            return (
              <div
                key={`${index}_alquiler`}
                className="flex flex-col items-center gap-2"
              >
                <Image src={src} height={300} width={300} alt={src} />

                <h3 className="text-center">{text}</h3>
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
