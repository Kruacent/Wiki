import React from 'react';

// Interface pour un crédit individuel
interface Credit {
  role: string;
  name: string;
}

// Interface principale
interface ACSHeaderProps {
  item: string;          // Ex: SCP-1073
  name: string;          // Ex: Proximity Grenade
  ObjectClass: string;   // Ex: SAFE, EUCLID, KETER
  Level: string;
  Disruption: string;
  itemColor: string;
  
  // Ancienne méthode (gardée pour compatibilité)
  responsible?: string;
  validation?: string;

  // Nouvelle méthode flexible
  credits?: Credit[];
}

const getClassColor = (cls: string) => {
  switch (cls.toUpperCase()) {
    case 'SAFE': return '#2e7d32';   // Vert
    case 'EUCLID': return '#fbc02d'; // Jaune
    case 'KETER': return '#c62828';  // Rouge
    default: return '#555';
  }
};

const Icons = {
  Class: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginBottom: '4px'}}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  Level: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginBottom: '4px'}}>
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>
  ),
  Disruption: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginBottom: '4px'}}>
      <activity x="4" y="12" width="16" height="0"/>
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
    </svg>
  )
};

const ACSHeader: React.FC<ACSHeaderProps> = ({ 
  item, 
  name, 
  ObjectClass, 
  Level, 
  Disruption, 
  itemColor, 
  responsible, 
  validation,
  credits
}) => {
  
  const classColor = getClassColor(ObjectClass);

  // Logique pour gérer soit la liste personnalisée, soit les anciens champs
  let displayCredits: Credit[] = credits || [];

  // Si "credits" n'est pas fourni, on utilise les anciens props par défaut
  if (displayCredits.length === 0) {
      if (responsible) displayCredits.push({ role: "R&D", name: responsible });
      if (validation) displayCredits.push({ role: "VALIDATION", name: validation });
  }

  return (
    <div style={{
      border: `2px solid #333`,
      borderTop: `6px solid ${itemColor}`,
      borderRadius: '8px',
      backgroundColor: '#f9f9f9',
      color: '#333',
      marginBottom: '2rem',
      fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
      overflow: 'hidden'
    }}>
      
      {/* --- BODY --- */}
      <div style={{
        display: 'flex', 
        flexWrap: 'wrap', 
        borderBottom: '2px solid #333'
      }}>
        
        {/* Titre */}
        <div style={{
          flex: '1 1 300px', 
          padding: '20px', 
          textAlign: 'center', 
          background: `linear-gradient(135deg, ${itemColor}15 0%, #ffffff 100%)`, 
          borderRight: '1px solid #ddd',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <h2 style={{margin: 0, fontSize: '2.2rem', fontWeight: '900', color: '#1a1a1a', letterSpacing: '-1px'}}>
            {item}
          </h2>
          <span style={{fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '600', color: itemColor}}>
            {name}
          </span>
        </div>

        {/* Métriques */}
        <div style={{flex: '2 1 300px', display: 'flex'}}>
          
          <div style={{flex: 1, padding: '15px 5px', textAlign: 'center', borderRight: '1px solid #ddd', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <div style={{color: '#666'}}><Icons.Class /></div>
            <div style={{fontWeight: '700', fontSize: '0.75rem', color: '#888', textTransform: 'uppercase'}}>CLASSE</div>
            <div style={{fontSize: '1.4rem', fontWeight: '800', color: classColor, marginTop: '2px'}}>{ObjectClass}</div>
          </div>

          <div style={{flex: 1, padding: '15px 5px', textAlign: 'center', borderRight: '1px solid #ddd', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <div style={{color: '#666'}}><Icons.Level /></div>
            <div style={{fontWeight: '700', fontSize: '0.75rem', color: '#888', textTransform: 'uppercase'}}>NIVEAU</div>
            <div style={{fontSize: '1.4rem', fontWeight: '800', color: '#f57f17', marginTop: '2px'}}>{Level}</div>
          </div>

          <div style={{flex: 1, padding: '15px 5px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
             <div style={{color: '#666'}}><Icons.Disruption /></div>
            <div style={{fontWeight: '700', fontSize: '0.75rem', color: '#888', textTransform: 'uppercase'}}>RISQUE</div>
            <div style={{fontSize: '1.4rem', fontWeight: '800', color: '#1565c0', marginTop: '2px'}}>{Disruption}</div>
          </div>

        </div>
      </div>

      {/* --- FOOTER (CRÉDITS) --- */}
      <div style={{
        padding: '12px', 
        backgroundColor: '#222', 
        color: '#eee', 
        fontSize: '0.85rem',
        letterSpacing: '0.5px',
        display: 'flex',           // Flexbox pour aligner
        justifyContent: 'center',  // Centré horizontalement
        flexWrap: 'wrap',          // Passage à la ligne si trop long (Mobile friendly)
        gap: '15px'                // Espace entre les personnes
      }}>
        
        {displayCredits.map((credit, index) => (
          <div key={index} style={{display: 'flex', alignItems: 'center'}}>
             {/* Petit séparateur visuel sauf pour le premier élément */}
             {index > 0 && <span style={{marginRight: '15px', color: '#555', fontSize: '1.2em'}}>|</span>}
             
             <span>
               <strong style={{color: '#aaa', textTransform: 'uppercase'}}>{credit.role} :</strong> {credit.name}
             </span>
          </div>
        ))}

      </div>
    </div>
  );
};

export default ACSHeader;