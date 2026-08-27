"use client"
import React from 'react';
import { FaCheck } from 'react-icons/fa6';

const FeaturesSection = () => {


  const card2Features = [
    "50% off the one-time setup fee",
    "25% off on annual billing",
    "No price increase for twelve months",
    "No long contract — leave or upgrade anytime"
  ];

  return (
    <section className="bg-white py-5 sm:py-6 md:py-8  lg:py-10 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Card 1: Risk-Free */}
        <div className="bg-[#F4F5F7] rounded-3xl p-8 sm:p-10 flex flex-col justify-between overflow-hidden relative shadow-sm border border-gray-100">
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-gray-800 text-sm font-lg tracking-wider uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-black" />
              Risk-Free
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mb-3">
              Seven days on your own data.
            </h3>

            {/* Subtext */}
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-md mb-6">
              Your private subdomain, your stock and customers loaded, guides built in. Not a fit? Say so within 7 days — setup fee refunded in full.
            </p>

            {/* Button */}
            <button className="bg-[#3B82F6] hover:bg-blue-600 text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-colors flex items-center gap-1.5 shadow-sm mb-8">
              Start with a demo <span>›</span>
            </button>
          </div>

          {/* Bottom Screenshot Preview */}
          <div className="relative mt-2 -mb-10 -mr-10 rounded-tl-xl overflow-hidden shadow-2xl border border-gray-200/80 bg-white">
            <img 
              src="https://plain-apac-prod-public.komododecks.com/202608/24/MBdZ73ug4FGb6NnkyYVB/image.png" 
              alt="Dashboard Analytics Preview" 
              className="w-full h-auto object-cover object-top"
            />
          </div>
        </div>

        {/* Card 2: Locked In */}
        <div className="bg-[#EEF7EC] rounded-3xl p-8 sm:p-10 flex flex-col justify-between overflow-hidden relative shadow-sm border border-green-100/50">
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 border border-dotted border-[#38A169] rounded-full bg-[#58A908] text-white text-sm font-lg tracking-wider uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              Locked In
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mb-5">
              Founding rates, held 12 months
            </h3>

            {/* Bullet List */}
            <ul className="space-y-3 mb-6">
              {card2Features.map((item, index) => (
                <li key={index} className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-800 font-medium">
                  <div className="w-4 h-4 rounded-full bg-[#84CC16] flex items-center justify-center shrink-0">
                    <FaCheck className="text-white text-[9px]" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <button className="bg-[#3B82F6] hover:bg-blue-600 text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-colors flex items-center gap-1.5 shadow-sm mb-8">
              Talk to sales <span>›</span>
            </button>
          </div>

          {/* Bottom Screenshot Preview */}
          <div className="relative mt-2 -mb-10 -mr-10 rounded-tl-xl overflow-hidden    ">
            <img 
              src="https://plain-apac-prod-public.komododecks.com/202608/25/YMl1RBohlROXGx4Sz0Cu/image.png" 
              alt="Store Manager Dashboard Preview" 
              className="w-full h-auto object-cover object-top"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;