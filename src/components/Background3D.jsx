import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Torus, Icosahedron, Sphere, Stars, Sparkles } from '@react-three/drei';
import { useTheme } from '../context/ThemeContext';

const AbstractShapes = ({ isDark }) => {
  const color = isDark ? "#818cf8" : "#6366f1";
  
  return (
    <>
      <ambientLight intensity={isDark ? 0.3 : 0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} color={color} />
      
      <Float speed={1.5} rotationIntensity={1.5} floatIntensity={2} position={[-5, 2, -5]}>
        <Icosahedron args={[1.5, 0]}>
          <meshStandardMaterial color={color} wireframe opacity={0.15} transparent />
        </Icosahedron>
      </Float>

      <Float speed={2} rotationIntensity={2} floatIntensity={1.5} position={[5, -3, -6]}>
        <Torus args={[1.2, 0.4, 16, 32]}>
          <meshStandardMaterial color={color} wireframe opacity={0.15} transparent />
        </Torus>
      </Float>

      <Float speed={1} rotationIntensity={0.5} floatIntensity={3} position={[0, 0, -10]}>
        <Sphere args={[2.5, 32, 32]}>
          <meshStandardMaterial color={color} wireframe opacity={0.05} transparent />
        </Sphere>
      </Float>
    </>
  );
};

const ParticleField = ({ isDark }) => {
  return (
    <>
      <Stars 
        radius={100} 
        depth={50} 
        count={5000} 
        factor={isDark ? 4 : 2} 
        saturation={0} 
        fade 
        speed={1} 
      />
      <Sparkles 
        count={200} 
        scale={20} 
        size={2} 
        speed={0.4} 
        opacity={isDark ? 0.4 : 0.2} 
        color={isDark ? "#818cf8" : "#6366f1"} 
      />
    </>
  );
};

const Background3D = () => {
  const { theme } = useTheme();
  
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <AbstractShapes isDark={theme === 'dark'} />
        <ParticleField isDark={theme === 'dark'} />
      </Canvas>
    </div>
  );
};

export default Background3D;
