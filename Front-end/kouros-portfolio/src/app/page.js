"use client";

import Link from "next/link";
import useScrollReveal from "../hooks/useScrollReveal";
import Particles from "../components/Particles";
import projects from "../data/project";
import skills from "../data/skills";

export default function Home() {
  const containerRef = useScrollReveal();

  return (
    <div ref={containerRef}>
      <section className="hero" id="hero">
        <Particles />
        <div className="hero-content">
          <h1>
            <span className="line">
              <span>Développeur front-end</span>
            </span>
            <span className="line">
              <span>Créatif &amp; passionné</span>
            </span>
          </h1>
          <p>
            Un développeur sérieux et impliqué, à votre écoute pour concrétiser le projet qui vous
            ressemble.
          </p>
          <div className="cta-row">
            <button className="btn btn-primary">Visitez mon github</button>
            <button className="btn btn-ghost">Telecharger mon CV</button>
          </div>
        </div>
      </section>

      <section className="block" id="projets">
        <span className="eyebrow reveal-up">Portfolio</span>
        <h2 className="reveal-up">
          Mes <em>réalisations</em>
        </h2>
        <p className="sub reveal-up">Voici quelques projets menés durant ma formation.</p>
        <div className="projects-grid">
          {projects.map((p) => (
            <Link href={`/projets/${p.slug}`} key={p.slug} className="project-card reveal-up">
              <div className="project-thumb">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.alt}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                ) : (
                  <span>Aperçu à venir</span>
                )}
              </div>
              <div className="project-body">
                <span className="project-tag">{p.tag}</span>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="tech-row">
                  {p.tech.map((t) => (
                    <span className="tech-pill" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="block" id="competences">
        <span className="eyebrow reveal-up">Expertise</span>
        <h2 className="reveal-up">
          Mes <em>compétences</em>
        </h2>
        <p className="sub reveal-up">
          Un référentiel construit tout au long de ma formation d'intégrateur / développeur web.
        </p>
        <div className="skills-wrap">
          {skills.map((group) => (
            <div className="skill-category reveal-up" key={group.category}>
              <h3>{group.category}</h3>
              <div className="skill-tags">
                {group.items.map((item) => (
                  <span className="skill-tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="block" id="parcour">
        <span className="eyebrow reveal-up">Mon profil</span>
        <h2 className="reveal-up">
          Connaitre mon <em>parcours</em>
        </h2>
        <div className="bodyParcours">
        <img 
        className="imgKouros"
        src="/photoKouros.jpg"
        alt="Photo representant Kouros SALARI"
        />
        </div>
      </section>

      <footer>© 2026 Kouros Salari — Développeur Front-End</footer>
    </div>
  );
}
