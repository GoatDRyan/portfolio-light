import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";

function ProjectResults({ results, lessons }) {
  if (!results && !lessons) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {results && <SectionTitle title={results.title} />}
      <div className="grid gap-5 lg:grid-cols-[1fr_0.85fr]">
        {results?.items?.length > 0 && (
          <div className="card p-6 sm:p-8">
            <ul className="grid gap-3">
              {results.items.map((item) => (
                <li key={item} className="flex gap-3 text-text-muted">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {lessons && (
          <div className="rounded-2xl border border-primary/20 bg-primary-soft p-6 sm:p-8">
            <h3 className="text-xl font-bold text-text">{lessons.title}</h3>
            <p className="mt-3 leading-relaxed text-text-muted">{lessons.text}</p>
          </div>
        )}
      </div>
    </motion.section>
  );
}

export default ProjectResults;
