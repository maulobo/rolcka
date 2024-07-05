import React from "react";
import Form from "./form";
import { FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import "./form.css";

const Formulario = () => {
  return (
    <div className=" bg-form ">
      <div className="flex  px-2 py-[var(--padding-y)] flex-wrap items-center justify-evenly gap-8 text-xl bg-footer">
        <Form />
        <div className="  md:h-52 md:w-96 bg-[rgba(212,212,212,0.45)] flex flex-col justify-evenly p-4 rounded-2xl font-bold text-blue-800">
          <div className="flex gap-4 items-center sm:max-w-8    ">
            <FaMapMarkerAlt className="text-lg md:text-3xl " />
            <p className="">Parque industrial Neuquen</p>
          </div>
          <div className="flex gap-4 items-center">
            <FaWhatsapp className="text-lg md:text-3xl" />
            <p>+5492993323446</p>
          </div>
          <div className="flex gap-4 items-center">
            <IoIosMail className="text-lg md:text-3xl" />
            <p>administracion@rolcka.com.ar</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
