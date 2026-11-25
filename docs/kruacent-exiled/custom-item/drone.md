---
sidebar_position: 1057
sidebar_class_name: sidebar-desactive
title: SCP-1057-KR (Drone)
aliases: ["Drone", "Drone"]
tags:
    - Reconnaissance
description: Drone de reconnaissance militaire (lâcher pour l'utiliser).
date: 2026-11-22
hide_table_of_contents: true
---

import ACSHeader from '@site/src/components/docs/ACSHeader.tsx'
import Statut from '@site/src/components/docs/Statut';

<Statut type="desactive">Obtensible uniquement via les commandes</Statut>

<ACSHeader 
  item="SCP-1057-KR" 
  name="Drone"
  ObjectClass="SAFE"
  Level="3"
  Disruption="VLAM"
  itemColor="#1e88e5"
/>

# SCP-1057-KR : « Drone »

Le **Drone** permet d'explorer à distance. On l'active en le **lâchant** (sans le lancer) : le joueur devient un minuscule drone volant, tandis qu'une copie de son corps reste immobile à l'endroit où il était. Lâcher à nouveau le drone (ou épuiser sa batterie) ramène le joueur dans son corps.

## Utilisation

| Commande | Effet |
| :--- | :--- |
| **Lâcher l'objet** | Démarre ou arrête le drone |
| **Avancer en regardant vers le haut ou le bas** | Monte ou descend |
| **S'accroupir** | Descend |

Pendant le vol :
- le joueur devient **minuscule** et n'est plus soumis à la gravité ;
- il ne peut **ni ouvrir de portes, ni ramasser, ni tirer, ni utiliser d'objet** (*"Le drone n'a pas de bras pour faire ça"*) ;
- ses capacités sont retirées, puis rendues à la fin du vol ;
- la batterie restante s'affiche à l'écran (en rouge sous 20 %).

## Le corps laissé sur place

- Les dégâts subis par le corps sont aussi infligés au joueur.
- Si le drone reçoit un coup mortel alors que le corps est encore en vie, le joueur revient dans son corps avec les PV du corps au lieu de mourir.
- Si le corps est tué, le prochain coup mortel tue vraiment le joueur.

:::warning Fin du vol
À la fin du vol, l'inventaire est recréé à partir du **type** de chaque objet : un objet personnalisé redevient l'objet de base correspondant. Le drone lui-même redevient donc une carte Janitor.
:::

## Caractéristiques

| Paramètre | Valeur |
| :--- | :--- |
| **Description (Français)** | Drone de reconnaissance militaire (lâcher pour l'utiliser) |
| **Description (Anglais)** | Military drone (drop to use) |
| **Objet de base** | Carte Janitor |
| **Poids** | 3 |
| **Rareté** | Basique |
| **Batterie** | Environ 40 secondes de vol |
| **Limite** | 1 |

## Localisation

| Lieu | Chance d'apparition |
| :--- | :--- |
| **Couloir en angle profond (HCZ)** | 25 % |
| **Couloir de l'incinérateur (HCZ)** | 25 % |
| **Sas de LCZ** | 25 % |

Le drone ne peut pas être activé pendant qu'une capacité à durée est active.

---

## Archives : le projet « Mouche »

Le **Drone** est né d'une plainte. Le Capitaine Romain en avait assez de perdre des éclaireurs à chaque coin de couloir de Heavy. Il a demandé « un moyen de regarder derrière une porte sans y laisser un soldat ».

Le Dr. Omer a mal lu la demande. Au lieu d'une caméra, il a construit un dispositif qui **rétrécit le pilote lui-même** et le transforme en petite machine volante, pendant que son corps reste planté là, immobile et sans défense.

Le premier essai a été un succès technique total : le Sergent Alex a survolé tout le couloir de SCP-939 sans être vu. Il est revenu à son corps pour découvrir que quelqu'un lui avait volé ses chaussures, sa carte d'accès et son repas.

---

## Rapport d'incident : « Le pilote absent »

> **Cpt. Romain :** "Dorian, rapport de reconnaissance ?"
>
> **Sgt. Dorian (drone) :** "Deux Chaos derrière la porte de l'armurerie, un SCP-049 dans le couloir sud. On peut passer par le nord."
>
> **Cpt. Romain :** "Parfait. Et votre corps, Sergent ?"
>
> **Sgt. Dorian (drone) :** "Il est à côté de Caedit, je lui ai demandé de le surveiller."
>
> *[Silence radio.]*
>
> **Sgt. Caedit :** "Dorian ? Je ne veux pas t'inquiéter, mais il y a un docteur en blouse avec un masque d'oiseau qui regarde ton corps très intensément."
>
> **Sgt. Dorian (drone) :** "J'arrive."
>
> **Sgt. Caedit :** "Il dit que tu es malade."

:::warning L'avis de Maël
« Le drone est désormais rangé sous clé, et seul l'état-major peut en sortir un. Trop de corps abandonnés dans les couloirs. Le service de nettoyage ne sait plus qui est mort et qui est juste en train de piloter. »
:::
