"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div ref={containerRef}>
      <section className="hero">
        <Particles />
        <div className="hero-content">
          <div className="badge">
            <span className="dot"></span> Disponible pour de nouveaux projets
          </div>
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
    </div>
  );
}
