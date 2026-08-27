"use client"
import React, { useState } from 'react';

import { Star, Play, X } from 'lucide-react';

const steps = [
  {
    title: 'Order lands from web, POS or WhatsApp.',
    description: 'Watch stock, invoice, payment and accounts settle themselves as the order moves.',
  },
  {
    title: 'Stock reserves itself and flags reorder.',
    description: '',
  },
  {
    title: 'Invoice and payment post to the ledger.',
    description: '',
  },
  {
    title: 'Dashboards and dues update instantly.',
    description: '',
  },
];

export default function WalkthroughSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
<>
    <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10'>
          <section className="bg-[#FAF9F6] p-8  sm:py-8 md:py-10  rounded-2xl sm:rounded-3xl  my-6 sm:my-8  border border-slate-200/60 shadow-sm">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Text & List */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-slate-300 bg-white text-sm sm:text-sm font-lg text-black uppercase tracking-wider w-fit mb-4 sm:mb-6 shadow-2xs">
            <Star className="w-3.5 h-3.5 text-slate-500 fill-slate-400" />
            <span>90-SECOND WALKTHROUGH</span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-[1.15] mb-3 sm:mb-4">
            One order, Channel to ledger No re-entry.
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-slate-500 mb-6 sm:mb-8 leading-relaxed">
            Watch stock, invoice, payment and accounts settle themselves as the order moves.
          </p>

          {/* Feature List */}
          <ul className="space-y-3 sm:space-y-4">
            {steps.map((step, index) => (
              <li key={index} className="flex items-start gap-2.5">
                {/* Bullet */}
                <span className="w-1.5 h-1.5 rounded-xs bg-slate-800 mt-2 shrink-0" />
                
                <div>
                  <p className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                    {step.title}
                  </p>
                  {step.description && (
                    <p className="text-[11px] sm:text-xs text-slate-400 mt-1 leading-relaxed">
                      {step.description}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Video Container */}
        <div className="lg:col-span-7 w-full">
          <div className="relative rounded-2xl overflow-hidden bg-slate-900 aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/10] group shadow-md border border-slate-800">
            {isPlaying ? (
              /* Active Video State */
              <div className="relative w-full h-full bg-black">
               <iframe
                  src="https://www.youtube.com/embed/tf_yi6DtDOQ?autoplay=1&controls=1"
                  title="90-second walkthrough"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
                {/* Close/Reset Video Button */}
                <button
                  onClick={() => setIsPlaying(false)}
                  className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
                  aria-label="Close video"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            ) : (
              /* Thumbnail Image State */
              <>
                <img
                  src="https://plain-apac-prod-public.komododecks.com/202608/25/I3CbKJsYO8vDP2JkaJhX/image.png"
                  alt="Walkthrough Video Thumbnail"
                  className="w-full h-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
                />

                {/* Dark Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                {/* Play Button */}
                <button
                  onClick={() => setIsPlaying(true)}
                  className="absolute inset-0 m-auto w-14 h-14 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-full bg-white/95 text-blue-600 flex items-center justify-center shadow-2xl transition-transform duration-300 hover:scale-110 focus:outline-none"
                  aria-label="Play video"
                >
                  <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-blue-600 ml-1" />
                </button>
              </>
            )}
          </div>
        </div>

      </div>
    </section>
    </div>
</>
  );
}