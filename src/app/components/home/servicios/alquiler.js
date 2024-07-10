import { alquiler } from "@/app/data/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Alquiler() {
  return (
    <section className=" px-[var(--padding-x)] py-[var(--padding-y)] min-h-96">
      <div className="w-full bg-[var(--bg-grey)] h-full  flex flex-col gap-8 justify-center items-center px-[var(--padding-x)] py-[var(--padding-y)]">
        <h2 className="">ALQUILER</h2>
        <div className="grid md:grid-cols-3  gap-16 grid-row-3 ">
          {alquiler.map(({ src, text, text2, text3 }, index) => {
            return (
              <div
                key={`${index}_alquiler`}
                className="flex flex-col items-center gap-2"
              >
                <Image src={src} height={200} alt={src} width={200} />

                <h3 className="text-center">{text}</h3>
                <h4>{text2}</h4>
                <h4>{text3}</h4>
              </div>
            );
          })}
        </div>
        <Link
          href="/alquiler"
          className="border-solid border-2 rounded-2xl border-red-500 py-2 px-8 text-red-500"
        >
          INFO
        </Link>
      </div>
    </section>
  );
}
