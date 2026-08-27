"use client"
import React, { useState } from 'react';
import { 
  Star,
  CheckCircle2,
  Cog,
  CloudDownload,
  Sparkles,
  Clock,
  HardDrive,
  Building,
  Hand,
  Code2
} from 'lucide-react';

const pricingData = [
  {
    id: 'ecommerce',
    title: 'eCommerce & online',
    description: 'Stores selling across web, social and marketplaces.',
    monthlyPrice: 3500,
    annualPrice: 2650,
    features: [
      'Orders, customers & returns',
      'Stock synced across channels',
      'Delivery & payment integrations',
      'Four tiers available',
    ],
    highlighted: true, // Shows active blue button style
  },
  {
    id: 'retail',
    title: 'Retail & POS shop',
    description: 'Single or multi-outlet counter sales.',
    monthlyPrice: 2500,
    annualPrice: 1900,
    features: [
      'Fast, offline-capable POS',
      'Inventory & promotions',
      'Daily sales and cash reports',
      'Four tiers available',
    ],
    highlighted: false,
  },
  {
    id: 'wholesale',
    title: 'Wholesale & trading',
    description: 'Distributors handling suppliers and dues.',
    monthlyPrice: 4500,
    annualPrice: 3400,
    features: [
      'Suppliers, purchases & price tiers',
      'Multi-warehouse control',
      'Customer dues & credit limits',
      'Four tiers available',
    ],
    highlighted: false,
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    description: 'Producers planning output and supply.',
    monthlyPrice: 7500,
    annualPrice: 5650,
    features: [
      'Production planning & BOM',
      'Material and batch tracking',
      'Distribution & routes',
      'Four tiers available',
    ],
    highlighted: false,
  },
];

const enterpriseFeatures = [
  { text: 'Unlimited builds/month', icon: Cog },
  { text: 'Unlimited build retention', icon: HardDrive },
  { text: 'Unlimited downloads/month', icon: CloudDownload },
  { text: 'Custom billing', icon: Building },
  { text: 'Custom features', icon: Sparkles },
  { text: 'Optional self-host infra', icon: Hand },
  { text: 'Guaranteed response SLA', icon: Clock },
  { text: 'Team training & Code reviews', icon: Code2 },
];

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState('annual'); // 'monthly' | 'annual'

  return (
    <section 
    id='pricing'
      className="bg-cover bg-center bg-no-repeat text-white py-16 px-4 sm:px-6 lg:px-8 font-sans min-h-screen flex flex-col justify-center"
      style={{
        backgroundImage: `url('https://plain-apac-prod-public.komododecks.com/202608/24/bw8unGVZEs9x40hdaJde/image.png')`
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10">
        
        {/* Section Header & Toggle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-dotted border-gray-300 text-xs text-white mb-4">
              <Star className="w-3 h-3 fill-slate-300" />
              <span>Pricing</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
              Priced for SMEs Scales when you do.
            </h2>

            {/* Feature Badges */}
            <div className="flex flex-wrap gap-2 text-sm text-white">
              <span className="px-2 py-1 rounded-full border border-dotted border-white/80">
                No long-term contracts
              </span>
              <span className="px-2 py-1 rounded-full border border-dotted border-white/80">
                Upgrade anytime
              </span>
              <span className="px-2 py-1 rounded-full border border-dotted border-white/80">
                Secure cloud hosting
              </span>
              <span className="px-2 py-1 rounded-full border border-dotted border-white/80">
                Automatic updates
              </span>
            </div>
          </div>

          {/* Tab Switcher */}
          <div className="bg-white p-1.5 rounded-full border border-slate-800 inline-flex items-center self-start md:self-end">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-400'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                billingCycle === 'annual'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400'
              }`}
            >
              <span>Annual</span>
              <span className="text-[11px] bg-white/20 px-2 py-0.5 rounded-full font-normal">
                save 25%
              </span>
            </button>
          </div>
        </div>

        {/* 4 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {pricingData.map((plan) => {
            const price = billingCycle === 'annual' ? plan.annualPrice : plan.monthlyPrice;
            const originalPrice = plan.monthlyPrice;

            return (
              <div
                key={plan.id}
                className="bg-white text-black rounded-2xl p-6 flex flex-col justify-between shadow-lg border border-slate-100"
              >
                <div>
                  <h3 className="text-lg font-bold mb-2">{plan.title}</h3>
                  <p className="text-xs text-gray-600 mb-6 min-h-[32px]">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-1">
                    <span className="text-2xl font-extrabold tracking-tight">
                      ৳{price.toLocaleString()}
                    </span>
                    <span className="text-xs text-slate-500 font-normal">/month</span>
                  </div>

                  {/* Strikethrough monthly reference if annual is active */}
                  <div className="h-5 mb-6">
                    {billingCycle === 'annual' && (
                      <span className="text-[11px] text-slate-400 line-through">
                        ৳{originalPrice.toLocaleString()} on monthly billing
                      </span>
                    )}
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#5865F2] shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Call to Action */}
                <button
                  className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold transition-all ${
                    plan.highlighted
                      ? 'bg-[#5865F2] hover:bg-[#4752C4] text-white'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                  }`}
                >
                  Talk to sales
                </button>
              </div>
            );
          })}
        </div>

        {/* Custom & Enterprise Banner Card */}
        <div className="bg-slate-100 text-slate-900 rounded-2xl p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-6">
          <div className="lg:col-span-5">
            <span className="inline-block px-2.5 py-0.5 rounded-full border border-dotted border-blue-600 text-sm font-lg tracking-wider text-blue-600 uppercase mb-3">
              CUSTOM & ENTERPRISE
            </span>
            <h3 className="text-xl font-bold mb-2">Built around how your group runs.</h3>
            <p className="text-xs text-slate-500 mb-6">
              Multi-entity, multi-currency, custom modules, SSO and SLA — scoped to you.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button className="bg-[#5865F2] hover:bg-[#4752C4] text-white px-5 py-2.5 rounded-xl text-xs font-semibold transition-all">
                Talk to sales
              </button>
              <button className="bg-slate-800 hover:bg-slate-900 text-white px-5 py-2.5 rounded-xl text-xs font-semibold transition-all">
                Book a demo
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 border-t lg:border-t-0 lg:border-l border-slate-200 pt-6 lg:pt-0 lg:pl-8">
            {enterpriseFeatures.map((item, index) => (
              <div key={index} className="flex items-center gap-2.5 text-xs font-medium text-slate-700">
                <item.icon className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Disclaimer */}
        <p className="text-center text-sm text-white tracking-wider uppercase">
          ALL PRICES IN BDT. ANNUAL BILLED UPFRONT AT 25% OFF THE MONTHLY RATE. FULL TIER SHEET PUBLISHED AT PUBLIC LAUNCH.
        </p>

      </div>
    </section>
  );
}