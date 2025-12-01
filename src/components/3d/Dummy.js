import React from 'react';

export default function DummyModel({ scale = [1, 1, 1], color = "#ffffff", isWireframe = false, ...props }) {
  
  const materialProps = {
    color: color,
    wireframe: isWireframe,
    transparent: isWireframe,
    opacity: isWireframe ? 0.3 : 1,
    metalness: 0.5,
    roughness: 0.5
  };

  return (
    <group scale={scale} {...props}>
      <group position={[0, 1.75 / 2, 0]}>
        
        {/* Tête */}
        <mesh position={[0, 0.9, 0]}>
          <sphereGeometry args={[0.25, 16, 16]} />
          <meshStandardMaterial {...materialProps} />
        </mesh>

        {/* Torse */}
        <mesh position={[0, 0.45, 0]}>
          <boxGeometry args={[0.6, 0.7, 0.3]} />
          <meshStandardMaterial {...materialProps} />
        </mesh>

        {/* Bras Droit */}
        <mesh position={[0.45, 0.45, 0]}>
          <boxGeometry args={[0.2, 0.7, 0.2]} />
          <meshStandardMaterial {...materialProps} />
        </mesh>

        {/* Bras Gauche */}
        <mesh position={[-0.45, 0.45, 0]}>
          <boxGeometry args={[0.2, 0.7, 0.2]} />
          <meshStandardMaterial {...materialProps} />
        </mesh>

        {/* Jambe Droite */}
        <mesh position={[0.2, -0.45, 0]}>
          <boxGeometry args={[0.22, 0.9, 0.22]} />
          <meshStandardMaterial {...materialProps} />
        </mesh>

        {/* Jambe Gauche */}
        <mesh position={[-0.2, -0.45, 0]}>
          <boxGeometry args={[0.22, 0.9, 0.22]} />
          <meshStandardMaterial {...materialProps} />
        </mesh>

      </group>
    </group>
  );
}