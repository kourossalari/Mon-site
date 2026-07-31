"use client"

import { notFound } from "next/navigation";
import projects from "../../../data/project";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <section className="block">
      <span className="project-tag">{project.tag}</span>
      <h1>{project.title}</h1>
      <p>{project.context}</p>
      {project.image && (
        <img
          src={project.image}
          alt={project.alt}
          style={{ width: "100%", borderRadius: "16px", margin: "24px 0" }}
        />
      )}
      <div className="tech-row">
        {project.tech.map((t) => (
          <span className="tech-pill" key={t}>
            {t}
          </span>
        ))}
      </div>
        <div className="textProjets">
      <div className="objectifs">
         <h3>{project.objectif}</h3>
        {project.objectifs.map((t) =>(
          <span className="objectif-pill" key={t}>
            {t}
          </span>
        ))}
      </div>

      <div className="résultats">
        <h3>{project.resultat}</h3>
        {project.resultats.map((t) =>(
          <span className="résultat-pill" key={t}>
            {t}
          </span>
        ))}
      </div>

      </div>

      {project.links && (
        <div className="cta-row" style={{ justifyContent: "flex-start", marginTop: "32px" }}>
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Voir le code sur GitHub
            </a>
          )}
          {project.links.figma && (
            <a
              href={project.links.figma}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              Voir la maquette Figma
            </a>
          )}
          {project.links.kanban && (
            <a
              href={project.links.kanban}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              Voir le Kanban
            </a>
          )}
        </div>
      )}
    </section>
  );
}
