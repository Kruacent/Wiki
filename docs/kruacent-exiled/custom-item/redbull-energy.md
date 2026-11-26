---
sidebar_position: 1066
title: SCP-1066-KR (RedBull™ Energy)
aliases: ["RedBull™ Energy", "RedBull™ Energy"]
tags:
    - Boisson
description: RedBull™ donne des ailes ! Attention à la chute !!!
date: 2026-11-24
hide_table_of_contents: true
---

import ACSHeader from '@site/src/components/docs/ACSHeader.tsx'
import SCPImage from '@site/src/components/docs/SCPImage.tsx'
import ItemImage from '@site/static/img/doc/RedBullEnergy.jpg'
import SpawnRule from '@site/src/components/docs/SpawnRule';

<ACSHeader 
  item="SCP-1066-KR" 
  name="RedBull™ Energy"
  ObjectClass="EUCLID"
  Level="3"
  Disruption="KENEQ"
  itemColor="#1565c0"
/>

# SCP-1066-KR : « RedBull™ Energy »

<SCPImage
  src={ItemImage}
  alt="La canette RedBull™ Energy"
  width="500px"
  caption="La canette RedBull™ Energy."
  type="normal"
/>

La **RedBull™ Energy** est une canette qui donne un énorme coup de boost pendant **20 secondes**, suivi d'un **crash** de 30 secondes.

## Phase 1 : le boost (20 secondes)

- Un effet de **SCP-207** très puissant et une grosse **réduction des dégâts**.
- Endurance toujours au maximum.
- Un petit soin continu (2,5 PV par seconde), jusqu'aux PV max.
- **Portes explosées :** toute porte destructible (pas les Gates) juste à côté de vous est ouverte et une grenade y explose aussitôt. Le buveur ne subit pas les dégâts de ces explosions, les autres joueurs si.

## Phase 2 : le crash (30 secondes)

Message *"Ton coeur va exploser !"*, puis :
- l'effet de SCP-207 est retiré et l'endurance tombe à 25 % ;
- le joueur est **assourdi, ralenti, commotionné et épuisé** pendant 30 secondes.

On ne peut pas boire une deuxième canette tant que les 50 secondes ne sont pas écoulées (*"Ton cœur ne supporterait pas une autre canette !"*).

## Caractéristiques

| Paramètre | Valeur |
| :--- | :--- |
| **Description (Français)** | RedBull™ donne des ailes ! Attention à la chute !!! |
| **Description (Anglais)** | RedBull™ gives you wings! |
| **Objet de base** | SCP-207 |
| **Poids** | 0,65 |
| **Rareté** | Basique |
| **Durée du boost** | 20 secondes |
| **Durée du crash** | 30 secondes |
| **Limite** | 2 |

## Localisation

| Lieu | Chance d'apparition |
| :--- | :--- |
| **Bureaux à l'étage (Entrance Zone)** | 25 % |
| **Serre (LCZ)** | 25 % |
| **Casiers médicaux d'Entrance Zone** | 20 % |
| **Casiers divers de LCZ** | 30 % |

<SpawnRule limit={2} lieux={4} />

## Conseils

- Courez vers les portes à ouvrir : elles sautent toutes seules sur votre passage.
- Mettez-vous à l'abri avant la fin des 20 secondes : pendant le crash, vous êtes une cible facile.

---

## Archives : la canette qui donne des ailes

La **RedBull™ Energy** a été trouvée dans un carton de livraison qui n'aurait jamais dû arriver au Site. L'adresse indiquait « *Salle de pause, Site-19, Niveau -3* ». Le livreur n'a jamais été retrouvé. Le carton contenait deux canettes.

Les analyses du Dr. Omer sont formelles : ce n'est pas une boisson énergisante. C'est **SCP-207 en canette**, avec de la caféine en plus, de la taurine en plus, et quelque chose que le spectromètre a refusé de nommer. Pendant vingt secondes, celui qui la boit court comme jamais, encaisse les coups, se soigne en continu et défonce les portes qu'il frôle. Ensuite, le cœur rend la monnaie : trente secondes de crash, sourd, lent et à bout de souffle.

Le Dr. Omer a demandé à la goûter « pour la science ». Il a traversé trois portes et un mur de la cafétéria, puis il a dormi deux jours.

---

## Rapport d'incident : « Les ailes »

> **Sgt. Caedit :** "C'est quoi cette canette ?"
>
> **Sgt. Dorian :** "Ne bois pas ça."
>
> **Sgt. Caedit :** *[boit]* "Ça a un goût de… OH."
>
> *[Le Sergent Caedit disparaît dans le couloir. Bruit de porte qui explose. Puis d'une autre. Puis d'une troisième.]*
>
> **Cpt. Romain :** "Où est-il allé ?"
>
> **Sgt. Alex :** "En Heavy, je crois. En ligne droite."
>
> *[Dix-neuf secondes plus tard, le Sergent Caedit revient en glissant. Il tient une Micro-HID, une carte O5 et le Protocole Secret. Il s'effondre pile dans l'ascenseur, au moment où les portes se ferment devant SCP-106.]*
>
> **Sgt. Caedit (essoufflé) :** "Capitaine… je n'entends plus rien… mais j'ai pris des trucs."
>
> **Sgt. Dorian :** *[ouvre son carnet, le referme]* "Il a fait l'armurerie, le confinement de 079 et l'ascenseur en vingt secondes. Il n'existe aucun chemin pour faire ça en vingt secondes."
>
> **Cpt. Romain :** "Et pourtant."

:::warning Le mémo de Maël
« Une canette par personne. Pas deux. Votre cœur ne supporterait pas une deuxième canette, et le service de réparation des portes non plus. »
:::

---

## Trivia

- L'item est une référence à la boisson énergisante de la marque [RedBull](https://fr.wikipedia.org/wiki/Red_Bull).