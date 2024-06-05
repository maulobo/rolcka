"use client";
import { useRef } from "react";
import "./lateral.css";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const LateralScroll = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const sections = gsap.utils.toArray(".panel");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        end: () => "+=" + containerRef.current.offsetWidth,
      },
    });
  }, []);

  return (
    <div className="container" ref={containerRef}>
      {/* page 1 */}
      <section className="panel flex flex-col items-center justify-evenly px-[var(--padding-x)] py-[var(--padding-y)]  ">
        <div className="flex w-full text-right justify-end">
          <p className="md:w-[700px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vel
            accusamus tempore magnam, itaque consectetur vero eum reprehenderit
            quasi laboriosam, minus impedit sit voluptates earum doloremque quia
            aliquam. Reiciendis, tempora. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ipsa vel accusamus tempore magnam, itaque
            consectetur vero eum reprehenderit quasi laboriosam, minus impedit
            sit voluptates earum doloremque quia aliquam. Reiciendis, tempora.
          </p>
        </div>
        <div className="border-solid border-2 rounded-xl border-red-500 py-2 px-8 text-red-500">
          NUESTROS SERVICIOS
        </div>
      </section>
      {/* page 2 */}
      <section className=" panel" style={{ backgroundColor: "#4cff4c" }}>
        Page 2
      </section>
      {/* page 3 */}
      <section className=" panel" style={{ backgroundColor: "#4c4cff" }}>
        Page 3
      </section>
      {/* page 4 */}
      <section className=" panel" style={{ backgroundColor: "#ffff4c" }}>
        Page 4
      </section>
      {/* page 5 */}
      <section className=" panel" style={{ backgroundColor: "#ffff4c" }}>
        Page 5
      </section>
    </div>
  );
};

export default LateralScroll;
