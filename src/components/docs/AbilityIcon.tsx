import React from 'react';

interface Props {
  src: string;
  alt: string;
}

export default function AbilityIcon({ src, alt }: Props) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '2rem' }}>
      <img 
        src={src} 
        alt={alt} 
        style={{ 
          width: '96px',
          height: '96px',
          objectFit: 'contain',
          imageRendering: 'pixelated',
          borderRadius: '12px', 
          border: '2px solid var(--ifm-color-emphasis-200)',
          padding: '5px',
          backgroundColor: 'var(--ifm-color-emphasis-700)',
          marginBottom: '0.5rem'
        }} 
      />
      <div style={{ fontSize: '0.85rem', color: 'var(--ifm-color-emphasis-600)', fontStyle: 'italic', textAlign: 'center' }}>
        Icône de l'abilité en jeu
      </div>
    </div>
  );
}