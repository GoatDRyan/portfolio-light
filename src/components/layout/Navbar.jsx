import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { content } from "../../data/content";
import LanguageSwitcher from "./LanguageSwitcher";
import logo from "../../assets/logo/logo.svg";

function Navbar() {
  const { language } = useLanguage();
  const location = useLocation();
  const t = content[language];
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const getHref = (href) => (location.pathname === "/" ? href : `/${href}`);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <nav
        className={[
          "relative mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 transition duration-300",
          hasScrolled
            ? "border-border bg-surface/90 shadow-[var(--shadow-card)] backdrop-blur-xl"
            : "border-transparent bg-surface/70 backdrop-blur-xl",
        ].join(" ")}
        aria-label="Navigation principale"
      >
        {/* 1. LOGO (Ancré à gauche) */}
        <Link to="/" className="relative z-10 flex items-center gap-3">
          <span className="h-auto w-10">
            <img src={logo} alt="Ryan Mumbata" className="h-full w-full object-contain" />
          </span>
          <span className="hidden text-sm font-bold text-text sm:block">Ryan Mumbata</span>
        </Link>

        {/* 2. NAVIGATION (Centrage absolu pour un équilibre parfait sur Desktop) */}
        <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-1 lg:flex">
          {t.navigation.map((item) => (
            <Link
              key={item.href}
              to={getHref(item.href)}
              className="rounded-full px-4 py-2 text-sm font-semibold text-text-muted transition hover:bg-primary-soft hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* 3. ACTIONS & BOUTON MOBILE (Ancrés à droite) */}
        <div className="relative z-10 flex items-center gap-3">
          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <LanguageSwitcher />
            <a href="mailto:mwanzaryan01@gmail.com" className="btn-primary py-2.5 px-5">
              Contact
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-text lg:hidden"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen}
          >
            <span className="sr-only">Menu</span>
            <div className="relative flex h-5 w-5 flex-col items-center justify-center gap-1.5">
              <span
                className={[
                  "h-0.5 w-5 rounded bg-text transition-all duration-300",
                  isOpen ? "absolute rotate-45" : "",
                ].join(" ")}
              />
              <span
                className={[
                  "h-0.5 w-5 rounded bg-text transition-opacity duration-300",
                  isOpen ? "opacity-0" : "",
                ].join(" ")}
              />
              <span
                className={[
                  "h-0.5 w-5 rounded bg-text transition-all duration-300",
                  isOpen ? "absolute -rotate-45" : "",
                ].join(" ")}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* MENU MOBILE (Dropdown) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-3 max-w-7xl rounded-3xl border border-border bg-surface p-4 shadow-[var(--shadow-card)] lg:hidden"
          >
            <div className="grid gap-1">
              {t.navigation.map((item) => (
                <Link
                  key={item.href}
                  to={getHref(item.href)}
                  className="rounded-2xl px-4 py-3 text-sm font-semibold text-text-muted transition hover:bg-primary-soft hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-3 border-t border-border pt-4">
              <LanguageSwitcher />
              <a href="mailto:mwanzaryan01@gmail.com" className="btn-primary flex-1 py-2.5 text-center">
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;