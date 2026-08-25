"use client"
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaStar } from 'react-icons/fa6';

const FAQ_DATA = [
  {
    id: 1,
    question: "Can I upgrade myself or do I have to upgrade my entire Workspace?",
    answer: "To upgrade Flowzen, you'll need to upgrade your entire Workspace, which means all members in your Workspace."
  },
  {
    id: 2,
    question: "What payment methods do you accept?",
    answer: "We accept all major credit/debit cards (Visa, MasterCard, American Express), mobile financial services like bKash and Nagad, as well as direct bank wire transfers."
  },
  {
    id: 3,
    question: "What is your refund policy?",
    answer: "We offer a 14-day money-back guarantee for all new subscription plans. If you are not completely satisfied with Flowzen within the first 14 days, you can request a full refund with no questions asked."
  },
  {
    id: 4,
    question: "How am I billed when I add paid users to a Workspace?",
    answer: "When you add a new paid member to your Workspace, we will prorate the charge based on the remaining time in your current billing cycle so you only pay for the exact time used."
  },
  {
    id: 5,
    question: "What if I have multiple Workspaces?",
    answer: "Each Workspace operates independently with its own billing plan, team members, and settings. You can seamlessly switch between multiple Workspaces using the same account credentials."
  },
  {
    id: 6,
    question: "What happens if I cancel?",
    answer: "If you decide to cancel, your Workspace will remain active until the end of your current billing period. After that, your account will downgrade to our free plan and no further charges will be made."
  }
];

const FAQSection = () => {
  // First item open by default as shown in the mockup
  const [openId, setOpenId] = useState(1);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-3xl mx-auto">
        
        {/* Top Header Badge */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#3B82F6] text-xs font-semibold mb-4">
            <FaStar size={10} />
            <span>FAQ</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-3">
            Frequently asked questions
          </h2>

          <p className="text-sm text-gray-500">
            Find answers to your questions right here, and don't hesitate to{' '}
            <a href="#" className="underline text-gray-700 hover:text-black">
              Contact us
            </a>
            , if you couldn't find what you're looking for.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 mb-6" />

        {/* Accordion List */}
        <div className="divide-y divide-gray-100">
          {FAQ_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="py-5 transition-all">
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full flex justify-between items-center text-left gap-4 focus:outline-none group"
                >
                  <span className="text-sm sm:text-base font-semibold text-gray-800 group-hover:text-black">
                    {faq.question}
                  </span>
                  <span className="text-gray-400 shrink-0">
                    {isOpen ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
                  </span>
                </button>

                {isOpen && (
                  <p className="mt-3 text-xs sm:text-sm text-gray-400 leading-relaxed max-w-2xl">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Button */}
        <div className="mt-10 text-center">
          <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-200 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
            Load more <FaChevronDown size={10} className="text-gray-500" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;