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

function SkillsSection() {
  const { language } = useLanguage();
  const t = content[language].skills;

  return (
    <section id="skills" className="py-20 sm:py-24">
      <div className="section-shell">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={stagger}
          className="mb-12 max-w-3xl"
        >
          <motion.span variants={fadeUp} className="eyebrow">
            {t.eyebrow}
          </motion.span>
          <motion.h2 variants={fadeUp} className="mt-5 text-4xl font-bold tracking-tight text-text sm:text-5xl">
            {t.titleLine1} <span className="text-primary">{t.titleLine2}</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-5 text-lg leading-relaxed text-text-muted">
            {t.intro}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="grid gap-6 lg:grid-cols-3"
        >
          {t.categories.map((category) => (
            <motion.article key={category.number} variants={fadeUp} className="card p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-sm font-bold text-primary">{category.number}</span>
                  <h3 className="mt-3 text-2xl font-bold text-text">{category.title}</h3>
                  <p className="mt-1 text-sm font-semibold text-text-muted">{category.planet}</p>
                </div>
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary-soft text-lg font-bold text-primary">
                  {category.number}
                </div>
              </div>

              <p className="mt-6 leading-relaxed text-text-muted">{category.text}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="rounded-full bg-surface-muted px-3 py-1.5 text-sm font-semibold text-text-muted">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="card mt-8 p-6 sm:p-8"
        >
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                {t.toolboxLabel}
              </p>
              <h3 className="mt-2 text-2xl font-bold text-text">{t.toolboxTitle}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {t.toolbox.map((tool) => (
                <span key={tool} className="rounded-full border border-border bg-surface px-3 py-1.5 text-sm font-semibold text-text-muted">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default SkillsSection;
