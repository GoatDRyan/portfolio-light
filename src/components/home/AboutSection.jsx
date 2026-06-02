import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { content } from "../../data/content";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

function AboutSection() {
  const { language } = useLanguage();
  const t = content[language].about;

  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="section-shell">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div>
            <motion.span variants={fadeUp} className="eyebrow">
              {t.eyebrow}
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="mt-5 text-4xl font-bold tracking-tight text-text sm:text-5xl"
            >
              {t.titleLine1} <span className="text-primary">{t.titleLine2}</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-6 text-lg leading-relaxed text-text-muted">
              {t.quoteText}
            </motion.p>
          </div>

          <motion.div variants={stagger} className="space-y-5">
            <motion.div variants={fadeUp} className="card p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                {t.mainLabel}
              </p>
              <h3 className="mt-3 text-2xl font-bold text-text">{t.name}</h3>
              <p className="mt-4 leading-relaxed text-text-muted">{t.intro}</p>
              <p className="mt-4 leading-relaxed text-text-muted">{t.goal}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {t.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-surface-muted px-3 py-1.5 text-sm font-semibold text-text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-3">
              {t.cards.map((card) => (
                <motion.article key={card.number} variants={fadeUp} className="card p-5">
                  <span className="text-sm font-bold text-primary">{card.number}</span>
                  <h4 className="mt-3 text-lg font-bold text-text">{card.title}</h4>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">{card.text}</p>
                </motion.article>
              ))}
            </div>

            <motion.div variants={fadeUp} className="rounded-2xl border border-primary/20 bg-primary-soft p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                {t.missionLabel}
              </p>
              <p className="mt-3 text-lg font-bold leading-relaxed text-text">{t.mission}</p>
              <span className="mt-4 inline-flex rounded-full bg-surface px-3 py-1.5 text-sm font-semibold text-primary">
                {t.missionTag}
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
