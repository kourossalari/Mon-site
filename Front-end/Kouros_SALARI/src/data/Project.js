const projects = [
  {
    slug: "menumaker",
    tag: "Conception & spécifications",
    title: "MenuMaker",
    description:
      "Cahier des charges complet pour une plateforme permettant aux restaurateurs de créer et diffuser leurs menus (PDF, Instagram, Deliveroo) sans compétence technique — méthodologie Agile, spécifications techniques et choix d'architecture.",
    tech: ["React", "Node.js", "MongoDB"],
    image: null, // à ajouter : capture de ta maquette Figma
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
    description:
      "Application bancaire front-end consommant une API documentée (Swagger), avec authentification JWT et gestion d'état Redux.",
    tech: ["React", "Redux Toolkit", "JWT"],
    image: "/assets/projects/argentbank-home.png",
  },
  {
    slug: "724-events",
    tag: "Optimisation",
    title: "724 Events",
    description:
      "Reprise et optimisation du site d'une agence événementielle — correction de bugs et tests unitaires.",
    tech: ["React", "Jest"],
    image: "/assets/projects/724events-home.png",
  },
  {
    slug: "nina-carducci",
    tag: "Portfolio",
    title: "Nina Carducci",
    description:
      "Site vitrine responsive pour une photographe, intégré à partir de maquettes desktop et mobile.",
    tech: ["HTML5", "CSS3"],
    image: "/assets/projects/nina-carducci-home.png",
  },
  {
    slug: "kasa",
    tag: "Application",
    title: "Kasa",
    description:
      "Application de location façon Airbnb — navigation entre logements, composants réutilisables et routing dynamique.",
    tech: ["React", "Vite"],
    image: "/assets/projects/kasa-home.png",
  },
  {
    slug: "sophie-bluel",
    tag: "Portfolio",
    title: "Sophie Bluel",
    description:
      "Portfolio d'architecte d'intérieur avec galerie filtrable, mode édition et back-office connecté à une API.",
    tech: ["JavaScript", "API"],
    image: "/assets/projects/sophie-bluel-home.png",
  },
];

export default projects;