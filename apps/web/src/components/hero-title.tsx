"use client";

import Link from "next/link";

export function HeroTitle() {
  const text = "Bienvenidos a la comunidad UADE ";

  return (
    <div className="text-center mb-8">
      <h1
        className="text-[21px] mb-2"
        style={{
          opacity: 0,
          animation: "fadeIn 0.2s ease forwards",
        }}
      >
        {text}
      </h1>

      <p
        className="text-[#878787] text-sm"
        style={{
          opacity: 0,
          animation: "fadeIn 0.2s ease forwards 0.1s",
        }}
      >
        Un espacio creado por estudiantes para estudiantes donde puedes
        consultar{" "}
        <Link href="/horarios" className="border-b border-border border-dashed">
          horarios
        </Link>
        , explorar{" "}
        <Link href="/materias" className="border-b border-border border-dashed">
          materias
        </Link>
        , acceder a recursos académicos y seguir las <br /> últimas novedades en
        el{" "}
        <Link href="/foro" className="border-b border-border border-dashed">
          foro
        </Link>
        , conectarte con compañeros y encontrar oportunidades laborales.
        <br />
        <Link
          href="/registro"
          className="border-b border-border border-dashed mt-2 inline-block"
        >
          Únete a la comunidad ahora
        </Link>
      </p>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
