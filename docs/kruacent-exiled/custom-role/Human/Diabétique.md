---
title: Diabétique
description: T'as mangé le crambleu au pomme de mael.
date: 2026-08-24
keywords: [humain, diabetique, diabete, scp-207, soin, sucre]
abilities: ["Diabète"]
---

import ItemLink from '@site/src/components/docs/ItemLink';
import { GenerateLinksToAbilities } from '@site/src/components/docs/Ability.tsx';
import PatchNoteBanner from '@site/src/components/docs/PatchnoteBanner';

# Diabétique

<div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1rem' }}>
  <div>
    <span style={{ backgroundColor: '#707070', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase' }}>Personnel Humain</span>
  </div>
</div>

> **FR :** *"T'as mangé le crambleu au pomme de mael"*

> **EN :** *"Fucking type 1. 1"*

Le **Diabétique** est un rôle humain global qui modifie le métabolisme du joueur. Atteint d'une maladie chronique sévère, son corps transforme brutalement le sucre en hyperactivité mortelle. Il est contraint de trouver des soins médicaux rapidement et régulièrement sous peine de succomber à sa propre condition.

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

Étant un rôle global modifiant un humain, le Diabétique apparaît avec l'inventaire et le point d'apparition de sa classe humaine sous-jacente (Classe-D, Garde, Scientifique, etc.). 

Cependant, la Fondation (ou le hasard) lui accorde une chance de survie : à son apparition, le joueur reçoit automatiquement **1x <ItemLink name="Medkit" wikiId="First_Aid_Kit" />** dans son inventaire (ou au sol à ses pieds si son inventaire est déjà plein).

---

## Compétence

<GenerateLinksToAbilities abilities={frontMatter.abilities} />

<PatchNoteBanner name="Diabétique" tag="diabetique" />

---

## Trivia

- Référence au cramble aux pommes qu'on a mangé chez [Maël](https://fr.linkedin.com/in/ma%C3%ABl-coignard-14612129a).
- La description anglaise est une référence à un post [Reddit](https://i.redd.it/4k2vyhmx11w91.jpg)