import React from 'react';
import { gamblingCoinEffects, CoinEffect, CoinEffectType } from '@site/src/data/gamblingCoinEffects';

// Chance qu'une pièce donne un effet positif (le reste est négatif).
const CHANCE_POSITIF = 0.5;

function totalPoids(type: CoinEffectType, effects: CoinEffect[]): number {
  return effects.filter((e) => e.type === type).reduce((sum, e) => sum + Math.max(0, e.poids), 0);
}

/** Chance d'obtenir cet effet sur un lancer, en pourcentage. */
export function chanceEffet(effet: CoinEffect, effects: CoinEffect[] = gamblingCoinEffects): number {
  const total = totalPoids(effet.type, effects);
  if (total <= 0 || effet.poids <= 0) return 0;
  const chanceType = effet.type === 'positif' ? CHANCE_POSITIF : 1 - CHANCE_POSITIF;
  return chanceType * (effet.poids / total) * 100;
}

function formatChance(chance: number): string {
  if (chance === 0) return '0 %';
  if (chance < 0.1) return '< 0,1 %';
  return `${chance.toLocaleString('fr-FR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })} %`;
}

export default function GamblingCoinTable({ type }: { type: CoinEffectType }) {
  const effects = gamblingCoinEffects
    .filter((e) => e.type === type && e.poids > 0)
    .map((e) => ({ effet: e, chance: chanceEffet(e) }))
    .sort((a, b) => b.chance - a.chance || a.effet.nom.localeCompare(b.effet.nom));

  return (
    <table>
      <thead>
        <tr>
          <th>Effet</th>
          <th>Message</th>
          <th>Ce qui vous arrive</th>
          <th style={{ whiteSpace: 'nowrap' }}>Chance</th>
        </tr>
      </thead>
      <tbody>
        {effects.map(({ effet, chance }) => (
          <tr key={effet.nom}>
            <td><strong>{effet.nom}</strong></td>
            <td>{effet.message ? <em>{effet.message}</em> : '-'}</td>
            <td>{effet.effet}</td>
            <td style={{ whiteSpace: 'nowrap' }}>{formatChance(chance)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
