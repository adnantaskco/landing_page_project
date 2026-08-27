"use client"
import React, { useRef, useState } from 'react';
import { Star } from 'lucide-react';

const problemCards = [
  {
    id: 'database',
    problemBadges: ['POS', 'ACCOUNTS APP', 'EXCEL'],
    problemTitle: 'Systems that never agree',
    problemSub: 'FOUR TOOLS, FOUR VERSIONS OF THE TRUTH.',
    solutionBadge: 'ONE DATABASE',
    solutionBadgeBg: 'bg-blue-600 text-white',
    solutionText: 'Sales, stock, purchases and accounts update each other live. Nothing typed twice.',
    cardBg: 'bg-slate-50/80',
    imageSrc: '/images/one-database-cube.png', 
  },
  {
    id: 'stock',
    problemBadges: ['Manual count', 'Stock book'],
    problemTitle: 'Stock you can only guess at',
    problemSub: 'OVERSTOCKED ON SLOW MOVERS, OUT WHEN IT MATTERS.',
    solutionBadge: 'LIVE STOCK + AI REORDER',
    solutionBadgeBg: 'bg-amber-400 text-slate-900',
    solutionText: 'Live quantities per outlet, with reorder points that flag what to buy first.',
    cardBg: 'bg-amber-50/30',
    imageSrc: '/images/stock-box.png',
  },
  {
    id: 'ledgers',
    problemBadges: ['Month-end', '+2 weeks'],
    problemTitle: 'Numbers that arrive late',
    problemSub: 'DECISIONS MADE ON A QUARTER-OLD PICTURE.',
    solutionBadge: 'REAL-TIME LEDGERS',
    solutionBadgeBg: 'bg-indigo-600 text-white',
    solutionText: 'Margin, cash and dues update as transactions happen — not next month.',
    cardBg: 'bg-slate-50/80',
    imageSrc: '/images/realtime-ledgers.png',
  },
  {
    id: 'manual-work',
    problemBadges: ['Re-typing', 'Chasing approvals'],
    problemTitle: 'Manual work eats the day',
    problemSub: 'HOURS MOVING DATA THAT PRODUCE NOTHING NEW.',
    solutionBadge: 'AI AGENTS',
    solutionBadgeBg: 'bg-amber-500 text-white',
    solutionText: 'Agents draft follow-ups, capture documents, route approvals, build reports.',
    cardBg: 'bg-amber-50/20',
    imageSrc: '/images/ai-agents-stack.png',
  },
  {
    id: 'sme-pricing',
    problemBadges: ['Long contracts', 'Change bills'],
    problemTitle: 'Software priced for giants',
    problemSub: 'REAL ERP MEANS LOCK-IN AND GROWING INVOICES.',
    solutionBadge: 'SME PRICING',
    solutionBadgeBg: 'bg-emerald-600 text-white',
    solutionText: 'No long contract, unlimited configuration and a named engineer included.',
    cardBg: 'bg-emerald-50/20',
    imageSrc: '/images/sme-pricing-chart.png',
  },
];

export default function ProblemSection() {
  const sliderRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Mouse Drag Handlers
  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.8;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="bg-white text-slate-900 py-5 sm:py-6 md:py-8  lg:py-10  w-full overflow-hidden">
      
      {/* Top Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        {/* Pill Tag */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-[10px] font-semibold text-blue-600 uppercase tracking-wider mb-4">
          <Star className="w-3 h-3 fill-blue-600 text-blue-600" />
          <span>THE PROBLEM</span>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-3">
          Five tools, Five truths, None of them current.
        </h2>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm text-slate-500">
          What we heard from 40+ SME owners — and what FlowZen replaces it with.
        </p>
      </div>

      {/* Horizontal Draggable Container with Aligned Initial Offset */}
      <div
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className={`flex gap-6 overflow-x-auto pb-6 pt-2 pr-8 w-full select-none no-scrollbar ${
          isMouseDown ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        style={{ 
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none',
          paddingLeft: 'max(1rem, calc((100vw - 80rem) / 2 + 1.5rem))' // Dynamically aligns card 1 with max-w-7xl header
        }}
      >
        {problemCards.map((card) => (
          <div
            key={card.id}
            className={`min-w-[320px] sm:min-w-[360px] lg:min-w-[380px] rounded-3xl p-6 border border-slate-200/80 ${card.cardBg} flex flex-col justify-between shrink-0 transition-shadow duration-200 hover:shadow-md`}
          >
            <div>
              {/* Problem Badges */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {card.problemBadges.map((badge, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-0.5 rounded-full bg-slate-200/60 border border-slate-300/50 text-[10px] font-medium text-slate-500 uppercase tracking-wide"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              {/* Problem Title & Subtitle */}
              <h3 className="text-xl font-bold text-slate-900 mb-1">
                {card.problemTitle}
              </h3>
              <p className="text-[10px] font-bold text-slate-400 tracking-wider uppercase mb-6">
                {card.problemSub}
              </p>

              {/* FlowZen Solution Highlight */}
              <div className="mb-4">
                <span className="text-[9px] font-bold text-blue-600 uppercase tracking-widest block mb-1">
                  WITH FLOWZEN
                </span>
                <span
                  className={`inline-block px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wide mb-2 ${card.solutionBadgeBg}`}
                >
                  {card.solutionBadge}
                </span>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {card.solutionText}
                </p>
              </div>
            </div>

            {/* Illustration / Graphic Area */}
            <div className="h-44 w-full flex items-center justify-center mt-4">
              <img
                src={card.imageSrc}
                alt={card.problemTitle}
                className="max-h-full max-w-full object-contain pointer-events-none"
              />
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}