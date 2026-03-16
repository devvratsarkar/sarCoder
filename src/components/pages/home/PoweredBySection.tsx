import { useEffect, useRef } from "react";
import { HiStar, HiCheckBadge } from "react-icons/hi2";
import { HiShieldCheck, HiCodeBracket } from "react-icons/hi2";
import ScannerButton from "../../ui/ScannerButton";
import { HiOutlineArrowRight } from "react-icons/hi2";

const NOISE_BG =
  "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')";

const CRT_LINE =
  "repeating-linear-gradient(0deg, #000, #000 2px, transparent 2px, transparent 4px)";

type CardVariant = "emerald" | "amber" | "cyan";

const TESTIMONIALS: Array<{
  id: string;
  variant: CardVariant;
  quote: string;
  highlight: string;
  name: string;
  role: string;
  avatar: string;
  avatarAlt: string;
  Icon: typeof HiCheckBadge;
  pulseDelay?: string;
}> = [
    {
      id: "1",
      variant: "emerald",
      quote:
        "The design-to-dev workflow changed completely with SarCoder. We went from handoff chaos to a single source of truth and instant previews.",
      highlight: "single source of truth",
      name: "Elena Rostova",
      role: "Lead Product Designer",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64&q=80",
      avatarAlt: "Elena Rostova",
      Icon: HiCheckBadge,
    },
    {
      id: "2",
      variant: "amber",
      quote:
        "Precision builds and safe deploys gave our team confidence. Rollbacks are one click, and we ship faster without fear.",
      highlight: "safe deploys",
      name: "Marcus Vance",
      role: "VP Engineering",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64&q=80",
      avatarAlt: "Marcus Vance",
      Icon: HiShieldCheck,
      pulseDelay: "0.5s",
    },
    {
      id: "3",
      variant: "cyan",
      quote:
        "Adopting their stack was remarkably smooth. The multi-platform delivery and design system checks run on every commit—no more drift.",
      highlight: "design system checks",
      name: "Kira Solis",
      role: "Cloud Architect",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&h=64&q=80",
      avatarAlt: "Kira Solis",
      Icon: HiCodeBracket,
      pulseDelay: "1s",
    },
  ];

const METRICS = [
  { value: "99.9%", label: "Uptime", accent: "emerald" },
  { value: "3x", label: "Faster delivery", accent: "amber" },
  { value: "< 50ms", label: "Preview sync", accent: "cyan" },
  { value: "Global", label: "Deploy regions", accent: "purple" },
] as const;

function useWebGLStarfield(canvasRef: React.RefObject<HTMLCanvasElement | null>) {
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl");
    if (!gl) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    window.addEventListener("resize", resize);
    resize();

    const vs = gl.createShader(gl.VERTEX_SHADER);
    const fs = gl.createShader(gl.FRAGMENT_SHADER);
    const prog = gl.createProgram();
    if (!vs || !fs || !prog) return;

    gl.shaderSource(
      vs,
      `attribute vec3 position; uniform float time; varying float vAlpha; void main() { float z = mod(position.z - time * 0.1, 1.0); vec2 pos = position.xy / (z * 2.0); gl_Position = vec4(pos, 0.0, 1.0); gl_PointSize = (1.0 - z) * 2.5; vAlpha = (1.0 - z) * 0.8; }`
    );
    gl.compileShader(vs);

    gl.shaderSource(
      fs,
      `precision mediump float; varying float vAlpha; void main() { gl_FragColor = vec4(0.13, 0.84, 0.93, vAlpha); }`
    );
    gl.compileShader(fs);

    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const stars = new Float32Array(3000);
    for (let i = 0; i < 3000; i += 3) {
      stars[i] = (Math.random() - 0.5) * 4.0;
      stars[i + 1] = (Math.random() - 0.5) * 4.0;
      stars[i + 2] = Math.random();
    }

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, stars, gl.STATIC_DRAW);

    const posLoc = gl.getAttribLocation(prog, "position");
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 3, gl.FLOAT, false, 0, 0);

    const timeLoc = gl.getUniformLocation(prog, "time");
    const start = performance.now();

    const draw = (now: number) => {
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.uniform1f(timeLoc, (now - start) / 1000.0);
      gl.drawArrays(gl.POINTS, 0, 1000);
      rafRef.current = requestAnimationFrame(draw);
    };
    draw(start);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafRef.current);
    };
  }, [canvasRef]);
}

function TestimonialCard({
  testimonial,
  className = "",
}: {
  testimonial: (typeof TESTIMONIALS)[number];
  className?: string;
}) {
  const v = testimonial.variant;
  const starCls =
    v === "emerald"
      ? "text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]"
      : v === "amber"
        ? "text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]"
        : "text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]";
  const dotCls =
    v === "emerald"
      ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"
      : v === "amber"
        ? "bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.8)]"
        : "bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)]";
  const innerBg =
    v === "emerald"
      ? "bg-[#020a02]"
      : v === "amber"
        ? "bg-[#0a0500]"
        : "bg-[#00050a]";
  const glowCls =
    v === "emerald"
      ? "bg-emerald-500/5"
      : v === "amber"
        ? "bg-amber-500/5"
        : "bg-cyan-500/5";
  const borderRing =
    v === "emerald"
      ? "border-emerald-500/50"
      : v === "amber"
        ? "border-amber-500/50"
        : "border-cyan-500/50";
  const ringBg =
    v === "emerald"
      ? "bg-emerald-950 shadow-[0_0_10px_rgba(16,185,129,0.2)]"
      : v === "amber"
        ? "bg-amber-950 shadow-[0_0_10px_rgba(245,158,11,0.2)]"
        : "bg-cyan-950 shadow-[0_0_10px_rgba(6,182,212,0.2)]";
  const nameCls =
    v === "emerald"
      ? "text-emerald-300 drop-shadow-[0_0_4px_rgba(110,231,183,0.6)]"
      : v === "amber"
        ? "text-amber-300 drop-shadow-[0_0_4px_rgba(252,211,77,0.6)]"
        : "text-cyan-300 drop-shadow-[0_0_4px_rgba(103,232,249,0.6)]";
  const roleCls =
    v === "emerald"
      ? "text-emerald-500/70"
      : v === "amber"
        ? "text-amber-500/70"
        : "text-cyan-500/70";
  const quoteCls =
    v === "emerald"
      ? "text-emerald-400/90 drop-shadow-[0_0_3px_rgba(52,211,153,0.6)]"
      : v === "amber"
        ? "text-amber-400/90 drop-shadow-[0_0_3px_rgba(251,191,36,0.6)]"
        : "text-cyan-400/90 drop-shadow-[0_0_3px_rgba(34,211,238,0.6)]";
  const highlightCls =
    v === "emerald"
      ? "text-emerald-200 drop-shadow-[0_0_5px_rgba(167,243,208,0.8)]"
      : v === "amber"
        ? "text-amber-200 drop-shadow-[0_0_5px_rgba(253,230,138,0.8)]"
        : "text-cyan-200 drop-shadow-[0_0_5px_rgba(165,243,252,0.8)]";
  const iconCls =
    v === "emerald"
      ? "text-emerald-400 drop-shadow-[0_0_6px_rgba(52,211,153,0.8)]"
      : v === "amber"
        ? "text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.8)]"
        : "text-cyan-400 drop-shadow-[0_0_6px_rgba(34,211,238,0.8)]";

  const Icon = testimonial.Icon;

  return (
    <div
      className={`w-95 shrink-0 mr-6 p-3 rounded-4xl bg-zinc-800 shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),0_20px_40px_-10px_rgba(0,0,0,0.9),0_0_0_1px_rgba(0,0,0,1)] flex flex-col relative ${className}`}
    >
      <div
        className={`absolute bottom-3 right-6 w-2 h-2 rounded-full ${dotCls} animate-pulse`}
        style={{ animationDelay: testimonial.pulseDelay ?? "0s" }}
      />
      <div className="absolute bottom-3 right-10 w-2 h-2 rounded-full bg-zinc-700 shadow-[inset_0_1px_2px_rgba(0,0,0,0.8)]" />
      <div
        className={`relative h-full rounded-[20px] ${innerBg} p-6 shadow-[inset_0_0_40px_rgba(0,0,0,1)] border-[6px] border-zinc-950 flex flex-col justify-between overflow-hidden`}
      >
        <div
          className="absolute inset-0 pointer-events-none z-20 opacity-30 mix-blend-overlay"
          style={{ background: CRT_LINE }}
        />
        <div className="absolute top-0 left-0 w-full h-1/2 bg-linear-to-b from-white/5 to-transparent pointer-events-none z-10 rounded-t-[14px]" />
        <div
          className={`absolute inset-0 ${glowCls} mix-blend-screen pointer-events-none z-10 animate-pulse`}
          style={{ animationDuration: v === "amber" ? "3s" : v === "cyan" ? "5s" : "4s" }}
        />
        <div className="relative z-30 mb-6">
          <div className={`flex gap-1 mb-4 ${starCls}`}>
            {[...Array(5)].map((_, i) => (
              <HiStar key={i} className="text-sm" />
            ))}
          </div>
          <p className={`text-sm font-light leading-relaxed ${quoteCls}`}>
            &quot;{testimonial.quote.split(testimonial.highlight)[0]}
            <span className={highlightCls}>{testimonial.highlight}</span>
            {testimonial.quote.split(testimonial.highlight)[1]}&quot;
          </p>
        </div>
        <div className="relative z-30 flex items-center gap-4">
          <div className={`relative p-0.5 rounded-full ${ringBg}`}>
            <img
              src={testimonial.avatar}
              alt={testimonial.avatarAlt}
              className={`w-10 h-10 rounded-full border-[1.5px] ${borderRing} object-cover opacity-80 mix-blend-luminosity grayscale`}
            />
          </div>
          <div>
            <div className={`text-sm font-light ${nameCls}`}>{testimonial.name}</div>
            <div className={`text-xs font-extralight uppercase tracking-widest ${roleCls}`}>
              {testimonial.role}
            </div>
          </div>
          <Icon className={`ml-auto text-xl ${iconCls}`} style={{ strokeWidth: 1.5 }} />
        </div>
      </div>
    </div>
  );
}

export default function PoweredBySection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useWebGLStarfield(canvasRef);

  return (
    <>
      <section className="relative custom_container_x flex flex-col items-center">
        <canvas
          ref={canvasRef}
          id="webgl-stars-powered"
          className="fixed inset-0 z-0 pointer-events-none opacity-60"
          aria-hidden
        />
        <div
          className="fixed inset-0 opacity-[0.04] pointer-events-none z-1 mix-blend-overlay"
          style={{ backgroundImage: NOISE_BG }}
          aria-hidden
        />
        <div
          id="light1"
          className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-200 h-125 bg-emerald-600/10 blur-[120px] rounded-full pointer-events-none z-0 animate-[breath1_12s_ease-in-out_infinite]"
        />
        <div
          id="light2"
          className="absolute bottom-[-10%] right-[-10%] w-150 h-150 bg-amber-600/10 blur-[100px] rounded-full pointer-events-none z-0 animate-[breath2_15s_ease-in-out_infinite]"
          style={{ animationDelay: "2s" }}
        />

        <div className="relative z-10 w-full max-w-4xl mx-auto mb-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_4px_10px_rgba(0,0,0,0.5)] border border-zinc-700/50 mb-8 backdrop-blur-md">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary shadow-[0_0_8px_rgba(33,213,237,0.8)]" />
            </span>
            <span className="text-xs font-light text-primary tracking-wide uppercase drop-shadow-[0_0_5px_rgba(33,213,237,0.5)]">
              Trusted by teams
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extralight text-white tracking-tight mb-6 drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]">
            Powered by{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-b from-primary to-cyan-600 drop-shadow-[0_0_15px_rgba(33,213,237,0.4)]">
              SarCoder
            </span>
          </h2>
          <p className="text-lg text-zinc-400 font-extralight max-w-xl mx-auto leading-relaxed">
            From agile startups to scaled products, teams rely on our design systems and deployment pipeline to ship with confidence.
          </p>
        </div>

        <div className="relative z-10 w-full max-w-[100vw] overflow-hidden ">
          <div className="absolute top-0 left-0 w-32 h-full bg-linear-to-r from-[#030303] to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 right-0 w-32 h-full bg-linear-to-l from-[#030303] to-transparent z-20 pointer-events-none" />
          <div
            id="marquee-track-powered"
            className="flex w-max animate-[marquee_40s_linear_infinite]"
          >
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, idx) => (
              <TestimonialCard key={`marquee-${t.id}-${idx}`} testimonial={t} />
            ))}
          </div>
        </div>

        <div className="relative z-10 w-full max-w-5xl mx-auto mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {METRICS.map((m) => (
            <div
              key={m.label}
              className="bg-zinc-900/50 backdrop-blur-sm p-5 rounded-2xl shadow-[inset_0_1px_10px_rgba(0,0,0,1),0_1px_0_rgba(255,255,255,0.05)] border border-zinc-800 flex flex-col items-center justify-center relative overflow-hidden"
            >
              <div
                className={`absolute top-0 left-1/4 w-1/2 h-0.5 bg-linear-to-r from-transparent via-${m.accent}-500/50 to-transparent`}
                style={
                  m.accent === "emerald"
                    ? { background: "linear-gradient(90deg, transparent, rgba(16,185,129,0.5), transparent)" }
                    : m.accent === "amber"
                      ? { background: "linear-gradient(90deg, transparent, rgba(245,158,11,0.5), transparent)" }
                      : m.accent === "cyan"
                        ? { background: "linear-gradient(90deg, transparent, rgba(6,182,212,0.5), transparent)" }
                        : { background: "linear-gradient(90deg, transparent, rgba(168,85,247,0.5), transparent)" }
                }
              />
              <div
                className={`text-3xl font-extralight tracking-tight mb-1 text-${m.accent}-400 drop-shadow-[0_0_12px_rgba(var(--tw-shadow-color),0.6)]`}
                style={
                  m.accent === "emerald"
                    ? { color: "#34d399", filter: "drop-shadow(0 0 12px rgba(52,211,153,0.6))" }
                    : m.accent === "amber"
                      ? { color: "#fbbf24", filter: "drop-shadow(0 0 12px rgba(251,191,36,0.6))" }
                      : m.accent === "cyan"
                        ? { color: "#22d3ee", filter: "drop-shadow(0 0 12px rgba(34,211,238,0.6))" }
                        : { color: "#a78bfa", filter: "drop-shadow(0 0 12px rgba(168,85,247,0.6))" }
                }
              >
                {m.value}
              </div>
              <div className="text-xs text-zinc-500 uppercase tracking-widest font-light">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        <div className="relative z-10 my-10 text-center flex flex-col items-center">
          <ScannerButton
            endIcon={<HiOutlineArrowRight className="size-4" aria-hidden />}
          >Start a project</ScannerButton>
          <p className="mt-6 text-xs text-zinc-500 font-extralight">
            Secure connection. Let&apos;s build something precise.
          </p>
        </div>
      </section>
    </>
  );
}
