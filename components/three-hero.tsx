"use client";

import * as React from "react";
import dynamic from "next/dynamic";

const CanvasWrapper = dynamic(() => import("./three/canvas-wrapper"), {
  ssr: false,
});

function supportsWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

export function ThreeHero() {
  const [enabled, setEnabled] = React.useState(false);

  React.useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reducedMotion && supportsWebGL()) setEnabled(true);
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      className="hero-3d-stage pointer-events-none absolute"
    >
      <React.Suspense fallback={null}>
        <CanvasWrapper />
      </React.Suspense>
      <div className="hero-3d-label">INTERACTIVE STUDY · 01</div>
    </div>
  );
}
