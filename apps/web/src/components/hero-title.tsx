"use client";

import Link from "next/link";

export function HeroTitle() {
  const text = "Join the Cursor community ";

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
        The home for Cursor enthusiasts where you can explore and{" "}
        <Link href="/generate" className="border-b border-border border-dashed">
          generate rules
        </Link>
        , browse{" "}
        <Link href="/mcp" className="border-b border-border border-dashed">
          MCPs
        </Link>
        , post and follow <br /> the latest news on the{" "}
        <Link href="/board" className="border-b border-border border-dashed">
          board
        </Link>
        , learn, connect, and discover jobs all in one place.
        <br />
        <Link
          href="/login"
          className="border-b border-border border-dashed mt-2 inline-block"
        >
          Join the community now
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
