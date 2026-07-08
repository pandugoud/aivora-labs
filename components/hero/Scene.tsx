"use client";

import { Canvas } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";

export default function Scene() {
  return (
    <div className="w-[500px] h-[500px]">
      <Canvas>
        <ambientLight intensity={2} />
        <Sphere args={[1, 64, 64]}>
          <meshStandardMaterial color="#4F46E5" />
        </Sphere>
      </Canvas>
    </div>
  );
}