"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, Float } from "@react-three/drei";

export default function AIBrain() {
  return (
    <div className="w-[320px] h-[320px] lg:w-[500px] lg:h-[500px]">

      <Canvas camera={{ position: [0, 0, 3] }}>

        <ambientLight intensity={1} />

        <pointLight
          position={[2, 2, 2]}
          color="#06B6D4"
          intensity={3}
        />

        <Float
          speed={3}
          rotationIntensity={1}
          floatIntensity={2}
        >

          <Sphere args={[1, 64, 64]}>

            <meshStandardMaterial
              color="#4F46E5"
              metalness={0.9}
              roughness={0.15}
            />

          </Sphere>

        </Float>


        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={3}
        />

      </Canvas>

    </div>
  );
}