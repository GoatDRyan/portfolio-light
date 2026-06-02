import React from "react";
import { motion } from "framer-motion";
import moi from "../../assets/hero/moi.jpg";
import { useLanguage } from "../../context/LanguageContext";
import { content } from "../../data/content";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

function HeroSection() {
  const { language } = useLanguage();
  const t = content[language].hero;

  return (
    <section className="relative overflow-hidden pb-20 pt-32 sm:pb-24 sm:pt-36 lg:pt-40">
      <motion.div
        className="section-shell grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <div>
          <motion.span variants={fadeUp} className="eyebrow">
            {t.badge} · {t.role}
          </motion.span>

          <motion.h1
            variants={fadeUp}
            aria-label={t.h1Label}
            className="mt-6 max-w-4xl text-5xl font-extrabold tracking-[-0.04em] text-text sm:text-6xl lg:text-7xl"
          >
            {t.title}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-text-muted sm:text-xl"
          >
            {t.subtitleLine1}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="btn-primary">
              {t.primaryButton}
              <span className="ml-2">→</span>
            </a>
            <a href="#about" className="btn-secondary">
              {t.secondaryButton}
            </a>
          </motion.div>

          <motion.div variants={stagger} className="mt-8 flex flex-wrap gap-3">
            {t.chips.map((item) => (
              <motion.span
                key={item}
                variants={fadeUp}
                className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-semibold text-text-muted shadow-sm"
              >
                {item}
              </motion.span>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          className="relative mx-auto w-full max-w-[430px] lg:ml-auto lg:mr-0"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-primary-soft/70 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-surface p-3 shadow-[var(--shadow-card)]">
            <img
              src={moi}
              alt={t.portraitAlt}
              className="aspect-[4/5] w-full rounded-[1.35rem] object-cover"
            />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/40 bg-white/85 p-4 shadow-sm backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                {t.coverLabel}
              </p>
              <p className="mt-1 text-lg font-bold text-text">
                {t.coverTitleLine1} · {t.coverTitleLine2}
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
