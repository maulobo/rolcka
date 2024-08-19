import { Schibsted_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/navbar";

const inter = Schibsted_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "Rolcka",
  description:
    "Somos un Equipo de Profesionales Especialistas comprometidos con el desarrollo industrial, social y ambiental del sector Oil & Gas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
