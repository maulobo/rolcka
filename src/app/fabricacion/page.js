import React from "react";
import FabricacionMod from "../components/home/servicios/fabricacion";
import LateralScroll from "../components/fabricacion/scroll-section";
import MyGallery from "../components/fabricacion/gallery";
import Formulario from "../components/home/form";

const page = () => {
  return (
    <div>
      <FabricacionMod />
      <LateralScroll />
      {/* <div className="px-[var(--padding-x)] py-[var(--padding-y)]">
        <MyGallery />
      </div> */}
      <Formulario />
    </div>
  );
};

export default page;
