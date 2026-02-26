import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { SoundwaveIcon, BatteryIcon, CpuIcon, TuningIcon } from "../ui/AllSVG";
import ScannerButton from "../ui/ScannerButton";
import { LOGO_LAYOUT } from "../../constants/logo";

const technologies = [
  "Next.js",
  "React.js",
  "Node.js",
  "Flutter",
  "React Native",
  "WordPress",
  "Shopify",
  "Wix",
  "Strapi",
];

/** Match LoadingScreen: same ease and rhythm so hero feels like continuation */
const revealEase = LOGO_LAYOUT.ease;
const revealTransition = {
  duration: 0.6,
  ease: revealEase,
};

/** Blur-in + lift (echoes LoadingScreen letter animation) */
const blockVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(12px)",
    scale: 0.98,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    scale: 1,
    transition: {
      duration: 0.65,
      ease: revealEase,
      delay: 0.05 + i * LOGO_LAYOUT.stagger * 4,
    },
  }),
};

/** Step circles: scale + opacity, staggered (like loading progress) */
const stepVariants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 320,
      damping: 24,
      delay: 0.15 + i * 0.08,
    },
  }),
};

/** Tech pills: cascade in (same stagger feel as logo letters) */
const pillVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 6 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: revealEase,
      delay: 0.32 + i * 0.035,
    },
  }),
};

/** Avatar stack */
const avatarVariants = {
  hidden: { opacity: 0, scale: 0.85, x: -4 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 0.35, ease: revealEase, delay: 0.5 + i * 0.05 },
  }),
};

/** Floating cards: slide from direction + fade (post-loading reveal) */
const floatCardVariants = {
  left: {
    hidden: { opacity: 0, x: -24, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: { duration: 0.5, ease: revealEase, delay: 0.7 },
    },
  },
  right: {
    hidden: { opacity: 0, x: 24, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: { duration: 0.5, ease: revealEase, delay: 0.85 },
    },
  },
  bottom: {
    hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.5, ease: revealEase, delay: 0.9 },
    },
  },
};

/** Grid lines: draw down from top (sync with overlay gone) */
const gridLineVariants = {
  hidden: { scaleY: 0, opacity: 0 },
  visible: (i: number) => ({
    scaleY: 1,
    opacity: 0.4,
    transition: { duration: 0.7, ease: revealEase, delay: 0.02 + i * 0.06 },
  }),
};

export default function HomeBanner() {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setRevealed(true), 280);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      className="relative min-h-screen overflow-x-hidden custom_container_x"
      aria-label="Hero banner"
    >
      {/* Subtle gradient continuity from loading screen */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 opacity-30"
        aria-hidden
        initial={{ opacity: 0 }}
        animate={revealed ? { opacity: 1 } : {}}
        transition={{ duration: 1, ease: revealEase, delay: 0 }}
        style={{
          background: "radial-gradient(ellipse 80% 40% at 50% 0%, rgba(33, 213, 237, 0.08) 0%, transparent 55%)",
        }}
      />
      {/* Vertical grid lines — draw down after load */}
      <div className="pointer-events-none fixed inset-0 z-0 mx-auto flex justify-between custom_container_x">
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className={`origin-top h-full w-px bg-border/50 ${i === 1 ? "hidden md:block" : ""} ${i === 2 ? "hidden lg:block" : ""}`}
            style={{ opacity: 0.4 }}
            variants={gridLineVariants}
            initial="hidden"
            animate={revealed ? "visible" : "hidden"}
            custom={i}
          />
        ))}
      </div>

      <div className="relative z-10 w-full min-h-screen">
        <div className="grid grow grid-cols-1 gap-y-12 pt-8 pb-12 lg:grid-cols-12 lg:gap-8 ">
          {/* Left indicator column */}
          <motion.div
            className="relative hidden flex-col items-start pt-4 lg:col-span-1 lg:flex"
            initial={{ opacity: 0 }}
            animate={revealed ? { opacity: 1 } : {}}
            transition={{ ...revealTransition, delay: 0.2 }}
          >
            <div className="sticky top-32 flex flex-col gap-6">
              {[1, 2, 3].map((step) => (
                <motion.button
                  key={step}
                  type="button"
                  className="group flex items-center gap-3"
                  aria-label={`Step ${step}`}
                  variants={stepVariants}
                  initial="hidden"
                  animate={revealed ? "visible" : "hidden"}
                  custom={step - 1}
                >
                  <div className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-medium transition-all ${
                    step === 1 ? "bg-primary text-surface" : "border border-border text-secondary group-hover:border-primary group-hover:text-primary"
                  }`}>
                    {step}
                  </div>
                </motion.button>
              ))}
            </div>
            <div className="absolute left-4 top-40 -z-10 h-64 w-px bg-linear-to-b from-border to-transparent" />
            <motion.span
              className="mb-32 mt-auto rotate-180 text-xs font-medium text-secondary"
              style={{ writingMode: "vertical-rl" }}
              initial={{ opacity: 0, x: -8 }}
              animate={revealed ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, ease: revealEase, delay: 0.45 }}
            >
              01 — INTRO
            </motion.span>
          </motion.div>

          {/* Content column */}
          <div className="space-y-6 flex flex-col justify-start lg:col-span-5">
            {/* Badge — icon scale echoes loading progress ring */}
            <motion.div
              className="flex items-center gap-4 gap-x-4 gap-y-4"
              variants={blockVariants}
              initial="hidden"
              animate={revealed ? "visible" : "hidden"}
              custom={0}
            >
              <motion.div
                className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface shadow-sm"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={revealed ? { scale: 1, opacity: 1 } : {}}
                transition={{ type: "spring", stiffness: 300, damping: 22, delay: 0.08 }}
              >
                <SoundwaveIcon className="h-4 w-4 text-white" />
              </motion.div>
              <div>
                <h3 className="text-base font-semibold leading-tight text-white">SarCODER</h3>
                <p className="text-sm text-primary">Web & Mobile Solutions</p>
              </div>
            </motion.div>

            {/* Headline — "Scale." pops last like loading payoff */}
            <motion.h1
              className="text-5xl font-semibold leading-[1.1] tracking-tight text-white lg:text-7xl"
              variants={blockVariants}
              initial="hidden"
              animate={revealed ? "visible" : "hidden"}
              custom={1}
            >
              Solutions That{" "}
              <motion.span
                className="text-primary inline-block"
                initial={{ opacity: 0, filter: "blur(10px)", y: 6 }}
                animate={revealed ? { opacity: 1, filter: "blur(0px)", y: 0 } : {}}
                transition={{ duration: 0.5, ease: revealEase, delay: 0.22 }}
              >
                Scale.
              </motion.span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              className="max-w-md text-secondary"
              variants={blockVariants}
              initial="hidden"
              animate={revealed ? "visible" : "hidden"}
              custom={2}
            >
              We deliver website development, website design, mobile app development, and social media management—powered by modern tech and a focus on results.
            </motion.p>

            {/* Primary technologies — cascade like loading letters */}
            <motion.div
              variants={blockVariants}
              initial="hidden"
              animate={revealed ? "visible" : "hidden"}
              custom={3}
            >
              <p className="mb-4 text-xs font-medium uppercase tracking-widest text-secondary">Our Stack</p>
              <div className="flex flex-wrap items-center gap-2 gap-y-3">
                {technologies.map((tech, idx) => (
                  <motion.span
                    key={tech}
                    className="rounded-full border border-border bg-surface/80 px-3 py-1 font-mono text-xs text-secondary transition-colors hover:border-primary hover:text-primary"
                    variants={pillVariants}
                    initial="hidden"
                    animate={revealed ? "visible" : "hidden"}
                    custom={idx}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* CTA & avatars */}
            <motion.div
              className="flex flex-wrap items-center gap-8 gap-x-8 gap-y-8"
              variants={blockVariants}
              initial="hidden"
              animate={revealed ? "visible" : "hidden"}
              custom={4}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={revealed ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.45, ease: revealEase, delay: 0.42 }}
              >
                <ScannerButton endIcon={<HiOutlineArrowUpRight className="size-4" aria-hidden />}>
                  Start a project
                </ScannerButton>
              </motion.div>
              <div className="flex items-center -space-x-3">
                {[
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64",
                  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&h=64",
                ].map((src, idx) => (
                  <motion.img
                    key={src}
                    src={src}
                    alt=""
                    className="h-10 w-10 rounded-full border-2 border-surface object-cover"
                    variants={avatarVariants}
                    initial="hidden"
                    animate={revealed ? "visible" : "hidden"}
                    custom={idx}
                  />
                ))}
                <motion.div
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-surface bg-surface-elevated text-xs font-semibold text-secondary"
                  variants={avatarVariants}
                  initial="hidden"
                  animate={revealed ? "visible" : "hidden"}
                  custom={3}
                >
                  +2k
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Product image column — scale + blur like LoadingScreen reveal */}
          <motion.div
            className="relative flex h-125 items-center justify-center lg:col-span-6 lg:h-auto"
            initial={{ opacity: 0, y: 24 }}
            animate={revealed ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: revealEase, delay: 0.12 }}
          >
            <div className="relative flex w-full items-center justify-center md:justify-end">
              <motion.img
                src="https://images.unsplash.com/photo-1593118247619-e2d6f056869e?q=80&w=1000&auto=format&fit=crop"
                alt="SarCODER — web and mobile development"
                className="h-auto w-full rounded-3xl object-cover drop-shadow-2xl grayscale-20 mix-blend-normal"
                initial={{ scale: 0.96, filter: "blur(10px)", opacity: 0.9 }}
                animate={revealed ? { scale: 1, filter: "blur(0px)", opacity: 1 } : {}}
                transition={{ duration: 0.8, ease: revealEase, delay: 0.2 }}
              />
              <motion.div
                className="absolute right-6 top-6 rounded bg-surface-elevated/90 px-3 py-1 font-mono text-xs tracking-widest text-white backdrop-blur-md"
                initial={{ opacity: 0, scale: 0.9, y: 4 }}
                animate={revealed ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.4, ease: revealEase, delay: 0.55 }}
              >
                Built with care
              </motion.div>
            </div>

            {/* Floating annotation: Web Development */}
            <motion.div
              className="absolute left-0 top-10 hidden md:block lg:-left-12"
              variants={floatCardVariants.left}
              initial="hidden"
              animate={revealed ? "visible" : "hidden"}
            >
              <motion.div
                className="relative max-w-45 rounded-2xl border border-border bg-surface-elevated/95 p-4 shadow-lg backdrop-blur-xl"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              >
                <div className="mb-1 flex items-center gap-2">
                  <BatteryIcon className="h-4 w-4 text-primary" />
                  <span className="text-xs font-semibold text-white">Web Development</span>
                </div>
                <p className="text-[10px] leading-snug text-secondary">Custom sites with Next.js, React, WordPress, Shopify & more.</p>
                <div className="absolute -right-12 top-1/2 h-px w-12 rotate-12 bg-secondary">
                  <div className="absolute right-0 top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-primary" />
                </div>
              </motion.div>
            </motion.div>

            {/* Floating annotation: Mobile Apps */}
            <motion.div
              className="absolute bottom-20 right-0 hidden md:block lg:-right-4"
              variants={floatCardVariants.right}
              initial="hidden"
              animate={revealed ? "visible" : "hidden"}
            >
              <motion.div
                className="relative max-w-50 rounded-2xl border border-border bg-surface-elevated/95 p-4 shadow-lg backdrop-blur-xl"
                animate={{ y: [0, 24, 0] }}
                transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              >
                <div className="mb-1 flex items-center gap-2">
                  <CpuIcon className="h-4 w-4 text-primary" />
                  <span className="text-xs font-semibold text-white">Mobile App Development</span>
                </div>
                <p className="text-[10px] leading-snug text-secondary">Native & cross-platform apps with Flutter and React Native.</p>
                <div className="absolute -left-8 top-1/2 h-px w-8 rotate-12 bg-secondary">
                  <div className="absolute left-0 top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-primary" />
                </div>
              </motion.div>
            </motion.div>

            {/* Floating annotation: Social Media */}
            <motion.div
              className="absolute bottom-1/3 left-4 hidden md:flex lg:-left-8"
              variants={floatCardVariants.bottom}
              initial="hidden"
              animate={revealed ? "visible" : "hidden"}
            >
              <motion.div
                className="relative flex items-center gap-3 rounded-2xl border border-border bg-surface-elevated/95 p-3 shadow-lg backdrop-blur-xl"
                animate={{ y: [0, -16, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-surface">
                  <TuningIcon className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-white">Social Media</span>
                  <span className="block text-[10px] text-secondary">Strategy & Management</span>
                </div>
                <div className="absolute -right-8 top-1/2 h-px w-8 origin-left rotate-12 bg-secondary">
                  <div className="absolute right-0 top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-primary" />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
