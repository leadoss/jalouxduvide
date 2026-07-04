"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  const x = useMotionValue(-200);
  const y = useMotionValue(-200);

  const springX = useSpring(x, { damping: 28, stiffness: 380, mass: 0.35 });
  const springY = useSpring(y, { damping: 28, stiffness: 380, mass: 0.35 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setMounted(true);

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const onEnter = () => wrapperRef.current?.classList.add("hovering");
    const onLeave = () => wrapperRef.current?.classList.remove("hovering");

    window.addEventListener("mousemove", onMove);

    const attachHover = () => {
      document
        .querySelectorAll("a, button, [role='button'], label, select")
        .forEach((el) => {
          el.addEventListener("mouseenter", onEnter);
          el.addEventListener("mouseleave", onLeave);
        });
    };
    attachHover();

    const observer = new MutationObserver(attachHover);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      observer.disconnect();
    };
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      ref={wrapperRef}
      style={{ x: springX, y: springY, zIndex: 9999 }}
      className="cursor-arrow fixed top-0 left-0 pointer-events-none select-none"
    >
      <svg
        width="22"
        height="28"
        viewBox="0 0 22 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ filter: "drop-shadow(1px 2px 3px rgba(0,0,0,0.35))" }}
      >
        <path
          d="M 1.5 1.5 L 1.5 21 L 6 16 L 9 25 L 12.5 23.5 L 9.5 15 L 17 15 Z"
          fill="#0A0A0A"
          stroke="white"
          strokeWidth="1.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
    </motion.div>
  );
}
