"use client";
import { useRef } from "react";

export default function MagneticButton({ children, className, ...props }) {
  const btnRef = useRef(null);

  function handleMouseMove(e) {
    const r = btnRef.current.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    btnRef.current.style.transform = `translate(${x * 0.25}px, ${y * 0.4}px)`;
  }
  function handleMouseLeave() {
    btnRef.current.style.transform = "translate(0,0)";
  }

  return (
    <span className="magnetic" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <button ref={btnRef} className={className} {...props}>
        {children}
      </button>
    </span>
  );
}