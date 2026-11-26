import React from 'react';

interface Props {
  /** Nombre maximum d'exemplaires qui peuvent apparaître au sol en début de partie. 0 = pas de limite. */
  limit: number;
  /** Nombre de lieux listés dans le tableau (pour adapter la phrase). */
  lieux?: number;
}

/**
 * Rappel placé sous le tableau « Localisation » d'un objet.
 * Explique que chaque lieu fait son propre tirage : les pourcentages ne s'additionnent pas.
 * Source : KECustomItem.Spawn (Kruacent-Exiled), un tirage par salle, dans l'ordre du tableau,
 * jusqu'à atteindre la limite.
 */
export default function SpawnRule({ limit, lieux = 2 }: Props) {
  const max =
    limit === 0 ? (
      <>pas de limite au nombre d'exemplaires</>
    ) : (
      <>
        au maximum <strong>{limit}</strong> exemplaire{limit > 1 ? 's' : ''} par partie
      </>
    );

  return (
    <div
      role="note"
      style={{
        margin: '0.5rem 0 1.5rem',
        padding: '0.6rem 0.9rem',
        borderLeft: '4px solid var(--ifm-color-primary)',
        background: 'var(--ifm-color-emphasis-100)',
        borderRadius: '4px',
        fontSize: '0.92rem',
      }}
    >
      <strong>Comment lire ce tableau :</strong>{' '}
      {lieux > 1 ? (
        <>
          chaque lieu fait <strong>son propre tirage</strong>, indépendamment des autres. Les pourcentages{' '}
          <strong>ne s'additionnent pas</strong> : deux lieux à 25 % ne font pas 50 %. Les lieux sont tirés dans
          l'ordre du tableau et, une fois la limite atteinte, les suivants ne tirent plus. En tout, {max}.
        </>
      ) : (
        <>c'est la chance que l'objet apparaisse à cet endroit en début de partie, {max}.</>
      )}
    </div>
  );
}
