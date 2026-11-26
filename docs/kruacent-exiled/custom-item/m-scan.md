---
sidebar_position: 1063
title: SCP-1063-KR (M-Scan)
aliases: ["M-Scan", "M-Scan"]
tags:
    - Détection
description: Détecte les mouvements des personnes passant devant.
date: 2026-11-24
hide_table_of_contents: true
sidebar_custom_props:
  addedIn: "2.0.0"
---

import ACSHeader from '@site/src/components/docs/ACSHeader.tsx'
import SCPImage from '@site/src/components/docs/SCPImage.tsx'
import ItemImage from '@site/static/img/doc/MScan.jpg'
import SpawnRule from '@site/src/components/docs/SpawnRule';

<ACSHeader 
  item="SCP-1063-KR" 
  name="M-Scan"
  ObjectClass="SAFE"
  Level="2"
  Disruption="DARK"
  itemColor="#00acc1"
/>

# SCP-1063-KR : « M-Scan »

<SCPImage
  src={ItemImage}
  alt="Le M-Scan"
  width="500px"
  caption="Le M-Scan."
  type="normal"
/>

Le **M-Scan** est un détecteur de mouvement. On le pose en le **lâchant** au sol : il s'active pour **120 secondes**. Dès qu'un ennemi passe à moins de **3,5 mètres**, son propriétaire reçoit une notification avec le rôle détecté, dans la couleur de ce rôle (par exemple *M-SCAN: Classe-D*).

## Fonctionnement

- Après une détection, il lui faut quelques secondes avant de pouvoir signaler à nouveau.
- Seuls les joueurs d'un **autre camp** que le propriétaire sont détectés. SCP-106 n'est pas détecté quand il est sous le sol.
- Ramasser le capteur le désactive (*"Scanner récupéré."*). Le reposer relance une batterie complète de 120 secondes.
- Quand la batterie est vide, le capteur disparaît (*"Scanner: Batterie épuisée."*).

### Destruction
Le capteur est détruit (*"SCANNER DÉTRUIT"*) :
- par un tir qui le touche ou touche juste à côté ;
- par une attaque de SCP-049, une griffe de SCP-939, une téléportation de SCP-106 ou l'entrée en rage de SCP-096, à moins de **2 mètres** de lui.

## Caractéristiques

| Paramètre | Valeur |
| :--- | :--- |
| **Description (Français)** | Détecte les mouvements des personnes passant devant |
| **Description (Anglais)** | Detect movement |
| **Objet de base** | Lampe torche |
| **Poids** | 1,5 |
| **Rareté** | Bon |
| **Batterie** | 120 secondes |
| **Rayon de détection** | 3,5 mètres |
| **Limite** | 2 |

## Localisation

| Lieu | Chance d'apparition |
| :--- | :--- |
| **Salle GR-18 (LCZ)** | 25 % |
| **Confinement de SCP-127 (HCZ)** | 25 % |
| **Cafétéria (LCZ)** | 25 % |

<SpawnRule limit={2} lieux={3} />

## Conseils

- Posez-le dans un couloir de passage derrière vous pour savoir si l'on vous suit.

---

## Archives : le garde qui ne dort jamais

Le **M-Scan** est né d'un problème de planning. Pour surveiller tous les couloirs de Light pendant la nuit, il fallait quarante gardes. Le budget en payait douze. Maël a demandé une solution « qui ne réclame ni salaire, ni pause café, ni congés maladie ».

Le Dr. Omer a pris un détecteur de mouvement d'alarme de cuisine, l'a branché sur le réseau radio du Site et l'a mis dans un boîtier qui tient dans la main. On le pose par terre, et pendant deux minutes il surveille le passage : dès qu'un ennemi passe devant, son propriétaire reçoit une alerte avec le rôle de l'intrus.

Les SCP ont très vite compris le principe. Aujourd'hui, la plupart d'entre eux détruisent le capteur dès qu'ils le repèrent. Le Dr. Omer considère ça comme une preuve que l'objet fonctionne.

---

## Rapport d'incident : « M-SCAN: Classe-D »

> **Sgt. Alex :** "J'ai posé le M-Scan devant la cafétéria. Enfin, je crois que c'est la cafétéria. Si quelqu'un passe, on le saura."
>
> *[Bip. « M-SCAN: Classe-D ».]*
>
> **Sgt. Alex :** "Un Classe-D ! Je fonce."
>
> *[Bip. « M-SCAN: Classe-D ».]*
>
> **Sgt. Alex :** "Deux Classe-D."
>
> *[Bip. Bip. Bip. Bip.]*
>
> **Sgt. Alex :** "Capitaine, je crois que les cellules ont explosé."
>
> **Cpt. Romain :** "Combien ?"
>
> **Sgt. Alex :** "Le scanner a arrêté de compter."

:::warning L'avis de Maël
« Le M-Scan ne remplace pas un garde. Il remplace un garde qui dort. Ce qui, après analyse des plannings, revient au même. »
:::
