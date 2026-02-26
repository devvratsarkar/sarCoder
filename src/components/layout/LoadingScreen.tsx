import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LOGO_LAYOUT, LOGO_LETTERS } from "../../constants/logo";

interface LoadingScreenProps {
  onComplete: () => void;
}

const letterVariants = {
  hidden: {
    opacity: 0,
    filter: "blur(16px)",
    y: 10,
    scale: 0.92,
  },
  visible: (i: number) => ({
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 140,
      damping: 4,
      mass: 0.8,
      delay: 0.28 + i * 0.12,
    },
  }),
};

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 300);
          return 100;
        }
        return prev + 1;
      });
    }, 45);

    return () => clearInterval(timer);
  }, [onComplete]);

  // Let layout animation complete (duration + last stagger) before unmounting
  const exitDelay = LOGO_LAYOUT.duration + (LOGO_LETTERS.length - 1) * LOGO_LAYOUT.stagger;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        transition: { delay: exitDelay, duration: 0 },
      }}
      className="fixed inset-0 z-100 flex flex-col items-center justify-center pointer-events-none"
    >
      {/* Overlay (background + progress + tagline): fades out so app shows through; logo does NOT fade */}
      <motion.div
        initial={{ opacity: 1 }}
        exit={{
          opacity: 0,
          transition: { duration: 0.55, delay: 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
        }}
        className="absolute inset-0 bg-surface bg-gradient-mesh flex flex-col items-center justify-center pointer-events-auto"
      >
        <div className="relative overflow-hidden text-center w-full flex flex-col items-center">
          <div className="h-24 md:h-32 shrink-0" aria-hidden />
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="h-0.5 bg-linear-to-r from-transparent via-primary to-transparent w-64 mt-4 origin-left rounded-full"
          />
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.8,
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-4 font-mono uppercase tracking-[0.3em] text-xs text-secondary"
          >
            Digital Solutions Agency
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl" />
            <svg className="w-full h-full -rotate-90 relative" viewBox="0 0 36 36">
              <circle
                cx="18"
                cy="18"
                r="15.9"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-zinc-800"
              />
              <motion.circle
                cx="18"
                cy="18"
                r="15.9"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                className="text-primary"
                strokeDasharray={100}
                initial={{ strokeDashoffset: 100 }}
                animate={{ strokeDashoffset: 100 - progress }}
                transition={{ duration: 0.15, ease: "linear" }}
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-xs font-medium text-white tabular-nums font-mono">
              {progress}%
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* Logo: each letter has its own layoutId for staggered fly-in to header */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="inline-flex flex-wrap justify-center font-bold tracking-tighter font-mono text-4xl md:text-8xl">
          {LOGO_LETTERS.map((letter, i) => (
            <motion.span
              key={`${letter}-${i}`}
              layoutId={`main-logo-${i}`}
              layout
              variants={letterVariants}
              custom={i}
              initial="hidden"
              animate="visible"
              transition={{
                layout: {
                  duration: LOGO_LAYOUT.duration,
                  ease: LOGO_LAYOUT.ease,
                  delay: i * LOGO_LAYOUT.stagger,
                },
              }}
              className={`inline-block ${i < 3 ? "text-gradient-cyan loading-gradient-text" : "text-white"}`}
              style={{ willChange: "transform" }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </span>
      </div>
    </motion.div>
  );
}
