import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function ProjectHero({ project, detail, language }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center"
    >
      <div>
        <Link to="/" className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary-hover">
          ← {detail.backLabel || (language === "fr" ? "Retour au portfolio" : "Back to portfolio")}
        </Link>

        <div className="mt-6 flex flex-wrap gap-2">
          <span className="rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-primary">
            {detail.badge}
          </span>
          <span className="rounded-full bg-surface px-3 py-1 text-xs font-semibold text-text-muted">
            {project.number}
          </span>
        </div>

        <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-text sm:text-5xl lg:text-6xl">
          {detail.fullTitle}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-text-muted">
          {detail.subtitle}
        </p>

        {project.links?.length > 0 && (
          <div className="mt-7 flex flex-wrap gap-3">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
                className="btn-primary"
              >
                {link.label?.[language] || link.label?.fr || detail.liveLabel || "Voir"}
                <span className="ml-2">↗</span>
              </a>
            ))}
          </div>
        )}
      </div>

      <div className="overflow-hidden rounded-[2rem] border border-border bg-surface p-3 shadow-[var(--shadow-card)]">
        <img
          src={project.image}
          alt={project.card?.[language]?.imageAlt || project.title}
          className="aspect-[16/11] w-full rounded-[1.35rem] object-cover"
        />
      </div>
    </motion.section>
  );
}

export default ProjectHero;
