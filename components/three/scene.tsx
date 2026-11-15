"use client";

import * as React from "react";
import { Float, Sparkles, Torus, TorusKnot } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function ChromeSculpture() {
  const group = React.useRef<THREE.Group>(null);
  const knot = React.useRef<THREE.Mesh>(null);
  const ring = React.useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!group.current || !knot.current || !ring.current) return;
    const t = state.clock.elapsedTime;
    group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, state.pointer.x * 0.22, 2, delta);
    group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, -state.pointer.y * 0.16, 2, delta);
    knot.current.rotation.x = t * 0.12;
    knot.current.rotation.y = t * 0.18;
    ring.current.rotation.x = Math.sin(t * 0.22) * 0.16 + 0.8;
    ring.current.rotation.y = t * 0.08;
  });

  return (
    <group ref={group} scale={1.08}>
      <Float speed={1.1} rotationIntensity={0.12} floatIntensity={0.22}>
        <mesh ref={knot} castShadow>
          <torusKnotGeometry args={[0.92, 0.29, 220, 32, 2, 3]} />
          <meshPhysicalMaterial
            color="#a9c9e7"
            metalness={0.78}
            roughness={0.19}
            clearcoat={1}
            clearcoatRoughness={0.08}
            reflectivity={1}
          />
        </mesh>
        <mesh scale={1.52}>
          <icosahedronGeometry args={[1, 2]} />
          <meshPhysicalMaterial
            color="#9bbbd6"
            metalness={0.15}
            roughness={0.08}
            transmission={0.92}
            thickness={1.2}
            ior={1.18}
            transparent
            opacity={0.24}
            side={THREE.DoubleSide}
          />
        </mesh>
      </Float>
      <Torus ref={ring} args={[1.72, 0.012, 12, 180]} rotation={[1.1, 0.2, 0.3]}>
        <meshStandardMaterial color="#a9c9e7" metalness={0.85} roughness={0.22} />
      </Torus>
      <Torus args={[2.02, 0.006, 8, 180]} rotation={[0.8, -0.5, 0.9]}>
        <meshBasicMaterial color="#8fb6d7" transparent opacity={0.42} />
      </Torus>
      <mesh position={[1.52, -0.92, 0.3]}>
        <sphereGeometry args={[0.13, 32, 32]} />
        <meshStandardMaterial color="#d8e9f8" metalness={0.75} roughness={0.16} emissive="#41617d" emissiveIntensity={0.35} />
      </mesh>
    </group>
  );
}

function LightRig() {
  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[4, 5, 6]} intensity={3.2} color="#e8f4ff" />
      <pointLight position={[-4, 2, 3]} intensity={42} color="#6e9fc8" />
      <pointLight position={[3, -3, -2]} intensity={26} color="#b6d9f4" />
      <spotLight position={[0, 5, 2]} intensity={34} angle={0.55} penumbra={1} color="#dceeff" />
    </>
  );
}

export function Scene() {
  return (
    <>
      <color attach="background" args={["#080b0f"]} />
      <fog attach="fog" args={["#080b0f", 7, 14]} />
      <LightRig />
      <ChromeSculpture />
      <Sparkles count={70} scale={5.8} size={1.2} speed={0.18} opacity={0.34} color="#b8d6ee" />
    </>
  );
}
