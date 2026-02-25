import { motion } from "framer-motion";
import { LOGO_LAYOUT, LOGO_LETTERS } from "../../constants/logo";

export default function PrimaryHeader() {
  return (
    <header className="border-b border-border bg-surface">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <span className="inline-flex items-center font-bold tracking-tighter font-mono text-4xl">
          {LOGO_LETTERS.map((letter, i) => (
            <motion.span
              key={`${letter}-${i}`}
              layoutId={`main-logo-${i}`}
              layout
              transition={{
                layout: {
                  duration: LOGO_LAYOUT.duration,
                  ease: LOGO_LAYOUT.ease,
                  delay: i * LOGO_LAYOUT.stagger,
                },
              }}
              className={`inline-block ${i < 3 ? "text-gradient-cyan loading-gradient-text" : "text-white"}`}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </span>
        <nav className="flex gap-6 text-secondary hover:[&_a]:text-primary [&_a]:transition-colors">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </div>
    </header>
  );
}
