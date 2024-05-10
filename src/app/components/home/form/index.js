import React from "react";
import Form from "./form";

const Formulario = () => {
  return (
    <div className="flex px-[var(--padding-x)] py-[var(--padding-y)] flex-wrap items-center justify-evenly gap-8">
      <Form />
      <div className=" h-52 w-96 bg-green-300">hla</div>
    </div>
  );
};

export default Formulario;
