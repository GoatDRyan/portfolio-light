import React from "react";

function CleanCard({ children, className = "" }) {
  return (
    <div className={["card p-6 sm:p-8", className].join(" ")}>{children}</div>
  );
}

export default CleanCard;
