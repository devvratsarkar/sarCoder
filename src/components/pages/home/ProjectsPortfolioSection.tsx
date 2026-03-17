import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";

const CATEGORIES = [
    { id: "all", label: "All", count: null },
    { id: "web", label: "Web", count: 4 },
    { id: "mobile", label: "Mobile", count: 2 },
    { id: "design", label: "Design", count: 3 },
    { id: "branding", label: "Branding", count: 2 },
    { id: "ecommerce", label: "E‑commerce", count: 2 },
] as const;

const CATEGORY_LABELS: Record<CategoryId, string> = {
    all: "All",
    web: "Web",
    mobile: "Mobile",
    design: "Design",
    branding: "Branding",
    ecommerce: "E‑commerce",
};

type CategoryId = (typeof CATEGORIES)[number]["id"];

/* Dummy images: picsum.photos with seed = project id for consistent per-project thumbnails */
const getProjectImage = (id: number, width: number, height: number) =>
    `https://picsum.photos/seed/${id + 100}/${width}/${height}`;

const PROJECTS = [
    { id: 1, title: "B2B SaaS Dashboard", category: "web" as const, tagline: "Next.js + React admin and reporting", year: "24", accent: "cyan", size: "large" as const },
    { id: 2, title: "Field Service App", category: "mobile" as const, tagline: "Flutter app for technicians and dispatch", year: "24", accent: "emerald", size: "default" as const },
    { id: 3, title: "Rebrand & Web Refresh", category: "branding" as const, tagline: "Brand guidelines and new site on WordPress", year: "23", accent: "violet", size: "default" as const },
    { id: 4, title: "Shopify Store Build", category: "ecommerce" as const, tagline: "Custom theme and checkout flow", year: "24", accent: "amber", size: "default" as const },
    { id: 5, title: "Design System", category: "design" as const, tagline: "Component library and UI patterns for product", year: "23", accent: "primary", size: "default" as const },
    { id: 6, title: "Landing & Blog", category: "web" as const, tagline: "Marketing site and Strapi CMS", year: "24", accent: "sky", size: "default" as const },
    { id: 7, title: "Health & Wellness App", category: "mobile" as const, tagline: "React Native iOS and Android", year: "23", accent: "rose", size: "default" as const },
    { id: 8, title: "E‑commerce Redesign", category: "design" as const, tagline: "UI/UX and visual refresh for online store", year: "24", accent: "teal", size: "default" as const },
    { id: 9, title: "Wix Store Migration", category: "ecommerce" as const, tagline: "Move from Wix to Shopify with new design", year: "23", accent: "orange", size: "default" as const },
    { id: 10, title: "Client Portal", category: "web" as const, tagline: "Node.js backend, React front-end", year: "24", accent: "primary", size: "default" as const },
    { id: 11, title: "Social & Brand Pack", category: "branding" as const, tagline: "Social templates and content strategy", year: "23", accent: "indigo", size: "default" as const },
    { id: 12, title: "App Prototypes", category: "design" as const, tagline: "Interactive prototypes for funding round", year: "24", accent: "cyan", size: "default" as const },
];

const filteredProjects = (active: CategoryId) =>
    active === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

const accentMap: Record<string, string> = {
    cyan: "from-cyan-500/25 via-primary/10 to-transparent",
    emerald: "from-emerald-500/20 via-primary/5 to-transparent",
    violet: "from-violet-500/20 via-primary/5 to-transparent",
    amber: "from-amber-500/20 via-primary/5 to-transparent",
    primary: "from-primary/30 via-primary/10 to-transparent",
    sky: "from-sky-500/20 via-primary/5 to-transparent",
    rose: "from-rose-500/20 via-primary/5 to-transparent",
    teal: "from-teal-500/20 via-primary/5 to-transparent",
    orange: "from-orange-500/20 via-primary/5 to-transparent",
    indigo: "from-indigo-500/20 via-primary/5 to-transparent",
};

function ProjectCard({
    project,
    index,
}: {
    project: (typeof PROJECTS)[number];
    index: number;
}) {
    const gradient = accentMap[project.accent] ?? accentMap.primary;

    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: index * 0.03 }}
            className={`group relative`}
        >
            <a
                href="#"
                className="portfolio-card flex flex-col h-full relative overflow-hidden rounded-xl border border-white/6 bg-surface-elevated/80 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-surface-elevated hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.04)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
            >
                {/* Subtle hover tint */}
                <div
                    className={`absolute inset-0 z-10 bg-linear-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                    aria-hidden
                />

                {/* Image */}
                <div
                    className={`relative w-full overflow-hidden bg-surface shrink-0 aspect-16/10 min-h-50 sm:min-h-70`}
                >
                    <img
                        src={getProjectImage(project.id, 800, 500)}
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent pointer-events-none" aria-hidden />
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                        <span className="rounded-md bg-black/50 px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-white/90 backdrop-blur-sm">
                            {CATEGORY_LABELS[project.category]}
                        </span>
                        <span className="text-[10px] font-mono text-white/60 tabular-nums">{project.year}</span>
                    </div>
                </div>

                {/* Content */}
                <div className="relative flex flex-1 flex-col border-t border-white/6 p-4 sm:p-5">
                    <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0 flex-1">
                            <h3 className="text-[15px] sm:text-base font-semibold text-white tracking-tight group-hover:text-primary transition-colors duration-300">
                                {project.title}
                            </h3>
                            <p className="mt-1 text-xs sm:text-sm text-secondary/90 leading-snug line-clamp-2">
                                {project.tagline}
                            </p>
                        </div>
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-primary/10 group-hover:border-primary/30">
                            <HiOutlineArrowTopRightOnSquare className="size-4" aria-hidden />
                        </span>
                    </div>
                </div>
            </a>
        </motion.article>
    );
}

export default function ProjectsPortfolioSection() {
    const [activeCategory, setActiveCategory] = useState<CategoryId>("all");
    const projects = filteredProjects(activeCategory);

    return (
        <>
            <section className="custom_container_x relative">
                <div className="mb-10">
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
                        <div>
                            <p className="text-primary/80 text-[11px] font-medium uppercase tracking-[0.25em] mb-4">
                                Portfolio
                            </p>
                            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white leading-[1.15]">
                                Selected{" "}
                                <span className="text-primary">projects</span>
                                <span className="text-white"> we ship.</span>
                            </h2>
                            <p className="mt-4 text-sm text-secondary/90 max-w-lg leading-relaxed">
                                Websites, apps, stores, and brand work—a sample of recent projects across our stack.
                            </p>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium tabular-nums">
                                <span className="text-primary">{projects.length}</span>
                                <span className="text-secondary/90 ml-1.5">projects</span>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
                    {/* Project grid */}
                    <div className="flex-1 min-w-0">
                        <AnimatePresence mode="wait">
                            {projects.length > 0 ? (
                                <motion.div
                                    key={activeCategory}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5"
                                >
                                    {projects.map((project, index) => (
                                        <ProjectCard key={project.id} project={project} index={index} />
                                    ))}
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="empty"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="flex flex-col items-center justify-center rounded-xl border border-dashed border-white/10 bg-surface-elevated/50 py-20 text-center"
                                >
                                    <p className="text-secondary">No projects in this category yet.</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Category sidebar */}
                    <aside className="lg:w-48 xl:w-52 shrink-0 self-start sticky top-28">
                        <p className="text-xs font-medium uppercase tracking-widest text-secondary/80 mb-3 pl-1">
                            Filter
                        </p>
                        <nav
                            className="flex flex-row lg:flex-col gap-0.5 flex-wrap lg:flex-nowrap justify-center lg:justify-stretch"
                            aria-label="Filter projects by category"
                        >
                            {CATEGORIES.map((cat, i) => {
                                const isActive = activeCategory === cat.id;
                                const count = cat.count ?? PROJECTS.length;
                                return (
                                    <button
                                        key={cat.id}
                                        type="button"
                                        onClick={() => setActiveCategory(cat.id)}
                                        className={`
                                                portfolio-tab cursor-pointer relative flex items-center gap-3 w-full text-left px-3.5 py-3 rounded-lg text-sm font-medium transition-all duration-200
                                                ${isActive
                                                ? "bg-primary/10 text-primary border border-primary/30"
                                                : "text-secondary/90 border border-transparent hover:bg-white/4 hover:text-white"
                                            }
                                            `}
                                        aria-pressed={isActive}
                                        aria-current={isActive ? "true" : undefined}
                                    >
                                        {isActive && (
                                            <motion.span
                                                layoutId="portfolio-tab-indicator"
                                                className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 rounded-full bg-primary"
                                                transition={{ type: "spring", bounce: 0.2, duration: 0.35 }}
                                                aria-hidden
                                            />
                                        )}
                                        <span className="font-mono text-[10px] text-secondary/60 w-4 tabular-nums shrink-0">
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                        <span className="flex-1 truncate">{cat.label}</span>
                                        <span className={`text-xs font-mono tabular-nums shrink-0 ${isActive ? "text-primary/90" : "text-secondary/50"}`}>
                                            {count}
                                        </span>
                                    </button>
                                );
                            })}
                        </nav>
                    </aside>
                </div>
            </section>
        </>
    );
}
