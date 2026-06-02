import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { content } from "../../data/content";
import { projects } from "../../data/projects";

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

function ProjectsSection() {
  const { language } = useLanguage();
  const t = content[language].projects;

  return (
    <section id="projects" className="py-20 sm:py-24">
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
          viewport={{ once: true, amount: 0.12 }}
          variants={stagger}
          className="grid gap-6 lg:grid-cols-3"
        >
          {projects.map((project) => {
            const card = project.card?.[language] || project.card?.fr;

            return (
              <motion.article key={project.slug} variants={fadeUp} className="card group overflow-hidden">
                <Link to={`/projects/${project.slug}`} className="block">
                  <div className="overflow-hidden bg-surface-muted">
                    <img
                      src={project.image}
                      alt={card?.imageAlt || project.title}
                      className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-4">
                      <span className="rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-primary">
                        {card?.type}
                      </span>
                      <span className="text-sm font-bold text-text-muted">{project.number}</span>
                    </div>
                    <h3 className="mt-5 text-2xl font-bold text-text">{project.title}</h3>
                    <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-text-muted">
                      {card?.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {card?.tags?.slice(0, 4).map((tag) => (
                        <span key={tag} className="rounded-full bg-surface-muted px-3 py-1 text-xs font-semibold text-text-muted">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="mt-6 inline-flex items-center text-sm font-semibold text-primary">
                      {t.detailButton} <span className="ml-2">→</span>
                    </span>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default ProjectsSection;
