---
sidebar_position: 1059
title: SCP-1059-KR (Faraday Armor)
aliases: ["Faraday Armor", "Faraday Armor (Armure de Faraday)"]
tags:
    - Armure
description: T'es protégé des Teslas et tu prends 2 fois moins de dégats d'électricité !
date: 2026-11-22
hide_table_of_contents: true
sidebar_custom_props:
  addedIn: "2.2.0"
---

import ACSHeader from '@site/src/components/docs/ACSHeader.tsx'
import SCPImage from '@site/src/components/docs/SCPImage.tsx'
import ItemImage from '@site/static/img/doc/FaradayArmor.jpg'
import SpawnRule from '@site/src/components/docs/SpawnRule';

<ACSHeader 
  item="SCP-1059-KR" 
  name="Faraday Armor"
  ObjectClass="SAFE"
  Level="3"
  Disruption="VLAM"
  itemColor="#43a047"
/>

# SCP-1059-KR : « Armure de Faraday »

<SCPImage
  src={ItemImage}
  alt="L'armure de Faraday"
  width="500px"
  caption="L'armure de Faraday."
  type="normal"
/>

L'**Armure de Faraday** est une armure lourde qui protège de l'électricité tant qu'elle est portée :

- les **TESLA** ne se déclenchent pas pour son porteur, et leurs dégâts sont annulés
- les dégâts du **Micro H.I.D.** et du **3-X Particle Disruptor** sont divisés par **2**.

En contrepartie, elle est lourde : tant qu'elle est dans l'inventaire, le joueur subit un **ralentissement de 2**.

## Caractéristiques

| Paramètre | Valeur |
| :--- | :--- |
| **Description (Français)** | T'es protégé des Teslas et tu prends 2 fois moins de dégats d'électricité ! |
| **Description (Anglais)** | Tesla doesn't affect you ! And Electrical Damage is reduced 2 times ! |
| **Objet de base** | Armure lourde |
| **Poids** | 4 |
| **Rareté** | Épique |
| **Dégâts des Tesla** | 0 |
| **Micro H.I.D. / Particle Disruptor** | ÷ 2 |
| **Ralentissement** | 2, tant qu'elle est dans l'inventaire |
| **Limite** | 1 |

## Localisation

| Lieu | Chance d'apparition |
| :--- | :--- |
| **Confinement de SCP-079** | 70 % |

<SpawnRule limit={1} lieux={1} />

---

## Archives : la cage qui marche

Tout le monde connaît la cage de Faraday : une cage en métal qui protège ce qu'il y a dedans contre l'électricité. Le Dr. Patrique s'est demandé : « Et si la cage, c'était le soldat ? »

Il a tissé un maillage de cuivre dans une armure lourde, relié le tout à la terre par des chaînes qui traînent au sol, et l'a enfilée au Sergent Dorian. Ensuite, il l'a fait passer sous une porte Tesla. **La Tesla ne s'est même pas déclenchée.** Pour elle, Dorian n'existait pas.

Le seul défaut, c'est le poids. Le cuivre, les chaînes, la doublure : l'armure est si lourde que celui qui la porte avance comme un réfrigérateur en fin de vie. Les Micro-HID et les armes à particules font deux fois moins mal, mais on a largement le temps de les voir arriver.

---

## Rapport d'incident : « Le couloir Tesla »

> **Cpt. Romain :** "Les Chaos se sont retranchés derrière la Tesla du couloir. Personne ne peut passer."
>
> **Sgt. Dorian :** "Moi, si."
>
> *[Le Sergent Dorian, en armure de Faraday, avance lentement sous la Tesla. Elle reste silencieuse.]*
>
> **Soldat du Chaos :** "Pourquoi elle ne grille pas ?!"
>
> **Sgt. Dorian :** "Parce que je suis une cage."
>
> *[Trente secondes plus tard.]*
>
> **Sgt. Dorian :** "…J'arrive."
>
> *[Une minute plus tard.]*
>
> **Sgt. Dorian :** "J'arrive, j'ai dit."
>
> **Cpt. Romain :** "Dorian, les Chaos sont partis prendre un café."

:::warning L'avis de Maël
« L'armure de Faraday est rangée dans le confinement de SCP-079. Oui, à côté de l'IA qui contrôle toutes les portes électriques du Site. Je n'ai pas choisi l'emplacement. Je signe juste les décharges de responsabilité. »
:::
