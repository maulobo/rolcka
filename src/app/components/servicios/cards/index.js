import Image from "next/image";
import React from "react";
import pileta from "/public/images/pileta.jpg";
import "./scards.css";

export default function SCards() {
  return (
    <div className="py-[var(--padding-y)] flex flex-wrap items-center gap-8 justify-center  text-[var(--text-color-light)] ">
      <div className="bg-slate-600 w-full md:w-auto  shadow rounded-3xl ">
        <section className="h-full flex  min-w-80 flex-wrap justify-center  ">
          <div className="h-full min-w-56 ">
            <Image src={pileta} height={300} alt="pileta" className="h-full" />
          </div>
          <div className=" max-w-52 min-w-32 text-center p-4 ">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi,
              repellat atque animi mollitia esse cum eveniet quod architecto.
              Dicta rerum at eius quibusdam ullam debitis hic cum esse iste
              dolor!
            </p>
          </div>
        </section>
      </div>
      <div className="bg-slate-600 w-full md:w-auto shadow rounded-3xl">
        <section className="h-full flex min-w-80 flex-wrap justify-center  ">
          <div className="max-w-52 min-w-32 text-center p-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi,
              repellat atque animi mollitia esse cum eveniet quod architecto.
              Dicta rerum at eius quibusdam ullam debitis hic cum esse iste
              dolor!
            </p>
          </div>
          <div className="h-full min-w-40 ">
            <Image src={pileta} height={300} alt="pileta" className="h-full" />
          </div>
        </section>
      </div>
    </div>
  );
}
