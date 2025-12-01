import React, { useState } from 'react';
import { abilitiesList } from './AbilityLoader';

export default function AbilityList() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAbilities = abilitiesList.filter((ability) =>
    ability.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (typeof ability.description === 'string' && ability.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const groupedAbilities = filteredAbilities.reduce((groups, ability) => {
    const rawType = ability.type || 'Autre';
    const category = rawType.split(' ')[0].toUpperCase();
    if (!groups[category]) groups[category] = [];
    groups[category].push(ability);
    return groups;
  }, {});

  const sortOrder = ['ACTIVE', 'PASSIF', 'ULTIME', 'AUTRE'];

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
      
      {/* BARRE DE RECHERCHE */}
      <div style={{ marginBottom: '40px', position: 'relative' }}>
        <input 
          type="text" 
          placeholder="Rechercher une compétence" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: '100%', padding: '15px 20px', paddingLeft: '20px',
            fontSize: '1rem', backgroundColor: '#0f0f0f', border: '1px solid #333',
            borderRadius: '50px', color: '#fff', outline: 'none',
            boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
          }}
        />
      </div>

      {/* LISTE */}
      {Object.keys(groupedAbilities)
        .sort((a, b) => {
            const indexA = sortOrder.indexOf(a);
            const indexB = sortOrder.indexOf(b);
            if (indexA === -1 && indexB === -1) return a.localeCompare(b);
            if (indexA === -1) return 1;
            if (indexB === -1) return -1;
            return indexA - indexB;
        })
        .map((category) => (
        <div key={category} style={{ marginBottom: '50px' }}>
          
          {/* Titre de Section */}
          <h3 style={{
            fontSize: '0.9rem', letterSpacing: '2px', color: getCategoryColor(category),
            borderBottom: `1px solid ${getCategoryColor(category)}33`, paddingBottom: '10px', marginBottom: '20px',
            display: 'flex', alignItems: 'center', gap: '10px'
          }}>
          </h3>

          {/* Les Items en Liste */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {groupedAbilities[category].map((ability) => (
              <AbilityRow key={ability.id} ability={ability} categoryColor={getCategoryColor(category)} />
            ))}
          </div>
        </div>
      ))}

      {filteredAbilities.length === 0 && (
        <div style={{textAlign: 'center', padding: '50px', color: '#666', fontStyle: 'italic'}}>
          Aucun résultat.
        </div>
      )}
    </div>
  );
}

function AbilityRow({ ability, categoryColor }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'flex-start', gap: '20px',
      backgroundColor: '#161616', border: '1px solid #2a2a2a', borderRadius: '8px',
      padding: '20px', transition: 'transform 0.2s, background-color 0.2s',
      position: 'relative', overflow: 'hidden'
    }}
    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#1a1a1a'; e.currentTarget.style.borderColor = '#444'; }}
    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#161616'; e.currentTarget.style.borderColor = '#2a2a2a'; }}
    >
      {/* Barre latérale colorée */}
      <div style={{position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px', backgroundColor: categoryColor}}></div>

      {/* Contenu Central */}
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '5px' }}>
          <h4 style={{ margin: 0, fontSize: '1.2rem', color: '#fff' }}>{ability.name}</h4>
          
          <div style={{ display: 'flex', gap: '10px', fontSize: '0.75rem' }}>
            {ability.cooldown && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#888', backgroundColor: '#222', padding: '2px 8px', borderRadius: '4px' }}>
                <span>⏱</span> {ability.cooldown}
              </div>
            )}
            {ability.keybind && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#fff', backgroundColor: '#333', padding: '2px 8px', borderRadius: '4px', border: '1px solid #555' }}>
                <span>⌨</span> {ability.keybind}
              </div>
            )}
          </div>
        </div>

        {/* Description */}
        <div style={{ color: '#aaa', fontSize: '0.95rem', lineHeight: '1.5' }}>
          {ability.description}
        </div>
      </div>
    </div>
  );
}

function getCategoryColor(category) {
    if (category.includes('PASSIF')) return '#4caf50';
    if (category.includes('ACTIVE')) return '#2196f3';
    return '#9e9e9e';
}