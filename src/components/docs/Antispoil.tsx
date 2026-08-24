import React, { useState } from 'react';

export default function Spoiler({ from, children }: { from: string, children: React.ReactNode }) {
  const [isRevealed, setIsRevealed] = useState(false);

  if (isRevealed) {
    return <span style={{ animation: 'fadeIn 0.3s ease' }}>{children}</span>;
  }

  return (
    <span 
      onClick={() => setIsRevealed(true)}
      title="Cliquez pour révéler"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        cursor: 'pointer',
        backgroundColor: 'var(--ifm-color-emphasis-100)',
        border: '1px solid var(--ifm-color-emphasis-300)',
        color: 'var(--ifm-color-emphasis-700)',
        padding: '2px 10px',
        borderRadius: '12px',
        fontSize: '0.85em',
        fontWeight: '500',
        userSelect: 'none',
        verticalAlign: 'middle',
        transition: 'all 0.2s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--ifm-color-danger-contrast-background)';
        e.currentTarget.style.borderColor = 'var(--ifm-color-danger)';
        e.currentTarget.style.color = 'var(--ifm-color-danger)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--ifm-color-emphasis-100)';
        e.currentTarget.style.borderColor = 'var(--ifm-color-emphasis-300)';
        e.currentTarget.style.color = 'var(--ifm-color-emphasis-700)';
      }}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        <circle cx="12" cy="12" r="3"></circle>
        <line x1="3" y1="3" x2="21" y2="21"></line>
      </svg>
      Spoil {from}
    </span>
  );
}