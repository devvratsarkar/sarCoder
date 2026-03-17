import { useEffect, useRef, useState } from "react";


export default function ServicesTechSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => setInView(e.isIntersecting));
      },
      { threshold: 0.25, rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(section);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`telemetry-section custom_container_x relative ${inView ? "telemetry-in" : ""}`}
    >
      <div className="relative z-10">
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-normal tracking-tight text-white flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 text-primary"
              aria-hidden
            >
              <path d="m7 11 2-2-2-2" />
              <path d="M11 13h4" />
              <rect width={18} height={18} x={3} y={3} rx={2} ry={2} />
            </svg>
            Services & <span className="text-primary">Technology Stack</span>
          </h2>
          <p className="mt-4 text-secondary text-base">
            We offer website development, website design, mobile app development, and social media management.
            Our go‑to stack: Next.js, React, Node, Flutter, React Native for apps; WordPress, Shopify, Wix, and Strapi when a CMS or store is the right fit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 gap-x-6 gap-y-6">
          {/* Service Reach Widget */}
          <div className="cmd-panel lg:col-span-1 h-70">
            <div className="cmd-panel-header">
              <div className="flex flex-col gap-1">
                <span className="text-xs text-emerald-500 font-mono uppercase tracking-widest">
                  Web & Mobile
                </span>
                <span className="text-base font-normal text-zinc-300">
                  Service Reach
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-2 py-1 rounded border border-emerald-900/30 bg-emerald-950/20 shadow-inner">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981] animate-pulse" />
                <span className="text-xs text-emerald-400 uppercase tracking-widest font-mono">
                  Active
                </span>
              </div>
            </div>

            <div className="cmd-panel-body flex flex-col items-center justify-center relative">
              <div className="w-32 h-32 rounded-full border border-zinc-800 relative flex items-center justify-center">
                <div className="absolute inset-2 rounded-full border border-zinc-800/50" />
                <div className="absolute inset-0 rounded-full border border-emerald-500/10" />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                  <div className="w-full h-px bg-emerald-500" />
                  <div className="h-full w-px bg-emerald-500 absolute" />
                </div>
                <div className="absolute inset-0 rounded-full radar-sweep" />
              </div>

              <div className="w-full flex justify-between items-end absolute bottom-4 px-4">
                <span className="text-xs text-emerald-500 font-mono tracking-widest">
                  9 Tech
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 text-emerald-500"
                  aria-hidden
                >
                  <circle cx={12} cy={12} r={10} />
                  <line x1={22} x2={18} y1={12} y2={12} />
                  <line x1={6} x2={2} y1={12} y2={12} />
                  <line x1={12} x2={12} y1={6} y2={2} />
                  <line x1={12} x2={12} y1={22} y2={18} />
                </svg>
              </div>
            </div>
          </div>

          {/* Active Projects Widget */}
          <div className="cmd-panel lg:col-span-1 h-70">
            <div className="cmd-panel-header">
              <span className="text-xs text-secondary font-mono uppercase tracking-widest">
                Live Projects
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 text-secondary"
                aria-hidden
              >
                <circle cx={12} cy={12} r={1} />
                <circle cx={19} cy={12} r={1} />
                <circle cx={5} cy={12} r={1} />
              </svg>
            </div>

            <div className="cmd-panel-body flex flex-col items-center justify-center relative">
              <div className="relative w-36 h-36 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx={72}
                    cy={72}
                    r={60}
                    fill="transparent"
                    stroke="#18181b"
                    strokeWidth={10}
                  />
                  <circle
                    cx={72}
                    cy={72}
                    r={60}
                    fill="transparent"
                    stroke="#f97316"
                    strokeWidth={10}
                    strokeDasharray={377}
                    className="drop-shadow-[0_0_12px_rgba(249,115,22,0.5)]"
                    strokeLinecap="round"
                    style={{
                      animation: "thermal-fluctuation 4s ease-in-out infinite",
                      strokeDashoffset: 90,
                    }}
                  />
                </svg>
                <div className="absolute flex flex-col items-center">
                  <span className="text-3xl font-normal text-orange-400 tracking-tight drop-shadow-[0_0_8px_rgba(249,115,22,0.4)] animate-[pulse_4s_ease-in-out_infinite]">
                    98
                  </span>
                  <span className="text-xs text-orange-600 font-mono tracking-widest mt-1">
                    UPTIME %
                  </span>
                </div>
              </div>

              <div className="w-full flex justify-between items-end absolute bottom-4 px-4">
                <div className="px-2 py-1 rounded bg-zinc-800/50 border border-zinc-700 shadow-inner">
                  <span className="text-xs text-secondary font-mono tracking-widest uppercase">
                    Healthy
                  </span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 text-secondary hover:text-zinc-300 transition-colors cursor-pointer"
                  aria-hidden
                >
                  <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
                  <path d="M21 3v5h-5" />
                  <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
                  <path d="M8 16H3v5" />
                </svg>
              </div>
            </div>
          </div>

          {/* Project Activity Widget */}
          <div className="cmd-panel lg:col-span-2 h-70">
            <div className="cmd-panel-header">
              <span className="text-lg font-normal text-zinc-300">
                Project Activity
              </span>
              <div className="flex items-center gap-1 bg-[#0a0a0c] p-1 rounded-lg border border-zinc-800 shadow-inner">
                <button
                  type="button"
                  className="px-3 py-1 text-xs font-normal text-zinc-100 bg-[#1e1e24] rounded border border-zinc-700 shadow-sm"
                >
                  All
                </button>
                <button
                  type="button"
                  className="px-3 py-1 text-xs font-normal text-secondary hover:text-zinc-300 transition-colors"
                >
                  Issues
                </button>
                <button
                  type="button"
                  className="px-3 py-1 text-xs font-normal text-secondary hover:text-zinc-300 transition-colors"
                >
                  Updates
                </button>
              </div>
            </div>

            <div className="p-0 flex flex-col flex-1 relative overflow-hidden">
              <div className="grid grid-cols-[auto_1fr_2fr_1fr_1fr] gap-4 px-4 py-3 border-b border-zinc-800/50 bg-[#121214]">
                <span className="text-xs text-secondary font-mono tracking-widest uppercase w-6">
                  CHK
                </span>
                <span className="text-xs text-secondary font-mono tracking-widest uppercase">
                  REF
                </span>
                <span className="text-xs text-secondary font-mono tracking-widest uppercase">
                  OPERATION
                </span>
                <span className="text-xs text-secondary font-mono tracking-widest uppercase">
                  STATE
                </span>
                <span className="text-xs text-secondary font-mono tracking-widest uppercase text-right">
                  TIMESTAMP
                </span>
              </div>

              <div className="flex flex-col">
                <div className="grid grid-cols-[auto_1fr_2fr_1fr_1fr] gap-4 px-4 py-3 items-center border-b border-zinc-800/30 hover:bg-zinc-800/20 transition-colors">
                  <div className="w-4 h-4 rounded bg-indigo-500 flex items-center justify-center shadow-inner">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-3 h-3 text-white"
                      aria-hidden
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <span className="text-xs text-secondary font-mono">
                    PRJ-01
                  </span>
                  <span className="text-sm text-zinc-300 truncate">
                    Next.js site deploy
                  </span>
                  <div>
                    <span className="text-xs text-emerald-500 px-2 py-0.5 rounded border border-emerald-900/50 bg-emerald-950/20">
                      LIVE
                    </span>
                  </div>
                  <span className="text-xs text-secondary font-mono text-right">
                    10:14:22.01
                  </span>
                </div>

                <div className="grid grid-cols-[auto_1fr_2fr_1fr_1fr] gap-4 px-4 py-3 items-center border-b border-orange-900/30 bg-orange-950/10 border-l-2 border-l-orange-500 relative">
                  <div className="absolute inset-0 bg-linear-to-r from-orange-500/5 to-transparent pointer-events-none" />
                  <div className="w-4 h-4 rounded bg-orange-500/20 border border-orange-500/50 flex items-center justify-center relative z-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-3 h-3 text-orange-500"
                      aria-hidden
                    >
                      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
                      <path d="M12 9v4" />
                      <path d="M12 17h.01" />
                    </svg>
                  </div>
                  <span className="text-xs text-orange-400 font-mono relative z-10">
                    PRJ-02
                  </span>
                  <span className="text-sm text-orange-300 truncate relative z-10">
                    API integration delay
                  </span>
                  <div className="relative z-10">
                    <span className="text-xs text-red-400 px-2 py-0.5 rounded border border-red-900/50 bg-red-950/30">
                      REVIEW
                    </span>
                  </div>
                  <span className="text-xs text-orange-500/50 font-mono text-right relative z-10">
                    10:12:05.18
                  </span>
                </div>

                <div className="grid grid-cols-[auto_1fr_2fr_1fr_1fr] gap-4 px-4 py-3 items-center border-b border-zinc-800/30 hover:bg-zinc-800/20 transition-colors">
                  <div className="w-4 h-4 rounded bg-[#0a0a0c] border border-zinc-700 shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] cursor-pointer" />
                  <span className="text-xs text-secondary font-mono">
                    PRJ-03
                  </span>
                  <span className="text-sm text-secondary truncate filter blur-[1px]">
                    Flutter app QA
                  </span>
                  <div>
                    <span className="text-xs text-secondary px-2 py-0.5 rounded border border-zinc-800 bg-zinc-900/50">
                      PENDING
                    </span>
                  </div>
                  <span className="text-xs text-secondary font-mono text-right">
                    09:45:00.62
                  </span>
                </div>
              </div>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 tactile-glass px-4 py-2 rounded-full border border-zinc-700 shadow-[0_10px_20px_rgba(0,0,0,0.5)] flex items-center gap-4 z-20">
                <span className="text-xs text-indigo-400 font-normal">
                  1 selected
                </span>
                <div className="w-px h-4 bg-zinc-700" />
                <button
                  type="button"
                  className="flex items-center gap-1.5 text-xs text-secondary hover:text-zinc-200 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-3.5 h-3.5"
                    aria-hidden
                  >
                    <path d="m21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                  </svg>
                  Edit
                </button>
                <button
                  type="button"
                  className="flex items-center gap-1.5 text-xs text-secondary hover:text-red-400 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-3.5 h-3.5"
                    aria-hidden
                  >
                    <path d="M10 11v6" />
                    <path d="M14 11v6" />
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                    <path d="M3 6h18" />
                    <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                  </svg>
                  Drop
                </button>
              </div>
            </div>
          </div>

          {/* Active Deliverables Widget */}
          <div className="cmd-panel lg:col-span-1 h-70">
            <div className="cmd-panel-header">
              <span className="text-base font-normal text-zinc-300">
                Active Deliverables
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 text-secondary"
                aria-hidden
              >
                <circle cx={12} cy={12} r={1} />
                <circle cx={19} cy={12} r={1} />
                <circle cx={5} cy={12} r={1} />
              </svg>
            </div>

            <div className="cmd-panel-body flex flex-col gap-4 gap-x-4 gap-y-4">
              <div className="bg-[#0a0a0c] rounded-xl p-4 border border-zinc-800 shadow-[inset_0_2px_10px_rgba(0,0,0,0.8)] flex flex-col gap-4 relative">
                <p className="text-sm text-secondary leading-relaxed">
                  E-commerce site — Shopify
                  <br />
                  Theme customization and client review.
                </p>

                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-end">
                    <span className="text-xs text-secondary font-mono uppercase tracking-widest">
                      Progress
                    </span>
                    <span className="text-xs font-mono text-indigo-400">
                      80%
                    </span>
                  </div>

                  <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden shadow-inner">
                    <div
                      className="pb-fill h-full bg-indigo-500 rounded-full shadow-[0_0_10px_#6366f1] relative overflow-hidden"
                      style={{ ["--pb" as string]: "80%" }}
                    >
                      <div className="pb-sheen absolute top-0 bottom-0 w-[50%] bg-linear-to-r from-transparent via-white/40 to-transparent" />
                      <div className="absolute right-0 top-0 bottom-0 w-10 bg-linear-to-r from-transparent to-white/30" />
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-2">
                  <div className="flex items-center gap-1.5 text-secondary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-3.5 h-3.5"
                      aria-hidden
                    >
                      <circle cx={12} cy={12} r={10} />
                      <path d="M12 6v6l4 2" />
                    </svg>
                    <span className="text-xs font-mono">4/5</span>
                  </div>

                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full border border-zinc-700 bg-zinc-800 flex items-center justify-center text-xs text-secondary">
                      SC
                    </div>
                    <div className="w-6 h-6 rounded-full border border-zinc-700 bg-zinc-800 flex items-center justify-center text-xs text-secondary">
                      MR
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-auto flex justify-between items-center px-1">
                <span className="text-xs text-secondary font-mono uppercase tracking-widest">
                  2/4 Pending
                </span>
                <label className="flex items-center gap-2 cursor-pointer">
                  <span className="text-xs text-secondary font-normal">
                    Auto-deploy
                  </span>
                  <div className="relative">
                    <input type="checkbox" className="sr-only" />
                    <div className="w-8 h-4 rounded-full bg-[#0a0a0c] border border-zinc-800 shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)] transition-colors" />
                    <div className="absolute left-1 top-1 w-2 h-2 rounded-full bg-zinc-500 transition-transform" />
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Stack Usage Widget */}
          <div className="cmd-panel lg:col-span-1 h-70">
            <div className="cmd-panel-header">
              <span className="text-base font-normal text-zinc-300">
                Stack Usage
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 text-secondary"
                aria-hidden
              >
                <circle cx={12} cy={12} r={1} />
                <circle cx={19} cy={12} r={1} />
                <circle cx={5} cy={12} r={1} />
              </svg>
            </div>

            <div className="cmd-panel-body flex flex-col">
              <div className="flex-1 bg-[#0a0a0c] rounded-xl border border-zinc-800 p-4 shadow-[inset_0_2px_10px_rgba(0,0,0,0.8)] relative flex items-end justify-center gap-4">
                <div className="absolute inset-x-4 top-4 border-b border-dashed border-zinc-800" />
                <div className="absolute inset-x-4 top-1/2 border-b border-dashed border-zinc-800" />

                <div className="relative flex flex-col items-center w-12 z-10">
                  <div
                    className="w-full h-16 bg-linear-to-t from-orange-600 to-orange-400 rounded-t shadow-[0_0_15px_rgba(249,115,22,0.3)]"
                    style={{
                      animation: "aura-compute-bar-1 3.5s ease-in-out infinite",
                    }}
                  />
                  <span className="text-xs text-secondary font-mono mt-2 uppercase tracking-widest absolute -bottom-6">
                    Mobile
                  </span>
                </div>

                <div className="relative flex flex-col items-center w-12 z-10">
                  <div className="absolute -top-6 bg-zinc-800 border border-zinc-700 text-orange-400 text-xs font-mono px-1.5 py-0.5 rounded tracking-widest uppercase">
                    Max
                  </div>
                  <div
                    className="w-full h-24 bg-linear-to-t from-orange-500 to-orange-300 rounded-t shadow-[0_0_20px_rgba(249,115,22,0.5)]"
                    style={{
                      animation: "aura-compute-bar-2 4.5s ease-in-out infinite",
                    }}
                  />
                  <span className="text-xs text-secondary font-mono mt-2 uppercase tracking-widest absolute -bottom-6">
                    Web
                  </span>
                </div>

                <div className="relative flex flex-col items-center w-12 z-10">
                  <div
                    className="w-full h-14 bg-linear-to-t from-orange-700 to-orange-500 rounded-t shadow-[0_0_10px_rgba(249,115,22,0.2)]"
                    style={{
                      animation: "aura-compute-bar-3 3s ease-in-out infinite",
                    }}
                  />
                  <span className="text-xs text-secondary font-mono mt-2 uppercase tracking-widest absolute -bottom-6">
                    CMS
                  </span>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-2 px-1">
                <div className="flex flex-col">
                  <span className="text-xl font-normal text-zinc-200">24</span>
                  <span className="text-xs text-secondary font-mono uppercase tracking-widest">
                    Websites
                  </span>
                </div>
                <div className="flex flex-col">
                  <span
                    className="text-xl font-normal text-orange-400 drop-shadow-[0_0_5px_rgba(249,115,22,0.5)]"
                    style={{
                      animation:
                        "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                    }}
                  >
                    12
                  </span>
                  <span className="text-xs text-secondary font-mono uppercase tracking-widest">
                    Apps
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-normal text-secondary">50+</span>
                  <span className="text-xs text-secondary font-mono uppercase tracking-widest">
                    Launched
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Live Deployment Widget */}
          <div className="cmd-panel lg:col-span-2 h-70">
            <div className="cmd-panel-header justify-start gap-3">
              <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_#ef4444] animate-pulse" />
              <span className="text-xs text-red-400 font-mono uppercase tracking-widest bg-red-950/20 px-2 py-0.5 rounded border border-red-900/30">
                Launch in 8 days
              </span>
            </div>

            <div className="cmd-panel-body flex flex-col pt-6 pr-6 pb-6 pl-6 justify-between">
              <div className="flex items-center justify-between mb-6">
                <span className="text-base font-normal text-zinc-300">
                  Production Deployment
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest animate-pulse">
                    Deploying
                  </span>
                  <div className="flex gap-0.5">
                    <div className="w-1 h-3 bg-indigo-500 rounded-sm animate-[pulse_1s_ease-in-out_infinite]" />
                    <div className="w-1 h-3 bg-indigo-500 rounded-sm animate-[pulse_1s_ease-in-out_infinite_0.2s]" />
                    <div className="w-1 h-3 bg-indigo-500 rounded-sm animate-[pulse_1s_ease-in-out_infinite_0.4s]" />
                  </div>
                </div>
              </div>

              <div className="w-full relative py-6">
                <div className="h-10 w-full bg-[#0a0a0c] rounded-lg border border-zinc-800 shadow-[inset_0_2px_10px_rgba(0,0,0,0.8)] relative overflow-hidden">
                  <div className="absolute inset-0 signal-texture opacity-20" />

                  <div className="absolute inset-y-0 right-0 w-[15%] bg-indigo-500/5 border-l border-indigo-500/30 border-dashed animate-pulse flex items-center justify-center">
                    <div className="w-1 h-1 rounded-full bg-indigo-400 shadow-[0_0_8px_#818cf8]" />
                  </div>
                  <div className="absolute inset-y-0 left-0 w-[15%] bg-indigo-500/5 border-r border-indigo-500/30 border-dashed animate-pulse flex items-center justify-center">
                    <div className="w-1 h-1 rounded-full bg-indigo-400 shadow-[0_0_8px_#818cf8]" />
                  </div>

                  <div className="sweep-block absolute inset-y-0 bg-indigo-500/20 border-x border-indigo-500 shadow-[inset_0_0_20px_rgba(99,102,241,0.5)] flex items-center justify-between px-2 z-10">
                    <div className="w-px h-6 bg-indigo-400/80 shadow-[0_0_8px_rgba(129,140,248,0.8)]" />
                    <div className="w-px h-6 bg-indigo-400/80 shadow-[0_0_8px_rgba(129,140,248,0.8)]" />
                  </div>
                </div>

                <div className="flex justify-between mt-3 px-1 relative">
                  <div className="absolute -top-2.5 left-0 right-0 flex justify-between px-1">
                    <div className="w-px h-2 bg-zinc-700" />
                    <div className="w-px h-2 bg-zinc-700" />
                    <div className="w-px h-2 bg-zinc-700" />
                    <div className="w-px h-2 bg-zinc-700" />
                  </div>
                  <span className="text-xs text-secondary font-mono">
                    10:00
                  </span>
                  <span className="text-xs text-secondary font-mono relative -left-4">
                    10:30
                  </span>
                  <span className="text-xs text-secondary font-mono relative left-4">
                    12:00
                  </span>
                  <span className="text-xs text-secondary font-mono">
                    12:30
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-end mt-auto">
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-secondary">
                    Deploy Channel
                  </span>
                  <a
                    href="#"
                    className="text-sm font-mono text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1.5 group"
                  >
                    deploy.sarcoder.io
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-3 h-3"
                      aria-hidden
                    >
                      <path d="M15 3h6v6" />
                      <path d="M10 14 21 3" />
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    </svg>
                  </a>
                </div>

                <button
                  type="button"
                  className="w-10 h-10 rounded-lg bg-[#18181b] border border-zinc-700 shadow-lg flex items-center justify-center text-secondary hover:text-white transition-all hover:border-indigo-500 hover:shadow-[0_0_15px_rgba(99,102,241,0.2)]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                    aria-hidden
                  >
                    <path d="m13.5 6.5-3.148-3.148a1.205 1.205 0 0 0-1.704 0L6.352 5.648a1.205 1.205 0 0 0 0 1.704L9.5 10.5" />
                    <path d="M16.5 7.5 19 5" />
                    <path d="m17.5 10.5 3.148 3.148a1.205 1.205 0 0 1 0 1.704l-2.296 2.296a1.205 1.205 0 0 1-1.704 0L13.5 14.5" />
                    <path d="M9 21a6 6 0 0 0-6-6" />
                    <path d="M9.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l4.296-4.296a1.205 1.205 0 0 0 0-1.704l-2.296-2.296a1.205 1.205 0 0 0-1.704 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
