import React from 'react';
import { useGLTF, Clone } from '@react-three/drei';
import modelPath from '../../../static/3d/DClass.glb'; 
import * as THREE from 'three';

const TEST_MODEL_URL = modelPath;

useGLTF.preload(TEST_MODEL_URL); 

export default function CharacterModel({ color = "#ffffff", isWireframe = false, ...props }) {
  const { scene, nodes, materials } = useGLTF(TEST_MODEL_URL); 
  
  const customMaterial = React.useMemo(() => new THREE.MeshStandardMaterial({
      color: color,
      wireframe: isWireframe,
      transparent: isWireframe,
      opacity: isWireframe ? 0.3 : 1,
      metalness: 0.5,
      roughness: 0.5
  }), [color, isWireframe]);

  return (
    <group {...props}>
      <Clone 
        object={scene} 
      />
    </group>
  );
}