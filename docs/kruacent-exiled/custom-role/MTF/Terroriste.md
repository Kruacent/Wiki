---
title: Terroriste
description: Ne fait pas exploser la facilité... Un Sergent équipé de multiples grenades et d'une capacité explosive.
date: 2026-08-24
image: /img/doc/teams/mtf.png
keywords: [mtf, fim, terroriste, bombe, grenade, explode, explosion]
abilities: ["Explode"]
---

import ItemLink from '@site/src/components/docs/ItemLink';
import { GenerateLinksToAbilities } from '@site/src/components/docs/Ability.tsx';
import PatchNoteBanner from '@site/src/components/docs/PatchnoteBanner';
import SpawnImg from '@site/static/img/doc/facility/surface/mtf_helicopter.gif';

# Terroriste

<div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1rem' }}>
  <div>
    <span style={{ backgroundColor: '#0096FF', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase' }}>Mobile Task Force</span>
  </div>
</div>

> **FR :** *"Ne fait pas exploser la facilité, tu commences avec des grenades"*

> **EN :** *"Kaboom!"*

Le **Terroriste** est un spécialiste de la démolition. Déployé pour nettoyer les zones infestées par les anomalies, il possède un arsenal explosif bien supérieur à celui de ses camarades. Sa présence est souvent synonyme de dégâts collatéraux majeurs.

---

## Profil

| Paramètre | Valeur |
| :--- | :--- |
| **Points de vie** | 100 HP |
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

L'arsenal du Terroriste est orienté vers la destruction de masse.

| Équipement | Détails et Quantité |
| :--- | :--- |
| <ItemLink name="MTF-E11-SR" /> | 1x |
| **Munitions 5.56x45mm** | 100x |
| <ItemLink name="Grenade HE" wikiId="High-Explosive_Grenade" /> | **2x** |
| <ItemLink name="Armure de combat" wikiId="Combat_Armor" /> | 1x |
| <ItemLink name="Carte MTF Operative" wikiId="Keycard" /> | 1x |
| <ItemLink name="Adrénaline" wikiId="Adrenaline" /> | 1x |
| <ItemLink name="Radio" /> | 1x |

---

## Compétence

La dangerosité du Terroriste réside dans sa capacité active :

<GenerateLinksToAbilities abilities={frontMatter.abilities} />

---

<PatchNoteBanner name="Terroriste" tag="terroriste" />