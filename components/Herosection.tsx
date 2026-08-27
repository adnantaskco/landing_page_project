import React from "react";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Play,
  Sparkles,
  Users,
} from "lucide-react";

const HeroSection3 = () => {
  return (
    <section className="w-full bg-[#0d0035]">
      <div className="relative w-full overflow-hidden text-white">
        {/* =========================================================
            TOP ANNOUNCEMENT BAR
        ========================================================== */}
        <div className="relative z-50 flex h-[28px] w-full items-center justify-center bg-gradient-to-r from-[#0b4edb] via-[#4d50d8] to-[#8065dc] px-4 text-[11px] sm:h-[32px] sm:text-[12px]">
          <div className="flex items-center gap-2.5">
            <span className="rounded-full bg-[#202d83] px-2.5 py-[3px] text-[9px] font-semibold sm:text-[10px]">
              Early Bird
            </span>
            <span className="font-medium">
              50% off setup · 25% off annual · closes 31 OCT
            </span>
          </div>

          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 transition hover:text-white">
            ×
          </button>
        </div>

        {/* =========================================================
            HERO BACKGROUND & GLOWS
        ========================================================== */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,#33208f_0%,#17065a_35%,#0c0030_75%,#080024_100%)]" />

          <div className="absolute left-1/2 top-[350px] h-[550px] w-[800px] -translate-x-1/2 rounded-full bg-[#4327d7]/30 blur-[140px]" />
          <div className="absolute left-[20%] top-[300px] h-[400px] w-[400px] rounded-full bg-[#622cff]/20 blur-[120px]" />

          {/* Decorative Circuit lines */}
          <div className="absolute left-[8%] top-[120px] hidden h-[120px] w-[180px] sm:block">
            <div className="absolute left-0 top-[40px] h-px w-[90px] bg-white/[0.08]" />
            <div className="absolute left-[90px] top-[40px] h-[50px] w-px bg-white/[0.08]" />
            <div className="absolute left-[90px] top-[90px] h-px w-[75px] bg-white/[0.08]" />
            <div className="absolute left-[165px] top-[90px] h-[25px] w-px bg-white/[0.08]" />
          </div>

          <div className="absolute right-[8%] top-[120px] hidden h-[120px] w-[180px] sm:block">
            <div className="absolute right-0 top-[40px] h-px w-[90px] bg-white/[0.08]" />
            <div className="absolute right-[90px] top-[40px] h-[50px] w-px bg-white/[0.08]" />
            <div className="absolute right-[90px] top-[90px] h-px w-[75px] bg-white/[0.08]" />
            <div className="absolute right-[165px] top-[90px] h-[25px] w-px bg-white/[0.08]" />
          </div>
        </div>

        {/* =========================================================
            NAVIGATION
        ========================================================== */}
        <header className="relative z-30 flex h-[80px] w-full items-center justify-between px-8 sm:h-[90px] lg:px-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="relative h-7 w-7">
              <div className="absolute bottom-0 left-0 h-3.5 w-6 rotate-[15deg] rounded-sm bg-gradient-to-r from-[#46b6ff] to-[#7856ff]" />
              <div className="absolute bottom-1 left-1 h-5 w-5 rotate-[15deg] rounded-sm bg-gradient-to-r from-[#4dd3ff] to-[#7145ef]" />
              <div className="absolute bottom-2 left-2 h-5 w-4 rotate-[15deg] rounded-sm bg-gradient-to-r from-[#9d65ff] to-[#527dff]" />
            </div>

            <span className="text-[20px] font-semibold tracking-[-0.5px] text-white">
              Flowzen
            </span>
          </div>

          {/* Menu */}
          <nav className="hidden items-center gap-9 text-[13px] text-white/90 md:flex">
            <a href="#" className="transition hover:text-white">Solution</a>
            <a href="#" className="transition hover:text-white">How It Works</a>
            <a href="#" className="transition hover:text-white">Pricing</a>
            <a href="#" className="transition hover:text-white">FAQ</a>
            <a href="#" className="transition hover:text-white">Contact</a>
          </nav>

          {/* Action */}
          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3.5 py-2 text-[11px] text-white/80 sm:flex">
              <Users size={12} />
              <span>34 / 100 seats left</span>
            </div>

            <button className="rounded-full bg-[#3979ff] px-4 py-2 text-[12px] font-medium shadow-[0_0_20px_rgba(57,121,255,0.25)] transition hover:bg-[#4b87ff]">
              Claim my seat
            </button>
          </div>
        </header>

        {/* =========================================================
            HERO CONTENT
        ========================================================== */}
        <div className="relative z-20 flex w-full flex-col items-center px-6 pt-10 text-center sm:pt-14">
          {/* Badge */}
          <div className="mb-6 flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.08] px-4 py-1.5 text-[10px] font-medium text-white/80 backdrop-blur-md sm:text-[11px]">
            <Sparkles size={11} />
            <span>34 FOUNDING SEATS LEFT</span>
            <ChevronRight size={11} />
          </div>

          {/* Heading */}
          <h1 className="max-w-[780px] text-[40px] font-semibold leading-[1.05] tracking-[-1.5px] sm:text-[54px] md:text-[62px]">
            Run your whole
            <br />
            business{" "}
            <span className="bg-gradient-to-r from-[#6f51ff] via-[#9038ff] to-[#c52fff] bg-clip-text text-transparent">
              on one system.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-4 max-w-[540px] text-[13px] leading-[1.6] text-white/60 sm:text-[15px]">
            Sales, stock, accounts, purchasing, CRM and HR — unified, automated.
            <br className="hidden sm:block" />
            Join the pre-release and lock founding pricing.
          </p>

          {/* CTA Buttons */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <button className="flex items-center gap-2 rounded-full bg-[#3477ff] px-6 py-3.5 text-[13px] font-medium shadow-[0_8px_25px_rgba(52,119,255,0.25)] transition hover:-translate-y-0.5 hover:bg-[#4785ff]">
              Claim my seat
              <ArrowRight size={14} />
            </button>

            <button className="flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[13px] font-medium text-[#191052] transition hover:-translate-y-0.5 hover:bg-white/90">
              <Play size={12} fill="currentColor" />
              See a live demo
            </button>
          </div>

          {/* =========================================================
              COUNTDOWN CARD
          ========================================================== */}
          <div className="relative mt-8 w-[310px] sm:mt-9 sm:w-[350px]">
            <div className="absolute inset-[-4px] rounded-[18px] bg-gradient-to-r from-[#7d8cff] via-[#b3a1ff] to-[#e7a8b9] opacity-80 blur-[2px]" />

            <div className="relative rounded-[16px] bg-gradient-to-r from-[#8da3ff] via-[#d1b8ff] to-[#edb2bb] p-[6px]">
              <div className="rounded-[12px] bg-white px-4 pb-4 pt-3 text-[#10115c]">
                <div className="grid grid-cols-4 gap-2">
                  <div>
                    <div className="text-[30px] font-semibold leading-none tracking-[-1px] sm:text-[36px]">
                      50
                    </div>
                    <div className="mt-1 text-[8px] font-medium uppercase text-gray-400">
                      Days
                    </div>
                  </div>

                  <div>
                    <div className="text-[30px] font-semibold leading-none tracking-[-1px] sm:text-[36px]">
                      12
                    </div>
                    <div className="mt-1 text-[8px] font-medium uppercase text-gray-400">
                      Hours
                    </div>
                  </div>

                  <div>
                    <div className="text-[30px] font-semibold leading-none tracking-[-1px] sm:text-[36px]">
                      44
                    </div>
                    <div className="mt-1 text-[8px] font-medium uppercase text-gray-400">
                      Minutes
                    </div>
                  </div>

                  <div>
                    <div className="text-[30px] font-semibold leading-none tracking-[-1px] sm:text-[36px]">
                      28
                    </div>
                    <div className="mt-1 text-[8px] font-medium uppercase text-gray-400">
                      Second
                    </div>
                  </div>
                </div>

                <div className="mt-4 h-[7px] overflow-hidden rounded-full bg-[#e4e5ec]">
                  <div className="h-full w-[38%] rounded-full bg-gradient-to-r from-[#633dff] to-[#7650ff]" />
                </div>

                <div className="mt-2.5 flex items-center justify-between">
                  <span className="rounded-full border border-[#7190ff] px-2 py-[2px] text-[8px] font-medium text-[#4260d9]">
                    66 claimed
                  </span>

                  <span className="flex items-center gap-1.5 text-[8px] text-gray-500">
                    <span className="h-[4px] w-[4px] rounded-full bg-[#ff5f77]" />
                    Closes 31 OCT
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* =========================================================
              FEATURE PILLS
          ========================================================== */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            <span className="flex items-center gap-1.5 rounded-full border border-[#48a5ff] bg-[#237cff]/20 px-3 py-1.5 text-[10px] text-[#a8d9ff]">
              <Check size={10} />
              7-day risk-free trial
            </span>

            <span className="rounded-full border border-white/20 bg-white/[0.05] px-3 py-1.5 text-[10px] text-white/70">
              Free migration
            </span>

            <span className="rounded-full border border-white/20 bg-white/[0.05] px-3 py-1.5 text-[10px] text-white/70">
              No card required
            </span>

            <span className="rounded-full border border-white/20 bg-white/[0.05] px-3 py-1.5 text-[10px] text-white/70">
              50% off setup
            </span>
          </div>
        </div>

        {/* =========================================================
            WEBSITE BROWSER FRAME (MOCKUP DISPLAY)
        ========================================================== */}
        <div className="relative z-20 mx-auto mt-10 w-[92%] sm:mt-12">
          {/* Outer Frame with Shadow and Border */}
          <div className="relative overflow-hidden rounded-t-[12px] border border-white/10 bg-[#0d0d0d] shadow-[0_30px_90px_rgba(0,0,0,0.65)]">
            {/* Window Control Bar */}
            <div className="flex h-[28px] items-center gap-1.5 border-b border-white/10 bg-[#1e1e24] px-3">
              <span className="h-[8px] w-[8px] rounded-full bg-[#ff5f56]" />
              <span className="h-[8px] w-[8px] rounded-full bg-[#ffbd2e]" />
              <span className="h-[8px] w-[8px] rounded-full bg-[#27c93f]" />

              <div className="ml-4 h-[12px] max-w-[360px] flex-1 rounded-md bg-[#121215]" />
            </div>

            {/* Dashboard Mockup Height Container */}
            <div className="relative h-[360px] w-full bg-[#0d0d0d] sm:h-[480px] md:h-[560px] lg:h-[640px]">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRQQ9clWOXJ-oUIqHgZHJoVRlrg2fiOsvvQfdRSGjwDw&s=10"
                alt="Website Preview"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>
        </div>

        {/* =========================================================
            BOTTOM INVERTED WHITE WAVE
        ========================================================== */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[300px] w-full overflow-hidden">
          <svg
            viewBox="0 0 1440 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0 30 C480 200, 960 200, 1440 30 V300 H0 Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection3;