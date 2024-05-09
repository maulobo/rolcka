import React from "react";

const Servicios = () => {
  return (
    <div>
      <section className=" min-h-40 bg-black text-yellow-50 flex flex-col justify-center items-center">
        <h2>NUESTROS SERVICIOS</h2>
        <h3 className=" bg-slate-50 text-black">ALQUILER Y FABRICACION</h3>
      </section>
      {/* ALQUIlER */}
      <section className=" px-[var(--padding-x)] py-[var(--padding-y)] min-h-96">
        <div className="w-full bg-gray-400 h-full  flex flex-col gap-8 justify-center items-center px-[var(--padding-x)] py-[var(--padding-y)]">
          <h2>ALQUILER</h2>
          <div className="grid md:grid-cols-3  gap-16 grid-row-3 ">
            <div className="bg-slate-500 h-40 w-40 ">1</div>
            <div className="bg-slate-500 h-40 w-40">1</div>
            <div className="bg-slate-500 h-40 w-40">1</div>
          </div>
          <button>BOTON</button>
        </div>
      </section>
      {/* Fabricacion */}
      <section className=" px-[var(--padding-x)] py-[var(--padding-y)] min-h-96 bg-yellow-100">
        <div className="w-full bg-gray-400 h-full  flex flex-col gap-8 justify-center items-center px-[var(--padding-x)] py-[var(--padding-y)]">
          <h2>ALQUILER</h2>
          <div className="grid md:grid-cols-3  gap-16 grid-row-3 ">
            <div className="bg-slate-500 h-40 w-40 ">1</div>
            <div className="bg-slate-500 h-40 w-40">1</div>
            <div className="bg-slate-500 h-40 w-40">1</div>
            <div className="bg-slate-500 h-40 w-40">1</div>
            <div className="bg-slate-500 h-40 w-40">1</div>
            <div className="bg-slate-500 h-40 w-40">1</div>
          </div>
          <button>BOTON</button>
        </div>
      </section>
    </div>
  );
};

export default Servicios;
