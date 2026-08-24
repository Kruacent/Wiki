---
title: Mime
description: Un Classe-D silencieux, capable de simuler sa propre mort et qui possède une apparence très... plate.
date: 2026-08-24
image: /img/doc/teams/class-d.png
keywords: [class-d, mime, silentwalk, furtif, simulatedeath]
abilities: ["Simulate Death"]
---

import ItemLink from '@site/src/components/docs/ItemLink';
import { GenerateLinksToAbilities } from '@site/src/components/docs/Ability.tsx';
import PatchNoteBanner from '@site/src/components/docs/PatchnoteBanner';
import SpawnImg1 from '@site/static/img/doc/facility/lcz/cd01/overview.png';
import SpawnImg2 from '@site/static/img/doc/facility/lcz/cd01/inside-cell.png';

# Mime

<div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1rem' }}>
  <div>
    <span style={{ backgroundColor: '#FF8E00', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase' }}>Personnel de Classe-D</span>
  </div>
</div>

> **FR :** *"tu fais très peu de bruit quand tu marches et t'es tout plat"*

> **EN :** *"you make almost no sound while walking and you're flat"*

Le **Mime** possède une anomalie physique par rapport aux autres Classe-D. De par sa constitution extrêmement fine, il se déplace dans un silence quasi complet. Toujours dans son rôle, il est même capable de faire le mort pour tromper ses assaillants.

---

## Profil

| Paramètre | Valeur |
| :--- | :--- |
| **Points de vie** | 100 HP |
| **Morphologie** | 0.5x, 1.0x, 1.0x (Aplati sur la largeur) |
| **Conservation du rôle lors échappement** | Oui |
| **Conservation du rôle lors décès** | Non |

---

## Apparition

<div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap', backgroundColor: 'var(--ifm-background-surface-color)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--ifm-color-emphasis-200)', marginTop: '1rem' }}>
  <img src={SpawnImg1} alt="Zone de spawn" style={{ width: '440px', borderRadius: '8px', border: '1px solid var(--ifm-color-emphasis-300)' }} />
  <img src={SpawnImg2} alt="Zone de spawn" style={{ width: '440px', borderRadius: '8px', border: '1px solid var(--ifm-color-emphasis-300)' }} />
  <div>
    <strong style={{ fontSize: '1.1rem', color: 'var(--ifm-color-primary)' }}>Salles des Cellules de Classe-D</strong><br/>
    **Zone :** Light Containment Zone<br/>
  </div>
</div>

---

## Inventaire

Il ne possède pas d'équipement particulier.

| Équipement | Détails et Quantité |
| :--- | :--- |
| **Inventaire** | Vide |

---

## Compétences

<GenerateLinksToAbilities abilities={frontMatter.abilities} />

:::info Information
Le mime à une marche silencieuse rendant ses bruits de pas pratiquement inaudibles pour les autres joueurs.
:::

---

<PatchNoteBanner name="Mime" tag="mime" />

---

## Trivia

- Dans d'anciennes versions, le mime ne pouvait pas parler. Jugé trop punitif par la communauté, la parole lui a donc été rendu.