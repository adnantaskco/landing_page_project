"use client";
import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Play,
  Sparkles,
  Menu,
  X,
} from "lucide-react";
import { FaUserPlus } from "react-icons/fa6";

const HeroSection3 = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Dynamic countdown timer logic
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      let targetYear = now.getFullYear();
      let targetDate = new Date(`October 31, ${targetYear} 23:59:59`);

      // If Oct 31 for this year has passed, target next year's Oct 31
      if (now > targetDate) {
        targetYear += 1;
        targetDate = new Date(`October 31, ${targetYear} 23:59:59`);
      }

      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({
          days: String(days).padStart(2, "0"),
          hours: String(hours).padStart(2, "0"),
          minutes: String(minutes).padStart(2, "0"),
          seconds: String(seconds).padStart(2, "0"),
        });
      } else {
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const navLinks = [
    { label: "Solution", href: "#solution" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="relative w-full overflow-hidden text-white bg-slate-950">
      {/* Background Image - Absolute Positioned */}
      <img
        src="https://plain-apac-prod-public.komododecks.com/202608/24/I0YWLKEHB1Bfkzzy0Yjr/image.png"
        alt="Hero Background"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="relative w-full overflow-hidden pb-10 sm:pb-16 lg:pb-20">
        {/* =========================================================
            TOP ANNOUNCEMENT BAR
        ========================================================== */}
        <div className="relative z-50 flex h-auto py-1.5 min-h-[32px] items-center justify-center bg-gradient-to-r from-[#0b4edb] via-[#4d50d8] to-[#8065dc] px-3 text-[10px] sm:text-xs text-center">
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            <span className="rounded-full bg-[#202d83] px-2.5 py-0.5 font-semibold text-white">
              Early Bird
            </span>
            <span>50% off setup · 25% off annual · closes 31 OCT</span>
          </div>
        </div>

        {/* =========================================================
            NAVIGATION BAR
        ========================================================== */}
        <header className="relative z-40 w-full border-b border-white/5">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 md:px-8 lg:h-20 lg:px-8 xl:px-10">
            {/* Left: Logo */}
            <div className="flex items-center">
              <a href="#" className="inline-block">
                <img
                  src="https://plain-apac-prod-public.komododecks.com/202608/24/P9Qchgv4VHbjOAGy1r59/image.png"
                  alt="Flowzen Logo"
                  className="h-6 w-auto object-contain sm:h-7 lg:h-8"
                />
              </a>
            </div>

            {/* Center: Desktop Navigation */}
            <nav className="hidden items-center md:pl-48 gap-6 text-xs text-white/90 lg:flex lg:gap-8 lg:text-sm font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="transition hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right: Actions */}
            <div className="hidden items-center gap-3 sm:flex">
              <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs text-white/80">
                <FaUserPlus size={13} />
                <span>34 / 100 seats left</span>
              </div>
              <button className="rounded-full bg-[#3979ff] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#4b87ff] md:text-sm">
                Claim my seat
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex items-center gap-2 sm:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="rounded-lg p-1.5 text-white/80 hover:bg-white/10 hover:text-white focus:outline-none"
                aria-label="Toggle navigation"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          {mobileMenuOpen && (
            <div className="border-b border-white/10 bg-[#0b0f29]/95 backdrop-blur-md lg:hidden">
              <div className="flex flex-col space-y-3 px-4 py-4 text-sm">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block font-medium text-white/80 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-2 border-t border-white/10 flex flex-col gap-2.5">
                  <div className="flex items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/[0.06] py-1.5 text-xs text-white/80">
                    <FaUserPlus size={12} />
                    <span>34 / 100 seats left</span>
                  </div>
                  <button className="w-full rounded-full bg-[#3979ff] py-2 text-center text-xs font-semibold text-white transition hover:bg-[#4b87ff]">
                    Claim my seat
                  </button>
                </div>
              </div>
            </div>
          )}
        </header>

        {/* =========================================================
            HERO CONTENT
        ========================================================== */}
        <div className="relative z-20 mx-auto flex max-w-[1000px] flex-col items-center px-4 pt-8 text-center sm:pt-12 md:pt-16 lg:pt-20">
          <div className="mb-5 flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.08] px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-md sm:mb-6 sm:gap-1.5 sm:px-4 sm:text-sm">
            <Sparkles size={14} />
            <span>34 FOUNDING SEATS LEFT</span>
            <ChevronRight size={14} />
          </div>

          <h1 className="max-w-[850px] text-3xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Run your whole{" "}
            <br className="hidden sm:inline" />
            business{" "}
            <span className="bg-gradient-to-r from-[#6f51ff] via-[#9038ff] to-[#c52fff] bg-clip-text text-transparent">
              on one system.
            </span>
          </h1>

          <p className="mt-4 max-w-[540px] text-xs leading-relaxed text-white/70 sm:mt-5 sm:max-w-[620px] sm:text-sm md:text-base lg:text-lg">
            Sales, stock, accounts, purchasing, CRM and HR — unified, automated.
            <br className="hidden md:block" /> Join the pre-release and lock founding pricing.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:mt-8 sm:gap-4">
            <button className="flex items-center gap-2 rounded-full bg-[#3477ff] px-5 py-3 text-xs font-semibold text-white shadow-[0_8px_25px_rgba(52,119,255,0.25)] transition hover:-translate-y-0.5 hover:bg-[#4785ff] sm:px-6 sm:py-3.5 sm:text-sm">
              Claim my seat
              <ArrowRight size={14} />
            </button>
            <button className="flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-semibold text-[#191052] transition hover:-translate-y-0.5 hover:bg-white/90 sm:px-6 sm:py-3.5 sm:text-sm">
              <Play size={13} fill="currentColor" />
              See a live demo
            </button>
          </div>

          {/* =========================================================
              DYNAMIC COUNTDOWN TIMER
          ========================================================== */}
          <div className="relative mt-10 w-full max-w-[420px] sm:mt-12 sm:max-w-[480px]">
            {/* Outer Glow & Gradient Border */}
            <div className="relative rounded-xl bg-gradient-to-r from-[#8da3ff] via-[#d1b8ff] to-[#edb2bb] p-1.5 shadow-xl shadow-black/10">
              <div className="rounded-[10px] bg-white px-4 py-4 text-[#10115c] sm:rounded-[12px] sm:px-6 sm:py-5">
                {/* Numbers and Colons Row */}
                <div className="flex items-center justify-between text-center">
                  {[
                    { value: timeLeft.days, label: "DAYS" },
                    { value: timeLeft.hours, label: "HOURS" },
                    { value: timeLeft.minutes, label: "MINUTES" },
                    { value: timeLeft.seconds, label: "SECONDS" },
                  ].map((item, index, array) => (
                    <React.Fragment key={item.label}>
                      <div className="flex-1">
                        <div className="text-2xl font-extrabold leading-none tracking-tighter sm:text-4xl md:text-5xl">
                          {item.value}
                        </div>
                        <div className="mt-2 text-[8px] font-bold tracking-wider text-gray-500 uppercase sm:text-[9px]">
                          {item.label}
                        </div>
                      </div>
                      {index < array.length - 1 && (
                        <span className="px-0.5 pb-3 text-xl font-bold text-[#10115c]/20 sm:px-1.5 sm:text-3xl md:text-4xl">
                          :
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                {/* Progress Bar */}
                <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-[#e8e9f1] sm:h-2">
                  <div className="h-full w-[38%] rounded-full bg-gradient-to-r from-[#5932ff] to-[#7b52ff]" />
                </div>

                {/* Footer Details */}
                <div className="mt-3 flex items-center justify-between gap-2">
                  <span className="rounded-full border border-[#4363e5]/20 bg-[#4363e5]/5 px-2.5 py-0.5 text-[9px] font-bold text-[#3b59d8] sm:text-[10px]">
                    66 claimed
                  </span>
                  <span className="flex items-center gap-1.5 text-[9px] font-semibold text-gray-500 sm:text-[10px]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#ff4d6d]" />
                    Closes 31 OCT
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Pills */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:mt-8 sm:gap-2.5">
            <div className="relative inline-flex items-center">
              {/* Main Pill Badge */}
              <span className="rounded-full border border-[#48a5ff]/80 bg-white px-3 py-1 text-[11px] font-semibold text-[#48a5ff] backdrop-blur-md sm:px-3.5 sm:py-1.5 sm:text-xs">
                7-day risk-free trial
              </span>
              {/* Checkmark Icon badge overlapping top-right corner */}
              <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#3b82f6] p-0.5 text-white sm:h-4.5 sm:w-4.5">
                <Check size={10} strokeWidth={3} className="sm:size-[11px]" />
              </span>
            </div>

            {[
              "Free migration",
              "No card required",
              "50% off setup",
            ].map((feature) => (
              <span
                key={feature}
                className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[11px] font-medium text-white/70 sm:px-3.5 sm:py-1.5 sm:text-xs"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* =========================================================
            WEBSITE VIDEO BROWSER FRAME
        ========================================================== */}
        <div className="relative z-20 mt-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:mt-16 xl:px-10">
          <div className="relative overflow-hidden rounded-t-xl bg-black shadow-2xl shadow-black/40 border border-white/10">
            <div className="flex h-7 items-center gap-1.5 bg-[#1a1a1a] px-3.5 sm:h-8">
              <div className="flex gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <div className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <div className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              </div>
              <div className="ml-2 flex-1 rounded-md bg-[#2c2c2c] py-0.5 text-center text-[9px] text-white/40">
                flowzen.io/dashboard
              </div>
            </div>
            <div className="relative aspect-[16/9] sm:aspect-[18/10] w-full bg-[#0d0d0d]">
              <iframe
                src="https://www.youtube.com/embed/fZ_Kvy3bRbc?autoplay=1&mute=1&loop=1&playlist=fZ_Kvy3bRbc"
                title="Flowzen Dashboard Demo"
                className="h-full w-full border-0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection3;