import React from 'react';
import {
  Star,
  Lock,
  Server,
  Zap,
  ArrowUpRight,
  Check,
} from 'lucide-react';

const features = [
  {
    icon: Lock,
    title: 'Half off setup',
    description:
      'The one-time implementation cost, cut in half. Campaign only.',
  },
  {
    icon: Server,
    title: 'Annual at 25% off',
    description:
      'Pay twelve months upfront, hold the founding rate all year.',
  },
  {
    icon: Zap,
    title: 'Unlimited configuration',
    description:
      'Workflows, fields, reports — no per-change invoices during onboarding.',
  },
  {
    icon: Lock,
    title: 'Migration included',
    description:
      'We move your stock, customers and ledgers across at no cost.',
  },
  {
    icon: Server,
    title: 'A dedicated engineer',
    description:
      'One person who knows your setup, from first demo to go-live.',
  },
  {
    icon: Zap,
    title: 'A say in the roadmap',
    description:
      'Founding customers pick what we build next — and get it first.',
  },
];

export default function SetupSection() {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc] px-4 py-5 text-black sm:px-6 sm:py-12 md:py-10 lg:px-8 lg:py-16">

      {/* Background decoration */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-emerald-100/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10">

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">

          {/* Pill */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3.5 py-1.5 text-sm font-bold text-blue-600">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50">
              <Star className="h-3 w-3 fill-blue-50 text-blue-600" />
            </span>

            BUILT FOR YOUR TRADE
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-bold leading-tight tracking-[-0.03em] text-slate-950 sm:text-4xl md:text-5xl">
            Everything you need to <br />
            <span className="bg-gradient-to-r from-[#6f51ff] via-[#9038ff] to-[#c52fff] bg-clip-text text-transparent">
              get up and running.
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
            From setup and migration to configuration and launch,
            we handle the details so you can focus on running your business.
          </p>
        </div>

        {/* Features */}
        <div className="mt-14 grid grid-cols-1 gap-4 sm:mt-16 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature, index) => {
            const IconComponent = feature.icon;

            return (
              <div
                key={index}
                className="group relative flex min-h-[235px] flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500"
              >

                {/* Top accent */}
                <div className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-to-r from-[#6f51ff] via-[#9038ff] to-[#c52fff] transition-all duration-300 group-hover:w-full" />

                {/* Icon */}
                <div className="mb-7 flex items-center justify-between">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-100 bg-blue-50 text-blue-600 transition-all duration-300 group-hover:scale-105 group-hover:bg-gradient-to-r group-hover:from-[#6f51ff] group-hover:via-[#9038ff] group-hover:to-[#c52fff] group-hover:text-white">
                    <IconComponent className="h-5 w-5" />
                  </div>

                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-100 bg-slate-50 text-slate-400 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col">

                  <h3 className="text-lg font-semibold tracking-tight text-slate-900">
                    {feature.title}
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500">
                    {feature.description}
                  </p>

                </div>

                {/* Bottom indicator */}
                <div className="mt-6 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-slate-800 transition-colors duration-300 group-hover:text-[#9038ff]">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-slate-100 transition-colors group-hover:bg-emerald-50">
                    <Check className="h-2.5 w-2.5" />
                  </span>

                  Included
                </div>

              </div>
            );
          })}

        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex justify-center">
          <button className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-600">
            See what's included

            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

      </div>
    </section>
  );
}