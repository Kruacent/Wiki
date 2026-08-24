---
title: Tank
description: Un colosse lourdement armé, dont la vitesse est réduite par le poids de ses propres munitions.
date: 2026-08-24
image: /img/doc/teams/mtf.png
keywords: [mtf, fim, tank, lourd, logicer, frmg, slowness, munition]
abilities: ["Lourd"]
---

import ItemLink from '@site/src/components/docs/ItemLink';
import { GenerateLinksToAbilities } from '@site/src/components/docs/Ability.tsx';
import PatchNoteBanner from '@site/src/components/docs/PatchnoteBanner';
import SpawnImg from '@site/static/img/doc/facility/surface/mtf_helicopter.gif';

# Tank

<div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1rem' }}>
  <div>
    <span style={{ backgroundColor: '#0096FF', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase' }}>Mobile Task Force</span>
  </div>
</div>

> **FR :** *"Tu es ralenti selon ton nombre de balle"*

> **EN :** *"The more bullet you got, the slower you are"*

Le **Tank** est le mastodonte des MTF. Équipé d'un arsenal capable de repousser n'importe quelle menace, sa puissance de feu se paie au prix d'une mobilité réduite. Sa morphologie imposante et son équipement en font un mur d'acier.

---

## Profil

| Paramètre | Valeur |
| :--- | :--- |
| **Points de vie** | **200 HP** |
| **Morphologie** | 1.15x, 1.0x, 1.15x *(Plus large)* |
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

Le Tank transporte un arsenal impressionnant qui le prépare à des affrontements directs et prolongés.

| Équipement | Détails et Quantité |
| :--- | :--- |
| <ItemLink name="Logicer" /> | 1x |
| <ItemLink name="FR-MG-0" /> | 1x |
| **Munitions 7.62x39mm** | 200x |
| **Munitions 5.56x45mm** | 200x |
| <ItemLink name="Armure lourde" wikiId="Heavy_Armor" /> | 1x |
| <ItemLink name="Carte de Capitaine" wikiId="Keycard" /> | 1x |
| <ItemLink name="Grenade HE" wikiId="High-Explosive_Grenade" /> | 1x |
| <ItemLink name="Adrénaline" wikiId="Adrenaline" /> | 1x |
| <ItemLink name="Anti-douleurs" wikiId="Painkillers" /> | 1x |
| <ItemLink name="Radio" /> | 1x |

---

## Compétence

<GenerateLinksToAbilities abilities={frontMatter.abilities} />

---

<PatchNoteBanner name="Tank" tag="tank" />

---

## Trivia

- Dans les anciennes versions, la description du Tank était : *"Tu es débuff mais ta force de tir est démultipliée (fais attention à tes balles)"*.