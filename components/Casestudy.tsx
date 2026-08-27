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
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10 py-6 sm:py-8 md:py-10 lg:py-12">
      <section className="bg-[#FAF9F6] p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-slate-200/60 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Content & Steps */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-slate-300 bg-white text-xs sm:text-sm font-lg text-slate-800 uppercase tracking-wider w-fit mb-3 sm:mb-4 shadow-2xs">
              <Star className="w-3.5 h-3.5 text-slate-500 fill-slate-400 shrink-0" />
              <span>90-SECOND WALKTHROUGH</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 leading-snug sm:leading-[1.15] mb-3">
              One order, Channel to ledger No re-entry.
            </h2>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm text-slate-500 mb-6 sm:mb-8 leading-relaxed">
              Watch stock, invoice, payment and accounts settle themselves as the order moves.
            </p>

            {/* Feature Steps List */}
            <ul className="space-y-4 sm:space-y-5">
              {steps.map((step, index) => (
                <li key={index} className="flex items-start gap-3">

                  {/* Square Bullet */}
                  <span className="w-1.5 h-1.5 rounded-xs bg-slate-800 mt-1.5 shrink-0" />
                  
                  <div className="flex-1">
                    <p className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                      {step.title}
                    </p>
                    {step.description && (
                      <p className="text-[11px] sm:text-xs text-slate-500 mt-1 leading-relaxed">
                        {step.description}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7 w-full mt-2 lg:mt-0">
            <div className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden bg-slate-900 aspect-video lg:aspect-[16/10] group shadow-md border border-slate-800">
              {isPlaying ? (
                /* Active Video Iframe */
                <div className="relative w-full h-full bg-black">
                  <iframe
                    src="https://www.youtube.com/embed/tf_yi6DtDOQ?autoplay=1&controls=1"
                    title="90-second walkthrough"
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                  {/* Close Video Control */}
                  <button
                    onClick={() => setIsPlaying(false)}
                    className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-all focus:outline-none"
                    aria-label="Close video"
                  >
                    <X className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              ) : (
                /* Video Thumbnail & Play Trigger */
                <>
                  <img
                    src="https://plain-apac-prod-public.komododecks.com/202608/25/I3CbKJsYO8vDP2JkaJhX/image.png"
                    alt="Walkthrough Video Thumbnail"
                    className="w-full h-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                  {/* Accessible Play Button */}
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="absolute inset-0 m-auto w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-white/95 text-blue-600 flex items-center justify-center shadow-2xl transition-transform duration-300 hover:scale-110 focus:outline-none"
                    aria-label="Play video"
                  >
                    <Play className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 fill-blue-600 ml-1" />
                  </button>
                </>
              )}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}