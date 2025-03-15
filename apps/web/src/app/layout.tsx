import { Geist, Geist_Mono } from "next/font/google";

import "@dkr/ui/styles/globals.css";
import { Header } from "@/components/header";
import { Providers } from "@/components/providers";
import type { Metadata, Viewport } from "next";

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});
export const metadata: Metadata = {
  title: "Comunidad UADE",
  description:
    "Plataforma para estudiantes de UADE, creada por alumnos para compartir horarios, materias, recursos académicos y más.",
  keywords: [
    "UADE",
    "universidad",
    "estudiantes",
    "horarios",
    "materias",
    "foro",
  ],
  authors: [{ name: "Estudiantes UADE" }],
  creator: "Comunidad UADE",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased`}
      >
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
