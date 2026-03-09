import { useEffect, useRef } from 'react';
import { HiOutlineArrowUpRight } from 'react-icons/hi2';
import ScannerButton from '../ui/ScannerButton';

const TERMINAL_LINES = [
    {
        prompt: '~',
        promptClass: 'text-[#c6f91f]',
        content: 'init_sequence.sh',
        contentClass: 'text-white/70'
    },
    {
        prompt: '>',
        promptClass: 'text-slate-600',
        content: 'Loading modules...',
        contentClass: 'text-slate-600'
    },
    {
        prompt: '>',
        promptClass: 'text-slate-600',
        content: 'Connected (24ms)',
        contentClass: 'text-slate-600',
        completedHtml: '<span class="text-slate-600 mr-2">&gt;</span><span class="text-[#c6f91f]">Connected</span> <span class="text-slate-500">(24ms)</span>'
    }
];

function TerminalAnimation({ containerRef }: { containerRef: React.RefObject<HTMLDivElement | null> }) {
    const runRef = useRef(true);

    useEffect(() => {
        runRef.current = true;
        const el = containerRef.current;
        if (!el) return;

        const runTerminal = async () => {
            while (runRef.current) {
                el.innerHTML = '';

                for (const line of TERMINAL_LINES) {
                    const row = document.createElement('div');
                    row.className = 'flex items-center';
                    el.appendChild(row);

                    const prompt = document.createElement('span');
                    prompt.className = `${line.promptClass} mr-2`;
                    prompt.textContent = line.prompt;
                    row.appendChild(prompt);

                    const content = document.createElement('span');
                    content.className = line.contentClass;
                    row.appendChild(content);

                    const cursor = document.createElement('span');
                    cursor.className = 'w-1.5 h-3 bg-primary ml-1 block animate-pulse';
                    row.appendChild(cursor);

                    const text = line.content;
                    for (let i = 0; i < text.length; i++) {
                        content.textContent += text[i];
                        await new Promise((r) => setTimeout(r, 50 + Math.random() * 60));
                    }

                    cursor.remove();

                    if (line.completedHtml) {
                        row.innerHTML = line.completedHtml;
                    }

                    await new Promise((r) => setTimeout(r, 500));
                }

                const lastRow = el.lastElementChild;
                if (lastRow) {
                    const endCursor = document.createElement('span');
                    endCursor.className = 'inline-block w-1.5 h-3 bg-primary ml-1 align-middle animate-pulse';
                    lastRow.appendChild(endCursor);
                }

                await new Promise((r) => setTimeout(r, 2500));
            }
        };

        const t = setTimeout(() => runTerminal(), 0);
        return () => {
            runRef.current = false;
            clearTimeout(t);
        };
    }, [containerRef]);

    return null;
}

function NeuralRoutingAnimation({ containerRef }: { containerRef: React.RefObject<HTMLDivElement | null> }) {
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const source = container.querySelector('#node-source');
        const sourceGlow = container.querySelector('#source-glow');
        const sourceIcon = container.querySelector('#source-icon');
        const targets = container.querySelectorAll('.node-target');
        const paths = container.querySelectorAll('path[id^="route-p"]');
        const packet = container.querySelector('#packet');
        const packetAnim = container.querySelector('#packet-anim');

        if (!source || !sourceGlow || !sourceIcon || !packet || !packetAnim || targets.length === 0 || paths.length === 0) return;

        let currentIndex = 0;
        let rafId: number | undefined;

        const animate = async () => {
            if (!container.isConnected) return;

            // 1. Activate Source
            source.classList.add('border-primary', 'shadow-[0_0_15px_rgba(var(--primary-rgb),0.15)]');
            sourceIcon.classList.replace('text-secondary', 'text-primary');
            sourceGlow.classList.remove('opacity-0');

            await new Promise((r) => setTimeout(r, 600));

            // 2. Choose Target
            const targetIndex = currentIndex % targets.length;
            currentIndex++;

            const path = paths[targetIndex] as SVGPathElement;
            const target = targets[targetIndex];

            // 3. Highlight Path
            paths.forEach((p) => p.classList.add('opacity-20'));
            path.classList.remove('opacity-20');
            path.classList.replace('text-secondary/30', 'text-primary');
            path.classList.add('opacity-100', 'drop-shadow-[0_0_3px_rgba(var(--primary-rgb),0.5)]');

            // 4. Send Packet
            (packet as SVGElement).style.opacity = '1';
            packetAnim.innerHTML = '';
            const mpath = document.createElementNS('http://www.w3.org/2000/svg', 'mpath');
            mpath.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#' + path.id);
            packetAnim.appendChild(mpath);
            (packetAnim as SVGAnimateMotionElement).beginElement();

            await new Promise((r) => setTimeout(r, 600));

            // 5. Activate Target
            target.classList.add('border-primary', 'scale-110', 'bg-primary/10', 'shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)]');
            const targetSvg = target.querySelector('svg');
            if (targetSvg) targetSvg.classList.replace('text-secondary', 'text-primary');
            (packet as SVGElement).style.opacity = '0';

            await new Promise((r) => setTimeout(r, 1200));

            // 6. Reset
            source.classList.remove('border-primary', 'shadow-[0_0_15px_rgba(var(--primary-rgb),0.15)]');
            sourceIcon.classList.replace('text-primary', 'text-secondary');
            sourceGlow.classList.add('opacity-0');

            path.classList.replace('text-primary', 'text-secondary/30');
            path.classList.remove('opacity-100', 'drop-shadow-[0_0_3px_rgba(var(--primary-rgb),0.5)]');
            paths.forEach((p) => p.classList.remove('opacity-20'));

            target.classList.remove('border-primary', 'scale-110', 'bg-primary/10', 'shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)]');
            if (targetSvg) targetSvg.classList.replace('text-primary', 'text-secondary');

            await new Promise((r) => setTimeout(r, 600));

            rafId = requestAnimationFrame(animate);
        };

        const t = setTimeout(animate, 500);
        return () => {
            clearTimeout(t);
            if (rafId !== undefined) cancelAnimationFrame(rafId);
        };
    }, [containerRef]);

    return null;
}

export default function PlatformFeatures() {
    const terminalRef = useRef<HTMLDivElement>(null);
    const neuralRoutingRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <section
                className="custom_container_x border-dashed bg-surface border-border border-b"
                data-element-locator="html &gt; body:nth-of-type(1) &gt; main:nth-of-type(1) &gt; section:nth-of-type(1)"
            >
                <div
                    data-element-locator="html &gt; body:nth-of-type(1) &gt; main:nth-of-type(1) &gt; section:nth-of-type(1) &gt; div:nth-of-type(1)"
                >
                    <div className="mb-16 relative">
                        <div className="absolute -top-12 -left-12 w-32 h-32 bg-primary/10 rounded-full blur-3xl" aria-hidden="true" />

                        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 z-10 relative gap-x-8 gap-y-8">
                            <div className="max-w-2xl">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="uppercase text-xs font-semibold text-primary tracking-widest font-geist">01. Platform</span>
                                </div>

                                <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-light tracking-tighter mb-4 font-geist leading-[1.1] reveal-on-scroll">
                                    Automate your
                                    entire revenue <span className='text-primary'>stack.</span>
                                </h2>

                                <p className="text-lg font-geist max-w-md text-secondary reveal-on-scroll">
                                    Deploy autonomous agents, intelligent workflows, and neural routing to scale your sales motion without
                                    adding headcount.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center gap-4">
                                <ScannerButton className='btn-scan-solid'>
                                    View documentation
                                </ScannerButton>
                                <ScannerButton endIcon={<HiOutlineArrowUpRight className="size-4" aria-hidden />}>
                                    Explore platformect
                                </ScannerButton>
                            </div>
                        </div>

                        <div className="mt-12 h-px w-full bg-linear-to-r from-border via-secondary/30 to-transparent" />
                    </div>
                    <section className="border-dashed z-10 bg-surface border-border border-b relative">
                        <div className="grid grid-cols-1 md:grid-cols-12 border-dashed border-border border-b">
                            <div className="col-span-12 md:col-span-4 md:p-12 md:border-b-0 md:border-r border-dashed flex flex-col border-border border-b pt-8 pr-8 pb-8 pl-8 justify-center reveal-on-scroll">
                                <div className="flex items-center gap-2 mb-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        data-lucide="cpu"
                                        aria-hidden="true"
                                        className="lucide lucide-cpu w-4 h-4 text-primary"
                                    >
                                        <path d="M12 20v2" />
                                        <path d="M12 2v2" />
                                        <path d="M17 20v2" />
                                        <path d="M17 2v2" />
                                        <path d="M2 12h2" />
                                        <path d="M2 17h2" />
                                        <path d="M2 7h2" />
                                        <path d="M20 12h2" />
                                        <path d="M20 17h2" />
                                        <path d="M20 7h2" />
                                        <path d="M7 20v2" />
                                        <path d="M7 2v2" />
                                        <rect x="4" y="4" width="16" height="16" rx="2" />
                                        <rect x="8" y="8" width="8" height="8" rx="1" />
                                    </svg>
                                    <span className="text-primary font-mono text-xs tracking-widest uppercase font-geist">Core Engine</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl text-white font-light tracking-tighter mb-4 font-geist reveal-on-scroll">
                                    Built for speed.
                                </h2>
                                <p className="text-sm leading-relaxed font-geist text-secondary reveal-on-scroll">
                                    Engineered to handle enterprise volume without losing the human touch. Our architecture scales with your
                                    demand.
                                </p>
                            </div>

                            <div className="col-span-12 md:col-span-8 grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-dashed divide-border reveal-on-scroll">
                                {/* Feature 1 - Terminal */}
                                <div className="group hover:bg-primary/5 transition-colors overflow-hidden reveal-on-scroll pt-8 pr-8 pb-8 pl-8 relative">
                                    <div className="flex flex-col overflow-hidden bg-surface-elevated w-full h-24 border-border border rounded mb-6 pt-3 pr-3 pb-3 pl-3 relative">
                                        <div className="flex gap-1.5 mb-2">
                                            <div className="w-2 h-2 rounded-full bg-red-500/50" />
                                            <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                                            <div className="w-2 h-2 rounded-full bg-green-500/50" />
                                        </div>
                                        <div
                                            ref={terminalRef}
                                            className="font-mono text-[10px] text-secondary space-y-1 h-full cursor-default min-h-15"
                                        >
                                            <div className="flex items-center">
                                                <span className="text-primary mr-2">~</span>
                                                <span className="text-secondary">i</span>
                                                <span className="w-1.5 h-3 bg-primary ml-1 block animate-pulse" />
                                            </div>
                                        </div>
                                        <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-primary/10 blur-2xl rounded-full group-hover:bg-primary/20 transition-colors" />
                                        <TerminalAnimation containerRef={terminalRef} />
                                    </div>
                                    <h3 className="text-white font-medium mb-2 flex items-center gap-2 font-geist reveal-on-scroll">
                                        Instant Deployment
                                    </h3>
                                    <p className="text-xs leading-relaxed font-geist reveal-on-scroll">
                                        Go from signup to active prospecting in under 5 minutes with pre-configured agent templates.
                                    </p>
                                </div>

                                {/* Feature 2 - Neural Routing */}
                                <div className="p-8 group hover:bg-primary/5 transition-colors relative overflow-hidden reveal-on-scroll">
                                    <div className="mb-6 relative h-24 w-full flex items-center justify-center">
                                        <div
                                            ref={neuralRoutingRef}
                                            className="flex w-full h-full relative items-center justify-center overflow-hidden rounded-lg group reveal-on-scroll"
                                        >
                                            <div className="flex w-full h-full max-w-[320px] pr-4 pl-4 relative items-center justify-between overflow-visible">
                                                <svg
                                                    className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
                                                    viewBox="0 0 320 96"
                                                    preserveAspectRatio="none"
                                                >
                                                    <path
                                                        id="route-p1"
                                                        d="M 44 48 C 120 48, 180 16, 276 16"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                        className="text-secondary/30 transition-colors duration-500"
                                                    />
                                                    <path
                                                        id="route-p2"
                                                        d="M 44 48 C 120 48, 180 48, 276 48"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                        className="text-secondary/30 transition-colors duration-500"
                                                    />
                                                    <path
                                                        id="route-p3"
                                                        d="M 44 48 C 120 48, 180 80, 276 80"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                        className="text-secondary/30 transition-colors duration-500"
                                                    />
                                                    <circle
                                                        id="packet"
                                                        r="3"
                                                        fill="var(--primary)"
                                                        className="opacity-0 shadow-[0_0_8px_var(--primary)]"
                                                        style={{ opacity: 0 }}
                                                    >
                                                        <animateMotion
                                                            id="packet-anim"
                                                            dur="0.6s"
                                                            begin="indefinite"
                                                            fill="freeze"
                                                            keyPoints="0;1"
                                                            keyTimes="0;1"
                                                            calcMode="spline"
                                                            keySplines="0.4 0 0.2 1"
                                                        >
                                                            <mpath xlinkHref="#route-p1" />
                                                        </animateMotion>
                                                    </circle>
                                                </svg>

                                                <div
                                                    id="node-source"
                                                    className="relative z-10 w-9 h-9 rounded-lg bg-surface-elevated border border-border flex items-center justify-center shadow-lg transition-all duration-300"
                                                >
                                                    <div
                                                        className="absolute inset-0 bg-primary/20 rounded-lg blur-md transition-opacity duration-300 opacity-0"
                                                        id="source-glow"
                                                    />
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="relative z-10 transition-colors duration-300 text-secondary"
                                                        id="source-icon"
                                                    >
                                                        <circle cx="12" cy="12" r="10" />
                                                        <circle cx="12" cy="12" r="2" />
                                                    </svg>
                                                </div>

                                                <div className="flex flex-col gap-3 z-10 py-2">
                                                    <div
                                                        className="node-target flex transition-all duration-300 bg-surface-elevated w-6 h-6 border-border border rounded-md items-center justify-center"
                                                        id="target-0"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="12"
                                                            height="12"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="transition-colors duration-300"
                                                        >
                                                            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                                        </svg>
                                                    </div>
                                                    <div
                                                        className="node-target flex transition-all duration-300 bg-surface-elevated w-6 h-6 border-border border rounded-md items-center justify-center"
                                                        id="target-1"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="12"
                                                            height="12"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="text-secondary transition-colors duration-300"
                                                        >
                                                            <rect width="20" height="14" x="2" y="5" rx="2" />
                                                            <line x1="2" x2="22" y1="10" y2="10" />
                                                        </svg>
                                                    </div>
                                                    <div
                                                        className="node-target flex transition-all duration-300 bg-surface-elevated w-6 h-6 border-border border rounded-md items-center justify-center"
                                                        id="target-2"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="12"
                                                            height="12"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="text-secondary transition-colors duration-300"
                                                        >
                                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                                            <circle cx="12" cy="7" r="4" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <NeuralRoutingAnimation containerRef={neuralRoutingRef} />
                                        </div>
                                    </div>
                                    <h3 className="text-white font-medium mb-2 flex items-center gap-2 font-geist reveal-on-scroll">
                                        Neural Routing
                                    </h3>
                                    <p className="text-xs leading-relaxed font-geist text-secondary reveal-on-scroll">
                                        Intelligent lead distribution based on intent signals, company size, and historical close rates.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-dashed divide-border border-dashed border-border border-b">
                            <div className="flex flex-col gap-3 group hover:bg-primary/5 transition-colors pt-6 pr-6 pb-6 pl-6 gap-x-3 gap-y-3 reveal-on-scroll">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    data-lucide="zap"
                                    aria-hidden="true"
                                    className="lucide lucide-zap w-5 h-5 text-secondary group-hover:text-primary transition-colors"
                                >
                                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
                                </svg>
                                <div>
                                    <h4 className="text-white text-sm font-medium font-geist">Real-time Sync</h4>
                                    <p className="text-[10px] text-secondary mt-1 font-geist reveal-on-scroll">Bi-directional CRM updates.</p>
                                </div>
                            </div>

                            <div className="p-6 flex flex-col gap-3 group hover:bg-primary/5 transition-colors reveal-on-scroll">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    data-lucide="shield-check"
                                    aria-hidden="true"
                                    className="lucide lucide-shield-check w-5 h-5 text-secondary group-hover:text-primary transition-colors"
                                >
                                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                                    <path d="m9 12 2 2 4-4" />
                                </svg>
                                <div>
                                    <h4 className="text-white text-sm font-medium font-geist">SOC2 Compliant</h4>
                                    <p className="text-[10px] text-secondary mt-1 font-geist reveal-on-scroll">Enterprise-grade security.</p>
                                </div>
                            </div>

                            <div className="p-6 flex flex-col gap-3 group hover:bg-primary/5 transition-colors reveal-on-scroll">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    data-lucide="globe"
                                    aria-hidden="true"
                                    className="lucide lucide-globe w-5 h-5 text-secondary group-hover:text-primary transition-colors"
                                >
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                                    <path d="M2 12h20" />
                                </svg>
                                <div>
                                    <h4 className="text-white text-sm font-medium font-geist">Global Data</h4>
                                    <p className="text-[10px] text-secondary mt-1 font-geist reveal-on-scroll">180+ countries supported.</p>
                                </div>
                            </div>

                            <div className="p-6 flex flex-col gap-3 group hover:bg-primary/5 transition-colors reveal-on-scroll">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    data-lucide="code-2"
                                    aria-hidden="true"
                                    className="lucide lucide-code-2 w-5 h-5 text-secondary group-hover:text-primary transition-colors"
                                >
                                    <path d="m18 16 4-4-4-4" />
                                    <path d="m6 8-4 4 4 4" />
                                    <path d="m14.5 4-5 16" />
                                </svg>
                                <div>
                                    <h4 className="text-white text-sm font-medium font-geist">API First</h4>
                                    <p className="text-[10px] text-secondary mt-1 font-geist reveal-on-scroll">Full programmatic access.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </>
    );
}
