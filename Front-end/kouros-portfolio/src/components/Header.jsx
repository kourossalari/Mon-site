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
        <Link href="/#projets">Projets</Link>
        <Link href="/#competences">Compétences</Link>
        <Link href="/#parcours">Parcours</Link>
      </nav>
      <Link href="/contact">
        <MagneticButton className="btn btn-primary">Me contacter</MagneticButton>
      </Link>
    </header>
  );
}
