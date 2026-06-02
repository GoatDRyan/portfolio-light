import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import SectionTitle from "../ui/SectionTitle";

function ProjectChallenges({ section }) {
  const { language } = useLanguage();
  if (!section || !section.items?.length) return null;

  const problemLabel = language === "fr" ? "Problème" : "Problem";
  const solutionLabel = language === "fr" ? "Solution" : "Solution";

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <SectionTitle title={section.title} />
      <div className="grid gap-4 md:grid-cols-2">
        {section.items.map((item, index) => (
          <article key={`${item.problem}-${index}`} className="card p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-danger-text">
              {problemLabel}
            </p>
            <p className="mt-3 leading-relaxed text-text-muted">{item.problem}</p>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-success-text">
              {solutionLabel}
            </p>
            <p className="mt-3 leading-relaxed text-text-muted">{item.solution}</p>
          </article>
        ))}
      </div>
    </motion.section>
  );
}

export default ProjectChallenges;
