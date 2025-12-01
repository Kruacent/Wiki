import React, { useMemo } from 'react';
import { useGLTF, Clone } from '@react-three/drei';
import * as THREE from 'three';
import DummyModel from './Dummy'; 

const NORMALIZATION_SCALES = {
  'CLASSE-D': 1.265,
  'GARDE DU SITE': 1.259,
  'SCIENTIFIQUE': 0.219,
  'CHAOS INSURGENCY': 1.1,
  'NINE-TAILED FOX': 0.44,
  'TUTORIAL': 1.265,
  'CIVIL': 1.265,
  'SCP': 1.265
};

export default function RoleModel({ 
  roleLabel,
  scale,
  color,
  isReference = false, 
  modelPath, 
  ...props 
}) {

  if (!modelPath) {
    if (isReference) {
       return <DummyModel scale={scale} color="#ffffff" isWireframe={true} position={[-0.8, 0, 0.2]} />;
    }
    return <DummyModel scale={scale} color={color} isWireframe={isReference} {...props} />;
  }

  const { scene } = useGLTF(modelPath);

  const baseFactor = NORMALIZATION_SCALES[roleLabel?.toUpperCase()] || 1.0;
  const finalScale = [
      scale[0] * baseFactor,
      scale[1] * baseFactor,
      scale[2] * baseFactor
  ];

  const customMaterial = useMemo(() => new THREE.MeshStandardMaterial({
      color: color,
      wireframe: isReference,
      transparent: isReference,
      opacity: isReference ? 0.3 : 1,
      metalness: 0.2,
      roughness: 0.5,
      emissive: isReference ? color : "#000000",
      emissiveIntensity: isReference ? 0.5 : 0
  }), [color, isReference]);

  const shouldUseCustomMaterial = isReference || ['SCP', 'TUTORIAL', 'CIVIL'].includes(roleLabel?.toUpperCase());

  const injectConfig = {
      castShadow: true,
      receiveShadow: true
  };

  if (shouldUseCustomMaterial) {
      injectConfig.material = customMaterial;
  }

  return (
    <group {...props} scale={finalScale}>
      <Clone 
        object={scene} 
        inject={injectConfig}
      />
      
      {!shouldUseCustomMaterial && (
         <pointLight position={[0, 1.7, 0.5]} intensity={0.5} distance={2} color="#ffffff" />
      )}
    </group>
  );
}