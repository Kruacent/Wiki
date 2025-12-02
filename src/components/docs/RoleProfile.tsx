import React, { useEffect } from 'react';
import ScaleViewer from '../3d/ScaleViewer';

const FACTIONS = {
  classd:      { color: '#ff9800', label: 'CLASSE-D', bg: '#3e2723' },
  scientist:   { color: '#ffeb3b', label: 'SCIENTIFIQUE', bg: '#333300' },
  mtf:         { color: '#2196f3', label: 'NINE-TAILED FOX', bg: '#0d47a1' },
  chaos:       { color: '#1b5e20', label: 'CHAOS INSURGENCY', bg: '#008400ff' },
  guard:       { color: '#78909c', label: 'GARDE DU SITE', bg: '#263238' },
  scp:         { color: '#d32f2f', label: 'Global SCP', bg: '#c30606ff' },
  scp106:         { color: '#d32f2f', label: 'SCP-106', bg: '#c30606ff' },
  scp939:         { color: '#d32f2f', label: 'SCP-939', bg: '#c30606ff' },
  scp049:         { color: '#d32f2f', label: 'SCP-049', bg: '#c30606ff' },
  tutorial:    { color: '#e91e63', label: 'TUTORIAL', bg: '#4a0a25' },
  human:       { color: '#b700ffff', label: 'CIVIL', bg: '#212121' }
};

const getInventoryIcon = (item) => {
    if (item.includes('Keycard')) return '💳';
    if (item.includes('Gun') || item.includes('Rifle') || item.includes('Revolver') || item.includes('AK') || item.includes('Logicer') || item.includes('FSP') || item.includes('Crossvec') || item.includes('E-11')) return '🔫';
    if (item.includes('Grenade') || item.includes('Flashbang')) return '💣';
    if (item.includes('Medkit') || item.includes('Adrenaline') || item.includes('Painkiller') || item.includes('SCP500')) return '💉';
    if (item.includes('Radio')) return '📻';
    if (item.includes('Candy') || item.includes('Bonbon')) return '🍬';
    if (item.includes('Micro')) return '⚡';
    if (item.includes('Armor') || item.includes('Armure')) return '🛡️';
    if (item.includes('Flashlight')) return '🔦';
    if (item.includes('Coin') || item.includes('Pièce')) return '🪙';
    return '📦';
};

export default function RoleProfile({ 
  name, 
  type = 'human', 
  description, 
  hp = 100, 
  inventory = [], 
  scale = { x: 1, y: 1, z: 1 }, 
  roleColor, 
  spawnLocation = "Inconnu",
  keepRoleOnDeath = false,
  keepRoleOnChangingRole = false,
  modelAuraColor
}) {
  
  const faction = FACTIONS[type.toLowerCase()] || FACTIONS.human;
  const vectorScale = typeof scale === 'number' ? { x: scale, y: scale, z: scale } : scale;

  useEffect(() => {
    document.documentElement.style.setProperty('--ifm-color-primary', faction.color);
    return () => document.documentElement.style.removeProperty('--ifm-color-primary');
  }, [faction]);

  return (
    <div style={{
      border: `1px solid #333`,
      borderTop: `4px solid ${faction.color}`,
      backgroundColor: '#0f0f0f',
      borderRadius: '6px',
      marginBottom: '3rem',
      boxShadow: '0 20px 50px rgba(0,0,0,0.4)',
      fontFamily: 'Segoe UI, Roboto, sans-serif',
      overflow: 'hidden'
    }}>
      
      {/* 1. HEADER */}
      <div style={{
        padding: '25px', 
        background: `linear-gradient(135deg, ${faction.bg}40 0%, #0f0f0f 100%)`,
        borderBottom: '1px solid #222',
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'
      }}>
        <div>
           <div style={{ 
              color: faction.color, fontWeight: '800', fontSize: '0.75rem', 
              letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '5px' 
           }}>
              {faction.label}
           </div>
           <h1 style={{ margin: 0, fontSize: '2.2rem', textTransform: 'uppercase', color: '#fff', lineHeight: '1' }}>{name}</h1>
           <p style={{ color: '#888', margin: '10px 0 0 0', fontSize: '1rem', maxWidth: '600px' }}>
             {description}
           </p>
        </div>

        {/* Badge de couleur Custom */}
        {roleColor && (
           <div style={{
               display: 'flex', flexDirection: 'column', alignItems: 'center',
               padding: '10px', backgroundColor: '#181818', borderRadius: '6px', border: '1px solid #333'
           }}>
              <div style={{
                  width: '24px', height: '24px', borderRadius: '4px', 
                  backgroundColor: roleColor, boxShadow: `0 0 15px ${roleColor}40`
              }}></div>
              <span style={{fontSize: '0.6rem', color: '#666', marginTop: '5px', fontFamily: 'monospace'}}>COULEUR</span>
           </div>
        )}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
        
        {/* COLONNE GAUCHE : DATA & 3D */}
        <div style={{ padding: '25px', borderRight: '1px solid #222' }}>
          
          <SectionTitle title="Systèmes Vitaux" />
          
          <div style={{ marginBottom: '25px' }}>
             <div style={{display: 'flex', justifyContent: 'space-between', color: '#ccc', fontSize: '0.85rem', marginBottom: '6px', fontWeight: '600'}}>
                <span>Point de vie</span>
                <span style={{color: faction.color}}>
                    {typeof hp === 'number' ? `${hp} MAX` : hp}
                </span>
             </div>
             
             {/* Barre de vie High-Tech */}
             <div style={{ 
                 width: '100%', height: '12px', backgroundColor: '#1a1a1a', 
                 border: '1px solid #333', borderRadius: '2px', overflow: 'hidden', position: 'relative'
             }}>
                <div style={{
                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                    backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 5px, #000 5px, #000 6px)',
                    opacity: 0.3, zIndex: 1
                }}></div>
                <div style={{ 
                    width: '100%', height: '100%', 
                    backgroundColor: faction.color, 
                    boxShadow: `0 0 15px ${faction.color}80`,
                    opacity: typeof hp === 'number' ? 1 : 0.5 
                }}></div>
             </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '30px' }}>
             <ConfigStatus label="PERSIST. MORT" active={keepRoleOnDeath} />
             <ConfigStatus label="PERSIST. CHANGEMENT RÔLE" active={keepRoleOnChangingRole} />
          </div>

          <SectionTitle title="Comparateur Gabarit (3D)" />
          <div style={{ 
             border: '1px solid #333', borderRadius: '6px', overflow: 'hidden', 
             backgroundColor: '#000', height: '250px' 
          }}>
             <ScaleViewer scaleVector={vectorScale} role={faction} auraColor={modelAuraColor}/>
          </div>
          <div style={{textAlign: 'right', fontSize: '0.7rem', color: '#555', marginTop: '5px', fontFamily: 'monospace'}}>
             TARGET SCALE: [{vectorScale.x}, {vectorScale.y}, {vectorScale.z}]
          </div>

        </div>

        {/* COLONNE DROITE : INVENTAIRE & SPAWN */}
        <div style={{ padding: '25px', backgroundColor: '#141414' }}>
          
          {/* SECTION SPAWN */}
          <SectionTitle title="Point de Départ" />
          <div style={{
              display: 'flex', alignItems: 'center', gap: '15px',
              backgroundColor: '#1e1e1e', padding: '15px', borderRadius: '6px', border: '1px solid #333', marginBottom: '30px'
          }}>
              <div style={{fontSize: '2rem'}}>📍</div>
              <div>
                  <div style={{fontSize: '0.7rem', color: '#888', textTransform: 'uppercase', fontWeight: 'bold'}}>ZONE D'APPARITION</div>
                  <div style={{fontSize: '1rem', color: '#fff', fontWeight: '600'}}>{spawnLocation}</div>
              </div>
          </div>

          <SectionTitle title="Inventaire de Départ" />
          
          {inventory.length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {inventory.map((item, idx) => {
                const itemName = item.replace('ItemType.', '').replace('Keycard', 'Carte ');
                
                return (
                    <div key={idx} style={{
                        display: 'flex', alignItems: 'center', gap: '15px',
                        backgroundColor: '#1e1e1e', 
                        padding: '12px 15px', 
                        borderRadius: '6px',
                        border: '1px solid #333', 
                        borderLeft: `3px solid ${faction.color}`, 
                        transition: 'transform 0.2s',
                    }}>
                        <span style={{ fontSize: '1.5rem', lineHeight: 1 }}>{getInventoryIcon(item)}</span>
                        <span style={{ fontSize: '0.95rem', color: '#eee', fontWeight: '500' }}>
                            {itemName}
                        </span>
                    </div>
                );
              })}
            </div>
          ) : (
            <div style={{ 
                padding: '20px', border: '1px dashed #333', borderRadius: '6px', 
                textAlign: 'center', color: '#444', fontSize: '0.9rem' 
            }}>
                AUCUN ÉQUIPEMENT
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

const SectionTitle = ({ title }) => (
    <h4 style={{ 
        color: '#666', fontSize: '0.75rem', fontWeight: 'bold', 
        textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '15px' 
    }}>
        {title}
    </h4>
);

const ConfigStatus = ({ label, active }) => (
  <div style={{ 
      backgroundColor: '#1a1a1a', padding: '10px', borderRadius: '4px', border: '1px solid #2a2a2a',
      display: 'flex', flexDirection: 'column', gap: '5px'
  }}>
      <span style={{fontSize: '0.7rem', color: '#888', fontWeight: '600'}}>{label}</span>
      <div style={{display: 'flex', alignItems: 'center', gap: '6px'}}>
          <div style={{
              width: '8px', height: '8px', borderRadius: '50%',
              backgroundColor: active ? '#4caf50' : '#333',
              boxShadow: active ? '0 0 8px #4caf50' : 'none'
          }}></div>
          <span style={{
              fontSize: '0.8rem', fontWeight: 'bold', 
              color: active ? '#fff' : '#555'
          }}>
              {active ? 'ACTIVÉ' : 'DÉSACTIVÉ'}
          </span>
      </div>
  </div>
);