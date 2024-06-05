import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/navbar";

const inter = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "Rolcka",
  description: "Primeras impresiones",
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
