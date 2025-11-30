---
sidebar_position: 1053
title: SCP-1053-KR (Proximity Mine)
tags:
    - Piège
description: Mine antipersonnel.
date: 2025-11-28
hide_table_of_contents: true
---

import ACSHeader from '@site/src/components/docs/ACSHeader.tsx'
import SCPImage from '@site/src/components/docs/SCPImage.tsx'
import MineItem from '@site/static/img/doc/sou.jpg'

<ACSHeader 
  item="SCP-1053-KR" 
  name="Quantum Mine"
  ObjectClass="SAFE"
  Level="3"
  Disruption="VLAM"
  itemColor="#ffeb3b"
  credits={[
    { role: "Initiateur du projet", name: "Dr. Omer" },
    { role: "Finalisation", name: "Dr. Patrique" },
  ]}
/>

# SCP-1053-KR : "Quantum Mine"

<SCPImage
  src={MineItem}
  alt="Mine deployed"
  width="500px"
  caption="La mine 1053 en phase d'armement"
  type="normal"
/>

## 1. Historique de Développement (Lore)

Le projet 1053 est tristement célèbre au sein du département R&D pour ses phases de développement chaotiques.

**Phase 1 (L'Échec du Dr. Omer) :**
Le **Dr. Omer** cherchait à créer une mine indétectable utilisant des capteurs sismiques ultra-sensibles. Le résultat fut catastrophique. Les prototypes Mk-I et Mk-II souffraient d'une zone de détection aberrante :
* **Problème Vertical :** La mine détectait les battements de cœur sur une colonne de **500 mètres de hauteur**. Une mine posée en *Heavy Containment* explosait si quelqu'un marchait au même endroit 3 étages plus haut en *Entrance Zone*.
* **Problème Souterrain :** Elle détectait les vibrations à travers le béton armé, tuant les techniciens travaillant à l'étage du dessous.

Face à l'incompréhension technique et après avoir accidentellement détruit la salle de pause du Site-19 (c'est pour cela qu'il n'est plus dans le SCP:Secret Laboratory) (située 400m au-dessus du labo), le Dr. Omer a officiellement abandonné le projet, le qualifiant de *"cauchemar physique impossible à calibrer"*.

**Phase 2 (La Solution Quantique du Dr. Patrique) :**
Le **Dr. Patrique** a repris les travaux en changeant radicalement d'approche. Au lieu de capteurs physiques, il a intégré un **Déclencheur d'État Quantique**. La mine ne "sent" pas la cible, elle projette un cylindre virtuel de réalité. L'explosion ne se déclenche que si de la matière pénètre *physiquement* dans ce cylindre mathématique précis, ignorant totalement les murs, les plafonds et les vibrations distantes.

---

## 2. Manuel de Déploiement

L'objet est camouflé sous la forme d'une **Carte d'accès Jaune (Janitor)** pour tromper l'ennemi.

| Action Joueur | Résultat Technique | Effet en Jeu |
| :--- | :--- | :--- |
| **Touche "DROP"** | **DÉPLOIEMENT** | La mine est posée au sol. Elle entre en phase d'armement. |
| **Délai d'armement** | **10 SECONDES** | Pendant ce temps, la mine est inoffensive. Des messages vous préviennent du décompte. |
| **État Actif** | **KILL ZONE** | Une fois armée, tout contact déclenche une explosion immédiate. |

### Caractéristiques de Détection
* **Rayon :** 0.7 mètre (très précis, il faut marcher dessus).
* **Hauteur :** 3 mètres (détecte les sauts).
* **Déclencheurs :** Joueurs.
* **Dégâts :** Identiques à une Grenade à bout portant.

---

## 3. Rapport de Test Terrain

Archives de sécurité du Site-19.

> **< Début de l'enregistrement >**
>
> **Dr. Patrique :** "Le prototype est actif devant l'ascenseur Gate A. Armement complet."
>
> **Agent de Sécurité (Radio) :** "Docteur, un Chaos Insurgent arrive par l'ascenseur !"
>
> **Dr. Patrique :** "Observez. Il va voir une carte d'accès jaune au sol. La cupidité humaine est une constante universelle."
>
> *[L'ascenseur s'ouvre. Le Chaos Insurgent voit la carte, court vers elle pour la ramasser.]*
> *[Dès que son pied entre dans le rayon de 0.7m, la mine détone instantanément. La cible est vaporisée.]*
>
> **Dr. Patrique :** "Fonctionnement nominal. Plus de détection à travers le plafond. Omer va être jaloux."
>
> **< Fin de l'enregistrement >**

---

## 4. Directive Tactique

:::danger DANGER : FRIENDLY FIRE
La mine ne fait **aucune distinction** si le le tir allié est activé. Si vous ou vos alliés marchez dessus, elle explosera. Communiquez la position des mines à votre équipe !
:::