"use client";

import { Home, Mail, Linkedin, MessageCircle, ArrowUpRight, Briefcase } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const links = [
  {
    label: "Página Principal",
    sub: "rolcka.com",
    href: "/",
    icon: Home,
    internal: true,
  },
  {
    label: "WhatsApp",
    sub: "+54 9 2996 83-3790",
    href: "https://wa.me/5492996833790",
    icon: MessageCircle,
  },
  {
    label: "Email",
    sub: "administracion@rolcka.com",
    href: "mailto:administracion@rolcka.com",
    icon: Mail,
  },
  {
    label: "Currículums",
    sub: "rrhh@rolcka.com",
    href: "mailto:rrhh@rolcka.com",
    icon: Briefcase,
  },
  {
    label: "Compras",
    sub: "comprasrolcka@gmail.com",
    href: "mailto:comprasrolcka@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    sub: "Rolcka SRL",
    href: "https://ar.linkedin.com/company/rolcka-srl",
    icon: Linkedin,
  },
];

export default function LinksPage() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden"
      style={{ backgroundColor: "#0E1016" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[120px]"
          style={{ backgroundColor: "rgba(157,3,26,0.05)" }}
        />
      </div>

      <div className="w-full max-w-sm flex flex-col items-center relative z-10">
        <div className="relative mb-4">
          <Image
            src="/logo-1.png"
            alt="Rolcka"
            width={224}
            height={80}
            className="h-auto"
            priority
          />
        </div>

        <p
          className="text-xs font-bold uppercase mb-8 text-center"
          style={{ color: "#9D031A", letterSpacing: "0.15em" }}
        >
          Soluciones metalmecánicas para el Oil &amp; Gas
        </p>

        <div
          className="w-full h-px mb-8"
          style={{ background: "linear-gradient(to right, transparent, #252b35, transparent)" }}
        />

        <div className="w-full flex flex-col gap-3">
          {links.map((link) => {
            const Icon = link.icon;
            const className =
              "group flex items-center gap-4 w-full rounded-xl px-5 py-4 transition-all duration-300 cursor-pointer";
            const style = {
              backgroundColor: "rgba(28,31,39,0.8)",
              border: "1px solid #252b35",
              color: "#E8ECF0",
              backdropFilter: "blur(4px)",
            };

            const content = (
              <>
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-lg shrink-0 transition-all duration-300"
                  style={{ backgroundColor: "#0E1016", border: "1px solid #252b35" }}
                >
                  <Icon size={18} style={{ color: "#9D031A" }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-bold uppercase leading-tight" style={{ letterSpacing: "0.05em" }}>
                    {link.label}
                  </div>
                  <div className="text-xs mt-0.5 truncate" style={{ color: "#8A95A5" }}>
                    {link.sub}
                  </div>
                </div>
                <ArrowUpRight size={16} style={{ color: "#8A95A5" }} className="shrink-0" />
              </>
            );

            if (link.internal) {
              return (
                <Link key={link.href} href={link.href} className={className} style={style}>
                  {content}
                </Link>
              );
            }

            return (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
                style={style}
              >
                {content}
              </a>
            );
          })}
        </div>

        <div
          className="w-full h-px mt-8 mb-6"
          style={{ background: "linear-gradient(to right, transparent, #252b35, transparent)" }}
        />

        <p className="text-[10px] uppercase" style={{ color: "#8A95A5", letterSpacing: "0.2em" }}>
          © {new Date().getFullYear()} Rolcka SRL
        </p>
      </div>
    </div>
  );
}
