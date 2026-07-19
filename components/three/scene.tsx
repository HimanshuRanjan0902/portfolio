"use client";

import * as React from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

function AuroraBlob() {
  const meshRef = React.useRef<THREE.Mesh>(null);
  const { pointer } = useThreeRootless();

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = Math.sin(t * 0.15) * 0.25;
    meshRef.current.rotation.y = t * 0.12;
    // gentle parallax toward pointer
    meshRef.current.position.x = THREE.MathUtils.lerp(
      meshRef.current.position.x,
      pointer.current.x * 0.4,
      0.03
    );
    meshRef.current.position.y = THREE.MathUtils.lerp(
      meshRef.current.position.y,
      pointer.current.y * 0.25,
      0.03
    );
  });

  return (
    <Float speed={1.4} rotationIntensity={0.3} floatIntensity={0.6}>
      <mesh ref={meshRef} scale={2.1}>
        <icosahedronGeometry args={[1, 12]} />
        <MeshDistortMaterial
          color="#6c63f6"
          attach="material"
          distort={0.42}
          speed={1.6}
          roughness={0.15}
          metalness={0.2}
          emissive="#3fd7d0"
          emissiveIntensity={0.12}
        />
      </mesh>
    </Float>
  );
}

// Tiny pointer tracker shared across the scene without extra context boilerplate.
const pointerState = { current: { x: 0, y: 0 } };
function useThreeRootless() {
  React.useEffect(() => {
    function onMove(e: PointerEvent) {
      pointerState.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointerState.current.y = -((e.clientY / window.innerHeight) * 2 - 1);
    }
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
  return { pointer: pointerState };
}

function Particles({ count = 120 }: { count?: number }) {
  const positions = React.useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 9;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 9;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 5 - 2;
    }
    return arr;
  }, [count]);

  const ref = React.useRef<THREE.Points>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.getElapsedTime() * 0.015;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.028} color="#9b6bf3" transparent opacity={0.55} />
    </points>
  );
}

export function Scene() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[4, 4, 4]} intensity={40} color="#3fd7d0" />
      <pointLight position={[-4, -3, -2]} intensity={25} color="#f6739b" />
      <AuroraBlob />
      <Particles />
    </>
  );
}
