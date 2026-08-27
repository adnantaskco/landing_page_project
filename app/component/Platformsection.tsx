import React from 'react';
import FeatureMarquee from './Marqueesection';
import { FaStar } from 'react-icons/fa6';
import { LuBadgePercent } from 'react-icons/lu';

const modulesData = [
  {
    id: 'sell',
    tag: 'SELL',
    tagIcon: LuBadgePercent,
    title: 'Sales, CRM & Billing',
    description:
      'Quotes to invoices to collections, with AI follow-ups on every open deal.',
    imageSrc:
      'https://plain-apac-prod-public.komododecks.com/202608/24/Ar2qOWAqIqyVbdNiFukA/image.png',
  },
  {
    id: 'stock',
    tag: 'STOCK',
    tagIcon: LuBadgePercent,
    title: 'Inventory & Purchasing',
    description:
      'Live quantities across outlets, supplier pricing and automatic reorder points.',
    imageSrc:
      'https://plain-apac-prod-public.komododecks.com/202608/24/xRdxxxujX34fIMh6lDRx/image.gif',
  },
  {
    id: 'books',
    tag: 'BOOKS',
    tagIcon: LuBadgePercent,
    title: 'Accounting & Reporting',
    description:
      'Auto-reconciled ledgers, VAT-ready books and dashboards that stay current.',
    imageSrc:
      'https://plain-apac-prod-public.komododecks.com/202608/24/EOKUTnnlYnipW301W3iT/image.png',
  },
];

export default function PlatformOSSection() {
  return (
    <section className="mx-auto w-full max-w-7xl bg-slate-50/50 px-4 py-6 font-sans text-slate-900 sm:px-6 md:py-10 lg:py-16 sm:py-8 lg:px-8 xl:px-10">
      {/* Top Header Row */}
      <div className="mb-6 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-xl">
          {/* Pill Tag */}
          <div className="mb-2.5 inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-blue-600 sm:text-xs">
            <FaStar className="h-3 w-3 text-blue-500" />
            <span>INSIDE THE PLATFORM</span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Think of Flowzen as the{' '}
            <br className="hidden sm:block" />
            operating system
          </h2>
        </div>

        {/* CTA Button */}
        <button className="inline-flex w-full cursor-pointer items-center justify-center rounded-full bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-md sm:w-auto">
          <span>Walk me through it</span>
        </button>
      </div>

      {/* 3 Modules Cards Grid */}
      <div className="mb-8 grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {modulesData.map((item) => {
          const TagIcon = item.tagIcon;

          return (
            <div
              key={item.id}
              className="flex w-full flex-row overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-2.5 shadow-xs transition-all hover:shadow-md sm:flex-col sm:p-0"
            >
              {/* Image Container - Fixed 35% width on mobile, full width on tablet/desktop */}
              <div className="relative aspect-square w-1/3 shrink-0 overflow-hidden rounded-xl bg-slate-50 sm:aspect-[16/10] sm:w-full sm:rounded-b-none sm:rounded-t-2xl">
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  className="h-full w-full object-cover object-top"
                />
              </div>

              {/* Card Details */}
              <div className="flex flex-1 flex-col justify-center px-3 py-1 sm:p-5">
                {/* Category Pill Tag */}
                <div className="mb-1.5 inline-flex w-fit items-center gap-1 rounded-full bg-blue-600 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white sm:mb-2 sm:px-2.5 sm:text-[10px]">
                  <TagIcon className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                  <span>{item.tag}</span>
                </div>

                {/* Title */}
                <h3 className="mb-1 text-sm font-bold text-slate-900 line-clamp-1 sm:mb-1.5 sm:text-lg sm:line-clamp-none">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[11px] leading-snug text-slate-500 line-clamp-2 sm:text-sm sm:leading-relaxed sm:line-clamp-none">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div>
        <FeatureMarquee />
      </div>
    </section>
  );
}