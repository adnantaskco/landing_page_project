import React from 'react';
import { Tag, Clock, Calendar, CreditCard } from 'lucide-react';

const statsData = [
  {
    id: 'setup-fee',
    icon: Tag,
    value: '50%',
    label: 'off your one-time setup fee',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    id: 'risk-free',
    icon: Clock,
    value: '7 days',
    label: 'risk-free on your own data',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    id: 'go-live',
    icon: Calendar,
    value: '2–4 wks',
    label: 'typical time to go live',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    id: 'price-lock',
    icon: CreditCard,
    value: '12 mo',
    label: 'price locked, no increases',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
];

export default function KeyStatsSection() {
  return (
    <section className="w-full border-y border-slate-100 bg-white py-8 sm:py-10 md:py-12 lg:py-14">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10">
        <div className="grid grid-cols-2 gap-y-8 gap-x-3 sm:gap-x-6 sm:gap-y-10 md:grid-cols-4 md:gap-6 lg:gap-8">
          {statsData.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.id}
                className="flex min-w-0 flex-col items-center justify-center px-1 text-center sm:px-2"
              >
                {/* Icon Container */}
                <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-full sm:mb-4 sm:h-11 sm:w-11 md:h-12 md:w-12 ${stat.iconBg}`}>
                  <Icon className={`h-4 w-4 sm:h-5 sm:w-5 ${stat.iconColor}`} />
                </div>

                {/* Stat Value */}
                <h3 className="mb-1 text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl md:text-3xl">
                  {stat.value}
                </h3>

                {/* Stat Label */}
                <p className="max-w-[150px] text-[11px] font-normal leading-4 text-slate-500 sm:max-w-[180px] sm:text-xs sm:leading-5 md:text-sm">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}