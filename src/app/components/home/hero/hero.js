import React from "react";
import hero from "/public/images/hero.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className=" ">
      <Image src={hero} alt="hero" />
    </div>
  );
};

export default Hero;
