import React from 'react';
import {
  Star,
  Tag,
  Layers,
  BookOpen,
  ShoppingCart,
  Users,
  Building2,
  CheckSquare,
  ShieldCheck,
  Smartphone,
} from 'lucide-react';
import FeatureMarquee from './Marqueesection';

const modulesData = [
  {
    id: 'sell',
    tag: 'SELL',
    tagIcon: Tag,
    title: 'Sales, CRM & Billing',
    description:
      'Quotes to invoices to collections, with AI follow-ups on every open deal.',
    imageSrc:
      'https://plain-apac-prod-public.komododecks.com/202608/24/Ar2qOWAqIqyVbdNiFukA/image.png',
  },
  {
    id: 'stock',
    tag: 'STOCK',
    tagIcon: Layers,
    title: 'Inventory & Purchasing',
    description:
      'Live quantities across outlets, supplier pricing and automatic reorder points.',
    imageSrc:
      'https://plain-apac-prod-public.komododecks.com/202608/24/xRdxxxujX34fIMh6lDRx/image.gif',
  },
  {
    id: 'books',
    tag: 'BOOKS',
    tagIcon: BookOpen,
    title: 'Accounting & Reporting',
    description:
      'Auto-reconciled ledgers, VAT-ready books and dashboards that stay current.',
    imageSrc:
      'https://plain-apac-prod-public.komododecks.com/202608/24/EOKUTnnlYnipW301W3iT/image.png',
  },
];

const subNavItems = [
  { id: 'procurement', label: 'Procurement', icon: ShoppingCart },
  { id: 'hr-payroll', label: 'HR & payroll', icon: Users },
  { id: 'multi-outlet', label: 'Multi-outlet', icon: Building2 },
  { id: 'approvals', label: 'Approvals', icon: CheckSquare },
  { id: 'roles-audit', label: 'Roles & audit log', icon: ShieldCheck },
  { id: 'mobile-access', label: 'Mobile access', icon: Smartphone },
];

export default function PlatformOSSection() {
  return (
    <section className="mx-auto w-full max-w-7xl bg-slate-50/50 px-4 py-5 font-sans text-slate-900 sm:px-6 sm:py-4 md:px-6 md:py-8 lg:px-8 xl:px-10">
      {/* Top Header Row */}
      <div className="mb-8 flex flex-col gap-5 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-xl">
          {/* Pill Tag */}
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-blue-600 sm:text-xs">
            <Star className="h-3 w-3 text-blue-500" />
            <span>INSIDE THE PLATFORM</span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-3xl md:text-3xl lg:text-4xl">
            Think of Flowzen as the{' '}
            <br className="hidden sm:block" />
            operating system
          </h2>
        </div>

        {/* CTA Button */}
        <button className="inline-flex w-fit cursor-pointer items-center justify-center self-start rounded-full bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-md sm:self-auto">
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
              className="flex h-full flex-col justify-between rounded-2xl border border-slate-200/90 bg-white shadow-xs transition-all hover:shadow-md"
            >
              {/* Image Preview Container */}
              <div className="aspect-[16/10] w-full overflow-hidden rounded-xl border border-slate-100 bg-slate-50">
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  className="h-full w-full object-cover object-center"
                />
              </div>

              {/* Card Details */}
              <div className="flex flex-1 flex-col p-4 sm:p-5">
                {/* Category Pill Tag */}
                <div className="mb-2 inline-flex w-fit items-center gap-1 rounded-full bg-blue-600 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                  <TagIcon className="h-3 w-3" />
                  <span>{item.tag}</span>
                </div>

                {/* Title */}
                <h3 className="mb-1.5 text-base font-bold text-slate-900 sm:text-lg">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs leading-relaxed text-slate-500 sm:text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
        <div>
          <FeatureMarquee/>
        </div>
   
    </section>
  );
}