import React from 'react';

export default function SCPVideo({ src, title, location, caption }) {
  const glitchStyle = `
    @keyframes scp-flicker {
      0%   { opacity: 0.95; transform: translateY(0px); }
      5%   { opacity: 0.8; transform: translateY(-1px); }
      10%  { opacity: 0.9; transform: translateY(0px); }
      50%  { opacity: 1; }
      51%  { opacity: 0.8; transform: translateY(2px); filter: blur(1px) grayscale(100%) contrast(1.4); }
      52%  { opacity: 1; transform: translateY(0px); filter: blur(0px) grayscale(100%) contrast(1.2); }
      80%  { opacity: 0.95; }
      100% { opacity: 0.95; }
    }
    
    @keyframes scp-blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
  `;

  return (
    <>
      <style>{glitchStyle}</style>
      
      <div style={{
        maxWidth: '450px',
        margin: '3rem auto',
        backgroundColor: '#050505',
        border: '4px inset #333',
        borderRadius: '10px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.6)',
        position: 'relative',
        fontFamily: '"Courier New", Courier, monospace',
        overflow: 'hidden'
      }}>
        
        {/* En-tête Terminal sur l'écran */}
        <div style={{
          position: 'absolute',
          top: '10px', left: '10px', right: '10px',
          zIndex: 10,
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '0.7rem',
          color: 'rgba(255,255,255,0.7)',
          textShadow: '1px 1px 2px black',
          pointerEvents: 'none'
        }}>
          <span>> LOC: {location || 'UNKNOWN'}</span>
          <span style={{color: '#d32f2f', fontWeight: 'bold'}}>
            <span style={{display: 'inline-block', animation: 'scp-blink 2s infinite'}}>●</span> REC
          </span>
        </div>

        {/* Conteneur Vidéo avec les Effets */}
        <div style={{ position: 'relative' }}>
          
          {/* La Vidéo */}
          <video 
            controls 
            loop
            width="100%" 
            style={{
              display: 'block',
              filter: 'grayscale(100%) contrast(1.3) brightness(0.9) sepia(20%)',
              animation: 'scp-flicker 4s infinite',
            }}
          >
            <source src={src} type="video/mp4" />
          </video>

          {/* Couche Scanlines (Lignes horizontales) */}
          <div style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'repeating-linear-gradient(transparent 0px, transparent 2px, rgba(0,0,0,0.3) 3px, rgba(0,0,0,0.3) 4px)',
            pointerEvents: 'none',
            zIndex: 5
          }}></div>

          {/* Couche Vignette (Coins sombres) */}
          <div style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            boxShadow: 'inset 0 0 40px rgba(0,0,0,0.9)',
            pointerEvents: 'none',
            zIndex: 6
          }}></div>
        </div>

        {/* Pied de page (Légende / Titre) */}
        <div style={{
          padding: '10px',
          backgroundColor: '#111',
          borderTop: '1px solid #333',
          color: '#aaa',
          fontSize: '0.8em'
        }}>
          <div style={{ color: '#fff', textTransform: 'uppercase', marginBottom: '4px' }}>
            FILE: {title}
          </div>
          {caption && (
            <div style={{ color: '#666', fontStyle: 'italic', borderLeft: '2px solid #d32f2f', paddingLeft: '8px' }}>
              {caption}
            </div>
          )}
        </div>

      </div>
    </>
  );
}