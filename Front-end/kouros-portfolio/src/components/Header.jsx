import Link from "next/link";
import MagneticButton from "./MagneticButton";
import LinkMagneticButton from "./LinkMagneticButton";

export default function Header() {
  return (
    <header>
      <div className="logo">
        KS <span className="linkMedia">Kouros Salari — Développeur Front-End</span>
      </div>
      <nav>
        <Link href="/">Accueil</Link>

        <span className="linkMedia">
          <Link href="/#projets">Projets</Link>
        </span>

        <span className="linkMedia">
          <Link href="/#competences">Compétences</Link>
        </span>

        <span className="linkMedia">
          <Link href="/#parcours">A propos</Link>
        </span>

        <span className="linkMedia">
          <Link href="/parcours">Parcours</Link>
        </span>
      </nav>
      <LinkMagneticButton>Me contacter</LinkMagneticButton>
    </header>
  );
}
