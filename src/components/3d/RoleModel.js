import { useMemo } from 'react';
import { useGLTF, Clone } from '@react-three/drei';
import * as THREE from 'three';
import DummyModel from './Dummy'; 
import { roleModelMap } from '../../../data/models/roleModel'; 

const NORMALIZATION_SCALES = {
  'CLASSE-D': 1.265,
  'GARDE DU SITE': 1.259,
  'SCIENTIFIQUE': 0.219,
  'CHAOS INSURGENCY': 1.1,
  'NINE-TAILED FOX': 0.44,
  'TUTORIAL': 1.265,
  'CIVIL': 1.265,
  'SCP-049': 0.46,
  'SCP-096': 1.3,
  'SCP-939': 0.8,
  'SCP-106': 1.15,
};

const AVAILABLE_SCPS = ['SCP-049', 'SCP-096', 'SCP-939', 'SCP-106'];

export default function RoleModel({ 
  roleLabel, 
  scale, 
  color, 
  isReference = false, 
  modelPath, 
  auraColor,
  ...props 
}) {
  const activeModel = useMemo(() => {
    if (roleLabel === 'Global SCP' && !isReference) {
      const validSCPs = AVAILABLE_SCPS.filter(key => roleModelMap[key]);
      
      if (validSCPs.length > 0) {
        const randomKey = validSCPs[Math.floor(Math.random() * validSCPs.length)];
        return {
          label: randomKey,
          path: roleModelMap[randomKey]
        };
      }
    }
    return { label: roleLabel, path: modelPath };
  }, [roleLabel, modelPath, isReference]);

  if (!activeModel.path) {
    if (isReference) {
       return <DummyModel scale={scale} color="#ffffff" isWireframe={true} position={[-0.8, 0, 0.2]} />;
    }
    return <DummyModel scale={scale} color={color} isWireframe={isReference} {...props} />;
  }

  const { scene } = useGLTF(activeModel.path);

  const baseFactor = NORMALIZATION_SCALES[activeModel.label?.toUpperCase()] || 1.0;
  
  const finalScale = [
      scale[0] * baseFactor,
      scale[1] * baseFactor,
      scale[2] * baseFactor
  ];

  const activeColor = auraColor || color;

  const customMaterial = useMemo(() => new THREE.MeshStandardMaterial({
      color: activeColor,
      wireframe: isReference,
      transparent: isReference,
      opacity: isReference ? 0.3 : 1,
      metalness: 0.2,
      roughness: 0.5,
  }), [activeColor, isReference]);

  const shouldUseCustomMaterial = isReference || ['TUTORIAL', 'CIVIL'].includes(roleLabel?.toUpperCase());

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

        {auraColor && (
          <pointLight 
            position={[0, 1.0, 0]}
            intensity={50}
            distance={50}
            color={auraColor}
            decay={1}
          />
        )}

        {!shouldUseCustomMaterial && !auraColor && (
          <pointLight 
              position={[0, 1.7, 0.5]} 
              intensity={0.5} 
              distance={2} 
              color="#ffffff" 
          />
        )}
    </group>
  );
}