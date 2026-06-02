import React from "react";

function ProjectInfoSidebar({ detail }) {
  const info = detail.info;
  if (!info) return null;

  return (
    <aside className="lg:sticky lg:top-28 lg:self-start">
      <div className="card p-6">
        <h2 className="text-xl font-bold text-text">{info.title}</h2>

        <dl className="mt-5 space-y-4">
          {info.items?.map(([label, value]) => (
            <div key={label} className="border-b border-border pb-4 last:border-0 last:pb-0">
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-text-muted">{label}</dt>
              <dd className="mt-1 font-semibold text-text">{value}</dd>
            </div>
          ))}
        </dl>

        {info.stack?.length > 0 && (
          <div className="mt-6 border-t border-border pt-6">
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-text-muted">{info.stackTitle}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {info.stack.map((item) => (
                <span key={item} className="rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-primary">
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}

export default ProjectInfoSidebar;
