---
title: Pacifiste
description: T'es idées empêche quelconque violence. S'enlève quand tu t'échappes et ramène plus de renfort.
date: 2026-08-24
keywords: [humain, pacifiste, pacifist, class-d, scientifique, arme, respawn]
---

import Spoiler from '@site/src/components/docs/Antispoil.tsx';
import { GenerateLinksToAbilities } from '@site/src/components/docs/Ability.tsx';
import ItemLink from '@site/src/components/docs/ItemLink';
import PatchNoteBanner from '@site/src/components/docs/PatchnoteBanner';

# Pacifiste

<div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1rem' }}>
  <div>
    <span style={{ backgroundColor: '#707070', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase' }}>Personnel Humain</span>
  </div>
</div>

> **FR :** *"T'es idées empêche quelconque violence. S'enlève quand tu t'échappes et ramène plus de renfort"*

> **EN :** *"You're incapable of violence. Remove when escaping and bring more people"*

Le **Pacifiste** est un rôle exclusif aux classes civiles (Classe-D et Scientifique). Totalement opposé à la violence, il est physiquement incapable d'utiliser ou même de ramasser la moindre arme. S'il parvient à s'échapper malgré son immense handicap défensif, son acte pacifique est grandement récompensé.

---

## Profil

| Paramètre | Valeur |
| :--- | :--- |
| **Points de vie** | 100 HP |
| **Morphologie** | 1.0x (Standard) |
| **Conservation du rôle lors échappement** | Non |
| **Conservation du rôle lors décès** | Non |

---

## Inventaire et Apparition

Étant un rôle global modifiant un humain, le Pacifiste apparaît avec l'inventaire et le point d'apparition de sa classe humaine sous-jacente (Classe-D, Scientifique, etc.), sans modification d'équipement.

---

## Compétences

:::info Non-violence et Renforts
* **Phobie des armes :** Le Pacifiste ne peut pas tirer, frapper, ni même ramasser d'objets dangereux (armes à feu, armes de mêlée, grenades). S'il essaie, l'objet tombe immédiatement au sol avec le message : *"Juste la vue de cet objet te rend malade"*.
* **Évasion Héroïque :** S'il réussit à s'échapper en vie, le joueur perd son statut de Pacifiste et fait immédiatement réapparaître un joueur Spectateur au hasard à ses côtés !
:::

---

<PatchNoteBanner name="Pacifiste" tag="pacifiste" />

---

## Trivia

- "Incapable of violence" est une référence à RimWorld.