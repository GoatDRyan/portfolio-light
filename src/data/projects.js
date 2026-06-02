export const projects = [
  {
    slug: "acthys",
    number: "01",
    title: "ACTHYS",
    accent: "#1a9bad",
    page: "/projects/acthys",
    image: `${import.meta.env.BASE_URL}projects/acthys/hero.jpg`,

    seo: {
      fr: {
        title: "ACTHYS – Projet WordPress QHSE/RSE | Ryan Mumbata",
        description:
          "Étude de cas ACTHYS : site WordPress pour un cabinet QHSE/RSE avec chatbot Tidio, newsletter MailPoet, SEO SureRank, RGPD Complianz et mise en production.",
      },
      en: {
        title: "ACTHYS – WordPress QHSE/RSE Project | Ryan Mumbata",
        description:
          "ACTHYS case study: WordPress website for a QHSE/RSE consulting firm with Tidio chatbot, MailPoet newsletter, SureRank SEO, Complianz GDPR and production launch.",
      },
    },

    links: [
      {
        label: {
          fr: "Voir le site",
          en: "View website",
        },
        href: "https://acthys.fr",
        external: true,
      },
    ],

    card: {
      fr: {
        type: "Site client réel",
        description:
          "Mise en production d'un site institutionnel WordPress pour un cabinet QHSE/RSE. Intégration d'outils d'acquisition (chatbot Tidio, newsletter MailPoet), optimisation SEO (SureRank), et mise en conformité RGPD stricte (Complianz).",
        tags: ["WordPress", "SEO", "RGPD", "Chatbot", "Client réel"],
        imageAlt:
          "Aperçu du projet ACTHYS, site institutionnel WordPress pour un cabinet QHSE RSE",
      },
      en: {
        type: "Real client website",
        description:
          "Production of a WordPress institutional website for a QHSE/RSE consulting firm. Integration of acquisition tools (Tidio chatbot, MailPoet newsletter), SEO optimization (SureRank), and strict GDPR compliance (Complianz).",
        tags: ["WordPress", "SEO", "GDPR", "Chatbot", "Real client"],
        imageAlt:
          "Preview of the ACTHYS project, WordPress institutional website for a QHSE RSE consulting firm",
      },
    },

    detail: {
      fr: {
        badge: "Projet réel · WordPress · SEO · RGPD",
        fullTitle:
          "ACTHYS — Site institutionnel et acquisition de leads pour un cabinet de conseil",
        subtitle:
          "Un site professionnel conçu pour présenter l'expertise de Magali Perrin, avec une automatisation de la prise de contact et une conformité légale irréprochable.",
        backLabel: "Retour au portfolio",
        liveLabel: "Projet en ligne",

        info: {
          title: "Informations projet",
          items: [
            ["Type", "Site client réel"],
            ["Rôle", "Webmaster / Intégrateur WordPress"],
            ["Année", "2026"],
            ["Durée", "Stage / mission client"],
            ["Statut", "En production"],
          ],
          stackTitle: "Stack",
          stack: [
            "WordPress",
            "Tidio (Bot)",
            "MailPoet",
            "Complianz",
            "SureRank",
            "OVHcloud",
          ],
        },

        overview: {
          title: "Présentation",
          text:
            "ACTHYS est un cabinet de conseil spécialisé en QHSE, RSE et IA Act. La fondatrice étant souvent en intervention, le site devait non seulement servir de vitrine, mais aussi agir comme un assistant virtuel capable de capter des prospects en son absence, le tout dans un cadre légal (RGPD) strict.",
          cards: [
            {
              title: "Objectif principal",
              text:
                "Créer une plateforme d'acquisition autonome : un site crédible, optimisé pour le référencement local, et équipé d'un chatbot automatisé pour récolter des demandes de devis.",
            },
            {
              title: "Enjeu légal",
              text:
                "Assurer une conformité totale avec la CNIL via une gestion dynamique du consentement aux cookies et une Politique de Confidentialité à jour.",
            },
          ],
        },

        role: {
          title: "Mon rôle",
          text:
            "J'ai pris en charge la configuration technique complète, l'intégration des outils marketing, la gestion du SEO et la mise en conformité légale du site.",
          items: [
            "Installation et paramétrage d'un chatbot automatisé (Tidio) avec scénario de capture de leads.",
            "Configuration d'un système de Newsletter (MailPoet).",
            "Mise en place d'un bandeau de cookies (Complianz) bloquant les scripts externes avant consentement.",
            "Mise à jour et intégration de la Politique de Confidentialité (V2).",
            "Optimisation du référencement naturel avec SureRank (Titres, Meta-descriptions limitées à 160 caractères).",
            "Déploiement et sécurisation sur un hébergement OVHcloud.",
          ],
        },

        process: {
          title: "Processus",
          items: [
            {
              title: "Acquisition",
              text:
                "Mise en place de Tidio avec un flux automatisé pour orienter les visiteurs (Formation, Audit, RSE) et capturer leur e-mail.",
            },
            {
              title: "Fidélisation",
              text:
                "Configuration de MailPoet pour gérer l'envoi de la newsletter mensuelle de manière 100% hébergée sur WordPress.",
            },
            {
              title: "Conformité (RGPD)",
              text:
                "Scan des cookies via Complianz et rédaction des clauses juridiques pour le chatbot et la newsletter.",
            },
            {
              title: "Visibilité (SEO)",
              text:
                "Optimisation des balises avec SureRank et préparation pour l'indexation Google Search Console.",
            },
          ],
        },

        features: {
          title: "Fonctionnalités principales",
          items: [
            "Assistant virtuel automatisé (Chatbot Tidio).",
            "Système de Newsletter intégré (MailPoet).",
            "Bandeau de consentement dynamique (Complianz).",
            "Politique de confidentialité exhaustive (RGPD & IA Act).",
            "Optimisation SEO On-Page (SureRank).",
            "Design responsive et performant.",
          ],
        },

        challenges: {
          title: "Problèmes rencontrés",
          items: [
            {
              problem:
                "Capter des prospects pendant que la consultante est en formation chez des clients.",
              solution:
                "Création d'un scénario de chatbot asynchrone proposant des choix multiples et demandant l'adresse e-mail pour un recontact ultérieur.",
            },
            {
              problem:
                "Collecter des e-mails et déposer des cookies techniques en toute légalité.",
              solution:
                "Paramétrage de Complianz pour bloquer le chatbot Tidio tant que le visiteur n'a pas cliqué sur 'Accepter', et rédaction d'une clause spécifique dans les CGU.",
            },
          ],
        },

        technical: {
          title: "Points techniques",
          items: [
            {
              title: "RGPD & Cookies",
              text:
                "Synchronisation technique entre les scripts tiers (Tidio, Analytics) et le gestionnaire de consentement Complianz.",
            },
            {
              title: "Automatisation",
              text:
                "Création de 'Flows' logiques dans Tidio basés sur des déclencheurs (ex: nouveau visiteur) et des actions (demande d'email avec validation de format).",
            },
            {
              title: "SEO",
              text:
                "Respect strict des contraintes techniques de Google (Meta descriptions < 160 caractères, structure H1/H2/H3 claire).",
            },
          ],
        },

        gallery: {
          title: "Galerie",
          text:
            "Un aperçu des éléments techniques mis en place sur le site d'ACTHYS.",
          items: [
            {
              label: "Chatbot & Lead Gen",
              image: `${import.meta.env.BASE_URL}projects/acthys/chatbot.jpg`,
            },
            {
              label: "Conformité RGPD",
              image: `${import.meta.env.BASE_URL}projects/acthys/rgpd.jpg`,
            },
            {
              label: "Version Mobile",
              image: `${import.meta.env.BASE_URL}projects/acthys/mobile.jpg`,
            },
          ],
        },

        results: {
          title: "Résultats",
          items: [
            "Site 100% conforme aux exigences de la CNIL.",
            "Système d'acquisition de prospects actif 24h/24.",
            "Bases solides pour le référencement local en Normandie.",
            "Client autonome pour la gestion de sa newsletter.",
          ],
        },

        lessons: {
          title: "Ce que j’ai appris",
          text:
            "Ce projet m'a appris que le développement web ne se limite pas au design : l'aspect légal (RGPD), la stratégie d'acquisition (Chatbot) et la visibilité (SEO) sont tout aussi cruciaux pour livrer un produit viable à un professionnel.",
        },
      },

      en: {
        badge: "Real project · WordPress · SEO · GDPR",
        fullTitle:
          "ACTHYS — Institutional website and lead generation for a consulting firm",
        subtitle:
          "A professional website designed to showcase expertise, automate contact requests, and ensure flawless legal compliance.",
        backLabel: "Back to portfolio",
        liveLabel: "Live project",

        info: {
          title: "Project details",
          items: [
            ["Type", "Real client website"],
            ["Role", "Webmaster / WordPress Integrator"],
            ["Year", "2026"],
            ["Duration", "Internship / client mission"],
            ["Status", "Live"],
          ],
          stackTitle: "Stack",
          stack: [
            "WordPress",
            "Tidio (Bot)",
            "MailPoet",
            "Complianz",
            "SureRank",
            "OVHcloud",
          ],
        },

        overview: {
          title: "Overview",
          text:
            "ACTHYS is a consulting firm specializing in QHSE, CSR, and the AI Act. Since the founder is often on-site with clients, the website needed to act as a virtual assistant to capture leads in her absence, all within a strict legal framework (GDPR).",
          cards: [
            {
              title: "Main objective",
              text:
                "Create an autonomous acquisition platform: a credible website, optimized for local SEO, and equipped with an automated chatbot to collect quote requests.",
            },
            {
              title: "Legal challenge",
              text:
                "Ensure total compliance with French privacy laws (CNIL) through dynamic cookie consent management and an updated Privacy Policy.",
            },
          ],
        },

        role: {
          title: "My role",
          text:
            "I managed the full technical configuration, marketing tools integration, SEO management, and legal compliance of the website.",
          items: [
            "Installation and setup of an automated chatbot (Tidio) with a lead capture flow.",
            "Configuration of a Newsletter system (MailPoet).",
            "Implementation of a cookie banner (Complianz) blocking third-party scripts prior to consent.",
            "Updating and integrating the Privacy Policy.",
            "On-page SEO optimization with SureRank (Titles, Meta-descriptions).",
            "Deployment and security setup on OVHcloud hosting.",
          ],
        },

        process: {
          title: "Process",
          items: [
            {
              title: "Acquisition",
              text:
                "Setting up Tidio with an automated flow to guide visitors (Training, Audit, CSR) and capture their email.",
            },
            {
              title: "Retention",
              text:
                "Configuring MailPoet to manage monthly newsletter sending directly from WordPress.",
            },
            {
              title: "Compliance (GDPR)",
              text:
                "Scanning cookies via Complianz and drafting legal clauses for the chatbot and newsletter.",
            },
            {
              title: "Visibility (SEO)",
              text:
                "Tag optimization with SureRank and preparation for Google Search Console indexing.",
            },
          ],
        },

        features: {
          title: "Main features",
          items: [
            "Automated virtual assistant (Tidio Chatbot).",
            "Integrated Newsletter system (MailPoet).",
            "Dynamic consent banner (Complianz).",
            "Comprehensive privacy policy (GDPR & AI Act).",
            "On-Page SEO Optimization (SureRank).",
            "Responsive and performant design.",
          ],
        },

        challenges: {
          title: "Challenges",
          items: [
            {
              problem:
                "Capturing prospects while the consultant is busy training clients.",
              solution:
                "Creating an asynchronous chatbot scenario offering multiple choices and requesting an email address for a later callback.",
            },
            {
              problem:
                "Collecting emails and dropping technical cookies legally.",
              solution:
                "Configuring Complianz to block the Tidio chatbot until the visitor clicks 'Accept', and drafting a specific clause in the Terms of Service.",
            },
          ],
        },

        technical: {
          title: "Technical details",
          items: [
            {
              title: "GDPR & Cookies",
              text:
                "Technical synchronization between third-party scripts (Tidio, Analytics) and the Complianz consent manager.",
            },
            {
              title: "Automation",
              text:
                "Creating logic 'Flows' in Tidio based on triggers (e.g. new visitor) and actions (email request with format validation).",
            },
            {
              title: "SEO",
              text:
                "Strict adherence to Google's technical constraints (Meta descriptions < 160 characters, clear H1/H2/H3 structure).",
            },
          ],
        },

        gallery: {
          title: "Gallery",
          text:
            "A look at the technical features implemented on the ACTHYS website.",
          items: [
            {
              label: "Chatbot & Lead Gen",
              image: `${import.meta.env.BASE_URL}projects/acthys/chatbot.jpg`,
            },
            {
              label: "GDPR Compliance",
              image: `${import.meta.env.BASE_URL}projects/acthys/rgpd.jpg`,
            },
            {
              label: "Mobile Version",
              image: `${import.meta.env.BASE_URL}projects/acthys/mobile.jpg`,
            },
          ],
        },

        results: {
          title: "Results",
          items: [
            "Website 100% compliant with privacy requirements.",
            "Lead acquisition system active 24/7.",
            "Solid foundations for local SEO.",
            "Client is fully autonomous for managing their newsletter.",
          ],
        },

        lessons: {
          title: "What I learned",
          text:
            "This project taught me that web development is not just about design: legal aspects (GDPR), acquisition strategy (Chatbot), and visibility (SEO) are equally crucial to deliver a viable product to a professional.",
        },
      },
    },
  },

  {
    slug: "shiftup",
    number: "02",
    title: "Shift’Up",
    accent: "#ff4800",
    page: "/projects/shiftup",
    image: `${import.meta.env.BASE_URL}projects/shiftup/hero.jpg`,

    seo: {
      fr: {
        title: "Shift’Up – SaaS RSE gamifié PHP/MySQL | Ryan Mumbata",
        description:
          "Étude de cas Shift’Up : prototype SaaS B2B RSE développé en PHP/MySQL avec authentification, rôles, défis, XP, badges, boutique, base de données, gamification et démo en ligne.",
      },
      en: {
        title: "Shift’Up – Gamified CSR SaaS PHP/MySQL | Ryan Mumbata",
        description:
          "Shift’Up case study: gamified B2B CSR SaaS prototype built with PHP/MySQL, authentication, roles, challenges, XP, badges, shop, database, gamification and online demo.",
      },
    },

    links: [
      {
        label: {
          fr: "Voir la démo",
          en: "View demo",
        },
        href: "https://solano.alwaysdata.net/Shift-Up/views/users/login.php",
        external: true,
      },
    ],

    card: {
      fr: {
        type: "Prototype SaaS B2B",
        description:
          "Application web RSE gamifiée destinée aux entreprises, conçue pour motiver les salariés à réaliser des actions écologiques grâce à des défis, de l’XP, des badges, une monnaie virtuelle et une logique de progression.",
        tags: ["PHP", "MySQL", "PDO", "Gamification", "Démo en ligne"],
        imageAlt:
          "Aperçu du projet Shift’Up, prototype SaaS B2B gamifié autour de la RSE",
      },
      en: {
        type: "B2B SaaS prototype",
        description:
          "Gamified CSR web application designed for companies, helping employees take ecological actions through challenges, XP, badges, virtual currency and progression mechanics.",
        tags: ["PHP", "MySQL", "PDO", "Gamification", "Online demo"],
        imageAlt:
          "Preview of the Shift’Up project, a gamified B2B SaaS prototype focused on CSR",
      },
    },

    detail: {
      fr: {
        badge: "Projet de groupe · PHP · MySQL · RSE · Démo en ligne",
        fullTitle:
          "Shift’Up — Prototype SaaS B2B pour engager les salariés dans la RSE",
        subtitle:
          "Une application web gamifiée pensée pour transformer les engagements RSE d’une entreprise en actions concrètes, motivantes et mesurables pour les collaborateurs.",
        backLabel: "Retour au portfolio",
        liveLabel: "Voir la démo en ligne",

        info: {
          title: "Informations projet",
          items: [
            ["Type", "Prototype SaaS B2B"],
            ["Contexte", "Projet de groupe"],
            ["Équipe", "7 personnes · 3 dev · 4 créa"],
            ["Rôle", "Développeur principal application & BDD"],
            ["Année", "2026"],
            ["Statut", "Démo fonctionnelle en ligne"],
            ["Accès test", "Code invitation entreprise : 1234"],
          ],
          stackTitle: "Stack",
          stack: [
            "PHP",
            "MySQL",
            "PDO",
            "Sessions PHP",
            "JavaScript",
            "Chart.js",
            "Tailwind CDN",
            "HTML/CSS",
          ],
        },

        overview: {
          title: "Présentation",
          text:
            "Shift’Up est un prototype de startup SaaS B2B imaginé pour accompagner la transition écologique des entreprises. L’objectif est de créer un lien entre les engagements RSE de l’entreprise et les actions quotidiennes de chaque salarié grâce à une application motivante, collective et gamifiée.",
          cards: [
            {
              title: "Objectif produit",
              text:
                "Rendre l’écologie plus accessible et attractive en transformant les bonnes pratiques RSE en défis quotidiens, progression, badges, classements et récompenses.",
            },
            {
              title: "Objectif technique",
              text:
                "Développer une application web dynamique avec authentification, base de données relationnelle, rôles utilisateurs, défis, gamification et persistance des données.",
            },
            {
              title: "Démo testable",
              text:
                "L’application est hébergée en ligne pour permettre aux recruteurs de tester l’inscription, la connexion et le parcours Shifter. Code invitation entreprise : 1234.",
            },
          ],
        },

        role: {
          title: "Mon rôle",
          text:
            "Dans une équipe de 7 personnes, j’ai principalement développé la partie applicative et la base de données de Shift’Up. Les créatifs ont produit l’univers graphique, les visuels et la maquette, que j’ai ensuite majoritairement intégrés côté application.",
          items: [
            "Conception d’environ 85% de la base de données MySQL.",
            "Développement de la majorité de l’application côté utilisateur.",
            "Création des pages de connexion, inscription et paramètres.",
            "Création et rédaction des défis RSE, hors visuels.",
            "Développement de la logique de gamification : XP, niveaux, streak, badges, monnaie virtuelle et boutique.",
            "Intégration des maquettes fournies par l’équipe créative.",
            "Participation légère au wireframe initial pour aider la conception de la maquette.",
            "Création du dépôt Git et résolution de conflits pendant le projet.",
            "Mise en ligne d’une démo fonctionnelle pour rendre le projet testable.",
            "Intervention ponctuelle sur les espaces admin et super-admin, principalement développés par un autre développeur.",
          ],
        },

        process: {
          title: "Processus",
          items: [
            {
              title: "Concept & identité",
              text:
                "Le projet s’appuie sur une identité de marque forte : Shifter, Daily Shift, Shift League, Shift Center, Shift Master et Shift Impact. L’objectif était de rendre la RSE plus positive, accessible et motivante.",
            },
            {
              title: "Base de données",
              text:
                "J’ai conçu la majorité du modèle de données : utilisateurs, entreprises, départements, défis, actions validées, badges, récompenses, inventaire et progression.",
            },
            {
              title: "Parcours utilisateur",
              text:
                "J’ai développé les principales pages côté Shifter : authentification, inscription, paramètres, défis, boutique et mécaniques de progression.",
            },
            {
              title: "Gamification",
              text:
                "J’ai mis en place une logique de récompense avec XP, niveaux, streaks, badges, monnaie virtuelle et objets utilisables pour renforcer l’engagement.",
            },
            {
              title: "Mise en ligne",
              text:
                "J’ai préparé une version hébergée du projet avec une base de données de démonstration afin de rendre l’application accessible depuis mon portfolio.",
            },
          ],
        },

        features: {
          title: "Fonctionnalités principales",
          items: [
            "Authentification avec connexion, inscription et récupération de mot de passe.",
            "Inscription via code invitation entreprise.",
            "Gestion des rôles : Shifter, Admin entreprise et Super-admin.",
            "Défis RSE avec difficulté, catégorie, durée, limite quotidienne et validation.",
            "Système d’XP, de niveaux et de progression.",
            "Streak utilisateur pour encourager la régularité.",
            "Badges débloqués selon certaines actions.",
            "Monnaie virtuelle gagnée grâce aux défis.",
            "Boutique avec récompenses et objets utilisables.",
            "Inventaire utilisateur.",
            "Base de données relationnelle MySQL.",
            "Interface bilingue français / anglais.",
            "Intégration responsive à partir des maquettes créatives.",
            "Démo en ligne hébergée sur alwaysdata.",
          ],
        },

        challenges: {
          title: "Problèmes rencontrés",
          items: [
            {
              problem:
                "Créer une application RSE motivante sans tomber dans un ton moralisateur ou culpabilisant.",
              solution:
                "Le projet utilise une approche positive basée sur les défis, la progression, les récompenses et un vocabulaire de marque plus ludique.",
            },
            {
              problem:
                "Transformer des actions écologiques simples en vraie logique applicative.",
              solution:
                "Chaque défi possède des règles : XP, CO₂ économisé, durée, limite quotidienne, difficulté, catégorie et validation enregistrée en base de données.",
            },
            {
              problem:
                "Gérer une progression utilisateur persistante avec PHP/MySQL.",
              solution:
                "J’ai relié les actions validées à la base de données pour mettre à jour XP, monnaie, streak, badges, inventaire et niveau.",
            },
            {
              problem:
                "Rendre le projet testable par un recruteur sans exposer de données sensibles.",
              solution:
                "J’ai mis en ligne une démo avec une base de données dédiée et un code invitation de test pour permettre l’inscription sans utiliser de vraies données.",
            },
            {
              problem:
                "Travailler à plusieurs sur un projet avec des devs et des créatifs.",
              solution:
                "J’ai participé à l’intégration des maquettes, créé le dépôt Git et aidé à résoudre les conflits pour garder une base de travail commune.",
            },
          ],
        },

        technical: {
          title: "Points techniques",
          items: [
            {
              title: "Base de données relationnelle",
              text:
                "La base MySQL structure les utilisateurs, entreprises, départements, défis, récompenses, badges, actions et inventaires afin de rendre la progression persistante.",
            },
            {
              title: "Gamification PHP/MySQL",
              text:
                "La validation d’un défi déclenche plusieurs mises à jour : ajout d’XP, monnaie virtuelle, CO₂ économisé, streak, progression multi-jours et déblocage potentiel de badges.",
            },
            {
              title: "Authentification & rôles",
              text:
                "L’application utilise des sessions PHP et des rôles pour séparer les accès entre Shifter, Admin entreprise et Super-admin.",
            },
            {
              title: "Déploiement de démo",
              text:
                "Le projet a été hébergé en ligne avec une base de démonstration afin de rendre le parcours utilisateur testable directement depuis le portfolio.",
            },
            {
              title: "Travail d’équipe",
              text:
                "Le projet a été développé dans une équipe de 7 personnes : 3 développeurs et 4 créatifs. Mon rôle s’est concentré sur la partie application, la base de données, la gamification et l’intégration.",
            },
          ],
        },

        gallery: {
          title: "Galerie",
          text:
            "Les visuels doivent montrer à la fois l’expérience utilisateur gamifiée et la richesse fonctionnelle de l’application.",
          items: [
            {
              label: "Dashboard Shifter",
              image: `${import.meta.env.BASE_URL}projects/shiftup/dashboard.jpg`,
            },
            {
              label: "Défis RSE",
              image: `${import.meta.env.BASE_URL}projects/shiftup/defis.jpg`,
            },
            {
              label: "Boutique & récompenses",
              image: `${import.meta.env.BASE_URL}projects/shiftup/shop.jpg`,
            },
          ],
        },

        results: {
          title: "Résultats",
          items: [
            "Prototype fonctionnel d’application SaaS B2B autour de la RSE.",
            "Démo en ligne accessible depuis le portfolio.",
            "Application développée en PHP/MySQL avec authentification, rôles et sessions.",
            "Base de données relationnelle complète pour gérer utilisateurs, défis, actions, badges et récompenses.",
            "Système de gamification complet : XP, niveaux, streaks, monnaie, badges et boutique.",
            "Projet pertinent pour montrer mes compétences fullstack, ma logique applicative, mon expérience de groupe et ma capacité à mettre un projet en ligne.",
          ],
        },

        lessons: {
          title: "Ce que j’ai appris",
          text:
            "Shift’Up m’a permis de passer d’une logique de site web à une vraie logique d’application : base de données, authentification, rôles, progression utilisateur, gamification, intégration de maquettes, travail en équipe et déploiement. J’ai aussi compris l’importance de rendre un projet portfolio réellement testable, sans exposer de données sensibles.",
        },
      },

      en: {
        badge: "Group project · PHP · MySQL · CSR · Online demo",
        fullTitle:
          "Shift’Up — B2B SaaS prototype to engage employees in CSR actions",
        subtitle:
          "A gamified web application designed to turn a company’s CSR commitments into concrete, motivating and measurable actions for employees.",
        backLabel: "Back to portfolio",
        liveLabel: "View live demo",

        info: {
          title: "Project details",
          items: [
            ["Type", "B2B SaaS prototype"],
            ["Context", "Group project"],
            ["Team", "7 people · 3 developers · 4 creatives"],
            ["Role", "Lead application & database developer"],
            ["Year", "2026"],
            ["Status", "Functional online demo"],
            ["Test access", "Company invite code: 1234"],
          ],
          stackTitle: "Stack",
          stack: [
            "PHP",
            "MySQL",
            "PDO",
            "PHP Sessions",
            "JavaScript",
            "Chart.js",
            "Tailwind CDN",
            "HTML/CSS",
          ],
        },

        overview: {
          title: "Overview",
          text:
            "Shift’Up is a B2B SaaS startup prototype designed to support companies in their ecological transition. The goal is to connect a company’s CSR commitments with employees’ daily actions through a motivating, collective and gamified application.",
          cards: [
            {
              title: "Product objective",
              text:
                "Make ecology more accessible and engaging by turning CSR best practices into daily challenges, progression, badges, rankings and rewards.",
            },
            {
              title: "Technical objective",
              text:
                "Build a dynamic web application with authentication, a relational database, user roles, challenges, gamification and persistent user progress.",
            },
            {
              title: "Testable demo",
              text:
                "The application is hosted online so recruiters can test registration, login and the Shifter journey. Company invite code: 1234.",
            },
          ],
        },

        role: {
          title: "My role",
          text:
            "Within a team of 7 people, I mainly developed the application logic and database of Shift’Up. The creative team produced the visual identity, assets and mockups, which I then largely integrated into the application.",
          items: [
            "Designed around 85% of the MySQL database.",
            "Developed most of the user-facing application.",
            "Built the login, registration and settings pages.",
            "Created and wrote the CSR challenges, excluding the visuals.",
            "Developed the gamification logic: XP, levels, streaks, badges, virtual currency and shop.",
            "Integrated the mockups provided by the creative team.",
            "Contributed lightly to the initial wireframe to support the mockup design.",
            "Created the Git repository and helped resolve merge conflicts during the project.",
            "Deployed a functional online demo to make the project testable.",
            "Worked occasionally on the admin and super-admin areas, which were mainly developed by another developer.",
          ],
        },

        process: {
          title: "Process",
          items: [
            {
              title: "Concept & identity",
              text:
                "The project is built around a strong brand universe: Shifter, Daily Shift, Shift League, Shift Center, Shift Master and Shift Impact. The goal was to make CSR feel more positive, accessible and motivating.",
            },
            {
              title: "Database",
              text:
                "I designed most of the data model: users, companies, departments, challenges, completed actions, badges, rewards, inventory and progression.",
            },
            {
              title: "User journey",
              text:
                "I developed the main Shifter-side pages: authentication, registration, settings, challenges, shop and progression mechanics.",
            },
            {
              title: "Gamification",
              text:
                "I implemented a reward system with XP, levels, streaks, badges, virtual currency and usable items to strengthen user engagement.",
            },
            {
              title: "Deployment",
              text:
                "I prepared an online hosted version of the project with a demo database to make the application accessible from my portfolio.",
            },
          ],
        },

        features: {
          title: "Main features",
          items: [
            "Authentication with login, registration and password recovery.",
            "Registration through a company invite code.",
            "Role management: Shifter, company Admin and Super-admin.",
            "CSR challenges with difficulty, category, duration, daily limit and validation.",
            "XP, level and progression system.",
            "User streak to encourage consistency.",
            "Badges unlocked through specific actions.",
            "Virtual currency earned by completing challenges.",
            "Shop with rewards and usable items.",
            "User inventory.",
            "Relational MySQL database.",
            "French / English bilingual interface.",
            "Responsive integration based on creative mockups.",
            "Online demo hosted on alwaysdata.",
          ],
        },

        challenges: {
          title: "Challenges",
          items: [
            {
              problem:
                "Creating a motivating CSR application without sounding moralizing or guilt-inducing.",
              solution:
                "The project uses a positive approach based on challenges, progression, rewards and a more playful brand vocabulary.",
            },
            {
              problem:
                "Turning simple ecological actions into real application logic.",
              solution:
                "Each challenge has its own rules: XP, CO₂ saved, duration, daily limit, difficulty, category and database validation.",
            },
            {
              problem:
                "Managing persistent user progression with PHP/MySQL.",
              solution:
                "I connected completed actions to the database so XP, currency, streaks, badges, inventory and levels could be updated dynamically.",
            },
            {
              problem:
                "Making the project testable for recruiters without exposing sensitive data.",
              solution:
                "I deployed an online demo with a dedicated demo database and a test invite code so users can register without using real company data.",
            },
            {
              problem:
                "Working as a team with both developers and creatives.",
              solution:
                "I helped integrate the mockups, created the Git repository and supported conflict resolution to keep a shared working base.",
            },
          ],
        },

        technical: {
          title: "Technical details",
          items: [
            {
              title: "Relational database",
              text:
                "The MySQL database structures users, companies, departments, challenges, rewards, badges, actions and inventories to make user progression persistent.",
            },
            {
              title: "PHP/MySQL gamification",
              text:
                "Completing a challenge triggers several updates: XP gain, virtual currency, CO₂ saved, streak progression, multi-day progress and potential badge unlocks.",
            },
            {
              title: "Authentication & roles",
              text:
                "The application uses PHP sessions and roles to separate access between Shifters, company Admins and Super-admins.",
            },
            {
              title: "Demo deployment",
              text:
                "The project was hosted online with a demo database to make the user journey directly testable from the portfolio.",
            },
            {
              title: "Teamwork",
              text:
                "The project was developed by a team of 7 people: 3 developers and 4 creatives. My role focused on the application, database, gamification and integration.",
            },
          ],
        },

        gallery: {
          title: "Gallery",
          text:
            "The visuals should show both the gamified user experience and the functional depth of the application.",
          items: [
            {
              label: "Shifter Dashboard",
              image: `${import.meta.env.BASE_URL}projects/shiftup/dashboard.jpg`,
            },
            {
              label: "CSR Challenges",
              image: `${import.meta.env.BASE_URL}projects/shiftup/defis.jpg`,
            },
            {
              label: "Shop & Rewards",
              image: `${import.meta.env.BASE_URL}projects/shiftup/shop.jpg`,
            },
          ],
        },

        results: {
          title: "Results",
          items: [
            "Functional B2B SaaS application prototype focused on CSR.",
            "Online demo accessible from the portfolio.",
            "Application built with PHP/MySQL, authentication, roles and sessions.",
            "Complete relational database to manage users, challenges, actions, badges and rewards.",
            "Full gamification system: XP, levels, streaks, currency, badges and shop.",
            "Relevant project to showcase my fullstack skills, application logic, group project experience and ability to deploy a real demo.",
          ],
        },

        lessons: {
          title: "What I learned",
          text:
            "Shift’Up helped me move from a website mindset to a real application mindset: database, authentication, roles, user progression, gamification, mockup integration, teamwork and deployment. It also taught me the importance of making a portfolio project genuinely testable without exposing sensitive data.",
        },
      },
    },
  },

  {
  slug: "digitalbank",
  number: "03",
  title: "DigitalBank",
  accent: "#31d35c",
  page: "/projects/digitalbank",
  image: `${import.meta.env.BASE_URL}projects/digitalbank/hero.jpg`,

  seo: {
    fr: {
      title: "DigitalBank – Landing page responsive | Ryan Mumbata",
      description:
        "Étude de cas DigitalBank : intégration responsive d’une landing page bancaire avec HTML, Tailwind CSS, JavaScript, menu mobile, sections marketing et adaptation desktop/mobile.",
    },
    en: {
      title: "DigitalBank – Responsive landing page | Ryan Mumbata",
      description:
        "DigitalBank case study: responsive banking landing page built with HTML, Tailwind CSS and JavaScript, including mobile navigation, marketing sections and desktop/mobile adaptation.",
    },
  },

  links: [],

  card: {
    fr: {
      type: "Landing page responsive",
      description:
        "Intégration d’une landing page bancaire responsive inspirée d’un challenge Frontend Mentor. Le projet montre ma capacité à reproduire une maquette, gérer le responsive desktop/mobile, créer un menu mobile interactif et structurer une page marketing complète.",
      tags: ["HTML", "Tailwind CSS", "JavaScript", "Responsive", "Frontend Mentor"],
      imageAlt:
        "Aperçu du projet DigitalBank, landing page bancaire responsive intégrée en HTML, Tailwind CSS et JavaScript",
    },
    en: {
      type: "Responsive landing page",
      description:
        "Responsive banking landing page inspired by a Frontend Mentor challenge. This project shows my ability to reproduce a design, handle desktop/mobile responsiveness, build an interactive mobile menu and structure a complete marketing page.",
      tags: ["HTML", "Tailwind CSS", "JavaScript", "Responsive", "Frontend Mentor"],
      imageAlt:
        "Preview of the DigitalBank project, responsive banking landing page built with HTML, Tailwind CSS and JavaScript",
    },
  },

  detail: {
    fr: {
      badge: "Intégration · HTML · Tailwind · Responsive",
      fullTitle:
        "DigitalBank — Landing page bancaire responsive avec HTML, Tailwind CSS et JavaScript",
      subtitle:
        "Une landing page marketing pensée pour travailler l’intégration front-end, le responsive design, les états interactifs et la structure d’une page professionnelle.",
      backLabel: "Retour au portfolio",
      liveLabel: "Projet d’intégration",

      info: {
        title: "Informations projet",
        items: [
          ["Type", "Landing page responsive"],
          ["Contexte", "Challenge d’intégration"],
          ["Rôle", "Intégrateur front-end"],
          ["Année", "2026"],
          ["Statut", "Projet terminé / à publier"],
        ],
        stackTitle: "Stack",
        stack: [
          "HTML",
          "Tailwind CSS",
          "JavaScript",
          "Responsive design",
          "Mobile menu",
          "Frontend Mentor",
        ],
      },

      overview: {
        title: "Présentation",
        text:
          "DigitalBank est une landing page bancaire responsive réalisée à partir d’un challenge d’intégration Frontend Mentor. L’objectif était de reproduire une interface marketing moderne, claire et adaptée aux écrans desktop et mobile.",
        cards: [
          {
            title: "Objectif principal",
            text:
              "Montrer ma capacité à transformer une maquette en page web responsive, structurée et proche du rendu attendu.",
          },
          {
            title: "Objectif technique",
            text:
              "Travailler la mise en page avec Tailwind CSS, le responsive, les images décoratives, les hover states et le menu mobile en JavaScript.",
          },
        ],
      },

      role: {
        title: "Mon rôle",
        text:
          "J’ai intégré la landing page en HTML avec Tailwind CSS, organisé les sections principales et ajouté l’interaction JavaScript du menu mobile.",
        items: [
          "Structure HTML complète de la page.",
          "Intégration responsive desktop / mobile.",
          "Utilisation de Tailwind CSS via CDN.",
          "Création du menu mobile avec bouton hamburger et fermeture automatique.",
          "Gestion des images hero, mockups, icônes et articles.",
          "Ajout des états hover sur les liens et boutons.",
          "Respect de la hiérarchie visuelle d’une landing page marketing.",
        ],
      },

      process: {
        title: "Processus",
        items: [
          {
            title: "Analyse de la maquette",
            text:
              "Lecture du design desktop et mobile afin de comprendre la structure : hero, arguments, articles, navigation et footer.",
          },
          {
            title: "Structure HTML",
            text:
              "Création des sections principales avec une hiérarchie claire : header, hero, avantages, articles et footer.",
          },
          {
            title: "Responsive",
            text:
              "Adaptation des tailles, espacements, images et alignements pour obtenir un rendu cohérent sur mobile et desktop.",
          },
          {
            title: "Interaction",
            text:
              "Ajout d’un script JavaScript pour ouvrir et fermer le menu mobile avec mise à jour de l’icône hamburger.",
          },
        ],
      },

      features: {
        title: "Fonctionnalités principales",
        items: [
          "Hero section responsive avec mockups mobiles.",
          "Navigation desktop avec hover states.",
          "Menu mobile interactif avec icône hamburger / close.",
          "Section d’arguments avec icônes.",
          "Section articles avec cartes.",
          "Footer complet avec liens et réseaux sociaux.",
          "Adaptation mobile et desktop.",
          "Utilisation de Tailwind CSS pour accélérer l’intégration.",
        ],
      },

      challenges: {
        title: "Problèmes rencontrés",
        items: [
          {
            problem:
              "Gérer les images hero entre la version desktop et la version mobile.",
            solution:
              "J’ai utilisé des images différentes selon les breakpoints et adapté les positions avec Tailwind pour conserver une composition proche de la maquette.",
          },
          {
            problem:
              "Créer une navigation mobile claire sans framework JavaScript.",
            solution:
              "J’ai ajouté un script simple pour gérer l’ouverture, la fermeture, l’état aria-expanded et le changement d’icône du menu.",
          },
          {
            problem:
              "Respecter le responsive tout en gardant une structure lisible.",
            solution:
              "J’ai découpé la page en sections simples et utilisé les classes responsive de Tailwind pour ajuster les layouts selon la taille d’écran.",
          },
        ],
      },

      technical: {
        title: "Points techniques",
        items: [
          {
            title: "Tailwind CSS",
            text:
              "Le projet utilise Tailwind CSS pour gérer rapidement les espacements, couleurs, layouts, breakpoints et états hover.",
          },
          {
            title: "JavaScript léger",
            text:
              "Le menu mobile est géré avec un script JavaScript simple : toggle de classes, changement d’icône et mise à jour de l’attribut aria-expanded.",
          },
          {
            title: "Responsive design",
            text:
              "La page adapte sa structure entre mobile et desktop avec des grilles, flexbox, images spécifiques et classes de breakpoint.",
          },
        ],
      },

      gallery: {
        title: "Galerie",
        text:
          "Les captures doivent montrer le rendu desktop, le rendu mobile et le menu mobile ouvert.",
        items: [
          {
            label: "Desktop",
            image: `${import.meta.env.BASE_URL}projects/digitalbank/desktop.jpg`,
          },
          {
            label: "Mobile",
            image: `${import.meta.env.BASE_URL}projects/digitalbank/mobile.jpg`,
          },
          {
            label: "Menu mobile",
            image: `${import.meta.env.BASE_URL}projects/digitalbank/menu.jpg`,
          },
        ],
      },

      results: {
        title: "Résultats",
        items: [
          "Landing page responsive intégrée en HTML, Tailwind CSS et JavaScript.",
          "Navigation desktop et mobile fonctionnelle.",
          "Structure marketing complète : hero, arguments, articles et footer.",
          "Projet utile pour montrer mes bases en intégration front-end et responsive design.",
        ],
      },

      lessons: {
        title: "Ce que j’ai appris",
        text:
          "Ce projet m’a permis de renforcer mes bases en intégration responsive, en structuration HTML, en Tailwind CSS et en JavaScript simple pour l’interaction d’un menu mobile. C’est un bon projet pour montrer une compétence d’intégration propre avant de passer à des projets React plus avancés.",
      },
    },

    en: {
      badge: "Integration · HTML · Tailwind · Responsive",
      fullTitle:
        "DigitalBank — Responsive banking landing page with HTML, Tailwind CSS and JavaScript",
      subtitle:
        "A marketing landing page designed to practise front-end integration, responsive design, interactive states and professional page structure.",
      backLabel: "Back to portfolio",
      liveLabel: "Integration project",

      info: {
        title: "Project details",
        items: [
          ["Type", "Responsive landing page"],
          ["Context", "Integration challenge"],
          ["Role", "Front-end integrator"],
          ["Year", "2026"],
          ["Status", "Completed / to publish"],
        ],
        stackTitle: "Stack",
        stack: [
          "HTML",
          "Tailwind CSS",
          "JavaScript",
          "Responsive design",
          "Mobile menu",
          "Frontend Mentor",
        ],
      },

      overview: {
        title: "Overview",
        text:
          "DigitalBank is a responsive banking landing page based on a Frontend Mentor integration challenge. The goal was to reproduce a modern marketing interface adapted to both desktop and mobile screens.",
        cards: [
          {
            title: "Main objective",
            text:
              "Show my ability to transform a design into a responsive, structured webpage close to the expected result.",
          },
          {
            title: "Technical objective",
            text:
              "Practise layout with Tailwind CSS, responsiveness, decorative images, hover states and a JavaScript mobile menu.",
          },
        ],
      },

      role: {
        title: "My role",
        text:
          "I integrated the landing page with HTML and Tailwind CSS, structured the main sections and added the JavaScript interaction for the mobile menu.",
        items: [
          "Complete HTML page structure.",
          "Desktop / mobile responsive integration.",
          "Tailwind CSS via CDN.",
          "Mobile menu with hamburger button and automatic closing.",
          "Management of hero images, mockups, icons and article cards.",
          "Hover states on links and buttons.",
          "Clear visual hierarchy for a marketing landing page.",
        ],
      },

      process: {
        title: "Process",
        items: [
          {
            title: "Design analysis",
            text:
              "Reading the desktop and mobile designs to understand the structure: hero, benefits, articles, navigation and footer.",
          },
          {
            title: "HTML structure",
            text:
              "Building the main sections with a clear hierarchy: header, hero, benefits, articles and footer.",
          },
          {
            title: "Responsiveness",
            text:
              "Adapting sizes, spacing, images and alignment to keep a coherent layout on mobile and desktop.",
          },
          {
            title: "Interaction",
            text:
              "Adding a small JavaScript script to open and close the mobile menu and switch the hamburger icon.",
          },
        ],
      },

      features: {
        title: "Main features",
        items: [
          "Responsive hero section with mobile mockups.",
          "Desktop navigation with hover states.",
          "Interactive mobile menu with hamburger / close icon.",
          "Benefits section with icons.",
          "Article section with cards.",
          "Complete footer with links and social media.",
          "Mobile and desktop adaptation.",
          "Tailwind CSS integration workflow.",
        ],
      },

      challenges: {
        title: "Challenges",
        items: [
          {
            problem:
              "Managing the hero images between desktop and mobile layouts.",
            solution:
              "I used different images depending on breakpoints and adjusted their positions with Tailwind to keep the composition close to the design.",
          },
          {
            problem:
              "Creating a clear mobile navigation without a JavaScript framework.",
            solution:
              "I added a simple script to toggle classes, switch icons and update the aria-expanded attribute.",
          },
          {
            problem:
              "Keeping the page responsive while maintaining readable structure.",
            solution:
              "I split the page into clear sections and used Tailwind responsive classes to adapt layouts depending on screen size.",
          },
        ],
      },

      technical: {
        title: "Technical details",
        items: [
          {
            title: "Tailwind CSS",
            text:
              "The project uses Tailwind CSS to handle spacing, colors, layouts, breakpoints and hover states efficiently.",
          },
          {
            title: "Lightweight JavaScript",
            text:
              "The mobile menu is handled with a simple JavaScript script: class toggling, icon switching and aria-expanded updates.",
          },
          {
            title: "Responsive design",
            text:
              "The page adapts between mobile and desktop using grids, flexbox, breakpoint classes and specific images.",
          },
        ],
      },

      gallery: {
        title: "Gallery",
        text:
          "The screenshots should show the desktop layout, the mobile layout and the open mobile menu.",
        items: [
          {
            label: "Desktop",
            image: `${import.meta.env.BASE_URL}projects/digitalbank/desktop.jpg`,
          },
          {
            label: "Mobile",
            image: `${import.meta.env.BASE_URL}projects/digitalbank/mobile.jpg`,
          },
          {
            label: "Mobile menu",
            image: `${import.meta.env.BASE_URL}projects/digitalbank/menu.jpg`,
          },
        ],
      },

      results: {
        title: "Results",
        items: [
          "Responsive landing page built with HTML, Tailwind CSS and JavaScript.",
          "Functional desktop and mobile navigation.",
          "Complete marketing structure: hero, benefits, articles and footer.",
          "Useful project to showcase my front-end integration and responsive design foundations.",
        ],
      },

      lessons: {
        title: "What I learned",
        text:
          "This project helped me strengthen my foundations in responsive integration, HTML structure, Tailwind CSS and simple JavaScript interaction for a mobile menu. It is a useful project to show clean integration skills before moving to more advanced React projects.",
      },
    },
  },
}
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug) {
  const currentIndex = projects.findIndex((project) => project.slug === slug);

  if (currentIndex === -1) return projects[0];

  return projects[(currentIndex + 1) % projects.length];
}
