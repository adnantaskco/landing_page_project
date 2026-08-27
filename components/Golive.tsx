import React from 'react';
import { GoZap } from 'react-icons/go';

const CTA_DATA = {
  badge: " 34 FOUNDING SEATS LEFT →",
  heading: "Go live before everyone else.",
  subheading: "Two minutes to register. No card. Reply within one business day.",
  buttons: [
    { label: "Claim my seat >", href: "#", primary: true },
    { label: "Book a demo", href: "#", primary: false }
  ],
  dashboardImage: "https://plain-apac-prod-public.komododecks.com/202608/24/MBdZ73ug4FGb6NnkyYVB/image.png" // Replace with your actual dashboard image/screenshot asset
};

const CTASection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10 py-5 sm:py-6 md:py-8  lg:py-10">
      <div 
        className="bg-cover bg-center bg-no-repeat rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2"
        style={{
          backgroundImage: `url('https://plain-apac-prod-public.komododecks.com/202608/24/ffz0T2ZdXxiuWF7SP2Te/image.png')`
        }}
      >
        
        {/* Left Side: Content */}
        <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center items-start text-white">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-400 text-white/90 text-xs font-semibold mb-6 tracking-wide border border-white/20">
           <GoZap/> {CTA_DATA.badge}
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold tracking-tight mb-4 leading-tight">
            {CTA_DATA.heading}
          </h2>

          {/* Subheading */}
          <p className="text-blue-100/80 text-sm sm:text-base font-normal mb-8">
            {CTA_DATA.subheading}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            {CTA_DATA.buttons.map((button, index) => (
              <a
                key={index}
                href={button.href}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  button.primary
                    ? "bg-black text-white hover:bg-gray-900 shadow-md"
                    : "bg-white text-gray-900 hover:bg-gray-100 shadow-md"
                }`}
              >
                {button.label}
              </a>
            ))}
          </div>

        </div>

        {/* Right Side: Dashboard Preview Image */}
        <div className="relative flex items-center justify-end bg-gray-900/10 overflow-hidden min-h-[300px]">
          <img
            src={CTA_DATA.dashboardImage}
            alt="Dashboard Preview"
            className="w-full h-full object-cover object-left rounded-tl-xl shadow-2xl translate-x-2 translate-y-2 lg:translate-x-4 lg:translate-y-4"
          />
        </div>

      </div>
    </section>
  );
};

export default CTASection;