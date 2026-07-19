"use client";

import { Canvas } from "@react-three/fiber";
import { Scene } from "./scene";

export default function CanvasWrapper() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <Scene />
    </Canvas>
  );
}
