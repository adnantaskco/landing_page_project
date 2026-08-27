"use client"
import React from 'react';
import { FaStar } from 'react-icons/fa6';

interface WorkflowStep {
  stepNumber: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    stepNumber: "1",
    title: "Register",
    description: "Two minutes, no card. You get a confirmation and an audit slot.",
    imageSrc: "https://plain-apac-prod-public.komododecks.com/202608/24/JXVUI0V8vuINgogJLqq9/image.png",
    imageAlt: "Register Preview"
  },
  {
    stepNumber: "2",
    title: "Demo & audit",
    description: "A live walkthrough plus a written automation plan for your business.",
    imageSrc: "https://plain-apac-prod-public.komododecks.com/202608/24/opQ1uvY0I47Pg5WRbXdi/image.png",
    imageAlt: "Demo & Audit Preview"
  },
  {
    stepNumber: "3",
    title: "Trial on your data",
    description: "A private subdomain with your stock and customers loaded.",
    imageSrc: "https://plain-apac-prod-public.komododecks.com/202608/24/AgbocEa7vsdbItFPXAHl/image.png",
    imageAlt: "Trial Preview"
  },
  {
    stepNumber: "4",
    title: "Guided Go-live",
    description: "A named engineer configures outlets, users and workflows.",
    imageSrc: "https://plain-apac-prod-public.komododecks.com/202608/24/jyJMmW2tKDN0mLwCA585/image.png",
    imageAlt: "Guided Go-live Preview"
  }
];

const HowItWorksSection: React.FC = () => {
  return (
    <section
    id='how-it-works'
    className="bg-white py-5 sm:py-6 md:py-8  lg:py-10 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10">
        
        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#3B82F6] text-sm font-lg mb-4">
              <span className='flex item-center justify-center gap-2'> <FaStar/> How It Works</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight mb-2">
              An order moves itself from placed to delivered
            </h2>

            {/* Subtitle */}
            <p className="text-sm text-gray-500">
              One example from the workflow engine — order management, built on a configurable pipeline you control.
            </p>
          </div>

          {/* Contact Sales Button */}
          <button className="bg-[#3B82F6] hover:bg-blue-600 text-white font-medium text-xs px-6 py-3 rounded-full transition-colors shadow-sm shrink-0 self-start md:self-auto">
            Contact Sales
          </button>
        </div>

        {/* Integrated Horizontal Scrollable Container for Mobile / Grid for Desktop */}
        <div className="flex lg:grid lg:grid-cols-4 gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 lg:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
          {WORKFLOW_STEPS.map((step) => (
            <div 
              key={step.stepNumber} 
              className="flex flex-col items-center flex-shrink-0 w-[260px] sm:w-[280px] lg:w-auto snap-center"
            >
              {/* Card Container */}
              <div className="w-full bg-[#F8FAFC] rounded-2xl overflow-hidden border border-gray-100 p-3 flex flex-col hover:shadow-md transition-shadow h-full">
                {/* Image Box */}
                <div className="w-full h-40 rounded-xl overflow-hidden bg-gray-100 mb-4">
                  <img 
                    src={step.imageSrc} 
                    alt={step.imageAlt} 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text Content */}
                <div className="px-2 pb-2 flex-grow">
                  <h3 className="text-base font-bold text-gray-900 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Number Badge Line Container */}
              <div className="relative w-full flex items-center justify-center pt-8 pb-2">
                {/* Connecting Line passing through badge center */}
                <div className="absolute left-0 right-0 top-1.5/2 -translate-y-1/2 h-[1px] bg-gray-200 z-0" />

                {/* Circular Number Badge */}
                <div className="relative z-10 w-9 h-9 rounded-full bg-white border border-black flex items-center justify-center text-xs font-bold text-gray-800 shadow-sm">
                  {step.stepNumber}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorksSection;