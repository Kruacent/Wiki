---
sidebar_position: 1067
sidebar_class_name: sidebar-desactive
title: SCP-1067-KR (Shield Belt)
aliases: ["Shield Belt", "Shield Belt (Bouclier d'énergie)"]
tags:
    - Protection
description: Un bouclier d'énergie personnel qui repousse les projectiles mais empêche de tirer.
date: 2026-11-24
hide_table_of_contents: true
---

import Sons from '@site/src/components/docs/Sons';
import Statut from '@site/src/components/docs/Statut';

<Statut type="desactive">Obtensible uniquement via les commandes</Statut>

# SCP-1067-KR : « Bouclier d'énergie »

Le **Bouclier d'énergie** protège son porteur contre les **balles**, tant qu'il est dans l'inventaire. Une bulle grise entoure le joueur, et une jauge en bas de l'écran indique sa charge (*ShieldBelt Status : 120/220HP*), en vert quand il est actif et en rouge quand il est cassé.

## Fonctionnement

- **Absorption :** chaque balle reçue est retirée de la charge du bouclier au lieu des PV. Si la balle vide complètement le bouclier, ses dégâts passent quand même au joueur.
- Le bouclier ne protège **que des armes à feu** : ni le corps à corps, ni les explosions, ni les SCP.
- **Recharge :** +13 de charge par seconde, jusqu'à 220.
- **Rupture :** à 0 de charge, le bouclier casse et reste inactif **50 secondes**, puis redémarre avec **20** de charge.
- **SCP-2176 :** si une ampoule SCP-2176 se brise dans la salle, le bouclier casse.
- **Contrepartie :** tant que le bouclier est dans l'inventaire, il est **impossible de tirer**.
- La bulle rétrécit à mesure que la charge baisse. Le tireur voit un marqueur de touche quand le bouclier absorbe sa balle.

## Caractéristiques

| Paramètre | Valeur |
| :--- | :--- |
| **Nom (Français)** | Bouclier d'énergie |
| **Description (Français)** | Un bouclier d'énergie personnel conçu pour repousser les projectiles de tous les types d'armes à distance et les fragments de shrapnels, mais il est inefficace dans les combats en mêlée. Il empêche également son utilisateur d'utiliser des armes à distance. (marche dans l'inventaire) |
| **Objet de base** | Carte d'accès personnalisée |
| **Poids** | 0,65 |
| **Rareté** | Épique |
| **Charge maximale** | 220 |
| **Charge de départ** | 20 |
| **Recharge** | 13 par seconde |
| **Temps de rupture** | 50 secondes |

<Sons titre="Les sons du bouclier" sons={[
  { src: '/audio/shield-belt/absorbe-b.ogg', nom: "Absorbe un coup", quand: "Le bouclier encaisse" },
  { src: '/audio/shield-belt/absorbe-c.ogg', nom: "Absorbe un coup (2)", quand: "Le bouclier encaisse" },
  { src: '/audio/shield-belt/absorbe-d.ogg', nom: "Absorbe un coup (3)", quand: "Le bouclier encaisse" },
  { src: '/audio/shield-belt/casse-a.ogg', nom: "Bouclier brisé", quand: "Le bouclier tombe à zéro" },
  { src: '/audio/shield-belt/casse-c.ogg', nom: "Bouclier brisé (2)", quand: "Le bouclier tombe à zéro" },
  { src: '/audio/shield-belt/recharge.ogg', nom: "Recharge", quand: "Le bouclier revient" },
]} />

## Obtention

Aucun point d'apparition n'est défini pour cet objet dans la version actuelle.

---

## Note de la Fondation

Un générateur de champ porté à la ceinture qui dévie les projectiles entrants. Le champ bloque aussi les tirs sortants, ce qui en fait un équipement de survie et non de combat.
