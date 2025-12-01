import React from 'react';

export default function StatusEffect({ 
  name, 
  type = 'buff',
  intensity,
  description, 
  icon 
}) {
  
  let color = '#4caf50';
  let bgColor = 'rgba(76, 175, 80, 0.1)';
  let symbol = '+';

  if (type.toLowerCase() === 'debuff') {
    color = '#e57373';
    bgColor = 'rgba(229, 115, 115, 0.1)';
    symbol = '-';
  } else if (type.toLowerCase() === 'neutral') {
    color = '#90a4ae';
    bgColor = 'rgba(144, 164, 174, 0.1)';
    symbol = '•';
  }

  return (
    <div style={{
      display: 'flex',
      alignItems: 'flex-start',
      backgroundColor: '#151515',
      border: `1px solid #333`,
      borderLeft: `4px solid ${color}`,
      borderRadius: '4px',
      padding: '12px',
      marginBottom: '10px',
      fontFamily: 'Segoe UI, sans-serif',
      boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
    }}>
      
      {/* Colonne Icone */}
      <div style={{
        minWidth: '32px', height: '32px',
        borderRadius: '50%',
        backgroundColor: bgColor,
        color: color,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginRight: '15px',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        border: `1px solid ${color}44`
      }}>
        {icon ? icon : symbol}
      </div>

      {/* Colonne Texte */}
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
          <span style={{ fontWeight: 'bold', color: '#fff', fontSize: '1rem' }}>
            {name}
          </span>
          {intensity && (
            <span style={{ 
              fontSize: '0.75rem', fontWeight: 'bold', 
              color: color, 
              backgroundColor: bgColor,
              padding: '2px 6px', borderRadius: '3px'
            }}>
              {intensity}
            </span>
          )}
        </div>
        
        <div style={{ fontSize: '0.9rem', color: '#ccc', lineHeight: '1.4' }}>
          {description}
        </div>
      </div>

    </div>
  );
}