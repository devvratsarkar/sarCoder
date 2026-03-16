import { useEffect, useRef } from 'react';
import {
    HiOutlineMagnifyingGlass,
    HiOutlinePaintBrush,
    HiOutlineCodeBracketSquare,
    HiOutlineRocketLaunch,
} from 'react-icons/hi2';

const TIMELINE_STEPS = [
    {
        id: 'discovery',
        title: 'Discovery & Research',
        description: 'We align on goals, audiences, and scope—strategic discovery so every decision is intentional.',
        icon: HiOutlineMagnifyingGlass,
        position: 'left' as const,
        statLabel: 'DISCOVERY_PHASE',
        statValue: '1–2 WEEKS',
        barWidth: 'w-3/4',
        barColor: 'bg-zinc-600',
        dotColor: 'bg-zinc-800',
        dotGlow: '',
        iconColor: 'text-zinc-400',
    },
    {
        id: 'design',
        title: 'Design & Prototyping',
        description: 'Collaborative UI/UX and visual design. We craft experiences that inspire and engage.',
        icon: HiOutlinePaintBrush,
        position: 'right' as const,
        statLabel: 'DESIGN_STATUS',
        statValue: 'ACTIVE',
        barWidth: 'w-6',
        barColor: 'bg-primary',
        dotColor: 'bg-primary',
        dotGlow: 'shadow-[0_0_10px_rgba(var(--primary-rgb),0.6)]',
        iconColor: 'text-primary',
        bars: 3,
        barDelay: [600, 750, 900],
        barFilled: 2,
    },
    {
        id: 'development',
        title: 'Development & Build',
        description: 'Web, mobile, and CMS—built with Next.js, React, Flutter, Node.js, and your chosen stack.',
        icon: HiOutlineCodeBracketSquare,
        position: 'left' as const,
        statLabel: 'STACK',
        statValue: 'NEXT_REACT_NODE',
        barWidth: 'w-2/3',
        barColor: 'bg-emerald-500',
        dotColor: 'bg-emerald-500',
        dotGlow: 'shadow-[0_0_10px_#10b981]',
        iconColor: 'text-emerald-400',
    },
    {
        id: 'launch',
        title: 'Launch & Optimize',
        description: 'Deploy, measure, and iterate. Data-driven optimization for lasting impact.',
        icon: HiOutlineRocketLaunch,
        position: 'right' as const,
        statLabel: 'DELIVERY',
        statValue: '3X FASTER',
        barWidth: 'w-6',
        barColor: 'bg-orange-500',
        dotColor: 'bg-orange-500',
        dotGlow: 'shadow-[0_0_10px_#f97316]',
        iconColor: 'text-orange-400',
        bars: 3,
        barDelay: [1300, 1450, 1600],
        barFilled: 3,
    },
];


export default function TimeLine() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const io = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        section.classList.add('is-visible');
                        io.disconnect();
                        break;
                    }
                }
            },
            { threshold: 0.25, rootMargin: '0px 0px -10% 0px' }
        );

        io.observe(section);
        return () => io.disconnect();
    }, []);

    return (
        <>
            <section
                ref={sectionRef}
                id="project-pipeline"
                className="custom_container_x overflow-hidden relative"
            >
                <div className="text-center max-w-2xl mx-auto mb-10 scroll-animate">
                    <h2 className="text-3xl font-normal tracking-tight text-zinc-100">
                        How we work
                    </h2>
                    <p className="mt-4 text-base text-zinc-400">
                        From discovery to launch—strategic process, modern stack, and results that scale.
                    </p>
                </div>
                <div className="relative max-w-3xl mx-auto scroll-animate">
                    {/* Center Rail */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-4 -translate-x-1/2 tactile-inset rounded-full z-0 flex justify-center py-4">
                        <div className="w-1 h-full bg-zinc-800 rounded-full relative overflow-hidden">
                            <div
                                className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-transparent via-indigo-500 to-transparent animate-[text-slide_3s_linear_infinite] shadow-[0_0_15px_#6366f1]"
                                style={{ animation: 'text-slide 3s linear infinite' }}
                            />
                        </div>
                    </div>

                    {TIMELINE_STEPS.map((step, index) => {
                        const Icon = step.icon;
                        const isRight = step.position === 'right';
                        const hasBars = 'bars' in step && step.bars === 3 && step.barDelay;
                        const isLast = index === TIMELINE_STEPS.length - 1;
                        return (
                            <div
                                key={step.id}
                                className={`relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8 group pl-20 md:pl-0 ${!isLast ? 'mb-16' : ''} ${isRight ? '' : ''}`}
                            >
                                {/* Title: mobile */}
                                <div
                                    className={`w-full mb-4 md:mb-0 md:hidden ${isRight ? 'order-1 md:order-3' : ''}`}
                                >
                                    <h3 className="text-lg font-normal text-zinc-100">{step.title}</h3>
                                    <p className="text-sm text-zinc-500 mt-1">{step.description}</p>
                                </div>
                                {/* Title: desktop — left column for left step, right column for right step */}
                                <div
                                    className={`hidden md:block md:w-1/2 ${isRight ? 'md:pl-12 order-3' : 'md:pr-12 md:text-right'}`}
                                >
                                    <h3 className="text-lg font-normal text-zinc-100">{step.title}</h3>
                                    <p className="text-sm text-zinc-500 mt-1">{step.description}</p>
                                </div>
                                {/* Center dot */}
                                <div
                                    className={`absolute left-8 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full tactile-base border border-zinc-700 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform ${isRight ? 'order-1 md:order-2' : ''}`}
                                >
                                    <div
                                        className={`w-3 h-3 rounded-full border border-zinc-900 transition-colors ${step.dotColor} ${step.dotGlow}`}
                                    />
                                </div>
                                {/* Card */}
                                <div
                                    className={`md:w-1/2 w-full ${isRight ? 'md:pr-12 order-2 md:order-1 mt-4 md:mt-0' : 'md:pl-12'}`}
                                >
                                    <div className="tactile-glass p-5 rounded-xl border border-zinc-800/50 flex items-center gap-4">
                                        {hasBars ? (
                                            <>
                                                <div className={`flex-1 ${isRight ? 'text-right' : ''}`}>
                                                    <div className="text-xs font-mono text-zinc-500 mb-2">
                                                        {step.statLabel}: {step.statValue}
                                                    </div>
                                                    <div
                                                        className={`flex gap-1 ${isRight ? 'justify-end' : ''}`}
                                                    >
                                                        {step.barDelay!.map((delay, i) => (
                                                            <div
                                                                key={i}
                                                                className={`w-0 in-[.is-visible]:w-6 h-1.5 rounded-full transition-all duration-500 ease-out ${i < (step.barFilled ?? 0) ? `${step.barColor} ${step.id === 'design' ? 'shadow-[0_0_8px_rgba(var(--primary-rgb),0.6)]' : step.id === 'launch' ? 'shadow-[0_0_8px_#f97316]' : ''}` : 'bg-zinc-800'}`}
                                                                style={{
                                                                    transitionDelay: `${delay}ms`,
                                                                }}
                                                            />
                                                        ))}
                                                    </div>
                                                </div>
                                                <div
                                                    className={`w-10 h-10 rounded tactile-inset flex items-center justify-center shrink-0 ${step.iconColor}`}
                                                >
                                                    <Icon className="w-5 h-5" />
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <div className="w-10 h-10 rounded tactile-inset flex items-center justify-center shrink-0 text-zinc-400">
                                                    <Icon className="w-5 h-5" />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="h-2 w-full bg-zinc-900 rounded overflow-hidden shadow-inner">
                                                        <div
                                                            className={`h-full w-0 rounded transition-all duration-1500 ease-out ${step.barColor} ${step.id === 'discovery' ? 'in-[.is-visible]:w-3/4 delay-300' : 'in-[.is-visible]:w-2/3 delay-1000 shadow-[0_0_8px_#10b981]'}`}
                                                        />
                                                    </div>
                                                    <div className="text-xs font-mono text-zinc-500 mt-2">
                                                        {step.statLabel}: {step.statValue}
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </>
    );
}
