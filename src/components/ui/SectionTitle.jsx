import React from "react";

function SectionTitle({ title, eyebrow }) {
  return (
    <div className="mb-8">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      {title && (
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-text sm:text-4xl">
          {title}
        </h2>
      )}
    </div>
  );
}

export default SectionTitle;
