---
title: Gamble Addict
description: T'as trade ton kit et ta carte contre 2 pièces, fais en bon usage.
date: 2026-08-24
keywords: [scientifique, accro du casino, gamble addict, piece, coin, trade, casino]
abilities: ["Trade"]
---

import { GenerateLinksToAbilities } from '@site/src/components/docs/Ability.tsx';
import ItemLink from '@site/src/components/docs/ItemLink';
import PatchNoteBanner from '@site/src/components/docs/PatchnoteBanner';

import SpawnImg1 from '@site/static/img/doc/facility/lcz/airlock.png';
import SpawnImg2 from '@site/static/img/doc/facility/lcz/glassroom.png';
import SpawnImg3 from '@site/static/img/doc/facility/lcz/greenhouse.png';
import SpawnImg4 from '@site/static/img/doc/facility/lcz/lcz-armory.png';
import SpawnImg5 from '@site/static/img/doc/facility/lcz/lcz-hallway.png';
import SpawnImg6 from '@site/static/img/doc/facility/lcz/lcz-hcz-checkpoint.png';
import SpawnImg7 from '@site/static/img/doc/facility/lcz/wc.png';

# Gamble Addict

<div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1rem' }}>
  <div>
    <span style={{ backgroundColor: '#FFFF7C', color: 'black', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase' }}>Personnel Scientifique</span>
  </div>
</div>

> **FR :** *"T'as trade ton kit et ta carte contre 2 pièces. fais en bon usage"*

> **EN :** *"you got 2 coins. good luck"*

L'**Accro du casino** est un membre du personnel scientifique de la Fondation qui a un grave problème d'addiction aux jeux de hasard. Tellement obsédé par l'idée de miser, il a purement et simplement revendu son équipement pour se procurer des pièces.

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

<div style={{ backgroundColor: 'var(--ifm-background-surface-color)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--ifm-color-emphasis-200)', marginTop: '1rem' }}>
  
  <div style={{ marginBottom: '1rem' }}>
    <strong style={{ fontSize: '1.1rem', color: 'var(--ifm-color-primary)' }}>Salles et Couloirs</strong><br/>
    **Zone :** Light Containment Zone (Plusieurs points d'apparition possibles)
  </div>

  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
    <img src={SpawnImg1} alt="Salle de conférence" style={{ width: '100%', borderRadius: '6px', border: '1px solid var(--ifm-color-emphasis-300)' }} />
    <img src={SpawnImg2} alt="Couloir en coin" style={{ width: '100%', borderRadius: '6px', border: '1px solid var(--ifm-color-emphasis-300)' }} />
    <img src={SpawnImg3} alt="Salle Intercom" style={{ width: '100%', borderRadius: '6px', border: '1px solid var(--ifm-color-emphasis-300)' }} />
    <img src={SpawnImg4} alt="Grand bureau" style={{ width: '100%', borderRadius: '6px', border: '1px solid var(--ifm-color-emphasis-300)' }} />
    <img src={SpawnImg5} alt="Zone de chargement" style={{ width: '100%', borderRadius: '6px', border: '1px solid var(--ifm-color-emphasis-300)' }} />
    <img src={SpawnImg6} alt="Petit bureau" style={{ width: '100%', borderRadius: '6px', border: '1px solid var(--ifm-color-emphasis-300)' }} />
    <img src={SpawnImg7} alt="Couloir droit" style={{ width: '100%', borderRadius: '6px', border: '1px solid var(--ifm-color-emphasis-300)' }} />
  </div>

</div>

---

## Inventaire

Il a vendu tous son équipement contre deux pièces.

| Équipement | Détails et Quantité |
| :--- | :--- |
| <ItemLink name="Pièces" wikiId="Coin" /> | 2x |

---

## Compétences

Son seul espoir de survie repose sur sa capacité à parier ses pièces.

<GenerateLinksToAbilities abilities={frontMatter.abilities} />

---

<PatchNoteBanner name="Gamble Addict" tag="gambleaddict" />