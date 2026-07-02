"use client";

import Lenis from "lenis";
import { useEffect, useState } from "react";

export function MotionProvider() {
  const [progress, setProgress] = useState(0);
  const [point, setPoint] = useState({ x: -300, y: -300 });

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08, wheelMultiplier: 0.9 });
    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    const onPointer = (event: PointerEvent) => setPoint({ x: event.clientX, y: event.clientY });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onPointer, { passive: true });
    onScroll();

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onPointer);
    };
  }, []);

  return (
    <>
      <div className="fixed left-0 top-0 z-[90] h-1 bg-gold" style={{ width: `${progress}%` }} />
      <div className="cursor-glow hidden opacity-100 md:block" style={{ left: point.x, top: point.y }} />
    </>
  );
}
