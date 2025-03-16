"use client";

import { motion } from "framer-motion";
import { Link } from "lucide-react";
import { GlobalSearchInput } from "./global-search-input";
import { HeroTitle } from "./hero-title";
import { MajorsFeatured } from "./majors-featured";
import { Uade } from "./ui/uade";

export function Startpage() {
  return (
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
        {/* 
        <div className="max-w-[620px] mx-auto w-full mb-14">
          <GlobalSearchInput />
        </div>
        */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-base font-regular">Carreras</h3>
          </div>
          <MajorsFeatured
            data={[
              {
                id: "1",
                title: "Ingeniería en Informática",
                faculty: {
                  name: "Ciencias Exactas",
                  slug: "faculty-of-science-and-technology",
                },
                place: "On-site",
                slug: "informatica",
              },
            ]}
            hidePagination={true}
          />
        </motion.div>
      </div>
    </div>
  );
}
