import React from "react";
import { valores } from "../../../data/data";

const Mision = () => {
  return (
    // mision
    <div className="px-[var(--padding-x)] py-[var(--padding-y)]  flex flex-col gap-8">
      <div className="min-h-36 flex gap-8 flex-wrap items-center bg-[var(--bg-grey)] py-[var(--padding-y)]  h-full">
        <section className="flex-1 min-w-56 text-center">
          <h2>MISIÓN</h2>
        </section>
        <section className="flex-1 min-w-56 text-center">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
            corrupti assumenda ipsum, repellendus eaque eos iste inventore dicta
            fuga incidunt aliquid et temporibus quos ad officia quis possimus
            facilis voluptates.
          </p>
        </section>
      </div>

      {/* vision */}

      <div className="min-h-36 flex gap-8 flex-wrap items-center  h-full  bg-[var(--bg-grey)] py-[var(--padding-y)]">
        <section className="flex-1  min-w-56 text-center">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
            corrupti assumenda ipsum, repellendus eaque eos iste inventore dicta
            fuga incidunt aliquid et temporibus quos ad officia quis possimus
            facilis voluptates.
          </p>
        </section>
        <section className="flex-1  min-w-56 text-center">
          <h2>VISIÓN</h2>
        </section>
      </div>

      {/* valores */}

      <div className=" flex flex-col gap-8 flex-wrap items-center h-full justify-center  bg-[var(--bg-grey)] md:py-[var(--padding-y)] ">
        <section className="text-center">
          <h2>NUESTROS VALORES</h2>
        </section>
        <section className="flex flex-wrap  justify-around  ">
          {valores.map((val, i) => (
            <div
              key={i}
              className="flex gap-8 min-w-72 px-8 py-2 text-3xl items-center justify-center"
            >
              <h3>X</h3>
              <h3 className=" ">{val}</h3>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Mision;
