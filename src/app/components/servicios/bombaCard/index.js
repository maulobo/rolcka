import React from "react";
import bomba from "/public/images/bomba.jpg";
import Image from "next/image";

export default function SBomba() {
  return (
    <div className="py-[var(--padding-y)] px-[var(--padding-x)] text-[var(--text-color-light)]">
      <section className="bg-slate-400 flex p-[var(--padding-y)] gap-16 flex-wrap rounded-3xl ">
        <div className="flex-1 flex min-w-52 justify-center">
          <Image
            src={bomba}
            alt="bomba"
            height={300}
            width="auto"
            className=""
          />
        </div>
        <section className="flex flex-wrap flex-col gap-16 flex-1">
          <div>
            <h2>BOMBAS CENTRIFUCAS</h2>
            <p>
              Se puede utilizar para diversas aplicaciones, como el manejo de
              agua, lodos, fluidos corrosivos, y más. Su diseño centrífugo
              permite una transferencia eficiente de líquidos.
            </p>
            <h3>Caracteristicas</h3>
            <p>
              Capacidad de succión: 4 pulgadas. Capacidad de descarga: 3
              pulgadas. Motor de 25 caballos de fuerza (HP).
            </p>
          </div>
          <div>
            <h2>BOMBAS CENTRIFUCAS</h2>
            <p>
              Se puede utilizar para diversas aplicaciones, como el manejo de
              agua, lodos, fluidos corrosivos, y más. Su diseño centrífugo
              permite una transferencia eficiente de líquidos.
            </p>
            <h3>Caracteristicas</h3>
            <p>
              Capacidad de succión: 4 pulgadas. Capacidad de descarga: 3
              pulgadas. Motor de 25 caballos de fuerza (HP).
            </p>
          </div>
        </section>
      </section>
    </div>
  );
}
