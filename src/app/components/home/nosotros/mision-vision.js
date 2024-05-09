import React from "react";
import { valores } from "../../../data/data";

const Mision = () => {
  return (
    // mision
    <div className="px-[var(--padding-x)] py-[var(--padding-y)] bg-slate-300 flex flex-col gap-8">
      <div className="min-h-36 flex gap-8 flex-wrap items-center  h-full">
        <section className="flex-1 bg-gray-400 min-w-56 text-center">
          <h2>MISION</h2>
        </section>
        <section className="flex-1 bg-gray-400 min-w-56">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
            corrupti assumenda ipsum, repellendus eaque eos iste inventore dicta
            fuga incidunt aliquid et temporibus quos ad officia quis possimus
            facilis voluptates.
          </p>
        </section>
      </div>

      {/* vision */}

      <div className="min-h-36 flex gap-8 flex-wrap items-center  h-full bg-fuchsia-400">
        <section className="flex-1 bg-gray-400 min-w-56">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
            corrupti assumenda ipsum, repellendus eaque eos iste inventore dicta
            fuga incidunt aliquid et temporibus quos ad officia quis possimus
            facilis voluptates.
          </p>
        </section>
        <section className="flex-1 bg-gray-400 min-w-56 text-center">
          <h2>VISION</h2>
        </section>
      </div>

      {/* valores */}

      <div className=" flex flex-col gap-8 flex-wrap items-center h-full justify-center">
        <section>
          <h2>Nuestros Valores</h2>
        </section>
        <section className="grid grid-cols-3 gap-8 max-w-96 ">
          {valores.map((val, i) => (
            <h3 key={i} className="">
              {val}
            </h3>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Mision;
