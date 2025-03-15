"use client";

import { GlobalSearchInput } from "./global-search-input";
import { HeroTitle } from "./hero-title";
import { Uade } from "./ui/uade";

export function Startpage() {
  return (
    <div>
      <div className="flex flex-col gap-4 w-full relative mx-auto h-screen">
        <div className="transition-all duration-1000">
          <div
            className="flex justify-center items-center mb-8"
            style={{
              opacity: 0,
              animation: "fadeIn 0.05s ease forwards",
            }}
          >
            <Uade />
          </div>

          <HeroTitle />

          <div className="max-w-[620px] mx-auto w-full mb-14">
            <GlobalSearchInput />
          </div>
        </div>
      </div>
    </div>
  );
}
