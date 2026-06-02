import React from "react";
import { Link } from "react-router-dom";

function NextProject({ project, language }) {
  if (!project) return null;

  const card = project.card?.[language] || project.card?.fr;

  return (
    <section className="rounded-[2rem] border border-border bg-surface p-6 shadow-[var(--shadow-card)] sm:p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
        {language === "fr" ? "Projet suivant" : "Next project"}
      </p>
      <div className="mt-5 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-text">{project.title}</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-text-muted">{card?.description}</p>
        </div>
        <Link to={`/projects/${project.slug}`} className="btn-primary shrink-0">
          {language === "fr" ? "Voir le projet" : "View project"}
          <span className="ml-2">→</span>
        </Link>
      </div>
    </section>
  );
}

export default NextProject;
