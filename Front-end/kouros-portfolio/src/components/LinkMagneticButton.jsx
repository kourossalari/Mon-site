import MagneticButton from "./MagneticButton";
import Link from "next/link";

export default function LinkMagneticButton({ children }) {
  return (
    <Link href="/contact">
      <MagneticButton className="btn btn-primary">{children || "Contact"}</MagneticButton>
    </Link>
  );
}

