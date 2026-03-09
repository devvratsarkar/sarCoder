import { HiOutlineArrowRight, HiOutlinePhone } from "react-icons/hi";
import ScannerButton from "../../ui/ScannerButton";

export default function CreativeStudioSection() {
    return (
        <>
            <div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pt-12 pr-4 pb-12 pl-4">
                {/* Main Headlines */}
                <div className="text-center space-y-4 mb-16 scroll-element fade-in-up animate-in">
                    <h1 className="text-4xl sm:text-6xl lg:text-8xl font-light tracking-tighter leading-none">
                        <span className="flex items-center justify-center gap-4">
                            CREATIVE
                            <span className="inline-flex bg-primary/20 rounded-full p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="arrow-big-right" className="lucide lucide-arrow-big-right w-6 h-6 text-primary"><path d="M11 9a1 1 0 0 0 1-1V5.061a1 1 0 0 1 1.811-.75l6.836 6.836a1.207 1.207 0 0 1 0 1.707l-6.836 6.835a1 1 0 0 1-1.811-.75V16a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z" /></svg>
                            </span>
                            <span className="text-primary">DESIGN</span>
                        </span>
                    </h1>
                    <h1 className="text-4xl sm:text-6xl lg:text-8xl font-light tracking-tighter leading-none">
                        <span className="flex items-center justify-center gap-4">
                            <span className="text-primary">VISUAL</span>
                            <span className="inline-flex bg-primary/20 rounded-full p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="arrow-big-right" className="lucide lucide-arrow-big-right w-6 h-6 text-primary"><path d="M11 9a1 1 0 0 0 1-1V5.061a1 1 0 0 1 1.811-.75l6.836 6.836a1.207 1.207 0 0 1 0 1.707l-6.836 6.835a1 1 0 0 1-1.811-.75V16a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z" /></svg>
                            </span>
                            <span className="flex items-center justify-center gap-4">STUDIO</span>
                        </span>
                    </h1>
                </div>

                {/* Hero Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 space-x-8">
                    {/* Left Card */}
                    <div className="lg:col-span-1 scroll-element fade-in-left animate-in">
                        <div className="lg:min-h-130 flex flex-col ring-1 ring-border bg-surface-elevated rounded-3xl pt-6 pr-6 pb-6 pl-6">
                            <div className="flex items-baseline gap-2">
                                <span className="sm:text-6xl text-5xl font-light text-white tracking-tighter">200+</span>
                                <span>projects</span>
                            </div>
                            <p className="text-sm mt-3">We craft visual experiences that inspire, engage, and leave lasting impressions.
                            </p>
                            <p className="mt-4 italic">Design. Create. Inspire.</p>

                            <div className="mt-6 overflow-hidden rounded-2xl ring-1 ring-border">
                                <div className="relative w-full h-44 sm:h-56 bg-surface-elevated">
                                    {/* Subtle glow and vignette */}
                                    <div
                                        className="absolute inset-0 pointer-events-none"
                                        style={{
                                            background:
                                                "radial-gradient(1200px 300px at -10% -10%, rgba(var(--primary-rgb),0.08), transparent 60%), radial-gradient(600px 200px at 110% 0%, rgba(var(--primary-rgb),0.04), transparent 55%)",
                                        }}
                                    />

                                    {/* Content */}
                                    <div className="relative h-full w-full sm:p-5 flex flex-col pt-4 pr-4 pb-4 pl-4">
                                        {/* Header */}
                                        <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-border">
                                            <div className="flex items-center gap-3">
                                                <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-primary text-surface flex items-center justify-center text-sm font-medium ring-1 ring-border shadow-sm">
                                                    BG
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-sm sm:text-base font-medium">Bryan Gill</span>
                                                    <span className="text-xs text-primary">Active</span>
                                                </div>
                                            </div>
                                            <span className="text-sm">UI Designers</span>
                                        </div>

                                        {/* Rows */}
                                        <div className="mt-3 sm:mt-4 space-y-3 sm:space-y-3.5">
                                            <div className="flex items-center gap-3">
                                                <div className="h-8 w-8 rounded-lg bg-primary/10 ring-1 ring-border flex items-center justify-center text-secondary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="check-square" className="lucide lucide-check-square w-4.5 h-4.5">
                                                        <path d="M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344" />
                                                        <path d="m9 11 3 3L22 4" />
                                                    </svg>
                                                </div>
                                                <div className="flex-1">
                                                    <div className="h-2.5 rounded-full bg-primary/20" />
                                                    <div className="mt-2 h-2.5 w-2/5 rounded-full bg-primary/10" />
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-3">
                                                <div className="h-8 w-8 rounded-lg bg-primary/10 ring-1 ring-border flex items-center justify-center text-secondary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="calendar-check-2" className="lucide lucide-calendar-check-2 w-4.5 h-4.5">
                                                        <path d="M8 2v4" />
                                                        <path d="M16 2v4" />
                                                        <path d="M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8" />
                                                        <path d="M3 10h18" />
                                                        <path d="m16 20 2 2 4-4" />
                                                    </svg>
                                                </div>
                                                <div className="flex-1">
                                                    <div className="h-2.5 rounded-full bg-primary/20" />
                                                    <div className="mt-2 h-2.5 w-3/5 rounded-full bg-primary/10" />
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-3">
                                                <div className="h-8 w-8 rounded-lg bg-primary/10 ring-1 ring-border flex items-center justify-center text-secondary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="clock" className="lucide lucide-clock w-4.5 h-4.5">
                                                        <path d="M12 6v6l4 2" />
                                                        <circle cx="12" cy="12" r="10" />
                                                    </svg>
                                                </div>
                                                <div className="flex-1">
                                                    <div className="h-2.5 rounded-full bg-primary/20" />
                                                    <div className="mt-2 h-2.5 w-1/2 rounded-full bg-primary/10" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Footer pill */}
                                        <div className="mt-auto">
                                            <div className="mt-4 h-8 w-full rounded-xl bg-primary/20 ring-1 ring-border" />
                                        </div>
                                    </div>

                                    {/* Card outline for depth */}
                                    <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-border" />
                                </div>
                            </div>

                            <div className="mt-5">
                                <ScannerButton className='btn-scan-solid' endIcon={<HiOutlineArrowRight className="size-4" aria-hidden />}>
                                    Start Project
                                </ScannerButton>
                            </div>
                        </div>
                    </div>

                    {/* Middle Column */}
                    <div className="lg:col-span-1 lg:min-h-130 flex flex-col scroll-element fade-in-up animate-in">
                        {/* Subtitle + CTA */}
                        <div className="text-center space-y-6 mb-8">
                            <p>
                                Where creativity meets strategy. We transform brands through compelling visual storytelling and innovative design solutions.
                            </p>

                            <div className="flex flex-wrap gap-3 items-center justify-center">
                                <ScannerButton className='btn-scan-solid' >
                                    Get Started
                                </ScannerButton>

                                <ScannerButton startIcon={<HiOutlinePhone className="size-4" aria-hidden />}>
                                    Call Us
                                </ScannerButton>
                            </div>
                        </div>

                        {/* Bottom Card */}
                        <div className="ring-1 ring-border text-white bg-surface rounded-3xl mt-auto pt-6 pr-6 pb-6 pl-6 space-y-4">
                            <div className="mb-4 space-y-6">
                                <div className="relative h-40 sm:h-48">
                                    {/* Back left */}
                                    <div className="absolute -left-2 top-2 sm:-left-1 sm:top-0 w-28 h-24 sm:w-32 sm:h-28 ring-1 ring-border bg-surface-elevated rounded-2xl pt-1 pr-1 pb-1 pl-1 shadow-xl -rotate-12">
                                        <img src="/image/user/user2.jpg" alt="Team portrait" className="w-full h-full object-cover rounded-xl" />
                                    </div>
                                    {/* Back right */}
                                    <div className="absolute -right-1 top-4 sm:right-0 sm:top-2 w-28 h-24 sm:w-32 sm:h-28 ring-1 ring-border bg-surface-elevated rounded-2xl pt-1 pr-1 pb-1 pl-1 shadow-xl rotate-12">
                                        <img src="/image/user/user3.jpg" alt="Team portrait" className="w-full h-full object-cover rounded-xl" />
                                    </div>
                                    {/* Bottom left */}
                                    <div className="absolute left-2 bottom-0 w-28 h-24 sm:w-32 sm:h-28 ring-1 ring-border bg-surface-elevated rounded-2xl pt-1 pr-1 pb-1 pl-1 shadow-xl rotate-10">
                                        <img src="/image/user/user4.jpg" alt="Team portrait" className="w-full h-full object-cover rounded-xl" />
                                    </div>
                                    {/* Bottom right */}
                                    <div className="absolute right-1 bottom-1 w-28 h-24 sm:w-32 sm:h-28 ring-1 ring-border bg-surface-elevated rounded-2xl pt-1 pr-1 pb-1 pl-1 shadow-xl rotate-[-8deg]">
                                        <img src="/image/user/user5.jpg" alt="Team portrait" className="w-full h-full object-cover rounded-xl" />
                                    </div>
                                    {/* Center card */}
                                    <div className="absolute inset-0 w-40 h-32 sm:w-48 sm:h-36 ring-1 ring-border z-10 bg-surface-elevated rounded-2xl mt-auto mr-auto mb-auto ml-auto pt-1 pr-1 pb-1 pl-1 shadow-xl">
                                        <img src="/image/user/best-employees.png" alt="Lead creative" className="w-full h-full object-cover rounded-xl" />
                                    </div>
                                </div>
                                <p className="mt-4">
                                    <span className="sm:text-6xl text-5xl font-light text-white tracking-tighter">25+</span> creatives
                                </p>
                            </div>

                            <p className="text-sm">
                                Our passionate team pushes creative boundaries to deliver exceptional results that exceed expectations.
                            </p>
                        </div>
                    </div>

                    {/* Right Card */}
                    <div className="lg:col-span-1 scroll-element fade-in-right animate-in">
                        <div className="lg:min-h-130 flex flex-col ring-1 ring-border bg-surface-elevated rounded-3xl pt-6 pr-6 pb-6 pl-6">
                            <h3 className="text-lg font-semibold mb-2">Creative Services</h3>
                            <p className="text-sm mt-3 mb-8">
                                From concept to completion, we deliver creative solutions that make an impact.
                            </p>

                            <div className="flex-1 relative">
                                <div className="relative overflow-hidden rounded-2xl ring-1 ring-border bg-surface-elevated h-full">
                                    {/* Subtle background pattern */}
                                    <div
                                        className="absolute inset-0 pointer-events-none"
                                        style={{
                                            background:
                                                "radial-gradient(800px 400px at 50% 0%, rgba(var(--primary-rgb),0.06), transparent 70%)",
                                        }}
                                    />

                                    {/* Main content */}
                                    <div className="relative h-full flex flex-col pt-4 pr-4 pb-4 pl-4">
                                        {/* Header with "We Create" */}
                                        <div className="mb-0">
                                            <div className="inline-flex items-center gap-3 mb-4">
                                                <h4 className="text-2xl font-light tracking-tight text-white">We Create</h4>
                                            </div>
                                        </div>

                                        {/* Service cards in grid */}
                                        <div className="grid grid-cols-2 gap-3 mb-6">
                                            <div className="group relative overflow-hidden rounded-xl bg-primary/5 p-4 ring-1 ring-border hover:ring-primary/30 transition-all hover:scale-[1.02]">
                                                <div className="flex gap-2 mb-2 items-center">
                                                    <span className="text-sm font-medium text-white">Brand Identity</span>
                                                </div>
                                                <div className="space-y-1">
                                                    <div className="h-1.5 rounded-full bg-primary/20 w-full" />
                                                    <div className="h-1.5 rounded-full bg-primary/10 w-2/3" />
                                                </div>
                                            </div>

                                            <div className="group relative overflow-hidden rounded-xl bg-primary/5 p-4 ring-1 ring-border hover:ring-primary/30 transition-all hover:scale-[1.02]">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <span className="text-sm font-medium text-white">UI/UX Design</span>
                                                </div>
                                                <div className="space-y-1">
                                                    <div className="h-1.5 rounded-full bg-primary/20 w-4/5" />
                                                    <div className="h-1.5 rounded-full bg-primary/10 w-full" />
                                                </div>
                                            </div>

                                            <div className="group relative overflow-hidden rounded-xl bg-primary/5 p-4 ring-1 ring-border hover:ring-primary/30 transition-all hover:scale-[1.02]">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <div className="h-6 w-6 rounded bg-primary/20" />
                                                    <span className="text-sm font-medium text-white">Animation</span>
                                                </div>
                                                <div className="space-y-1">
                                                    <div className="h-1.5 rounded-full bg-primary/20 w-3/4" />
                                                    <div className="h-1.5 rounded-full bg-primary/10 w-1/2" />
                                                </div>
                                            </div>

                                            <div className="group relative overflow-hidden rounded-xl bg-primary/5 p-4 ring-1 ring-border hover:ring-primary/30 transition-all hover:scale-[1.02]">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <span className="text-sm font-medium text-white">Art Direction</span>
                                                </div>
                                                <div className="space-y-1">
                                                    <div className="h-1.5 rounded-full bg-primary/20 w-5/6" />
                                                    <div className="h-1.5 rounded-full bg-primary/10 w-3/4" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Bottom visual element with progress indicator */}
                                        <div className="mt-auto">
                                            <div className="flex items-center justify-between mb-3">
                                                <span className="text-xs font-medium uppercase tracking-wide">Creative Process</span>
                                                <span className="text-xs">75% Complete</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className="flex-1">
                                                    <p className="text-xs">Brand identity development in progress</p>
                                                </div>
                                                <button className="h-8 w-8 hover:bg-primary/80 flex transition-colors bg-primary rounded-full items-center justify-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-surface">
                                                        <path d="M7 7h10v10" />
                                                        <path d="M7 17 17 7" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
