import React from 'react';
import { Star, ArrowRight } from 'lucide-react';
import { AiOutlineLogout } from 'react-icons/ai';

const setups = [
  {
    id: 'ecommerce',
    title: 'eCommerce & online',
    description: 'Orders, customers, stock, delivery and payments in one place.',
    bgColor: 'bg-[#F2EDFE]',
    borderColor: 'border-[#E2D9F9]',
    accentColor: 'text-[#6C5CE7]',
    imageSrc: 'https://plain-apac-prod-public.komododecks.com/202608/24/gjVqi8cF6s1Kcj409UMP/image.png',
  },
  {
    id: 'retail',
    title: 'Retail & POS',
    description: 'Billing, inventory, promotions and daily operations.',
    bgColor: 'bg-[#E3F5FF]',
    borderColor: 'border-[#CBEBFF]',
    accentColor: 'text-[#00A8FF]',
    imageSrc: 'https://plain-apac-prod-public.komododecks.com/202608/24/MREIq1mVz3E837cDfJwq/image.png',
  },
  {
    id: 'wholesale',
    title: 'Wholesale & trading',
    description: 'Suppliers, purchases, warehouses, pricing and dues.',
    bgColor: 'bg-[#E8F8F5]',
    borderColor: 'border-[#CFF0E8]',
    accentColor: 'text-[#00B894]',
    imageSrc: 'https://plain-apac-prod-public.komododecks.com/202608/24/3FUKvp8bkEDpBatUu8OU/image.png',
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    description: 'Production planning, materials and distribution.',
    bgColor: 'bg-[#E0F7FA]',
    borderColor: 'border-[#B2EBF2]',
    accentColor: 'text-[#00ACC1]',
    imageSrc: 'https://plain-apac-prod-public.komododecks.com/202608/24/ijSpKf084FJtjyQMppBU/image.png',
  },
  {
    id: 'custom-erp',
    title: 'Custom ERP',
    description: 'Tailor-made around operations nobody else shares.',
    bgColor: 'bg-[#F4F9E8]',
    borderColor: 'border-[#E3F0C6]',
    accentColor: 'text-[#7A9E00]',
    imageSrc: 'https://plain-apac-prod-public.komododecks.com/202608/25/xw7uRNjCGOkU09T757Oe/image.png',
  },
];

export default function SetupCardsSection() {
  return (
    <section className="bg-white text-slate-900 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-6">
          <div className="max-w-xl">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-blue-100 bg-blue-50/60 text-[11px] font-bold text-blue-600 uppercase tracking-wider mb-3">
              <Star className="w-3.5 h-3.5 text-blue-500 fill-blue-500" />
              <span>Built for your trade</span>
            </div>

            {/* Title & Subtitle */}
            <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-slate-900 leading-tight">
              Pick the setup you'd run on.
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              From sign-up to running your business — in three steps
            </p>
          </div>

          {/* Contact Sales Button */}
          <button className="self-start md:self-auto inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-xs sm:text-sm font-semibold shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-200">
            Contact Sales
          </button>
        </div>

        {/* 5 Cards Horizontal Scroll on Mobile / Responsive Grid on Desktop */}
        <div className="flex lg:grid lg:grid-cols-5 gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 lg:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
          {setups.map((setup) => (
            <div
              key={setup.id}
              className={`${setup.bgColor} ${setup.borderColor} border rounded-2xl p-3 sm:p-5 h-[300px] sm:h-[340px] flex flex-col relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 flex-shrink-0 w-[240px] sm:w-[260px] lg:w-auto snap-center`}
            >
              {/* Title - Same Level */}
              <div className="relative z-10 h-16 sm:h-20">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                  {setup.title}
                </h3>
              </div>

              {/* Description - Same Level */}
              <div className="relative z-10 h-[65px] sm:h-[75px]">
                <p className="text-sm sm:text-md text-black leading-relaxed">
                  {setup.description}
                </p>
              </div>

              {/* Register Interest - Same Level */}
              <div className="relative z-10 h-[50px] flex items-start">
                <button
                  className={`inline-flex items-center gap-1.5 text-sm sm:text-md font-semibold ${setup.accentColor} hover:opacity-80 transition-opacity`}
                >
                  <span>Register Interest</span>
                  <AiOutlineLogout className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>

              {/* Bottom Image - Same Level */}
              <div className="absolute left-5 right-5 bottom-0 h-[145px] sm:h-[155px] flex items-center justify-center">
                <img
                  src={setup.imageSrc}
                  alt={setup.title}
                  className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}