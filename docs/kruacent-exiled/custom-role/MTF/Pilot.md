---
title: Pilote
description: Un spécialiste capable de coordonner des frappes aériennes.
date: 2026-08-24
image: /img/doc/teams/mtf.png
keywords: [mtf, pilote, pilot, airstrike, frappe, setposition]
abilities: ["AirStrike", "SetPosition"]
---

import Spoiler from '@site/src/components/docs/Antispoil.tsx';
import ItemLink from '@site/src/components/docs/ItemLink';
import { GenerateLinksToAbilities } from '@site/src/components/docs/Ability.tsx';
import PatchNoteBanner from '@site/src/components/docs/PatchnoteBanner';
import SpawnImg from '@site/static/img/doc/facility/surface/mtf_helicopter.gif';

# Pilote

<div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1rem' }}>
  <div>
    <span style={{ backgroundColor: '#0096FF', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase' }}>Mobile Task Force</span>
  </div>
</div>

> **FR :** *"Je suis pilote!"*

> **EN :** *"So I haveth a Laser Pointere"*

Le **Pilote** est un membre spécialisé de la Mobile Task Force. Légèrement moins endurant que ses camarades mais il compense cette faiblesse par une aide aérienne. 

---

## Profil

| Paramètre | Valeur |
| :--- | :--- |
| **Points de vie** | **90 HP** |
| **Morphologie** | 1.0x (Standard) |
| **Conservation du rôle lors échappement** | Non |
| **Conservation du rôle lors décès** | Non |

---

## Apparition

<div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap', backgroundColor: 'var(--ifm-background-surface-color)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--ifm-color-emphasis-200)', marginTop: '1rem' }}>
  <img src={SpawnImg} alt="Zone d'apparition" style={{ width: '440px', borderRadius: '8px', border: '1px solid var(--ifm-color-emphasis-300)' }} />
  <div>
    <strong style={{ fontSize: '1.1rem', color: 'var(--ifm-color-primary)' }}>Hélicoptère des MTF</strong><br/>
    **Zone :** Surface<br/>
  </div>
</div>

---

## Inventaire

Bien qu'il fasse partie des troupes de rang "Private", le Pilote reçoit un équipement amélioré et notamment une carte d'accès de grade supérieur pour faciliter ses déplacements.

| Équipement | Détails et Quantité |
| :--- | :--- |
| <ItemLink name="Crossvec" /> | 1x |
| **Munitions 9x19mm** | 100x |
| <ItemLink name="Armure de combat" wikiId="Combat_Armor" /> | 1x |
| <ItemLink name="Carte d'accès MTF Operative" wikiId="Keycard" /> | 1x |
| <ItemLink name="Medkit" wikiId="First_Aid_Kit" /> | 1x |
| <ItemLink name="Radio" /> | 1x |

---

## Compétences

Le Pilote dispose de capacités uniques pour marquer des cibles et faire pleuvoir le feu depuis le ciel :

<GenerateLinksToAbilities abilities={frontMatter.abilities} />

---

<PatchNoteBanner name="Pilote" tag="pilote" />

---

## Trivia

- Le rôle du Pilote est inspiré du conseiller "Pilote" de *Rebel Inc.*
- La description française ("*Je suis pilote!*") est une référence à une [vidéo de JDG](https://youtu.be/PwWbpWitqrY?si=-Iu0f6BaN5xzRRYo&t=1330). 
- <Spoiler from=" de Deltarune (Chapitre 3)"> *So I haveth a Laser Pointere* est une référence à [**Rouxls Kaard**](https://www.youtube.com/shorts/4nId4appWbU) dans *Deltarune*. </Spoiler>
