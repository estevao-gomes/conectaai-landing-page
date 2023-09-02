import "./globals.css";

import type { Metadata } from "next";
import { Inter, Roboto, PT_Serif } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: "400",
});
const pt_serif = PT_Serif({
  weight: "400",
  variable: "--font-pt",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Conectaai",
  description: "Desafio FrontEnd - Conectaai",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${roboto.variable} ${pt_serif.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
