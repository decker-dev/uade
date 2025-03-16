"use client";

import { motion } from "framer-motion";
import { Link } from "lucide-react";
import { GlobalSearchInput } from "./global-search-input";
import { HeroTitle } from "./hero-title";
import { JobsFeatured } from "./jobs-featured";
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
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-base font-regular">Carreras</h3>
              <Link
                href="/jobs"
                className="text-sm text-[#878787] flex items-center gap-1"
              >
                <span>View all</span>
                <svg
                  width="12"
                  height="13"
                  viewBox="0 0 12 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_106_981"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="12"
                    height="13"
                  >
                    <rect y="0.5" width="12" height="12" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_106_981)">
                    <path
                      d="M3.2 9.5L2.5 8.8L7.3 4H3V3H9V9H8V4.7L3.2 9.5Z"
                      fill="#878787"
                    />
                  </g>
                </svg>
              </Link>
            </div>
            <JobsFeatured
              data={[
                {
                  id: "1",
                  title: "Software Engineer",
                  description: "Software Engineer",
                  company: {
                    name: "Uade",
                    slug: "uade",
                    image: "https://via.placeholder.com/150",
                  },
                  workplace: "Remote",
                  link: "https://uade.com",
                },
              ]}
              hidePagination={true}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
