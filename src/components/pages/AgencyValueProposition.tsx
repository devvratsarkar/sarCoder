export default function AgencyValueProposition() {
    return (
        <>
            <section className="custom_container_x ">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left: Core differentiator */}
                    <div
                        className="relative overflow-hidden bg-[url(/image/bg/bg-1.jpg)] bg-cover border-white/10 border rounded-2xl"
                    >
                        <div className="relative h-110 sm:h-130 sm:p-8 flex flex-col pt-6 pr-6 pb-6 pl-6">
                            <div className="flex items-center gap-3">
                                <div>
                                    <p className="text-sm font-geist text-neutral-300">Our Edge</p>
                                    <p className="text-xs sm:text-sm mt-1 font-geist text-neutral-400">Strategic Design Thinking</p>
                                </div>
                            </div>
                            <div className="mt-auto">
                                <div className="sm:text-4xl text-2xl font-semibold text-white tracking-tight font-geist mb-4">
                                    Design with <span className="text-primary">Purpose</span>
                                </div>
                                <div className="flex items-center gap-2 text-neutral-200 mb-6">
                                    <div className="flex items-center gap-1">
                                        <div className="h-2 w-2 rounded-full bg-primary" />
                                        <div className="h-2 w-2 rounded-full bg-primary/80" />
                                        <div className="h-2 w-2 rounded-full bg-primary/90" />
                                    </div>
                                    <p className="text-sm font-geist">Every pixel has intention</p>
                                </div>
                                <div className="flex items-center gap-2 text-xs font-geist text-neutral-300">
                                    Discover our approach
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right">
                                        <path d="M7 7h10v10" />
                                        <path d="M7 17 17 7" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Middle: Results & methodology */}
                    <div className="relative sm:p-8 overflow-hidden bg-white/5 border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6">
                        <div
                            className="pointer-events-none absolute inset-0 opacity-20"
                            style={{ background: 'repeating-radial-gradient(circle at 80% -20%, rgba(var(--primary-rgb),0.08) 0 1px, transparent 1px 60px)' }}
                        />
                        <div className="relative">
                            <p className="text-sm font-geist text-neutral-400">Proven Results:</p>
                            <h3 className="mt-2 text-2xl sm:text-3xl font-geist font-light tracking-tight text-neutral-100">
                                <span className="font-semibold text-primary">3x</span> faster project delivery,{' '}
                                <span className="font-semibold text-primary/90">2x</span> higher engagement
                            </h3>

                            <p className="mt-8 text-sm font-geist text-neutral-400">Our Methodology:</p>
                            <div className="mt-4 space-y-3">
                                <div className="flex items-center gap-3 text-sm font-geist text-neutral-200">
                                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                                    Strategic Discovery & Research
                                </div>
                                <div className="flex items-center gap-3 text-sm font-geist text-neutral-200">
                                    <span className="h-1.5 w-1.5 rounded-full bg-primary/80" />
                                    Collaborative Design Process
                                </div>
                                <div className="flex items-center gap-3 text-sm font-geist text-neutral-200">
                                    <span className="h-1.5 w-1.5 rounded-full bg-primary/90" />
                                    Data-Driven Optimization
                                </div>
                            </div>

                            <div className="mt-8 rounded-xl border p-5 border-white/10 bg-black/30">
                                <div className="flex items-center gap-1 text-amber-300 mb-3">
                                    {[...Array(5)].map((_, i) => (
                                        <StarIcon key={i} />
                                    ))}
                                </div>
                                <p className="mt-3 text-sm font-geist text-neutral-300">
                                    &quot;Lumina doesn&apos;t just create designs—they craft experiences. Their strategic thinking elevated our entire brand presence.&quot;
                                </p>
                                <div className="mt-4 flex items-center gap-3">
                                    <img
                                        src="/image/user/user1.jpg"
                                        alt=""
                                        className="h-8 w-8 rounded-full object-cover"
                                    />
                                    <div className="text-sm">
                                        <p className="font-geist text-neutral-200">Michael Torres</p>
                                        <p className="text-xs text-neutral-500 font-geist">CEO, Innovation Labs</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Trust indicators & guarantees */}
                    <div className="grid grid-rows-2 gap-6">
                        {/* Trust & expertise */}
                        <div className="rounded-2xl border p-6 sm:p-8 border-white/10 bg-white/5">
                            <div className="flex items-center sm:block">
                                <div className="relative h-28 w-28 sm:mx-auto">
                                    <div className="absolute inset-0 rounded-full bg-primary" />
                                    <div className="absolute inset-2.5 rounded-full bg-black/40 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check text-primary">
                                            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                                            <path d="m9 12 2 2 4-4" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-5 sm:ml-0 sm:mt-6 text-center">
                                    <h4 className="text-lg font-geist font-light tracking-tight text-white">100% Satisfaction</h4>
                                    <p className="mt-2 text-sm font-geist text-neutral-400">
                                        Guaranteed results or we&apos;ll make it right. Your success is our mission.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Key metrics */}
                        <div className="rounded-2xl border p-6 sm:p-8 border-white/10 bg-white/5">
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div>
                                    <div className="text-2xl font-geist font-light tracking-tight text-white">150+</div>
                                    <p className="text-xs mt-1 font-geist text-neutral-400">Projects delivered</p>
                                </div>
                                <div>
                                    <div className="text-2xl font-geist font-light tracking-tight text-white">48h</div>
                                    <p className="text-xs mt-1 font-geist text-neutral-400">Average start time</p>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center justify-between text-sm font-geist">
                                    <span className="text-neutral-300">Brand Strategy</span>
                                    <span className="text-primary">Expert</span>
                                </div>
                                <div className="flex items-center justify-between text-sm font-geist">
                                    <span className="text-neutral-300">Visual Design</span>
                                    <span className="text-primary/90">Expert</span>
                                </div>
                                <div className="flex items-center justify-between text-sm font-geist">
                                    <span className="text-neutral-300">Digital Marketing</span>
                                    <span className="text-primary">Expert</span>
                                </div>
                            </div>

                            <div className="mt-6 pt-4 border-t border-white/10">
                                <div className="flex items-center gap-2 text-xs font-geist text-neutral-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-primary">
                                        <path d="M20 6 9 17l-5-5" />
                                    </svg>
                                    Lumina Certified Team
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

function StarIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="star"
            className="lucide lucide-star">
            <path
                d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
                className=""></path>
        </svg>
    );
}
