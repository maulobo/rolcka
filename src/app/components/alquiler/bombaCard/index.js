import React from "react";
import bomba1 from "/public/images/bomba1.jpg";
import bomba2 from "/public/images/bomba2.jpg";
import bomba3 from "/public/images/bomba3.jpg";
import Image from "next/image";

export default function SBomba() {
  return (
    <div className="py-[var(--padding-y)] px-[var(--padding-x)] text-[var(--text-color-light)] shadow-lg ">
      <section className="bg-gray-800 shadow-lg flex p-[var(--padding-y)] gap-16 flex-wrap rounded-3xl ">
        <div className="flex-1 flex flex-col gap-3 rounded-lg  min-w-52  justify-center items-center h-full">
          <Image src={bomba3} alt="bomba" height={400} className="" />
          <Image src={bomba2} alt="bomba" height={400} className="" />
          <Image src={bomba1} alt="bomba" height={400} className="" />
        </div>
        <section className="flex flex-wrap flex-col gap-16 flex-1">
          <div className="flex flex-col gap-4">
            <h3>BOMBAS CENTRÍFUGAS</h3>
            <p>
              Las bombas centrífugas son ideales para una variedad de
              aplicaciones, incluyendo el manejo de agua, lodos y fluidos
              corrosivos. Su diseño centrífugo permite una transferencia
              eficiente de líquidos.
            </p>
            <h3>Características</h3>
            <p>Capacidad de succión: 4 pulgadas.</p>

            <p>Capacidad de descarga: 3 pulgadas.</p>

            <p>Motor: 25 caballos de fuerza (HP).</p>

            <h3>Características</h3>
            <p>Capacidad de succión: 8 pulgadas.</p>

            <p>Capacidad de descarga: 6 pulgadas.</p>

            <p>Motor: 100 caballos de fuerza (HP) con arrancador suave.</p>
          </div>
        </section>
      </section>
    </div>
  );
}
