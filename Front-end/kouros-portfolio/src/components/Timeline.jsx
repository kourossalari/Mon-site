"use client";

import { motion } from "framer-motion";

const parcours = [
  {
    date: "2022",
    title: "Bac professionnel électricité",
    text: "Fin de mon cursus dans le domaine de l'électricité. Cette formation m'a permis de développer ma rigueur, mon autonomie et ma capacité à résoudre des problèmes techniques sur le terrain.",
  },
  {
    date: "Avril 2025",
    title: "Chef électricien",
    text: "Évolution vers un poste de chef d'équipe en électricité. Gestion des interventions, organisation du travail, accompagnement des collaborateurs et suivi de projets sur le terrain. Cette expérience m'a permis de développer mes compétences en communication, en organisation et en gestion de responsabilités.",
  },
  {
    date: "Juillet 2025",
    title: "Découverte du développement web",
    text: "Début de mon apprentissage du développement web avec la découverte du HTML, CSS et JavaScript. Création de mes premières interfaces et compréhension des bases du fonctionnement du web.",
  },
  {
    date: "Août 2025",
    title: "Formation Développeur Web - OpenClassrooms",
    text: "Début d'une formation intensive de développeur web. Réalisation de projets complets avec React, intégration d'API REST, gestion des données, architecture Front-End et mise en place de bonnes pratiques de développement.",
  },
  {
    date: "2026",
    title: "Développeur Front-End",
    text: "Aujourd'hui, je développe des interfaces web modernes et performantes avec React et Next.js. Je porte une attention particulière à l'expérience utilisateur, au design, à l'accessibilité et à la qualité du code.",
  },
];

function Timeline() {
  return (
    <div className="timeline">
      {parcours.map((item, index) => (
        <motion.article
          className="timelineItem"
          key={index}

          initial={{
            opacity: 0,
            y: 80,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 0.8,
          }}
        >
          <div className="timelinePoint"></div>

          <div className="timelineCard">
            <span>{item.date}</span>

            <h2>{item.title}</h2>

            <p>{item.text}</p>
          </div>
        </motion.article>
      ))}
    </div>
  );
}

export default Timeline;
