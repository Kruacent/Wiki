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

import Statut from '@site/src/components/docs/Statut';

<Statut type="desactive">Obtensible uniquement via les commandes</Statut>

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

## Note de la Fondation

Le modèle de reconnaissance a été conçu pour les couloirs étroits du Site. Son pilote reste vulnérable pendant toute la mission. Retrouvez votre corps avant que quelqu'un d'autre ne le trouve.
