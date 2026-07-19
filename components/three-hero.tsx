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
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!reducedMotion && supportsWebGL()) {
      setEnabled(true);
    }
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-[1] opacity-90 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,black_40%,transparent_100%)]"
    >
      <React.Suspense fallback={null}>
        <CanvasWrapper />
      </React.Suspense>
    </div>
  );
}
