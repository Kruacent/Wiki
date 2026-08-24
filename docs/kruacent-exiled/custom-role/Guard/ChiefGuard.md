---
title: Chef des gardes
description: Un garde suréquipé qui commence avec un Crossvec et une carte d'accès amélioré.
date: 2026-08-24
image: /img/doc/teams/guard.png
keywords: [garde, guard, chiefguard, crossvec, mtf]
---

import ItemLink from '@site/src/components/docs/ItemLink';
import PatchNoteBanner from '@site/src/components/docs/PatchnoteBanner';

import SpawnImg1 from '@site/static/img/doc/facility/entrance/conference-hallway.png';
import SpawnImg2 from '@site/static/img/doc/facility/entrance/corner-hallway.png';
import SpawnImg3 from '@site/static/img/doc/facility/entrance/intercom-room.png';
import SpawnImg4 from '@site/static/img/doc/facility/entrance/large-office.png';
import SpawnImg5 from '@site/static/img/doc/facility/entrance/loading-block.png';
import SpawnImg6 from '@site/static/img/doc/facility/entrance/minor-office.png';
import SpawnImg7 from '@site/static/img/doc/facility/entrance/straight-hallway.png';
import SpawnImg8 from '@site/static/img/doc/facility/entrance/t-intersection.png';
import SpawnImg9 from '@site/static/img/doc/facility/entrance/x-intersection.png';

# Chef des gardes

<div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1rem' }}>
  <div>
    <span style={{ backgroundColor: '#556372', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase' }}>Garde du Site</span>
  </div>
</div>

> **FR :** *"T'as une carte de private et un crossvec"*

> **EN :** *"you got a private card and a crossvec"*

Le **Chef des gardes** est un membre gradé de la sécurité. Mieux équipé que ses camarades, il dispose dès le début d'un armement supérieur et d'un accès privilégié.

---

## Profil

| Paramètre | Valeur |
| :--- | :--- |
| **Points de vie** | 100 HP |
| **Morphologie** | 1.0x (Standard) |
| **Conservation du rôle lors décès** | Non |

---

## Apparition

<div style={{ backgroundColor: 'var(--ifm-background-surface-color)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--ifm-color-emphasis-200)', marginTop: '1rem' }}>
  
  <div style={{ marginBottom: '1rem' }}>
    <strong style={{ fontSize: '1.1rem', color: 'var(--ifm-color-primary)' }}>Bureaux et Couloirs</strong><br/>
    **Zone :** Entrance Zone (Plusieurs points d'apparition possibles)
  </div>

  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
    <img src={SpawnImg1} alt="Salle de conférence" style={{ width: '100%', borderRadius: '6px', border: '1px solid var(--ifm-color-emphasis-300)' }} />
    <img src={SpawnImg2} alt="Couloir en coin" style={{ width: '100%', borderRadius: '6px', border: '1px solid var(--ifm-color-emphasis-300)' }} />
    <img src={SpawnImg3} alt="Salle Intercom" style={{ width: '100%', borderRadius: '6px', border: '1px solid var(--ifm-color-emphasis-300)' }} />
    <img src={SpawnImg4} alt="Grand bureau" style={{ width: '100%', borderRadius: '6px', border: '1px solid var(--ifm-color-emphasis-300)' }} />
    <img src={SpawnImg5} alt="Zone de chargement" style={{ width: '100%', borderRadius: '6px', border: '1px solid var(--ifm-color-emphasis-300)' }} />
    <img src={SpawnImg6} alt="Petit bureau" style={{ width: '100%', borderRadius: '6px', border: '1px solid var(--ifm-color-emphasis-300)' }} />
    <img src={SpawnImg7} alt="Couloir droit" style={{ width: '100%', borderRadius: '6px', border: '1px solid var(--ifm-color-emphasis-300)' }} />
    <img src={SpawnImg8} alt="Intersection en T" style={{ width: '100%', borderRadius: '6px', border: '1px solid var(--ifm-color-emphasis-300)' }} />
    <img src={SpawnImg9} alt="Intersection en X" style={{ width: '100%', borderRadius: '6px', border: '1px solid var(--ifm-color-emphasis-300)' }} />
  </div>

</div>

---

## Inventaire

Contrairement aux gardes standards, il possède un armement avancé et une carte d'accès militaire.

| Équipement | Détails et Quantité |
| :--- | :--- |
| <ItemLink name="Crossvec" /> | 1x |
| **Munitions 5.56x45mm** | 120x |
| <ItemLink name="Armure légère" wikiId="Light_Armor" /> | 1x |
| <ItemLink name="Carte d'accès MTF Private" wikiId="keycard" /> | 1x |
| <ItemLink name="Medkit" wikiId="First_Aid_Kit" /> | 1x |
| <ItemLink name="Lampe torche" wikiId="Flashlight" /> | 1x |
| <ItemLink name="Radio" /> | 1x |

---

<PatchNoteBanner name="Chef des gardes" tag="chiefguard" />