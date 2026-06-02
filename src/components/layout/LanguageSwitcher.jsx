import React from "react";
import { useLanguage } from "../../context/LanguageContext";

function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className="inline-flex h-10 items-center rounded-full border border-border bg-surface px-4 text-sm font-semibold text-text transition hover:border-primary hover:text-primary"
      aria-label={language === "fr" ? "Passer le site en anglais" : "Switch website to French"}
    >
      {language === "fr" ? "EN" : "FR"}
    </button>
  );
}

export default LanguageSwitcher;
