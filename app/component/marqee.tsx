"use client";

import React from "react";
import { motion } from "framer-motion";

const marqueeItems = [
  "Workflows",
  "AI follow-up drafting",
  "Low-stock reorder agents",
  "Auto-reconciled ledgers",
  "Document data capture",
  "Anomaly alerts on cash",
  "Demand Forecasting",
  "Auto-generated reports",
];

export default function MarqueeSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-12 py-4 w-full overflow-hidden border-y border-slate-100 bg-gray-50">
      {/* Visible viewport */}
      <div className="relative w-full  overflow-hidden">
        
        {/* Left fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white via-white/80 to-transparent sm:w-32" />

        {/* Right fade */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white via-white/80 to-transparent sm:w-32" />

        {/* Moving track */}
        <motion.div
          className="flex w-max items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              duration: 25,
              ease: "linear",
              repeat: Infinity,
            },
          }}
        >
          {/* First */}
          <div className="flex shrink-0 items-center gap-6 pr-6 sm:gap-8 sm:pr-8">
            {marqueeItems.map((item, idx) => (
              <div
                key={idx}
                className="flex shrink-0 items-center gap-2 whitespace-nowrap text-xs font-medium text-slate-500 sm:text-sm"
              >
                <span className="text-slate-300">•</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Duplicate */}
          <div className="flex shrink-0 items-center gap-6 pr-6 sm:gap-8 sm:pr-8">
            {marqueeItems.map((item, idx) => (
              <div
                key={`dup-${idx}`}
                className="flex shrink-0 items-center gap-2 whitespace-nowrap text-xs font-medium text-slate-500 sm:text-sm"
              >
                <span className="text-slate-300">•</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}