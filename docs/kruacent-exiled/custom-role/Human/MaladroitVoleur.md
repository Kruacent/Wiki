---
title: Maladroit Voleur
description: Fais attention à "tes" objets ! Un humain incapable de garder ses trouvailles bien en main.
date: 2026-08-24
image: /img/doc/teams/human.png
keywords: [humain, voleur, maladroit, thief, drop, objet]
abilities: ["Thief", "Mains De Beurre"]
sidebar_custom_props:
  addedIn: "2.0.0"
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

## Plainte officielle : « Mon badge a disparu »

*Déposée par le Manager Maël.*

> Ce matin, mon badge a disparu de ma poche alors que je discutais avec un Classe-D dans la même pièce que moi. Il était à cinq mètres. Il ne m'a pas touché.
>
> Une heure plus tard, le badge a été retrouvé par terre au milieu du couloir de Light. Le Classe-D, lui, a été vu en train de lâcher successivement un Medkit, une radio et une arme qui ne lui appartenaient pas.
>
> Je demande qu'on lui interdise l'accès aux bureaux. Et aux couloirs. Et aux salles.

---

<PatchNoteBanner name="Maladroit Voleur" tag="maladroitvoleur" />
