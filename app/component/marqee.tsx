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
    <section className="w-full bg-white my-8 border-y border-slate-100 overflow-hidden">
      {/* Container wrapper constrained to max-w-7xl and centered */}
      <div className="relative max-w-7xl mx-auto py-4">
        {/* Left Overlay Gradient */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 z-10 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none" />

        {/* Right Overlay Gradient */}
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 z-10 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none" />

        {/* Moving Track */}
        <motion.div
          className="flex w-max"
          animate={{ x: "-50%" }}
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity,
          }}
        >
          {/* First track instance */}
          <div className="flex shrink-0 items-center gap-6 sm:gap-8 pr-6 sm:pr-8">
            {marqueeItems.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 sm:gap-2 whitespace-nowrap text-xs sm:text-sm font-medium text-slate-500"
              >
                <span className="text-slate-300">•</span><span>{item}</span>
                
              </div>
            ))}
          </div>

          {/* Duplicate track instance for continuous smooth looping */}
          <div className="flex shrink-0 items-center gap-6 sm:gap-8 pr-6 sm:pr-8">
            {marqueeItems.map((item, idx) => (
              <div
                key={`dup-${idx}`}
                className="flex items-center gap-4 sm:gap-2 whitespace-nowrap text-xs sm:text-sm font-medium text-slate-500"
              >
               <span className="text-slate-300">•</span> <span>{item}</span>
                
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}