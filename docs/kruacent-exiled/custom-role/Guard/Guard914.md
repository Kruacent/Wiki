---
title: Garde de SCP-914
description: Un garde assigné à la protection de SCP-914, équipé d'une carte d'accès falsifiée aux propriétés uniques.
date: 2026-08-24
image: /img/doc/teams/guard.png
keywords: [garde, guard, scp-914, keycard, carte, 914]
---

import ItemLink from '@site/src/components/docs/ItemLink';
import PatchNoteBanner from '@site/src/components/docs/PatchnoteBanner';
import SpawnImg from '@site/static/img/doc/facility/lcz/914/inside.png';

# Garde de SCP-914

<div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1rem' }}>
  <div>
    <span style={{ backgroundColor: '#556372', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase' }}>Garde du Site</span>
  </div>
</div>

> **FR :** *"Tu es Le garde de SCP-914. Tu commences à 914 mais on a traffiqué ta carte et ntm aussi"*

> **EN :** *"You are The guard of SCP-914. You start at SCP-914 but someone tampered with your card and also fuck you"*

Le **Garde de SCP-914** est un agent de sécurité ayant reçu pour ordre la protection de SCP-914. Déployé directement dans sa chambre de confinement, il est victime d'une mauvaise blague de l'administration : sa carte d'accès standard a été remplacée par une contrefaçon.

---

## Profil

| Paramètre | Valeur |
| :--- | :--- |
| **Points de vie** | 100 HP |
| **Morphologie** | 1.0x (Standard) |
| **Conservation du rôle lors décès** | Non |

---

## Apparition

<div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap', backgroundColor: 'var(--ifm-background-surface-color)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--ifm-color-emphasis-200)', marginTop: '1rem' }}>
  <img src={SpawnImg} alt="Intérieur de la chambre de SCP-914" style={{ width: '440px', borderRadius: '8px', border: '1px solid var(--ifm-color-emphasis-300)' }} />
  <div>
    <strong style={{ fontSize: '1.1rem', color: 'var(--ifm-color-primary)' }}>Salle de SCP-914</strong><br/>
    **Zone :** Light Containment Zone<br/>
  </div>
</div>

---

## Inventaire

L'armement du garde est classique, mais sa carte d'accès est unique à son rôle.

| Équipement | Détails et Quantité |
| :--- | :--- |
| <ItemLink name="FSP-9" /> | 1x |
| **Munitions 9x19mm** | 60x |
| <ItemLink name="Armure légère" wikiId="Light_Armor" /> | 1x |
| **"Guard Keycard?"** | 1x |
| <ItemLink name="Medkit" wikiId="First_Aid_Kit" /> | 1x |
| <ItemLink name="Grenade Flash" wikiId="Flashbang_Grenade" /> | 1x |
| <ItemLink name="Radio" /> | 1x |

---

## Mécanique de la fausse carte

La carte d'accès avec laquelle ce garde apparaît n'est pas une carte classique, mais un objet avec un comportement hors du commun, lors de l'interaction avec **SCP-914**. 

Si le joueur améliore cette carte en la tenant en main sur le réglage **Fine**, elle suivra un chemin d'amélioration, comme ci-dessous :

1. **Amélioration 1 :** Devient une **"MTF operative Keycard?"**
2. **Amélioration 2 :** Devient une **"MTF captain Keycard?"**
3. **Amélioration 3 :** La carte se transforme en **Carte de Janitor**.

Cette carte de Janitor est une carte classique, améliorable dans SCP-914.

---

<PatchNoteBanner name="Garde de SCP-914" tag="guard914" />