"use client"

import Timeline from "@/components/Timeline"
import useScrollReveal from "@/hooks/useScrollReveal";
import MagneticButton from "@/components/MagneticButton";
import Link from "next/link";

export default function Parcours() {
    const containerRef = useScrollReveal();
    
  return (
    <div ref={containerRef}>
      <section className="block">
        <span className="eyebrow">Mon parcours</span>
        <h2>
          De l'électricité au <em>code</em>
        </h2>
        <p className="sub">
        Après plusieurs années dans l’électricité, j’ai choisi de me reconvertir dans le développement web.
        Aujourd’hui, je mets ma rigueur technique et mon sens du détail au service de la création d’interfaces modernes.
        </p>

        <Timeline />
      </section>

      <section className="body today">
  <div className="todayContainer">
    <h2>Aujourd’hui</h2>

    <p>
      Je me spécialise en développement Front-End avec React et Next.js.
      Je conçois des interfaces modernes en mettant l’accent sur la performance,
      l’expérience utilisateur et un code propre, scalable et maintenable.
    </p>

    <div className="tags">
      <span className="todayTags">React</span>
      <span className="todayTags">Next.js</span>
      <span className="todayTags">UX/UI</span>
      <span className="todayTags">Performance</span>
    </div>
  </div>
</section>

<section className="block contact">
    <h2>Envie de travailler <em>ensemble</em> ?</h2>
    <p className="contactIntro">
    Je suis disponible pour discuter de vos projets ou opportunités.
  </p>

  <div className="contactInfos">
    <p>07 62 71 95 53</p>
    <p>saalarikouros@gmail.com</p>
  </div>

        <div className="contactTwo">
        <p>Vous pouvez également me contacter via le formulaire de</p>
        <Link href="/contact">
        <MagneticButton className="btn btn-primary">
            CONTACT
        </MagneticButton>
        </Link>
        </div>

</section>
    </div>
  );
}
