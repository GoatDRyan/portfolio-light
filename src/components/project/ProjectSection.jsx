import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import CleanCard from "../ui/CleanCard";

const sectionReveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

function ProjectSection({ section, variant = "text" }) {
  if (!section) return null;

  if (variant === "overview") {
    return (
      <motion.section variants={sectionReveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }}>
        <SectionTitle title={section.title} eyebrow={section.eyebrow} />
        <CleanCard>
          <p className="text-lg leading-relaxed text-text-muted">{section.text}</p>
          {section.cards?.length > 0 && (
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {section.cards.map((card) => (
                <div key={card.title} className="rounded-2xl bg-surface-muted p-5">
                  <h3 className="font-bold text-text">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">{card.text}</p>
                </div>
              ))}
            </div>
          )}
        </CleanCard>
      </motion.section>
    );
  }

  if (variant === "role") {
    return (
      <motion.section variants={sectionReveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }}>
        <SectionTitle title={section.title} eyebrow={section.eyebrow} />
        <CleanCard>
          <p className="text-lg leading-relaxed text-text-muted">{section.text}</p>
          {section.items?.length > 0 && (
            <ul className="mt-6 grid gap-3 md:grid-cols-2">
              {section.items.map((item) => (
                <li key={item} className="rounded-2xl border border-border bg-surface-muted p-4 text-sm font-medium leading-relaxed text-text-muted">
                  {item}
                </li>
              ))}
            </ul>
          )}
        </CleanCard>
      </motion.section>
    );
  }

  if (variant === "process") {
    return (
      <motion.section variants={sectionReveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.16 }}>
        <SectionTitle title={section.title} eyebrow={section.eyebrow} />
        <div className="grid gap-4 md:grid-cols-2">
          {section.items?.map((step, index) => (
            <CleanCard key={step.title}>
              <span className="text-sm font-bold text-primary">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-xl font-bold text-text">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">{step.text}</p>
            </CleanCard>
          ))}
        </div>
      </motion.section>
    );
  }

  if (variant === "features") {
    return (
      <motion.section variants={sectionReveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }}>
        <SectionTitle title={section.title} eyebrow={section.eyebrow} />
        <CleanCard>
          <div className="flex flex-wrap gap-3">
            {section.items?.map((feature) => (
              <span key={feature} className="rounded-full bg-primary-soft px-4 py-2 text-sm font-semibold text-primary">
                {feature}
              </span>
            ))}
          </div>
        </CleanCard>
      </motion.section>
    );
  }

  return (
    <motion.section variants={sectionReveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }}>
      <SectionTitle title={section.title} eyebrow={section.eyebrow} />
      <CleanCard>
        <p className="text-lg leading-relaxed text-text-muted">{section.text}</p>
      </CleanCard>
    </motion.section>
  );
}

export default ProjectSection;
