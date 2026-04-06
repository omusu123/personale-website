"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Disable on small screens
    if (window.innerWidth < 769) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = 0, my = 0, rx = 0, ry = 0;
    let animationFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.left = mx - 4 + "px";
      dot.style.top = my - 4 + "px";
    };

    const animateRing = () => {
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
      ring.style.left = rx - 20 + "px";
      ring.style.top = ry - 20 + "px";
      animationFrameId = requestAnimationFrame(animateRing);
    };

    document.addEventListener("mousemove", onMouseMove);
    animateRing();

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Update hover state on all links/buttons when pathname changes
  useEffect(() => {
    if (window.innerWidth < 769) return;
    const ring = ringRef.current;
    if (!ring) return;

    const handleMouseEnter = () => ring.classList.add("hovering");
    const handleMouseLeave = () => ring.classList.remove("hovering");

    const interactiveElements = document.querySelectorAll("a, button");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [pathname]);

  return (
    <>
      <div className="cursor-dot hidden md:block" ref={dotRef}></div>
      <div className="cursor-ring hidden md:block" ref={ringRef}></div>
    </>
  );
}
