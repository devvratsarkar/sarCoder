const CARD_STYLE = {
    background: 'linear-gradient(to bottom, #3f3f46 0%, #27272a 8%, #18181b 100%)',
    boxShadow:
        '0 20px 40px -10px rgba(0,0,0,0.9), inset 0 2px 2px rgba(255, 255, 255, 0.15), inset 0 -2px 4px rgba(0, 0, 0, 0.8), inset 0 0 10px rgba(0,0,0,0.5)',
    border: '1px solid #111',
};

const NOISE_BG =
    "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')";

const CARDS = [
    {
        id: 'preview',
        code: 'PREV.01',
        title: 'Design that matches the build',
        description: 'We keep design and development in lockstep so the final site or app looks and feels like what you signed off on.',
        variant: 'waveform' as const,
    },
    {
        id: 'delivery',
        code: 'RTE.02',
        title: 'Web, mobile, and content',
        description: 'Whether it’s a Next.js site, a Flutter app, or a WordPress or Shopify store—we pick the right tool and ship it.',
        variant: 'routing' as const,
    },
    {
        id: 'deploy',
        code: 'DEP.03',
        title: 'Smooth launches',
        description: 'We handle hosting, DNS, and go-live so you get a live product without the ops headache.',
        variant: 'failover' as const,
    },
    {
        id: 'pipeline',
        code: 'CI.04',
        title: 'Clear process',
        description: 'Structured sprints, regular check-ins, and one point of contact so nothing falls through the cracks.',
        variant: 'dial' as const,
    },
];

export default function PrecisionArchitecture() {
    return (
        <>
            <section className="custom_container_x relative">
                {/* Section Header */}
                <div className="mb-10 flex flex-col items-center gap-6 text-center max-w-4xl mx-auto relative">
                    <div className="relative z-10 flex flex-col gap-5">
                        <div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-full bg-zinc-600/5 blur-[80px] rounded-full pointer-events-none z-0"
                        />
                        <h2 className="relative z-10 text-4xl md:text-5xl font-medium tracking-tight font-geist text-white">
                            Right <span className="text-primary">tools.</span>
                            <br className="hidden sm:block" /> Real results.
                        </h2>
                        <p
                            className="relative z-10 text-base md:text-lg text-secondary font-geist max-w-2xl mx-auto leading-relaxed tracking-tight"
                            style={{ textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}
                        >
                            We don’t over-engineer. We choose the right tech, build it well, and leave you with something you can maintain and grow.
                        </p>
                    </div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mr-auto ml-auto pr-6 pl-6 gap-x-6 gap-y-6">
                    {CARDS.map((card, index) => (
                        <Card key={card.id} card={card} index={index} />
                    ))}
                </div>
            </section>
        </>
    );
}

function Card({
    card,
    index,
}: {
    card: (typeof CARDS)[number];
    index: number;
}) {
    const delayClass = index === 0 ? '' : index === 1 ? 'delay-[50ms]' : index === 2 ? 'delay-100' : 'delay-150';
    return (
        <div
            className={`flex flex-col group transition-all duration-500 hover:-translate-y-1 w-full rounded-3xl pt-6 pr-6 pb-6 pl-6 relative overflow-hidden ${delayClass}`}
            style={CARD_STYLE}
        >
            <div
                className="absolute inset-0 opacity-[0.15] pointer-events-none mix-blend-overlay"
                style={{ backgroundImage: NOISE_BG }}
            />
            <div className="relative z-10 flex justify-between items-center mb-6 pl-1 pr-1 mt-1">
                <span
                    className="text-xs font-bold text-secondary uppercase tracking-widest font-geist"
                    style={{ textShadow: '0px 1px 1px rgba(255,255,255,0.1), 0px -1px 1px rgba(0,0,0,0.8)' }}
                >
                    {card.code}
                </span>
                <div
                    className="relative w-4 h-4 rounded-full bg-zinc-900 flex items-center justify-center"
                    style={{ boxShadow: 'inset 0 2px 4px rgba(0,0,0,1), 0 1px 1px rgba(255,255,255,0.1)' }}
                >
                    <div
                        className="relative w-2.5 h-2.5 rounded-full bg-orange-950 border border-black transition-colors duration-500"
                        style={{ boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.2)' }}
                    >
                        <div
                            className="absolute inset-0 rounded-full bg-linear-to-br from-orange-300 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            style={{ boxShadow: '0 0 8px #f97316, inset 0 1px 2px rgba(255,255,255,0.8)' }}
                        />
                    </div>
                </div>
            </div>

            <div className="relative z-10 mb-8 mt-2">
                {card.variant === 'waveform' && <WaveformBlock />}
                {card.variant === 'routing' && <RoutingBlock />}
                {card.variant === 'failover' && <FailoverBlock />}
                {card.variant === 'dial' && <DialBlock />}
            </div>

            <div className="relative z-10 px-1 mt-auto">
                <h3
                    className="text-base text-zinc-200 font-medium tracking-tight mb-1 font-geist"
                    style={{ textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}
                >
                    {card.title}
                </h3>
                <p className="text-sm text-secondary font-geist leading-relaxed line-clamp-3">{card.description}</p>
            </div>
        </div>
    );
}

function WaveformBlock() {
    return (
        <div
            className="relative w-full h-32 bg-zinc-950 rounded-md overflow-hidden flex flex-col justify-end cursor-crosshair border border-black"
            style={{
                boxShadow:
                    'inset 0 8px 16px rgba(0,0,0,1), inset 0 2px 4px rgba(0,0,0,0.8), 0 1px 1px rgba(255,255,255,0.1)',
            }}
        >
            <div
                className="absolute inset-0 pointer-events-none z-30"
                style={{
                    background:
                        'linear-gradient(to bottom, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 40%, transparent 40%)',
                }}
            />
            <div
                className="absolute inset-0 pointer-events-none z-20"
                style={{
                    background: 'linear-gradient(rgba(255,255,255,0.03) 50%, transparent 50%)',
                    backgroundSize: '100% 4px',
                }}
            />
            <div
                className="absolute inset-0 opacity-20 z-0"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(249,115,22,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.4) 1px, transparent 1px)',
                    backgroundSize: '10px 10px',
                    backgroundPosition: '-1px -1px',
                }}
            />
            <div
                className="absolute top-0 bottom-0 left-0 w-16 bg-linear-to-r from-transparent via-orange-500/20 to-transparent -translate-x-full group-hover:translate-x-100 transition-transform duration-2000 ease-in-out z-10 pointer-events-none"
            />
            <svg className="absolute inset-0 w-full h-full z-10 pt-2" preserveAspectRatio="none" viewBox="0 0 100 40">
                <defs>
                    <linearGradient id="trace-gradient-prev01" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#f97316" stopOpacity={0.3} />
                        <stop offset="100%" stopColor="#f97316" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <path
                    d="M0,25 L5,26 L10,24 L15,18 L18,28 L22,8 L26,32 L30,22 L35,24 L45,21 L55,23 L60,19 L65,12 L70,25 L80,22 L90,26 L100,24 L100,40 L0,40 Z"
                    fill="url(#trace-gradient-prev01)"
                />
                <path
                    d="M0,25 L5,26 L10,24 L15,18 L18,28 L22,8 L26,32 L30,22 L35,24 L45,21 L55,23 L60,19 L65,12 L70,25 L80,22 L90,26 L100,24"
                    fill="none"
                    stroke="#f97316"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ filter: 'drop-shadow(0 0 4px rgba(249,115,22,1))' }}
                />
                <path
                    d="M0,28 L10,25 L15,22 L20,29 L25,12 L30,26 L35,23 L45,25 L55,20 L60,24 L65,16 L75,26 L85,24 L100,28"
                    fill="none"
                    stroke="#ea580c"
                    strokeWidth={0.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-30"
                />
            </svg>
            <div className="absolute top-2 left-2 z-20 flex flex-col">
                <span className="text-[9px] font-bold text-orange-500/80 uppercase tracking-widest font-geist drop-shadow-[0_0_2px_rgba(249,115,22,0.8)]">
                    Stream.IO
                </span>
            </div>
            <div className="absolute top-2 right-2 z-20 flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_6px_#f97316] animate-pulse" />
                <span className="text-[10px] font-mono font-medium text-orange-100 tracking-wider drop-shadow-[0_0_2px_rgba(249,115,22,0.8)]">
                    LIVE
                </span>
            </div>
            <div className="absolute bottom-0 inset-x-0 h-6 bg-black/80 border-t border-orange-500/30 backdrop-blur-md z-20 flex items-center justify-between px-3">
                <div className="flex items-center gap-2">
                    <span className="text-[8px] text-secondary font-mono">RX</span>
                    <span className="text-[10px] text-zinc-300 font-mono group-hover:text-zinc-100 transition-colors">
                        48.2k
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-[8px] text-secondary font-mono">TX</span>
                    <span className="text-[10px] text-zinc-300 font-mono group-hover:text-zinc-100 transition-colors">
                        12.1k
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-[8px] text-secondary font-mono">ERR</span>
                    <span className="text-[10px] text-green-400 font-mono drop-shadow-[0_0_3px_#22c55e]">0.00</span>
                </div>
            </div>
        </div>
    );
}

function RoutingBlock() {
    return (
        <div className="flex gap-3 h-32">
            <div
                className="w-9 h-full bg-zinc-900 rounded-sm border border-[#18181b] flex flex-col items-center justify-between py-2 px-1 z-10"
                style={{ boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.8), 0 1px 1px rgba(255,255,255,0.05)' }}
            >
                <span
                    className="text-[7px] font-bold text-secondary tracking-wider"
                    style={{ textShadow: '0 1px 0 rgba(255,255,255,0.1), 0 -1px 0 rgba(0,0,0,0.8)' }}
                >
                    LOAD
                </span>
                <div
                    className="w-full flex-1 mt-2 mb-1 flex flex-col justify-between gap-0.5 bg-zinc-950 p-1 rounded-xs shadow-inner border border-black"
                >
                    <div className="w-full flex-1 rounded-[1px] bg-red-950 border border-red-900/30 transition-all duration-100 group-hover:bg-red-500 group-hover:border-red-400 group-hover:shadow-[0_0_6px_#ef4444] delay-0 group-hover:delay-400" />
                    <div className="w-full flex-1 rounded-[1px] bg-orange-950 border border-orange-900/30 transition-all duration-100 group-hover:bg-orange-500 group-hover:border-orange-400 group-hover:shadow-[0_0_6px_#f97316] delay-0 group-hover:delay-300" />
                    <div className="w-full flex-1 rounded-[1px] bg-orange-950 border border-orange-900/30 transition-all duration-100 group-hover:bg-orange-500 group-hover:border-orange-400 group-hover:shadow-[0_0_6px_#f97316] delay-0 group-hover:delay-200" />
                    <div className="w-full flex-1 rounded-[1px] bg-green-950 border border-green-900/30 transition-all duration-100 group-hover:bg-green-500 group-hover:border-green-400 group-hover:shadow-[0_0_6px_#22c55e] delay-0 group-hover:delay-100" />
                    <div className="w-full flex-1 rounded-[1px] bg-green-500 border border-green-400 shadow-[0_0_6px_#22c55e]" />
                </div>
            </div>
            <div
                className="flex-1 h-full bg-zinc-950 rounded-sm relative border border-black overflow-hidden z-10"
                style={{
                    boxShadow:
                        'inset 0 8px 16px rgba(0,0,0,1), inset 0 2px 4px rgba(0,0,0,0.8), 0 1px 1px rgba(255,255,255,0.1)',
                }}
            >
                <div
                    className="absolute inset-0 pointer-events-none z-30"
                    style={{
                        background:
                            'linear-gradient(to bottom, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 40%, transparent 40%)',
                    }}
                />
                <div
                    className="absolute inset-0 opacity-20 z-0"
                    style={{
                        backgroundImage:
                            'linear-gradient(rgba(249,115,22,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.4) 1px, transparent 1px)',
                        backgroundSize: '8px 8px',
                        backgroundPosition: '-1px -1px',
                    }}
                />
                <div className="absolute left-1/2 -translate-x-1/2 top-2 flex items-center gap-1 z-20 transition-opacity duration-300 delay-0 group-hover:delay-400 opacity-100 group-hover:opacity-30">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_4px_#22c55e]" />
                    <span className="text-[7px] font-mono text-green-400 tracking-wider font-bold">WEB ACTIVE</span>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 bottom-2 flex items-center gap-1 z-20 transition-opacity duration-300 delay-0 group-hover:delay-400 opacity-30 group-hover:opacity-100">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_4px_#f97316]" />
                    <span className="text-[7px] font-mono text-orange-400 tracking-wider font-bold">MOBILE ACTIVE</span>
                </div>
                <svg className="absolute inset-0 w-full h-full z-10" viewBox="0 0 200 100" preserveAspectRatio="none">
                    <path
                        d="M 20 50 L 60 50 L 90 25 L 160 25"
                        fill="none"
                        stroke="#27272a"
                        strokeWidth={3}
                        strokeLinejoin="round"
                    />
                    <path
                        d="M 60 50 L 90 75 L 160 75"
                        fill="none"
                        stroke="#27272a"
                        strokeWidth={3}
                        strokeLinejoin="round"
                    />
                    <path
                        className="transition-opacity duration-300 delay-0 group-hover:delay-400 opacity-100 group-hover:opacity-0"
                        d="M 20 50 L 60 50 L 90 25 L 160 25"
                        fill="none"
                        stroke="#22c55e"
                        strokeWidth={3}
                        strokeLinejoin="round"
                        style={{ filter: 'drop-shadow(0 0 5px rgba(34,197,94,0.8))' }}
                    />
                    <path
                        className="transition-opacity duration-300 delay-0 group-hover:delay-400 opacity-0 group-hover:opacity-100"
                        d="M 20 50 L 60 50 L 90 75 L 160 75"
                        fill="none"
                        stroke="#f97316"
                        strokeWidth={3}
                        strokeLinejoin="round"
                        style={{ filter: 'drop-shadow(0 0 5px rgba(249,115,22,0.8))' }}
                    />
                    <circle cx={20} cy={50} r={4} fill="#27272a" stroke="#71717a" strokeWidth={2} />
                    <circle cx={60} cy={50} r={2.5} fill="#71717a" />
                    <circle cx={160} cy={25} r={4} fill="#27272a" stroke="#71717a" strokeWidth={2} />
                    <circle cx={160} cy={75} r={4} fill="#27272a" stroke="#71717a" strokeWidth={2} />
                </svg>
            </div>
        </div>
    );
}

function FailoverBlock() {
    return (
        <div
            className="relative w-full h-32 bg-[#0a0a0c] rounded-sm border border-black overflow-hidden cursor-crosshair"
            style={{ boxShadow: 'inset 0 8px 16px rgba(0,0,0,1), 0 1px 1px rgba(255,255,255,0.05)' }}
        >
            <div
                className="absolute inset-0 opacity-[0.25] pointer-events-none"
                style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 2px, transparent 2px, transparent 6px)',
                }}
            />
            <div
                className="absolute top-1/2 left-20 right-20 h-3 bg-zinc-950 border-t border-b border-black -translate-y-1/2 z-0"
                style={{ boxShadow: 'inset 0 4px 8px rgba(0,0,0,1)' }}
            >
                <div className="absolute top-0.75 bottom-0.75 left-1 right-1 flex flex-col justify-between opacity-40">
                    <div className="w-full h-px bg-orange-600 shadow-[0_0_2px_#ea580c]" />
                    <div className="w-full h-px bg-orange-600 shadow-[0_0_2px_#ea580c]" />
                </div>
            </div>
            <div
                className="absolute top-1/2 left-[4.8rem] w-9 h-7 -translate-y-1/2 rounded-xs transition-all duration-400 ease-in-out group-hover:left-[calc(100%-7.05rem)] z-10 flex flex-col justify-center items-center gap-0.75"
                style={{
                    background: 'linear-gradient(to bottom, #71717a 0%, #3f3f46 100%)',
                    border: '1px solid #18181b',
                    boxShadow:
                        '0 4px 12px rgba(0,0,0,1), inset 0 1px 1px rgba(255,255,255,0.4), inset 0 -1px 2px rgba(0,0,0,0.4)',
                }}
            >
                <div className="flex gap-4">
                    <div
                        className="w-1.5 h-1.5 rounded-full bg-zinc-900 shadow-[inset_0_1px_2px_rgba(0,0,0,1),0_1px_0_rgba(255,255,255,0.2)]"
                    />
                    <div
                        className="w-1.5 h-1.5 rounded-full bg-zinc-900 shadow-[inset_0_1px_2px_rgba(0,0,0,1),0_1px_0_rgba(255,255,255,0.2)]"
                    />
                </div>
                <div className="w-5 h-[1.5px] bg-black opacity-80 shadow-[0_1px_0_rgba(255,255,255,0.2)]" />
                <div className="w-5 h-[1.5px] bg-black opacity-80 shadow-[0_1px_0_rgba(255,255,255,0.2)]" />
            </div>
            <div
                className="absolute left-3 top-2 bottom-2 w-16 rounded-[3px] flex flex-col items-center p-1.5 z-20 transition-all duration-300"
                style={{
                    background: 'linear-gradient(to bottom, #52525b 0%, #3f3f46 10%, #27272a 100%)',
                    border: '1px solid #18181b',
                    boxShadow:
                        '6px 0 12px -4px rgba(0,0,0,0.9), inset 0 1px 2px rgba(255,255,255,0.3), inset 0 -2px 4px rgba(0,0,0,0.8)',
                }}
            >
                <div className="w-full h-1.5 bg-zinc-900 rounded-[1px] shadow-[inset_0_2px_2px_rgba(0,0,0,1)] mb-2" />
                <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e,inset_0_1px_2px_rgba(255,255,255,0.8)] border border-black/50 transition-colors duration-200 delay-0 group-hover:bg-red-600 group-hover:shadow-[0_0_8px_#dc2626,inset_0_1px_2px_rgba(255,255,255,0.8)] group-hover:delay-100 mb-2" />
                <div
                    className="w-full h-5 bg-zinc-950 rounded-xs border border-black flex items-center justify-center shadow-[inset_0_2px_4px_rgba(0,0,0,1)] relative overflow-hidden mb-auto"
                >
                    <div
                        className="absolute inset-0 opacity-20 pointer-events-none"
                        style={{
                            backgroundImage:
                                'linear-gradient(rgba(255,255,255,0.03) 50%, transparent 50%)',
                            backgroundSize: '100% 2px',
                        }}
                    />
                    <span className="text-[9px] font-mono font-bold text-green-400 drop-shadow-[0_0_2px_rgba(34,197,94,0.8)] transition-colors duration-200 delay-0 group-hover:text-red-500 group-hover:drop-shadow-[0_0_2px_rgba(220,38,38,0.8)] group-hover:delay-100 tracking-wider">
                        PRI
                    </span>
                </div>
                <div className="w-full flex-1 flex flex-col justify-end gap-0.75 pb-1 opacity-60">
                    {[1, 2, 3].map((i) => (
                        <div
                            key={i}
                            className="w-full h-0.5 bg-zinc-950 shadow-[inset_0_1px_1px_rgba(0,0,0,1),0_1px_0_rgba(255,255,255,0.1)] rounded-full"
                        />
                    ))}
                </div>
            </div>
            <div
                className="absolute right-3 top-2 bottom-2 w-16 rounded-[3px] flex flex-col items-center p-1.5 z-20 transition-all duration-300"
                style={{
                    background: 'linear-gradient(to bottom, #52525b 0%, #3f3f46 10%, #27272a 100%)',
                    border: '1px solid #18181b',
                    boxShadow:
                        '-6px 0 12px -4px rgba(0,0,0,0.9), inset 0 1px 2px rgba(255,255,255,0.3), inset 0 -2px 4px rgba(0,0,0,0.8)',
                }}
            >
                <div className="w-full h-1.5 bg-zinc-900 rounded-[1px] shadow-[inset_0_2px_2px_rgba(0,0,0,1)] mb-2" />
                <div className="w-3 h-3 rounded-full bg-yellow-600/30 shadow-[inset_0_1px_2px_rgba(0,0,0,0.8)] border border-black/50 transition-colors duration-200 delay-0 group-hover:bg-green-500 group-hover:shadow-[0_0_8px_#22c55e,inset_0_1px_2px_rgba(255,255,255,0.8)] group-hover:delay-300 mb-2" />
                <div
                    className="w-full h-5 bg-zinc-950 rounded-xs border border-black flex items-center justify-center shadow-[inset_0_2px_4px_rgba(0,0,0,1)] relative overflow-hidden mb-auto"
                >
                    <div
                        className="absolute inset-0 opacity-20 pointer-events-none"
                        style={{
                            backgroundImage:
                                'linear-gradient(rgba(255,255,255,0.03) 50%, transparent 50%)',
                            backgroundSize: '100% 2px',
                        }}
                    />
                    <span className="text-[9px] font-mono font-bold text-yellow-600/40 transition-colors duration-200 delay-0 group-hover:text-green-400 group-hover:drop-shadow-[0_0_2px_rgba(34,197,94,0.8)] group-hover:delay-300 tracking-wider">
                        SEC
                    </span>
                </div>
                <div className="w-full flex-1 flex flex-col justify-end gap-0.75 pb-1 opacity-60">
                    {[1, 2, 3].map((i) => (
                        <div
                            key={i}
                            className="w-full h-0.5 bg-zinc-950 shadow-[inset_0_1px_1px_rgba(0,0,0,1),0_1px_0_rgba(255,255,255,0.1)] rounded-full"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

function DialBlock() {
    return (
        <div className="flex justify-center items-center h-32">
            <div
                className="relative w-28 h-28 rounded-full flex items-center justify-center"
                style={{
                    background: 'linear-gradient(145deg, #52525b 0%, #3f3f46 20%, #27272a 100%)',
                    boxShadow:
                        '0 10px 20px -5px rgba(0,0,0,0.9), inset 0 2px 4px rgba(255,255,255,0.3), inset 0 -2px 4px rgba(0,0,0,0.8)',
                    border: '1px solid #18181b',
                }}
            >
                <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 100 100">
                    <circle cx={50} cy={50} r={45} fill="none" stroke="#000" strokeWidth={2.5} strokeDasharray="2 4" />
                    <circle
                        cx={50}
                        cy={50}
                        r={45}
                        fill="none"
                        stroke="#fff"
                        strokeWidth={1}
                        strokeDasharray="2 4"
                        opacity={0.5}
                        transform="translate(0, 1)"
                    />
                </svg>
                <div
                    className="relative w-18 h-18 rounded-full bg-[#0a0a0c] border border-black overflow-hidden flex items-center justify-center cursor-crosshair"
                    style={{
                        boxShadow:
                            'inset 0 8px 16px rgba(0,0,0,1), inset 0 2px 4px rgba(0,0,0,0.8), 0 1px 1px rgba(255,255,255,0.1)',
                    }}
                >
                    <div
                        className="absolute inset-0 pointer-events-none z-30"
                        style={{
                            background:
                                'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.02) 40%, transparent 40%)',
                        }}
                    />
                    <div
                        className="absolute inset-0 z-0 opacity-20"
                        style={{
                            backgroundImage:
                                'radial-gradient(circle, rgba(249,115,22,0.6) 1px, transparent 1px)',
                            backgroundSize: '3px 3px',
                        }}
                    />
                    <div className="absolute inset-1 rounded-full border border-orange-500/20 z-10" />
                    <div className="absolute inset-3.5 rounded-full border border-orange-500/20 z-10" />
                    <div className="absolute top-0 bottom-0 left-1/2 w-px bg-orange-500/30 z-10" />
                    <div className="absolute left-0 right-0 top-1/2 h-px bg-orange-500/30 z-10" />
                    <div
                        className="absolute inset-0 origin-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 delay-100 animate-spin"
                        style={{
                            background:
                                'conic-gradient(from 0deg, transparent 60%, rgba(249,115,22,0.1) 90%, rgba(249,115,22,0.9) 100%)',
                            animationDuration: '2s',
                        }}
                    />
                    <div className="absolute w-1.5 h-1.5 rounded-full bg-orange-500 z-20 shadow-[0_0_6px_#f97316]" />
                    <div className="absolute top-3 left-3 w-1 h-1 rounded-full bg-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 shadow-[0_0_4px_#fdba74]" />
                    <div className="absolute bottom-4 left-6 w-1.5 h-1.5 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 shadow-[0_0_6px_#f97316]" />
                    <div className="absolute top-5 right-3 w-1 h-1 rounded-full bg-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 shadow-[0_0_6px_#4ade80]" />
                    <div className="absolute top-3 right-1 w-5 h-5 border-[1.5px] border-green-500/0 group-hover:border-green-500/80 rounded-[1px] transition-all duration-300 z-20 scale-150 group-hover:scale-100 opacity-0 group-hover:opacity-100" style={{ boxShadow: 'rgba(74, 222, 128, 0.2) 0px 0px 4px inset' }} />
                </div>
                <div
                    className="absolute -right-4 -bottom-1 w-12 h-5 bg-zinc-950 rounded-xs border border-black flex items-center justify-center z-20"
                    style={{
                        boxShadow:
                            'inset 0 2px 4px rgba(0,0,0,1), 0 4px 6px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.1)',
                    }}
                >
                    <span className="text-[8px] font-mono font-bold text-secondary group-hover:text-green-400 transition-colors duration-300 delay-0 group-hover:delay-1200 tracking-wider">
                        CAL.OK
                    </span>
                </div>
                <div className="absolute -right-2 bottom-4 w-4 h-0.5 bg-zinc-800 border-t border-b border-black shadow-[0_1px_1px_rgba(255,255,255,0.05)] z-10 -rotate-15" />
            </div>
        </div>
    );
}
