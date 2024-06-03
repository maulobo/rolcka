import React from "react";
import Form from "./form";
import { FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import "./form.css";

const Formulario = () => {
  return (
    <div className="flex px-[var(--padding-x)] py-[var(--padding-y)] flex-wrap items-center justify-evenly gap-8  bg-form text-xl">
      <Form />
      <div className="text-sm md:text-xl max-h-52 max-w-96 md:h-52 md:w-96 bg-[rgba(255,255,255,0.45)] flex flex-col  justify-evenly p-4 rounded-2xl">
        <div className="flex gap-4 items-center ">
          <FaMapMarkerAlt className="text-lg md:text-3xl" />
          <h3>Parque industrial Neuquen</h3>
        </div>
        <div className="flex gap-4 items-center">
          <FaWhatsapp className="text-lg md:text-3xl" />
          <h3>+5492993323446</h3>
        </div>
        <div className="flex gap-4 items-center">
          <IoIosMail className="text-lg md:text-3xl" />
          <h3>administracion@rolcka.com.ar</h3>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
