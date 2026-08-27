"use client";

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaStar } from "react-icons/fa6";

const FAQ_DATA = [
  {
    id: 1,
    question: "Can I upgrade myself or do I have to upgrade my entire Workspace?",
    answer:
      "To upgrade Flowzen, you'll need to upgrade your entire Workspace, which means all members in your Workspace.",
  },
  {
    id: 2,
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit/debit cards (Visa, MasterCard, American Express), mobile financial services like bKash and Nagad, as well as direct bank wire transfers.",
  },
  {
    id: 3,
    question: "What is your refund policy?",
    answer:
      "We offer a 14-day money-back guarantee for all new subscription plans. If you are not completely satisfied with Flowzen within the first 14 days, you can request a full refund with no questions asked.",
  },
  {
    id: 4,
    question: "How am I billed when I add paid users to a Workspace?",
    answer:
      "When you add a new paid member to your Workspace, we will prorate the charge based on the remaining time in your current billing cycle so you only pay for the exact time used.",
  },
  {
    id: 5,
    question: "What if I have multiple Workspaces?",
    answer:
      "Each Workspace operates independently with its own billing plan, team members, and settings. You can seamlessly switch between multiple Workspaces using the same account credentials.",
  },
  {
    id: 6,
    question: "What happens if I cancel?",
    answer:
      "If you decide to cancel, your Workspace will remain active until the end of your current billing period. After that, your account will downgrade to our free plan and no further charges will be made.",
  },
];

const FAQSection = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq"
      className="w-full overflow-hidden bg-white px-4 py-5 sm:px-6 sm:py-6 md:py-8 lg:px-8 lg:py-10"
    >
      <div className="mx-auto w-full max-w-4xl">
        {/* Top Header Badge */}
        <div className="mb-6 text-center sm:mb-8">
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-[10px] font-semibold text-[#3B82F6] sm:mb-4 sm:text-xs">
            <FaStar size={10} />
            <span>FAQ</span>
          </div>

          <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 sm:mb-3 sm:text-4xl">
            Frequently asked questions
          </h2>

          <p className="px-2 text-xs leading-normal text-gray-500 sm:px-0 sm:text-sm">
            Find answers to your questions right here, and don't hesitate to{" "}
            <a
              href="#"
              className="text-gray-700 underline hover:text-black"
            >
              Contact us
            </a>
            , if you couldn't find what you're looking for.
          </p>
        </div>

        {/* Divider */}
        <div className="mb-4 border-t border-gray-100 sm:mb-6" />

        {/* Accordion List */}
        <div className="divide-y divide-gray-100">
          {FAQ_DATA.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="py-4 transition-all sm:py-5"
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="group flex w-full cursor-pointer items-center justify-between gap-3 text-left focus:outline-none sm:gap-4"
                >
                  <span className="text-xs font-semibold leading-snug text-gray-800 group-hover:text-black sm:text-base">
                    {faq.question}
                  </span>

                  <span className="shrink-0 p-1 text-gray-400">
                    {isOpen ? (
                      <FaChevronUp size={11} />
                    ) : (
                      <FaChevronDown size={11} />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <p className="mt-2 max-w-2xl text-[11px] leading-relaxed text-gray-500 sm:mt-3 sm:text-sm">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Button */}
        <div className="mt-8 text-center sm:mt-10">
          <button className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-gray-200 px-6 py-2.5 text-xs font-semibold text-gray-700 shadow-xs transition-colors hover:bg-gray-50 active:bg-gray-100">
            Load more
            <FaChevronDown size={10} className="text-gray-500" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;