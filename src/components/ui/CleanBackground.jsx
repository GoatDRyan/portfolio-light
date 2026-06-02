import React from "react";

function CleanBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-background">
      <div className="absolute left-1/2 top-0 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-primary-soft/70 blur-3xl" />
      <div className="absolute -left-24 top-1/3 h-80 w-80 rounded-full bg-surface-muted blur-3xl" />
      <div className="absolute -right-28 bottom-10 h-96 w-96 rounded-full bg-primary-soft/50 blur-3xl" />
      <div
        className="absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(148,163,184,0.16) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.16) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "linear-gradient(to bottom, black, transparent 85%)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent 85%)",
        }}
      />
    </div>
  );
}

export default CleanBackground;
