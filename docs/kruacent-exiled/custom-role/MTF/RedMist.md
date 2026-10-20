---
title: Redmist
description: Incarnez la légendaire Fixer, la Brume Écarlate.
date: 2026-10-20
image: /img/doc/teams/mtf.png
keywords: [mtf, customrole, redmist]
abilities: ["ToggleEGO", "Spear", "OnRush", "GreaterSplitHorizontal"]
---

import ItemLink from '@site/src/components/docs/ItemLink';
import { GenerateLinksToAbilities } from '@site/src/components/docs/Ability.tsx';
import PatchNoteBanner from '@site/src/components/docs/PatchnoteBanner';
import SpawnImg from '@site/static/img/doc/facility/surface/mtf_helicopter.gif';

# Red Mist

<div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1rem' }}>
  <div>
    <span style={{ backgroundColor: '#0096FF', color: '#111', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase' }}>Mobile Task Force</span>
  </div>
</div>

> **FR :** *"todo"*

> **EN :** *"todo"*

Le **Red Mist** est un combattant d'élite redoutable dotée d'une force et d'une vitesse hors du commun. Dépourvue d'armes à feu, elle se bat exclusivement au corps à corps avec **The Mimicry** (*SCP-1509*) et puise sa puissance dans la manifestation de son **E.G.O**.

---

## Profil

| Paramètre | Valeur |
| :--- | :--- |
| **Points de vie** | 200 HP |
| **Conservation du rôle lors de l'échappement** | Non |
| **Conservation du rôle lors du décès** | Non |

---

## Apparition

<div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap', backgroundColor: 'var(--ifm-background-surface-color)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--ifm-color-emphasis-200)', marginTop: '1rem' }}>
  <img src={SpawnImg} alt="Zone d'apparition" style={{ width: '440px', borderRadius: '8px', border: '1px solid var(--ifm-color-emphasis-300)' }} />
  <div>
    <strong style={{ fontSize: '1.1rem', color: 'var(--ifm-color-primary)' }}>Déploiement MTF</strong><br/>
    **Type :** Rare Custom Role<br/>
  </div>
</div>

<div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap', backgroundColor: 'var(--ifm-background-surface-color)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--ifm-color-emphasis-200)', marginTop: '1rem' }}>
  <p>Actuellement le seul moyen de spawn avec avant la mise à jour 15.0 de SCP:SL est de mourrir dans une TESLA en tant que MTF. Vous aurez alors 20% de chance de l'avoir.</p>
</div>


---

## Inventaire

La Red Mist ne possède pas de fusil d'assaut ni d'objets conventionnels. Elle ne s'équipe que de son arme de prédilection.

| Équipement | Détails et Quantité |
| :--- | :--- |
| <ItemLink name="The Mimicry" wikiId="SCP-1509" /> | 1x (SCP-1509 modifiée) |

---

## Compétences

Les compétences de la Red Mist s'articulent autour de l'activation de son armure E.G.O et d'attaques tranchantes physiques :

<GenerateLinksToAbilities abilities={frontMatter.abilities} />

---

<PatchNoteBanner name="Redmist" tag="redmist" />