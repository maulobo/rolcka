"use client";
import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { imageUrls } from "@/app/data/data";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

const Confian = () => {
  const imageContainerRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const imageElements = imageContainerRef.current.querySelectorAll("img");
    const scrollTrigger = ScrollTrigger.create({
      trigger: imageContainerRef.current,
      start: "top bottom",
    });
    gsap.to(imageElements, {
      duration: 2.5,
      opacity: 1,
      ease: "power3.inOut",
      stagger: {
        amount: 0.7,
      },
      scrollTrigger,
    });
  }, []);

  return (
    <section className="min-h-80">
      <div className="px-[var(--padding-x)] py-[var(--padding-y)] flex flex-col bg-[var(--bg-color-dark)] justify-center items-center ">
        <h2 className=" text-center">CONFIAN EN NOSOTROS</h2>
        <div
          className="flex gap-8 flex-wrap justify-around py-[var(--padding-y)]"
          ref={imageContainerRef}
        >
          {imageUrls.map((el, i) => (
            <div key={"logo" + i}>
              <Image
                className="opacity-0 h-auto w-auto"
                src={el.src}
                alt={`logo_${i}`}
                height={el.height}
                width={el.width}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Confian;
