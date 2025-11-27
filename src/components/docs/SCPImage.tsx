import React from 'react';

export default function SCPImage({ src, alt, width, caption, type = 'normal' }) {
  
  const safeType = (type || 'normal').toLowerCase();

  // ---- GESTION AUTOMATIQUE DES TAILLES ----
  const defaultWidths = {
    normal: '750px',
    redacted: '500px',
    torn: '500px',
    dechire: '500px',
    old: '600px', // Taille par défaut pour le type "old"
    vieux: '600px'  // Alias français
  };

  const finalWidth = width || defaultWidths[safeType] || '600px';

  // ---- Styles de base du conteneur ----
  const containerBaseStyle = {
    maxWidth: finalWidth,
    margin: '3rem auto',
    backgroundColor: '#f4f0e6', // Papier vieilli standard
    border: '1px solid #d4c8b4', 
    padding: '10px 10px 30px 10px', // Espace légende
    boxShadow: '3px 3px 10px rgba(0,0,0,0.2)', 
    position: 'relative',
    transform: 'rotate(0.9deg)', // Rotation subtile
    transition: 'all 0.3s ease',
  };

  let imageStyle = { display: 'block', width: '100%', height: 'auto' };
  let containerDynamicStyle = {};
  let stamp = null;
  let showTape = true; // Afficher le scotch par défaut

  switch (safeType) {
    // --- CAS 1 : CENSURÉ ---
    case 'redacted':
      imageStyle = {
        ...imageStyle,
        filter: 'blur(3px) grayscale(100%) brightness(0.7) contrast(150%)',
      };
      containerDynamicStyle = {
        backgroundColor: '#1a1a1a', // Fond très sombre
        borderColor: '#000',
        boxShadow: 'none', // Pas d'ombre portée, c'est plat
      };
      stamp = (
        <div style={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(-15deg)',
            border: '4px solid rgba(200,0,0,0.6)', color: 'rgba(200,0,0,0.6)', fontSize: 'clamp(1.5rem, 5vw, 3rem)', fontWeight: 'bold',
            padding: '10px 20px', textTransform: 'uppercase', pointerEvents: 'none', zIndex: 10, fontFamily: 'Stencil, Impact, monospace',
            whiteSpace: 'nowrap'
        }}>
            REDACTED
        </div>
      );
      break;

    // --- CAS 2 : DÉCHIRÉ ---
    case 'torn':
    case 'dechire': 
      showTape = false; // Pas de scotch sur un bout déchiré
      imageStyle = {
        ...imageStyle,
        filter: 'sepia(50%) contrast(1.1) brightness(0.95)',
        clipPath: 'polygon(3% 0%, 7% 2%, 12% 0%, 18% 3%, 23% 1%, 30% 4%, 36% 2%, 42% 5%, 48% 1%, 55% 4%, 62% 2%, 68% 5%, 75% 3%, 82% 6%, 88% 2%, 94% 5%, 100% 1%, 98% 9%, 100% 17%, 97% 25%, 99% 33%, 96% 41%, 100% 50%, 98% 58%, 99% 67%, 97% 75%, 100% 83%, 98% 91%, 100% 100%, 93% 98%, 87% 100%, 80% 97%, 73% 100%, 67% 98%, 60% 100%, 53% 97%, 47% 100%, 40% 98%, 33% 100%, 27% 97%, 20% 100%, 13% 98%, 7% 100%, 0% 97%, 2% 88%, 0% 78%, 3% 68%, 1% 58%, 4% 48%, 2% 38%, 5% 28%, 1% 18%, 4% 8%)',
      };
      containerDynamicStyle = {
         backgroundColor: 'transparent',
         border: 'none',
         boxShadow: 'none', 
         padding: 0,
         transform: 'rotate(1deg)', 
         filter: 'drop-shadow(3px 3px 3px rgba(0,0,0,0.3))' 
      };
      break;

    // --- NOUVEAU CAS 4 : ANTIQUE (5000 ans) ---
    case 'old':
    case 'vieux':
      showTape = false; // Pas de scotch dans l'antiquité
      imageStyle = {
        ...imageStyle,
        // Sépia total, très sombre, contraste extrême pour simuler de l'encre/gravure
        filter: 'sepia(100%) grayscale(30%) contrast(1.8) brightness(0.6) blur(0.5px)',
        opacity: 0.9,
        // L'image se "fond" dans la couleur du conteneur pour faire effet "imprimé sur papyrus"
        mixBlendMode: 'multiply', 
      };
      containerDynamicStyle = {
         // Couleur de fond type Papyrus/Cuir très sombre
         backgroundColor: '#8a6642', 
         // Simulation de texture rugueuse via un dégradé
         backgroundImage: 'repeating-linear-gradient(45deg, rgba(0,0,0,0.1) 0px, transparent 2px, rgba(0,0,0,0.2) 3px, transparent 4px)',
         // Bordure épaisse style pierre/cuir durci
         border: '4px ridge #4a3622',
         // Ombre portée lourde + ombre interne pour effet d'encrassement sur les bords
         boxShadow: '5px 5px 15px rgba(0,0,0,0.6), inset 0 0 30px rgba(0,0,0,0.6)',
         transform: 'rotate(-1.5deg)', // Un peu plus tordu
      };
      break;

    // --- CAS 3 : NORMAL (Défaut) ---
    case 'normal':
    default:
      imageStyle = {
        ...imageStyle,
        // Léger effet vieille photo jaunie
        filter: 'sepia(30%) contrast(1.05) brightness(0.95) hue-rotate(-5deg)',
      };
      break;
  }

  // Détermine la couleur du texte de la légende en fonction du fond
  const isDarkBackground = ['redacted', 'old', 'vieux'].includes(safeType);
  const captionColor = isDarkBackground ? '#c0b090' : '#444'; // Beige clair si fond sombre, sinon gris foncé

  // ---- Rendu ----
  return (
    <figure style={{ ...containerBaseStyle, ...containerDynamicStyle }}>
      {/* Scotch en haut (si applicable) */}
      {showTape && (
          <div style={{position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', width: '50px', height: '25px', backgroundColor: 'rgba(230,230,230,0.5)', border: '1px solid #aaa', boxShadow: '0 1px 2px rgba(0,0,0,0.1)', backdropFilter: 'blur(1px)'}}></div>
      )}

      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <img src={src} alt={alt} style={imageStyle} />
        {stamp}
      </div>

      {caption && (
        <figcaption style={{
          marginTop: '15px',
          fontFamily: '"Courier New", Courier, monospace', 
          fontSize: '0.9rem',
          // Utilisation de la couleur calculée plus haut
          color: captionColor,
          textAlign: 'center',
          fontStyle: 'italic',
          fontWeight: '600',
          textShadow: isDarkBackground ? '1px 1px 2px rgba(0,0,0,0.8)' : 'none' // Ombre pour lisibilité sur fond sombre
        }}>
          Fig. {caption}
        </figcaption>
      )}
    </figure>
  );
}