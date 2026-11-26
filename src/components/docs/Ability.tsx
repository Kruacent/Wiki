import React from 'react';
import { AbilityCards, RoleCards } from './RoleAbilityCards';

/**
 * Composants déjà placés dans les pages des rôles et des capacités.
 * Ils affichent maintenant des cartes (voir RoleAbilityCards.tsx) ;
 * les pages n'ont pas besoin d'être modifiées.
 */

/** Capacités d'un rôle : `<GenerateLinksToAbilities abilities={frontMatter.abilities} />`. */
export function GenerateLinksToAbilities({ abilities }: { abilities?: string[] }) {
  return <AbilityCards abilities={abilities} />;
}

/** Rôles qui possèdent une capacité : `<SearchRolesByAbility ability="Trade" />`. */
export function SearchRolesByAbility({ ability }: { ability?: string }) {
  if (!ability) return null;
  return <RoleCards ability={ability} />;
}
