import { Canvas } from '@react-three/fiber';
import { OrbitControls, Grid, ContactShadows } from '@react-three/drei';
import DummyModel from './Dummy';
import RoleModel from './RoleModel';
import { roleModelMap } from '../../../data/models/roleModel';

export default function ScaleViewer({ scaleVector, role }) {  
  const s = scaleVector || { x: 1, y: 1, z: 1 };
  
  const targetModelPath = role && role.label ? roleModelMap[role.label] : null;
  const targetColor = role && role.color ? role.color : "#ffffff";

  return (
    <div style={{ 
      width: '100%', 
      height: '350px',
      borderRadius: '8px',
      overflow: 'hidden',
      position: 'relative',
      border: '1px solid #333',
      background: 'radial-gradient(circle at 50% 60%, #2a2a2a 0%, #000000 100%)'
    }}>
      
      <div style={{
        position: 'absolute', top: 15, left: 15, zIndex: 10,
        color: '#888', fontSize: '0.7rem', fontFamily: 'monospace',
        pointerEvents: 'none', textShadow: '0 1px 2px black'
      }}>
        COMPARATEUR 3D <br/>
        <span style={{color: '#ccc'}}>GAUCHE: NORMAL (1.0)</span> <br/>
        <span style={{color: targetColor, fontWeight: 'bold'}}>DROITE: CIBLE ({s.x} / {s.y} / {s.z})</span>
      </div>

      <Canvas camera={{ position: [0, 2, 5], fov: 50 }} shadows>
        
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 10, 5]} intensity={2} castShadow />
        <spotLight position={[-5, 5, -5]} intensity={5} color="#ffffff" />

        <OrbitControls 
          autoRotate 
          autoRotateSpeed={0.5} 
          minPolarAngle={0} 
          maxPolarAngle={Math.PI / 2}
          enableZoom={true}
        />

        <Grid 
          position={[0, -0.01, 0]} 
          args={[10, 10]} 
          cellColor="#ffffff" 
          sectionColor="#ffffff"
          fadeDistance={12} 
          cellOpacity={0.1}
          sectionOpacity={0.2}
          infiniteGrid={true}
        />

        <ContactShadows position={[0, 0, 0]} opacity={0.6} scale={10} blur={2} far={4} />

        <DummyModel 
          position={[-0.8, 0, 0]}
          scale={[1, 1, 1]} 
          color="#ffffff" 
          isWireframe={true} 
        />

        <RoleModel
            roleLabel={role?.label}
            modelPath={targetModelPath}
            position={[0.8, 0, 0]}
            scale={[s.x, s.y, s.z]} 
            color={targetColor}
        />

      </Canvas>
    </div>
  );
}