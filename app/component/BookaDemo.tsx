"use client";
import React, { useState, ChangeEvent, FormEvent } from 'react';

interface CardItem {
  badge: string;
  badgeStyle: string;
  bgStyle: string;
  borderStyle: string;
  title: string;
  description: string;
  btnText: string;
  btnStyle: string;
  image: string;
  alt: string;
}

const CARD_DATA: CardItem[] = [
  {
    badge: "• FREE · CAMPAIGN ONLY",
    badgeStyle: "text-gray-700 bg-gray-200/60 border-gray-300",
    bgStyle: "bg-[#EEF2F8]",
    borderStyle: "border-[#EEF2F8]",
    title: "Free IT consultation",
    description: "45 MINUTES WITH A SOLUTIONS ARCHITECT: SYSTEMS, DATA, ROLLOUT, COST.",
    btnText: "Book consultation",
    btnStyle: "bg-[#3B82F6] hover:bg-blue-600 text-white",
    image: "https://plain-apac-prod-public.komododecks.com/202608/25/mpAjJiPpilM6N9bVX698/image.png",
    alt: "Free IT consultation"
  },
  {
    badge: "✦ FREE · LIMITED SLOTS",
    badgeStyle: "text-emerald-800 bg-emerald-100/80 border-emerald-300",
    bgStyle: "bg-[#EBF7F1]",
    borderStyle: "border-[#EBF7F1]",
    title: "Free software audit",
    description: "WE REVIEW YOUR CURRENT STACK AND HAND BACK A WRITTEN AUTOMATION PLAN.",
    btnText: "Claim my audit",
    btnStyle: "bg-[#22C55E] hover:bg-emerald-600 text-white",
    image: "https://plain-apac-prod-public.komododecks.com/202608/24/NyTj3mWIRiXmhK3pYRzm/image.png",
    alt: "Free software audit"
  }
];

interface FormDataState {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  countryCode: string;
  workEmail: string;
  companyName: string;
  comments: string;
}

const ConsultationSection: React.FC = () => {
  const [formData, setFormData] = useState<FormDataState>({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    countryCode: '+1',
    workEmail: '',
    companyName: '',
    comments: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <section
    id='contact'
    className="bg-[#F6F8FC] py-4 md:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Side: Cards Container */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {CARD_DATA.map((card, idx) => (
              <div 
                key={idx} 
                className={`relative ${card.bgStyle} ${card.borderStyle} border rounded-3xl p-8 overflow-hidden flex flex-col justify-between shadow-sm min-h-[260px]`}
              >
                <div className="space-y-4 relative z-10 max-w-[240px]">
                  <span className={`inline-block text-xs font-semibold tracking-wider uppercase px-2.5 py-1 rounded-md border border-dashed ${card.badgeStyle}`}>
                    {card.badge}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 tracking-tight leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-[11px] font-medium text-gray-500 uppercase tracking-wide leading-relaxed">
                    {card.description}
                  </p>
                  <button className={`mt-2 font-medium text-xs px-5 py-2.5 rounded-full transition-colors ${card.btnStyle}`}>
                    {card.btnText}
                  </button>
                </div>

                {/* Image position */}
                <div className="absolute right-2 bottom-2 w-36 h-36 pointer-events-none flex items-center justify-center">
                  <img 
                    src={card.image} 
                    alt={card.alt} 
                    className="w-full h-full object-contain" 
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Demo Request Form */}
          <div className="lg:col-span-7 p-[3px] rounded-[30px] bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 shadow-md flex">
            <div className="bg-white rounded-[27px] p-8 sm:p-10 w-full flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">Book A Demo!</h2>
                <p className="text-xs text-gray-500 mb-6">
                  Our team is ready to help you with setup, onboarding, and product questions.
                </p>
                
                <hr className="border-gray-100 mb-6" />

                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* First Name & Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-800 mb-1.5">First name</label>
                      <input
                        type="text"
                        name="firstName"
                        placeholder="Hardy"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500 bg-gray-50/30"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-800 mb-1.5">Last name</label>
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Sauer"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500 bg-gray-50/30"
                      />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-800 mb-1.5">Phone number</label>
                    <div className="flex items-center border border-gray-200 rounded-xl px-3.5 py-2 bg-gray-50/30 focus-within:border-blue-500">
                      <span className="w-4 h-4 rounded-full bg-blue-100 border border-blue-300 mr-2 flex-shrink-0" />
                      <span className="text-xs text-gray-500 mr-3 border-r border-gray-200 pr-3">{formData.countryCode}</span>
                      <input
                        type="tel"
                        name="phoneNumber"
                        placeholder="785-417-2324"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="w-full text-xs text-gray-800 placeholder-gray-400 bg-transparent focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Email & Company Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-800 mb-1.5">Work email address</label>
                      <input
                        type="email"
                        name="workEmail"
                        placeholder="HardySauer@example.org"
                        value={formData.workEmail}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500 bg-gray-50/30"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-800 mb-1.5">Company name</label>
                      <input
                        type="text"
                        name="companyName"
                        placeholder="Koss Group"
                        value={formData.companyName}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500 bg-gray-50/30"
                      />
                    </div>
                  </div>

                  {/* Textarea: How did you hear about us */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-800 mb-1.5">How did you first hear about us</label>
                    <textarea
                      name="comments"
                      placeholder="Comments"
                      rows={4}
                      value={formData.comments}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500 bg-gray-50/30 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="bg-[#3B82F6] hover:bg-blue-600 text-white font-medium text-xs px-8 py-2.5 rounded-full transition-colors shadow-sm"
                    >
                      Submit
                    </button>
                  </div>

                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;