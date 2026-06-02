import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";

function ProjectGallery({ gallery }) {
  const [selected, setSelected] = useState(0);
  if (!gallery || !gallery.items?.length) return null;

  const activeItem = gallery.items[selected] || gallery.items[0];

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <SectionTitle title={gallery.title} />
      {gallery.text && <p className="mb-6 max-w-2xl leading-relaxed text-text-muted">{gallery.text}</p>}

      <div className="card overflow-hidden p-3">
        <img src={activeItem.image} alt={activeItem.label} className="aspect-[16/10] w-full rounded-[1rem] object-cover" />
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        {gallery.items.map((item, index) => (
          <button
            key={item.label}
            type="button"
            onClick={() => setSelected(index)}
            className={[
              "rounded-full border px-4 py-2 text-sm font-semibold transition",
              selected === index
                ? "border-primary bg-primary text-white"
                : "border-border bg-surface text-text-muted hover:border-primary hover:text-primary",
            ].join(" ")}
          >
            {item.label}
          </button>
        ))}
      </div>
    </motion.section>
  );
}

export default ProjectGallery;
