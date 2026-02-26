import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { SoundwaveIcon, BatteryIcon, CpuIcon, TuningIcon } from "../ui/AllSVG";
import ScannerButton from "../ui/ScannerButton";

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

export default function HomeBanner() {
  return (
    <section
      className="relative min-h-screen overflow-x-hidden custom_container_x"
      aria-label="Hero banner"
    >
      {/* Vertical grid lines */}
      <div className="pointer-events-none fixed inset-0 z-0 mx-auto flex justify-between opacity-40">
        <div className="h-full w-px bg-border/50" />
        <div className="hidden h-full w-px bg-border/50 md:block" />
        <div className="hidden h-full w-px bg-border/50 lg:block" />
        <div className="h-full w-px bg-border/50" />
      </div>

      <div className="relative z-10 w-full min-h-screen">
        <div className="grid grow grid-cols-1 gap-y-12 pt-8 pb-12 lg:grid-cols-12 lg:gap-8 ">
          {/* Left indicator column */}
          <div className="relative hidden flex-col items-start pt-4 lg:col-span-1 lg:flex">
            <div className="sticky top-32 flex flex-col gap-6">
              <button type="button" className="group flex items-center gap-3" aria-label="Step 1">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-medium text-surface">1</div>
              </button>
              <button type="button" className="group flex items-center gap-3" aria-label="Step 2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-xs font-medium text-secondary transition-all group-hover:border-primary group-hover:text-primary">2</div>
              </button>
              <button type="button" className="group flex items-center gap-3" aria-label="Step 3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-xs font-medium text-secondary transition-all group-hover:border-primary group-hover:text-primary">3</div>
              </button>
            </div>
            <div className="absolute left-4 top-40 -z-10 h-64 w-px bg-linear-to-b from-border to-transparent" />
            <span className="mb-32 mt-auto rotate-180 text-xs font-medium text-secondary" style={{ writingMode: "vertical-rl" }}>01 — INTRO</span>
          </div>

          {/* Content column */}
          <div className="space-y-6 flex flex-col justify-start lg:col-span-5">
            {/* Badge */}
            <div className="flex items-center gap-4 gap-x-4 gap-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface shadow-sm">
                <SoundwaveIcon className="h-4 w-4 text-white" />
              </div>
              <div>
                <h3 className="text-base font-semibold leading-tight text-white">SarCODER</h3>
                <p className="text-sm text-primary">Web & Mobile Solutions</p>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-5xl font-semibold leading-[1.1] tracking-tight text-white lg:text-7xl">
              Solutions That <span className="text-primary">Scale.</span>
            </h1>

            {/* Subtext */}
            <p className="max-w-md text-secondary">
              We deliver website development, website design, mobile app development, and social media management—powered by modern tech and a focus on results.
            </p>

            {/* Primary technologies */}
            <div className="">
              <p className="mb-4 text-xs font-medium uppercase tracking-widest text-secondary">Our Stack</p>
              <div className="flex flex-wrap items-center gap-2 gap-y-3">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border bg-surface/80 px-3 py-1 font-mono text-xs text-secondary transition-colors hover:border-primary hover:text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA & avatars */}
            <div className="flex flex-wrap items-center gap-8 gap-x-8 gap-y-8">
              <ScannerButton endIcon={<HiOutlineArrowUpRight className="size-4" aria-hidden />}>
                Start a project
              </ScannerButton>
              <div className="flex items-center -space-x-3">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64" alt="" className="h-10 w-10 rounded-full border-2 border-surface object-cover" />
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64" alt="" className="h-10 w-10 rounded-full border-2 border-surface object-cover" />
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&h=64" alt="" className="h-10 w-10 rounded-full border-2 border-surface object-cover" />
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-surface bg-surface-elevated text-xs font-semibold text-secondary">+2k</div>
              </div>
            </div>
          </div>

          {/* Product image column */}
          <div className="relative flex h-125 items-center justify-center lg:col-span-6 lg:h-auto">
            <div className="relative flex w-full items-center justify-center md:justify-end">
              <img
                src="https://images.unsplash.com/photo-1593118247619-e2d6f056869e?q=80&w=1000&auto=format&fit=crop"
                alt="SarCODER — web and mobile development"
                className="h-auto w-full rounded-3xl object-cover drop-shadow-2xl grayscale-20 mix-blend-normal"
              />
              <div className="absolute right-6 top-6 rounded bg-surface-elevated/90 px-3 py-1 font-mono text-xs tracking-widest text-white backdrop-blur-md">Built with care</div>
            </div>

            {/* Floating annotation: Web Development */}
            <div className="absolute left-0 top-10 hidden max-w-45 rounded-2xl border border-border bg-surface-elevated/95 p-4 shadow-lg backdrop-blur-xl md:block lg:-left-12">
              <div className="mb-1 flex items-center gap-2">
                <BatteryIcon className="h-4 w-4 text-primary" />
                <span className="text-xs font-semibold text-white">Web Development</span>
              </div>
              <p className="text-[10px] leading-snug text-secondary">Custom sites with Next.js, React, WordPress, Shopify & more.</p>
              <div className="absolute -right-12 top-1/2 h-px w-12 rotate-12 bg-secondary">
                <div className="absolute right-0 top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-primary" />
              </div>
            </div>

            {/* Floating annotation: Mobile Apps */}
            <div className="absolute bottom-20 right-0 hidden max-w-50 rounded-2xl border border-border bg-surface-elevated/95 p-4 shadow-lg backdrop-blur-xl md:block lg:-right-4">
              <div className="mb-1 flex items-center gap-2">
                <CpuIcon className="h-4 w-4 text-primary" />
                <span className="text-xs font-semibold text-white">Mobile App Development</span>
              </div>
              <p className="text-[10px] leading-snug text-secondary">Native & cross-platform apps with Flutter and React Native.</p>
              <div className="absolute -left-8 top-1/2 h-px w-8 rotate-12 bg-secondary">
                <div className="absolute left-0 top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-primary" />
              </div>
            </div>

            {/* Floating annotation: Social Media */}
            <div className="absolute bottom-1/3 left-4 hidden items-center gap-3 rounded-2xl border border-border bg-surface-elevated/95 p-3 shadow-lg backdrop-blur-xl md:flex lg:-left-8">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
