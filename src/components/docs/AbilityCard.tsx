import React from 'react';

export default function AbilityCard({ 
  name, 
  type = "Active", 
  cooldown, 
  keybind, 
  description,
  icon
}) {
  
  const isPassive = type.toLowerCase() === 'passive';
  const color = isPassive ? '#4caf50' : '#2196f3'; 

  return (
    <div style={{
      display: 'flex',
      backgroundColor: '#151515',
      border: '1px solid #333',
      borderRadius: '6px',
      marginBottom: '15px',
      overflow: 'hidden',
      boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
    }}>
      
      <div style={{
        backgroundColor: '#1a1a1a',
        width: '90px',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        borderRight: '1px solid #333',
        padding: '10px',
        textAlign: 'center'
      }}>
        {icon ? (
           <div style={{ fontSize: '1.8rem', marginBottom: '5px' }}>{icon}</div>
        ) : (
           <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: color, marginBottom: '8px', boxShadow: `0 0 10px ${color}` }}></div>
        )}
        
        <div style={{ 
            fontSize: '0.65rem', textTransform: 'uppercase', 
            color: color, fontWeight: '800', letterSpacing: '1px' 
        }}>
            {type}
        </div>
      </div>

      <div style={{ padding: '15px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        
        <h3 style={{ margin: '0 0 8px 0', fontSize: '1.1rem', color: '#fff', fontWeight: 'bold' }}>
            {name}
        </h3>
        
        <div style={{ color: '#ccc', fontSize: '0.9rem', lineHeight: '1.5', flex: 1 }}>
          {description}
        </div>

        {(keybind || cooldown) && (
            <div style={{ 
                marginTop: '12px', paddingTop: '10px', borderTop: '1px solid #2a2a2a',
                display: 'flex', alignItems: 'center', gap: '20px', fontSize: '0.8rem'
            }}>
                
                {keybind && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#888' }}>
                        <span style={{ fontWeight: '600', fontSize: '0.7rem', textTransform: 'uppercase' }}>Touche</span>
                        <kbd style={{ 
                            backgroundColor: '#252525', border: '1px solid #444', color: '#fff', 
                            borderRadius: '4px', padding: '1px 6px', fontFamily: 'monospace', fontSize: '0.85rem'
                        }}>
                            {keybind}
                        </kbd>
                    </div>
                )}

                {cooldown && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#888' }}>
                        <span style={{ fontWeight: '600', fontSize: '0.7rem', textTransform: 'uppercase' }}>Cooldown</span>
                        <div style={{ 
                            display: 'flex', alignItems: 'center', gap: '5px',
                            color: '#e57373', fontWeight: 'bold'
                        }}>
                            <span style={{ fontSize: '1.1em', lineHeight: 0 }}>⟳</span> 
                            {cooldown}
                        </div>
                    </div>
                )}

            </div>
        )}

      </div>
    </div>
  );
}