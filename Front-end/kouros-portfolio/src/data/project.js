const projects = [
  {
    slug: "menumaker",
    tag: "Conception & spécifications",
    title: "MenuMaker",
    description:
      "Cahier des charges complet pour une plateforme permettant aux restaurateurs de créer et diffuser leurs menus (PDF, Instagram, Deliveroo) sans compétence technique — méthodologie Agile, spécifications techniques et choix d'architecture.",
    tech: ["React", "Node.js", "MongoDB"],
    image: null,
    alt: "Maquette de l'interface MenuMaker",
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
    description:
      "Reprise et optimisation du site d'une agence événementielle — correction de bugs et tests unitaires.",
    tech: ["React", "Jest"],
    image: "/724events-home.png",
    alt: "Page d'accueil du site 724 Events, avec photo d'une conférence du World Economic Forum",
    links: {
      github: "https://github.com/kourossalari/Projet-9",
    },
  },
  {
    slug: "nina-carducci",
    tag: "Portfolio",
    title: "Nina Carducci",
    description:
      "Site vitrine responsive pour une photographe, intégré à partir de maquettes desktop et mobile.",
    tech: ["HTML5", "CSS3"],
    image: "/nina-carducci-home.png",
    alt: "Page d'accueil du portfolio de la photographe Nina Carducci, avec photo de foule en concert",
    links: {
      github: "https://github.com/kourossalari/Projet-8",
    },
  },
  {
    slug: "kasa",
    tag: "Application",
    title: "Kasa",
    description:
      "Application de location façon Airbnb — navigation entre logements, composants réutilisables et routing dynamique.",
    tech: ["React", "Vite"],
    image: "/kasa-home.png",
    alt: "Page d'accueil de l'application Kasa, avec bannière et grille de logements à louer",
    links: {
      github: "https://github.com/kourossalari/Projet7",
    },
  },
  {
    slug: "sophie-bluel",
    tag: "Portfolio",
    title: "Sophie Bluel",
    description:
      "Portfolio d'architecte d'intérieur avec galerie filtrable, mode édition et back-office connecté à une API.",
    tech: ["JavaScript", "API"],
    image: "/sophie-bluel-home.png",
    alt: "Page d'accueil du portfolio de Sophie Bluel, architecte d'intérieur, avec son portrait",
    links: {
      github: "https://github.com/kourossalari/Projet6",
    },
  },
];

export default projects;
