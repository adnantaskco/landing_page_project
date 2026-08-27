"use client";
import React from "react";

const EarlyBirdSection = () => {
  return (
    <section className="bg-white py-5 sm:py-6 md:py-8  lg:py-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10 ">
      <div className=" bg-[#F4F6FB] rounded-[32px] p-8 sm:p-12 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border border-gray-100 shadow-sm">
        
        {/* Left Side: Quote & Info */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Pill Badge */}
          <div>
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#E5ECF8] text-blue-600 text-sm sm:text-sm font-lg border border-dotted tracking-wider uppercase">
              WHY EARLY BIRD EXISTS
            </span>
          </div>

          {/* Main Quote */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 leading-[1.25] tracking-tight">
            “We'd rather build with 100 businesses than launch at 10,000. Founding customers shape the roadmap & pay founding prices for it.”
          </h2>

          {/* Author Block */}
          <div className="flex items-center gap-3 pt-2">
           
           <img src="https://plain-apac-prod-public.komododecks.com/202608/25/8m52LEVEvHVXLJCOkmNP/image.png" alt="" />
            
            {/* Text */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 leading-tight">
                FlowZen founding team
              </h4>
              <p className="text-xs text-gray-400 mt-0.5">
                Dhaka, Bangladesh
              </p>
            </div>
          </div>

        </div>

        {/* Right Side: Graphic Card */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          <div className="w-full aspect-square max-w-[420px] rounded-2xl overflow-hidden ">
            <img 
              src="https://plain-apac-prod-public.komododecks.com/202608/24/Q6Ar0GqByyPE9ousrHIO/image.png" 
              alt="FlowZen 3D Icon Graphic"
              className="w-full h-full object-cover" 
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default EarlyBirdSection;