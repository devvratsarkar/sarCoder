const SERVICES = [
    { label: 'Website Development', description: 'Full-stack and front-end web applications' },
    { label: 'Website Design', description: 'UI/UX and visual design for the web' },
    { label: 'Mobile App Development', description: 'iOS & Android native and cross-platform' },
    { label: 'Social Media Management', description: 'Strategy, content, and community' },
];

const CDN_ICONS = 'https://cdn.simpleicons.org';
const TECH_ICON_COLOR = 'ffffff'; // white for dark theme

const TECHNOLOGIES = [
    { name: 'HTML', category: 'Core', slug: 'html5' },
    { name: 'CSS', category: 'Core', slug: 'css' },
    { name: 'JavaScript', category: 'Core', slug: 'javascript' },
    { name: 'Next.js', category: 'Web', slug: 'nextdotjs' },
    { name: 'React.js', category: 'Web', slug: 'react' },
    { name: 'Node.js', category: 'Backend', slug: 'nodedotjs' },
    { name: 'Flutter', category: 'Mobile', slug: 'flutter' },
    { name: 'React Native', category: 'Mobile', slug: 'react' },
    { name: 'WordPress', category: 'CMS', slug: 'wordpress' },
    { name: 'Shopify', category: 'E‑commerce', slug: 'shopify' },
    { name: 'Wix', category: 'Website builder', slug: 'wix' },
    { name: 'Strapi', category: 'CMS', slug: 'strapi' },
];

export default function WeWorkWith() {
    return (
        <section className="custom_container_x py-16 md:py-24">
            <div className="relative">
                <div className="absolute -top-12 -left-12 w-32 h-32 bg-primary/10 rounded-full blur-3xl" aria-hidden="true" />
                <div className="absolute top-1/2 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" aria-hidden="true" />

                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 z-10 relative">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="uppercase text-xs font-semibold text-primary tracking-widest font-geist">
                                We work with
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-light tracking-tighter mb-4 leading-[1.1]">
                            Services & <span className="text-primary drop-shadow-[0_0_24px_rgba(var(--primary-rgb),0.4)]">tech stack.</span>
                        </h2>
                        <p className="text-lg max-w-md text-secondary">
                            From websites and mobile apps to social media—powered by modern frameworks and platforms you can scale on.
                        </p>
                    </div>

                    {/* Right: stats + tech logo preview */}
                    <div className="flex flex-col items-end gap-5 shrink-0">
                        <div className="flex items-center gap-3 text-sm flex-wrap justify-end">
                            <span className="rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-3 py-1.5 text-neutral-300 transition-colors hover:border-primary/30 hover:bg-primary/5">
                                <span className="text-primary font-medium">{SERVICES.length}</span> services
                            </span>
                            <span className="rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-3 py-1.5 text-neutral-300 transition-colors hover:border-primary/30 hover:bg-primary/5">
                                <span className="text-primary font-medium">{TECHNOLOGIES.length}</span> technologies
                            </span>
                        </div>
                        <div className="flex flex-wrap justify-end gap-2 max-w-50 sm:max-w-none">
                            {TECHNOLOGIES.slice(0, 6).map((tech) => (
                                <div
                                    key={tech.name}
                                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-black/40 transition-all duration-300 hover:border-primary/60 hover:bg-primary/10 hover:scale-110 hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.15)]"
                                    title={tech.name}
                                >
                                    <img
                                        src={`${CDN_ICONS}/${tech.slug}/${TECH_ICON_COLOR}`}
                                        alt=""
                                        width={22}
                                        height={22}
                                        className="h-5.5 w-5.5 object-contain opacity-90"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-12 h-px w-full bg-linear-to-r from-border via-primary/20 to-transparent" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
                {/* Services we offer */}
                <div className="group/card relative overflow-hidden rounded-2xl border border-white/10 p-6 sm:p-8 transition-all duration-300 hover:border-primary/20 hover:shadow-[0_0_40px_rgba(var(--primary-rgb),0.06)]">
                    <div className="relative">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center ring-1 ring-primary/20">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={18}
                                    height={18}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-primary"
                                >
                                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                    <path d="M2 17l10 5 10-5" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold tracking-tight text-white">
                                Services we offer
                            </h3>
                        </div>
                        <ul className="space-y-1">
                            {SERVICES.map((item) => (
                                <li
                                    key={item.label}
                                    className="flex items-start gap-3 text-sm rounded-lg py-3 px-2 -mx-2 transition-colors duration-200 hover:bg-white/5"
                                >
                                    <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                    <div>
                                        <span className="text-neutral-100 font-medium">{item.label}</span>
                                        <p className="text-neutral-400 mt-0.5">{item.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Technologies we use */}
                <div className="group/card relative overflow-hidden rounded-2xl border border-white/10 p-6 sm:p-8 transition-all duration-300 hover:border-primary/20 hover:shadow-[0_0_40px_rgba(var(--primary-rgb),0.06)]">
                    <div className="relative">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center ring-1 ring-primary/20">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={18}
                                    height={18}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-primary"
                                >
                                    <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
                                    <path d="M8.5 8.5v.01" />
                                    <path d="M16 15.5v.01" />
                                    <path d="M12 12v.01" />
                                    <path d="M11 17v.01" />
                                    <path d="M7 14v.01" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold tracking-tight text-white">
                                Technologies we use
                            </h3>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {TECHNOLOGIES.map((tech) => (
                                <a
                                    key={tech.name}
                                    href="#"
                                    className="group inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-white/10 bg-black/30 text-neutral-200 text-sm transition-all duration-300 hover:border-primary/80 hover:text-primary hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.12)] hover:scale-[1.02]"
                                >
                                    <img
                                        src={`${CDN_ICONS}/${tech.slug}/${TECH_ICON_COLOR}`}
                                        alt=""
                                        width={24}
                                        height={24}
                                        className="h-6 w-6 object-contain shrink-0 opacity-90 group-hover:opacity-100 transition-opacity"
                                    />
                                    <span className="text-primary/90 text-xs font-medium">{tech.category}</span>
                                    <span className="text-white font-medium">{tech.name}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}
