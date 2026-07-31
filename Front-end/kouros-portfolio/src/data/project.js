const projects = [
  {
    slug: "menumaker",
    tag: "Conception & spécifications",
    title: "MenuMaker",
    context:
      "Cahier des charges complet pour une plateforme permettant aux restaurateurs de créer et diffuser leurs menus (PDF, Instagram, Deliveroo) sans compétence technique — méthodologie Agile, spécifications techniques et choix d'architecture.",
    tech: ["React", "Node.js", "MongoDB","API REST" , "Notion"],
    image: null,
    alt: "Maquette de l'interface MenuMaker",

    objectifs: [
    "Implémenter une authentification sécurisée via JWT",
    "Consommer une API REST pour récupérer et modifier les données utilisateur",
    "Mettre en place une gestion d’état globale avec Redux",
    "Structurer une application React maintenable et scalable"
  ],

  competences: [
    "Gestion de l’authentification avec JWT",
    "Utilisation de Redux Toolkit pour le state management",
    "Consommation d’API REST (GET / PUT)",
    "Structuration d’une application React",
    "Lecture et exploitation d’une documentation Swagger"
  ],

  resultats: [
    "Connexion utilisateur sécurisée",
    "Récupération des informations utilisateur via API",
    "Modification du nom d’utilisateur via une requête API",
    "Simulation des modifications de transactions côté front (absence de routes API)"
  ],

  perspectives: [
    "Mettre en place les routes backend pour les transactions et les notes",
    "Connecter le front à ces nouvelles routes API",
    "Améliorer la gestion des erreurs et des états de chargement",
    "Optimiser l’expérience utilisateur (feedback visuel, validations)"
  ],
    links: {
      figma:
        "https://www.figma.com/design/Q6NEUPqwz1U3HFaCaVoF7N/Maquette-desktop---Menu-Maker-by-Qwenta?node-id=0-1",
      kanban:
        "https://app.notion.com/p/3a32a397d880808aa966d9d8469fef25?v=3a32a397d880804f852f000c2baaf820",
    },
  },
  {
  slug: "argentbank",
  tag: "Application",
  title: "ArgentBank",
  context:
    "Dans le cadre de ma formation en développement web, j’ai travaillé sur la mise en place d’une application bancaire front-end. Le projet reposait sur l’intégration d’une API existante documentée via Swagger, avec une attention particulière portée à l’authentification et à la gestion des données utilisateur.",
  tech: ["React", "JavaScript", "Redux Toolkit", "API REST", "JWT"],
  image: "/argentbank-home.png",
  alt: "Page d'accueil du site ArgentBank, avec image de pousse de plante et présentation des avantages du compte épargne",

  objectifs: [
    "Implémenter une authentification sécurisée via JWT",
    "Consommer une API REST pour récupérer et modifier les données utilisateur",
    "Mettre en place une gestion d’état globale avec Redux",
    "Structurer une application React maintenable et scalable"
  ],

  competences: [
    "Gestion de l’authentification avec JWT",
    "Utilisation de Redux Toolkit pour le state management",
    "Consommation d’API REST (GET / PUT)",
    "Structuration d’une application React",
    "Lecture et exploitation d’une documentation Swagger"
  ],

  resultats: [
    "Connexion utilisateur sécurisée",
    "Récupération des informations utilisateur via API",
    "Modification du nom d’utilisateur via une requête API",
    "Simulation des modifications de transactions côté front (absence de routes API)"
  ],

  perspectives: [
    "Mettre en place les routes backend pour les transactions et les notes",
    "Connecter le front à ces nouvelles routes API",
    "Améliorer la gestion des erreurs et des états de chargement",
    "Optimiser l’expérience utilisateur (feedback visuel, validations)"
  ],

  links: {
    github: "https://github.com/kourossalari/Projet-10",
  },
},
  {
    slug: "724-events",
    tag: "Optimisation",
    title: "724 Events",
    context:
      "Dans le cadre de ce projet, j’ai repris un site existant pour une agence événementielle afin d’en améliorer la qualité globale. Le travail a consisté à identifier et corriger des bugs, optimiser les performances et mettre en place des tests unitaires pour fiabiliser l’application.",
    tech: ["React", "Jest"],
    image: "/724events-home.png",
    alt: "Page d'accueil du site 724 Events, avec photo d'une conférence du World Economic Forum",

    objectifs: [
    "Identifier et corriger les bugs présents dans l’application",
    "Améliorer la stabilité et la maintenabilité du code",
    "Mettre en place des tests unitaires avec Jest",
    "Garantir le bon fonctionnement des composants critiques"
  ],

  competences: [
    "Debugging d’une application React",
    "Écriture de tests unitaires avec Jest",
    "Amélioration de la qualité du code",
    "Analyse et compréhension d’un code existant",
    "Optimisation de composants React"
  ],

  resultats: [
    "Correction des bugs majeurs affectant l’expérience utilisateur",
    "Mise en place de tests unitaires pour sécuriser les fonctionnalités",
    "Application plus stable et plus fiable",
    "Code plus propre et maintenable"
  ],

  perspectives: [
    "Augmenter la couverture de tests",
    "Mettre en place des tests end-to-end",
    "Optimiser davantage les performances",
    "Refactoriser certains composants pour améliorer la lisibilité"
  ],
    links: {
      github: "https://github.com/kourossalari/Projet-9",
    },
  },
  {
    slug: "nina-carducci",
    tag: "Portfolio",
    title: "Nina Carducci",
    context:
      "Dans ce projet, j’ai réalisé l’intégration complète d’un site vitrine pour une photographe professionnelle à partir de maquettes fournies (desktop et mobile). L’objectif était de produire un site fidèle au design, responsive et optimisé pour une navigation fluide sur tous les supports.",
    tech: ["HTML5", "CSS3"],
    image: "/nina-carducci-home.png",
    alt: "Page d'accueil du portfolio de la photographe Nina Carducci, avec photo de foule en concert",

    objectifs: [
    "Intégrer fidèlement une maquette desktop et mobile",
    "Assurer la responsivité sur tous les écrans",
    "Structurer le HTML de manière sémantique",
    "Optimiser les performances et le temps de chargement"
  ],

  competences: [
    "Intégration HTML5 sémantique",
    "Mise en page CSS (Flexbox / Grid)",
    "Responsive design (mobile-first)",
    "Optimisation des images et performances",
    "Respect d’une maquette Figma"
  ],

  resultats: [
    "Site fidèle aux maquettes fournies",
    "Affichage optimal sur mobile, tablette et desktop",
    "Navigation fluide et expérience utilisateur améliorée",
    "Code propre et structuré"
  ],

  perspectives: [
    "Ajouter des animations pour enrichir l’expérience utilisateur",
    "Améliorer le référencement SEO",
    "Mettre en place un CMS pour gérer les contenus",
    "Optimiser davantage les performances (lazy loading, etc.)"
  ],
    links: {
      github: "https://github.com/kourossalari/Projet-8",
    },
  },
  {
    slug: "kasa",
    tag: "Application",
    title: "Kasa",
    context:
      "Dans ce projet, j’ai développé une application de location de logements inspirée d’Airbnb en utilisant React. L’objectif était de créer une interface dynamique avec un routing complet, des composants réutilisables et une expérience utilisateur fluide.",
    tech: ["React", "Vite"],
    image: "/kasa-home.png",
    alt: "Page d'accueil de l'application Kasa, avec bannière et grille de logements à louer",

    objectifs: [
    "Mettre en place un routing dynamique avec React Router",
    "Créer des composants réutilisables et modulaires",
    "Gérer l’affichage dynamique des logements",
    "Implémenter une navigation fluide entre les pages",
    "Structurer une application React maintenable"
  ],

  competences: [
    "Utilisation de React Router pour la navigation",
    "Création de composants réutilisables",
    "Gestion des props et du state",
    "Organisation d’un projet React",
    "Intégration de données dynamiques (JSON)"
  ],

  resultats: [
    "Application fonctionnelle avec navigation entre pages",
    "Affichage dynamique des logements",
    "Composants réutilisables (cards, collapses, etc.)",
    "Expérience utilisateur fluide",
    "Code structuré et maintenable"
  ],

  perspectives: [
    "Connecter l’application à une API backend réelle",
    "Ajouter un système d’authentification utilisateur",
    "Mettre en place une gestion globale du state",
    "Améliorer les performances et le SEO",
    "Ajouter des fonctionnalités (réservation, favoris, etc.)"
  ],
    links: {
      github: "https://github.com/kourossalari/Projet7",
    },
  },
  {
    slug: "sophie-bluel",
    tag: "Portfolio",
    title: "Sophie Bluel",
    context:
      "Dans ce projet, j’ai développé un portfolio dynamique pour une architecte d’intérieur avec une interface publique et un mode administrateur. L’application repose sur une API permettant de gérer les contenus (travaux, catégories) avec un système d’authentification et d’édition en temps réel.",
    tech: ["JavaScript", "API"],
    image: "/sophie-bluel-home.png",
    alt: "Page d'accueil du portfolio de Sophie Bluel, architecte d'intérieur, avec son portrait",

     objectifs: [
    "Afficher dynamiquement les travaux depuis une API",
    "Mettre en place un système de filtrage par catégories",
    "Implémenter une authentification administrateur",
    "Permettre l’ajout et la suppression de projets via une modale",
    "Gérer les interactions utilisateur en temps réel"
  ],

  competences: [
    "Manipulation du DOM en JavaScript",
    "Consommation d’une API REST (GET, POST, DELETE)",
    "Gestion de l’authentification (token)",
    "Création d’interfaces dynamiques",
    "Gestion d’événements et interactions utilisateur",
    "Structuration du code JavaScript"
  ],

  resultats: [
    "Galerie dynamique alimentée par API",
    "Filtrage fonctionnel des projets",
    "Mode administrateur avec édition en direct",
    "Ajout et suppression de contenus sans rechargement",
    "Expérience utilisateur fluide"
  ],

  perspectives: [
    "Améliorer la gestion des erreurs API",
    "Ajouter une confirmation avant suppression",
    "Optimiser les performances de chargement",
    "Refactoriser le code en architecture modulaire",
    "Migrer vers un framework (React)"
  ],
    links: {
      github: "https://github.com/kourossalari/Projet6",
    },
  },
];

export default projects;
