import type { Metadata } from "next";
import { Bebas_Neue, Anonymous_Pro, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Bebas Neue (Headings / Display)
const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

// Anonymous Pro (Body / Mono)
const anonymousPro = Anonymous_Pro({
  variable: "--font-anonymous",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

// Inter (UI / Clean text)
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Browzess",
  description: "We Build Website That Speaks For Your Business",

  icons: {
    icon: [
      {
        url: "/logo.jpeg",
        type: "image/jpeg",
      },
    ],
    apple: [
      {
        url: "/logo.jpeg",
        sizes: "180x180",
        type: "image/jpeg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${bebasNeue.variable}
          ${anonymousPro.variable}
          ${inter.variable}
          antialiased
        `}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}