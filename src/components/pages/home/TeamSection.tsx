import { motion } from "framer-motion";
import ScannerButton from "../../ui/ScannerButton";
import { HiOutlineArrowRight, HiOutlinePlus } from "react-icons/hi";
import { SiLinkedin, SiX, SiGithub } from "react-icons/si";

type SocialLink = { href: string; icon: "linkedin" | "x" | "github" };
type TeamMember = {
  name: string;
  role: string;
  image: string;
  focus: string;
  tagline?: string;
  social?: SocialLink[];
};

const TEAM: TeamMember[] = [
  {
    name: "Bryan Gill",
    role: "Lead Creative",
    image: "/image/user/best-employees.png",
    focus: "Brand identity & visual direction",
    tagline: "We don’t just design—we craft the story.",
    social: [
      { href: "https://linkedin.com", icon: "linkedin" },
      { href: "https://x.com", icon: "x" },
    ],
  },
  {
    name: "Sarah Chen",
    role: "UI/UX Lead",
    image: "/image/user/user2.jpg",
    focus: "Product design & user experience",
    social: [
      { href: "https://linkedin.com", icon: "linkedin" },
      { href: "https://x.com", icon: "x" },
      { href: "https://github.com", icon: "github" },
    ],
  },
  {
    name: "Marcus Reed",
    role: "Full-Stack Developer",
    image: "/image/user/user3.jpg",
    focus: "Web & mobile architecture",
    social: [
      { href: "https://linkedin.com", icon: "linkedin" },
      { href: "https://github.com", icon: "github" },
    ],
  },
  {
    name: "Elena Vasquez",
    role: "Motion & Animation",
    image: "/image/user/user4.jpg",
    focus: "Motion design & storytelling",
    social: [
      { href: "https://linkedin.com", icon: "linkedin" },
      { href: "https://x.com", icon: "x" },
    ],
  },
];

const SOCIAL_ICONS = { linkedin: SiLinkedin, x: SiX, github: SiGithub };

function SocialLinks({
  links,
  className = "",
  variant = "default",
}: {
  links: SocialLink[];
  className?: string;
  variant?: "default" | "featured";
}) {
  if (!links?.length) return null;
  const size = variant === "featured" ? "size-5" : "size-4";
  const gap = variant === "featured" ? "gap-3" : "gap-2";
  const base =
    "inline-flex items-center justify-center rounded-lg border border-primary/35 bg-primary/15 text-primary shadow-[0_0_20px_-4px_rgba(var(--primary-rgb),0.25)] transition-all duration-300 hover:border-1 hover:border-primary hover:bg-primary/25 hover:text-white hover:shadow-[0_0_28px_-4px_rgba(var(--primary-rgb),0.5),0_0_0_1px_rgba(var(--primary-rgb),0.3)]";
  const padding = variant === "featured" ? "p-3" : "p-2.5";
  return (
    <div
      className={`flex items-center ${gap} ${className}`}
      role="list"
      aria-label="Social links"
    >
      {links.map((link) => {
        const Icon = SOCIAL_ICONS[link.icon];
        return (
          <motion.a
            key={link.icon}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${base} ${padding}`}
            initial={false}
            aria-label={link.icon}
          >
            <Icon className={size} />
          </motion.a>
        );
      })}
    </div>
  );
}

const easeOut = [0.25, 0.46, 0.45, 0.94] as const;

export default function TeamSection() {
  const featured = TEAM[0];
  const rest = TEAM.slice(1);

  return (
    <>
      <section className="custom_container_x relative overflow-hidden py-6">
        {/* Ambient + grid texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `
              radial-gradient(ellipse 100% 60% at 30% 0%, rgba(var(--primary-rgb),0.2), transparent 45%),
              linear-gradient(rgba(var(--primary-rgb),0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(var(--primary-rgb),0.03) 1px, transparent 1px)
            `,
            backgroundSize: "100% 100%, 48px 48px, 48px 48px",
          }}
          aria-hidden
        />
        <div className="pointer-events-none absolute -right-32 top-1/4 h-105 w-105 rounded-full bg-primary/10 blur-[120px]" aria-hidden />

        <div className="relative z-10">
          {/* Header: bold and editorial */}
          <motion.div
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: easeOut }}
          >
            <div className="max-w-2xl">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary/90 mb-3">
                The people behind the pixels
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tighter text-white leading-[1.05]">
                Creative <span className="italic text-primary">minds.</span>
                <br />
                <span className="text-secondary/80 font-normal">Real impact.</span>
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <span className="hidden sm:inline-block h-px flex-1 max-w-16 bg-linear-to-r from-primary/40 to-transparent" />
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
                <ScannerButton
                  className="btn-scan-solid shrink-0"
                  endIcon={<HiOutlineArrowRight className="size-4" aria-hidden />}
                >
                  Work with us
                </ScannerButton>
              </motion.div>
            </div>
          </motion.div>

          {/* Bento grid: featured hero + 4 cells (3 team + 1 CTA) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5 lg:grid-rows-[1fr_1fr]">
            {/* Featured card — left, spans 2 rows on lg */}
            <motion.article
              className="lg:col-span-5 lg:row-span-2 lg:h-full relative group order-1"
              initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: easeOut }}
            >
              <div className="relative h-full min-h-85 lg:min-h-120 rounded-3xl overflow-hidden border border-white/10 bg-linear-to-b from-surface-elevated/95 to-surface-elevated/50 transition-all duration-500 hover:border-primary/70 hover:shadow-[0_0_0_1px_rgba(var(--primary-rgb),0.2),0_24px_48px_-12px_rgba(0,0,0,0.6),0_48px_96px_-24px_rgba(0,0,0,0.4),0_0_80px_-24px_rgba(var(--primary-rgb),0.25)]">
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none z-1" aria-hidden />
                <div
                  className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-60 transition-opacity duration-500 group-hover:opacity-80"
                  style={{
                    background: "linear-gradient(145deg, transparent 45%, rgba(var(--primary-rgb),0.08) 70%, transparent 85%)",
                  }}
                />
                <div className="absolute inset-0 flex flex-col p-6 sm:p-8 lg:p-10">
                  <div className="relative flex-1 flex flex-col justify-end overflow-hidden rounded-3xl">
                    <div className="absolute inset-0">
                      <motion.img
                        src={featured.image}
                        alt=""
                        className="absolute inset-0 w-full h-full transition-all duration-1000 group-hover:scale-125 object-cover object-top"
                        transition={{ duration: 0.8, ease: easeOut }}
                        whileHover={{ scale: 1.06 }}
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-surface from-30% via-surface/70 via-55% to-transparent" />
                    </div>
                    <div className="relative mt-auto p-4">
                      <span className="inline-block rounded-full border border-primary/30 bg-primary/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary transition-colors duration-300 group-hover:border-primary/50 group-hover:bg-primary/20">
                        {featured.role}
                      </span>
                      <h3 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-white transition-transform duration-300 group-hover:translate-x-0.5">
                        {featured.name}
                      </h3>
                      <p className="mt-1 text-sm text-secondary/90">{featured.focus}</p>
                      {featured.tagline && (
                        <p className="mt-4 text-sm italic text-primary/90 border-l-2 border-primary/50 pl-4">
                          {featured.tagline}
                        </p>
                      )}
                      {/* Social — visible on hover */}
                      {featured.social?.length ? (
                        <motion.div
                          className="mt-4 flex items-center gap-3 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
                          initial={false}
                        >
                          <SocialLinks links={featured.social} variant="featured" />
                        </motion.div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>

            {/* Right column — spans 2 rows to match featured card height */}
            <div className="lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1 lg:h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-rows-[1fr_1fr] gap-4 lg:gap-5 order-2 min-h-0">
              {rest.map((member, i) => (
                <motion.div
                  key={member.name}
                  className="min-h-0 h-full"
                  initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.5, delay: 0.06 * (i + 1), ease: easeOut }}
                >
                  <TeamCard member={member} />
                </motion.div>
              ))}
              <motion.div
                className="min-h-0 h-full"
                initial={{ opacity: 0, scale: 0.96, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: 0.18, ease: easeOut }}
              >
                <motion.a
                  href="#contact"
                  className="group/cta flex h-full min-h-52 flex-col justify-between rounded-2xl border border-dashed border-primary/30 bg-linear-to-br from-primary/10 to-primary/5 p-6 transition-all duration-400 hover:border-primary/50 hover:bg-primary/15 hover:shadow-[0_0_0_1px_rgba(var(--primary-rgb),0.25),0_16px_32px_-8px_rgba(0,0,0,0.45),0_32px_64px_-16px_rgba(0,0,0,0.3),0_0_56px_-20px_rgba(var(--primary-rgb),0.2)]"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/40 bg-primary/15 text-primary transition-all duration-300 group-hover/cta:scale-110 group-hover/cta:bg-primary/25 group-hover/cta:shadow-[0_0_24px_rgba(var(--primary-rgb),0.3)]">
                    <HiOutlinePlus className="size-6 transition-transform duration-300 group-hover/cta:rotate-90" aria-hidden />
                  </div>
                  <div>
                    <span className="text-lg font-bold text-white">You?</span>
                    <p className="mt-1.5 text-sm text-secondary/95">Join our team of creatives.</p>
                  </div>
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <motion.div
      className="group relative h-full min-h-52 rounded-2xl border border-white/10 bg-linear-to-b from-surface-elevated/95 to-surface-elevated/50 overflow-hidden transition-all duration-400 hover:border-primary/70 hover:shadow-[0_0_0_1px_rgba(var(--primary-rgb),0.2),0_16px_32px_-8px_rgba(0,0,0,0.5),0_32px_64px_-16px_rgba(0,0,0,0.35),0_0_48px_-16px_rgba(var(--primary-rgb),0.2)]"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: easeOut }}
    >
      {/* Hover shine */}
      <div
        className="absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-400 group-hover:opacity-100 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, rgba(var(--primary-rgb),0.12) 0%, transparent 50%)",
        }}
      />
      <div className="relative flex flex-col justify-between h-full gap-4 p-5">
        <div className="relative shrink-0 flex items-start justify-between gap-3">
          <div className="h-20 w-20 sm:h-24 sm:w-24 overflow-hidden rounded-xl border border-white/10 transition-all duration-400 group-hover:border-primary/70 shrink-0">
            <motion.img
              src={member.image}
              alt=""
              className="h-full w-full object-cover transition-all duration-1000 group-hover:scale-125"
            />
          </div>
          {/* Social — visible on hover */}
          {member.social?.length ? (
            <motion.div
              className="flex items-center gap-1.5 opacity-0 translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
              initial={false}
            >
              <SocialLinks links={member.social} />
            </motion.div>
          ) : null}
        </div>
        <div className="flex min-w-0 flex-col">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            {member.role}
          </span>
          <h3 className="mt-1 text-lg font-semibold tracking-tight text-white">{member.name}</h3>
          <p className="mt-1.5 text-xs text-secondary/95 line-clamp-2">{member.focus}</p>
        </div>
      </div>
    </motion.div>
  );
}
