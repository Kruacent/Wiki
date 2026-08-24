---
title: Enderman
description: Un humain aux capacités anormales, capable de manipuler l'espace pour se téléporter.
date: 2026-08-24
image: /img/doc/teams/human.png
keywords: [humain, enderman, teleportation, setposition, tp, espace]
abilities: ["Téléportation", "SetPosition"]
---

import ItemLink from '@site/src/components/docs/ItemLink';
import { GenerateLinksToAbilities } from '@site/src/components/docs/Ability.tsx';
import PatchNoteBanner from '@site/src/components/docs/PatchnoteBanner';

# Enderman

<div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1rem' }}>
  <div>
    <span style={{ backgroundColor: '#707070', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase' }}>Personnel Humain</span>
  </div>
</div>

> **FR :** *"Tu peux te téléporter ! T tro for enféte"*

> **EN :** *"Great job you're now overpowered"*

L'**Enderman** est un rôle humain global doté de capacités anormales. Il possède une mobilité sans précédent grâce à sa maîtrise de la téléportation instantanée.

---

## Profil

| Paramètre | Valeur |
| :--- | :--- |
| **Points de vie** | 100 HP |
| **Morphologie** | 1.0x (Standard) |
| **Conservation du rôle lors échappement** | **Oui** |
| **Conservation du rôle lors décès** | Non |

---

## Inventaire et Apparition

Étant un rôle global modifiant un humain, l'Enderman apparaît avec l'inventaire et le point d'apparition de sa classe humaine sous-jacente (Classe-D, Scientifique, etc.), sans modification d'équipement.

---

## Compétences et Mécaniques

<GenerateLinksToAbilities abilities={frontMatter.abilities} />

---

<PatchNoteBanner name="Enderman" tag="enderman" />

---

## Trivia

- Référence aux Endermans dans le jeu Minecraft.