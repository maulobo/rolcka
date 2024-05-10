import React from "react";
import Mision from "./mision-vision";

const Nosotros = () => {
  return (
    <>
      {/* ---------------nosotros --------------- */}
      <div className="px-[var(--padding-x)] py-[var(--padding-y)] flex gap-8 flex-wrap items-center  h-full bg-[var(--bg-color-dark)] min-h-96 ">
        <section className="flex-1 min-w-56 text-center ">
          <h2>NOSOTROS</h2>
        </section>
        <section className="flex-1  min-w-56 text-center">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
            corrupti assumenda ipsum, repellendus eaque eos iste inventore dicta
            fuga incidunt aliquid et temporibus quos ad officia quis possimus
            facilis voluptates.
          </p>
        </section>
      </div>
      {/* ---------------section 2 --------------- */}
      <Mision />
    </>
  );
};

export default Nosotros;
