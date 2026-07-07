import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Serif editorial -- se usa solo en etiquetas pequeñas en mayúsculas (eyebrows)
// para crear contraste tipográfico moderno/clásico de alta gama.
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600"],
});

export const metadata = {
  title: "Reckless Studio | Barbería en Palmares, Alajuela",
  description:
    "Reckless Studio, barbería en Palmares, Alajuela. Cortes, barba y afeitado. Reservá tu turno por WhatsApp.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-black">
        {children}
      </body>
    </html>
  );
}
