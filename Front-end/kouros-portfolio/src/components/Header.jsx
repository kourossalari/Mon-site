import Link from "next/link";
import MagneticButton from "./MagneticButton";

export default function Header() {
  return (
    <header>
      <div className="logo">
        KS <span>Kouros Salari — Développeur Front-End</span>
      </div>
      <nav>
        <Link href="/">Accueil</Link>
        <Link href="/#projets" className="linkMedia">Projets</Link>
        <Link href="/#competences" className="linkMedia">Compétences</Link>
        <Link href="/#parcours" className="linkMedia">Parcours</Link>
      </nav>
      <Link href="/contact">
        <MagneticButton className="btn btn-primary">Me contacter</MagneticButton>
      </Link>
    </header>
  );
}
