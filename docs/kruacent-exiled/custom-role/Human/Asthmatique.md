---
title: Asthmatique
description: Un humain souffrant de problèmes respiratoires. Son endurance est réduite, mais sa concentration au tir est accrue.
date: 2026-08-24
keywords: [humain, asthmatique, asthme, stamina, endurance, scp-1853]
abilities: ["Asthme"]
---

import ItemLink from '@site/src/components/docs/ItemLink';
import { GenerateLinksToAbilities } from '@site/src/components/docs/Ability.tsx';
import PatchNoteBanner from '@site/src/components/docs/PatchnoteBanner';

# Asthmatique

<div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1rem' }}>
  <div>
    <span style={{ backgroundColor: '#707070', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase' }}>Personnel Humain</span>
  </div>
</div>

> **FR :** *"T'as stamina est réduit de moitié. Mais tu vises mieux"*

> **EN :** *"Stamina halfed but better accuracy"*

L'**Asthmatique** est un rôle humain global qui modifie les capacités physiques du joueur. Handicapé par une insuffisance respiratoire chronique, il se fatigue beaucoup plus vite que les autres membres du personnel. Cependant, son habitude à contrôler sa respiration lui confère une précision chirurgicale lors du maniement des armes à feu.

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

Étant un rôle global modifiant un humain, l'Astmathique apparaît avec l'inventaire et le point d'apparition de sa classe humaine sous-jacente (Classe-D, Scientifique, etc.), sans modification d'équipement.

---

## Compétences et Mécaniques

<GenerateLinksToAbilities abilities={frontMatter.abilities} />

:::info Information 
Le métabolisme de l'Asthmatique lui offre une résistance à **l'effet d'empoisonnement**.
:::

<PatchNoteBanner name="Asthmatique" tag="asthmatique" />