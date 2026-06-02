import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

function NotFound() {
  const { language } = useLanguage();

  return (
    <main className="min-h-screen bg-background px-5 py-32 text-text sm:px-8 lg:px-12">
      <div className="mx-auto max-w-4xl">
        <span className="eyebrow">404</span>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-text sm:text-6xl">
          {language === "fr" ? "Page introuvable" : "Page not found"}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-text-muted">
          {language === "fr"
            ? "Cette page n’existe pas ou a été déplacée."
            : "This page does not exist or has been moved."}
        </p>
        <Link to="/" className="btn-primary mt-8">
          {language === "fr" ? "Retour à l’accueil" : "Back home"}
        </Link>
      </div>
    </main>
  );
}

export default NotFound;
