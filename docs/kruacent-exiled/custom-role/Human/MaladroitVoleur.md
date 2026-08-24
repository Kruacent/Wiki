---
title: Maladroit Voleur
description: Fais attention à "tes" objets ! Un humain incapable de garder ses trouvailles bien en main.
date: 2026-08-24
image: /img/doc/teams/human.png
keywords: [humain, voleur, maladroit, thief, drop, objet]
abilities: ["Thief", "Mains de beurre"]
---

import ItemLink from '@site/src/components/docs/ItemLink';
import { GenerateLinksToAbilities } from '@site/src/components/docs/Ability.tsx';
import PatchNoteBanner from '@site/src/components/docs/PatchnoteBanner';

# Maladroit Voleur

<div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1rem' }}>
  <div>
    <span style={{ backgroundColor: '#707070', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase' }}>Personnel Humain</span>
  </div>
</div>

> **FR :** *"Fais attention à "tes" objets !"*

> **EN :** *"Be careful of "your" items!"*

Le **Maladroit Voleur** (ou *Butter Finger Thief*) est un rôle humain global qui affecte grandement la fiabilité du joueur. Connu pour dérober tout ce qui lui passe sous la main, il souffre cependant d'un cruel manque de dextérité.

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

Étant un rôle global modifiant un humain, le Maladroit Voleur apparaît avec l'inventaire et le point d'apparition de sa classe humaine sous-jacente (Classe-D, Scientifique, etc.), sans modification d'équipement.

---

## Compétences et Mécaniques

Ce rôle est doté de mécaniques uniques le poussant à voler, mais aussi à perdre ce qu'il tient :

<GenerateLinksToAbilities abilities={frontMatter.abilities} />

---

<PatchNoteBanner name="Maladroit Voleur" tag="maladroitvoleur" />