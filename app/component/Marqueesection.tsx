import React from "react";
import {
  ShoppingBag,
  Users,
  Store,
  CheckSquare,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

const marqueeItems = [
  { icon: ShoppingBag, label: "Procurement" },
  { icon: Users, label: "HR & payroll" },
  { icon: Store, label: "Multi-outlet" },
  { icon: CheckSquare, label: "Approvals" },
  { icon: ShieldCheck, label: "Roles & audit log" },
  { icon: Smartphone, label: "Mobile access" },
];

export default function FeatureMarquee() {
  return (
    <section className="w-full bg-slate-50  ">
      {/* Container wrapper constrained to max-w-7xl */}
      <div className="relative max-w-7xl mx-auto py-4 overflow-hidden select-none">
        {/* Left Overlay Gradient */}
        <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-48 z-10 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent pointer-events-none" />

        {/* Right Overlay Gradient */}
        <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-48 z-10 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent pointer-events-none" />

        {/* Moving Track */}
        <div className="flex w-max animate-[marquee_25s_linear_infinite] gap-8">
          {[...marqueeItems, ...marqueeItems].map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-2 px-3 py-1.5    text-sm font-lg text-slate-600 whitespace-nowrap"
              >
                <IconComponent className="w-4 h-4 text-slate-400" />
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>

        {/* Inline style tag for keyframe definition */}
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </div>
    </section>
  );
}