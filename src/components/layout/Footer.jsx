import React from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { content } from "../../data/content";

function Footer() {
  const { language } = useLanguage();
  const location = useLocation();
  const t = content[language].footer;
  const nav = content[language].navigation;
  const currentYear = new Date().getFullYear();
  const getHref = (href) => (location.pathname === "/" ? href : `/${href}`);

  return (
    <footer id="contact" className="mt-auto border-t border-border bg-surface">
      <div className="section-shell py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <span className="eyebrow">{t.eyebrow}</span>
            <h2 className="mt-5 max-w-xl text-3xl font-bold tracking-tight text-text sm:text-5xl">
              {t.titleLine1} <span className="text-primary">{t.titleLine2}</span>
            </h2>
            <p className="mt-5 max-w-xl leading-relaxed text-text-muted">{t.text}</p>
            <a href="mailto:mwanzaryan01@gmail.com" className="btn-primary mt-6">
              {t.contact}
            </a>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-text">
              {t.navigationTitle}
            </h3>
            <div className="mt-4 grid gap-3">
              {nav.map((item) => (
                <a key={item.href} href={getHref(item.href)} className="text-sm font-medium text-text-muted transition hover:text-primary">
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-text">
              {t.socialTitle}
            </h3>
            <div className="mt-4 grid gap-3">
              {t.socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                  className="text-sm font-medium text-text-muted transition hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-sm text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} {t.copyrightName}. Tous droits réservés.</p>
          <a href="#top" className="font-semibold text-primary">
            {t.backTop}
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
