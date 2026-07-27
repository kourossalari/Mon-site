"use client";
import { useEffect, useRef } from "react";

export default function useScrollReveal() {
  const containerRef = useRef(null);

  useEffect(() => {
    const els = containerRef.current.querySelectorAll(".reveal-up");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return containerRef;
}