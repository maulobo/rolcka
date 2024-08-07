import { Fabricacion } from "@/app/data/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./srv.css";

export default function FabricacionMod() {
  return (
    <section className=" px-[var(--padding-x)] py-[var(--padding-y)] min-h-96 bg-image-fab text-white">
      <div className="w-full bg-[var(--bg-grey)] h-full  flex flex-col gap-8 justify-center items-center px-[var(--padding-x)] py-[var(--padding-y)] ">
        <h2>FABRICACIÓN</h2>
        <div className="flex flex-wrap md:gap-16 align-middle justify-center">
          {Fabricacion.map(({ src, text }, index) => {
            return (
              <div
                key={`${index}_alquiler`}
                className="flex flex-col items-center gap-2 max-w-56 justify-around "
              >
                <Image
                  src={src}
                  height={200}
                  width={200}
                  alt={src}
                  className="h-auto w-auto"
                />

                <h3 className="text-center">{text}</h3>
              </div>
            );
          })}
        </div>
        <Link
          href="/fabricacion"
          className="border-solid border-2 rounded-2xl border-red-500 py-2 px-8 text-red-500"
        >
          INFO
        </Link>
      </div>
    </section>
  );
}
