---
sidebar_position: 1049
title: SCP-1049-KR (Molotov)
tags:
    - Grenade
    - Incendiaire
description: Grenade chimique incendiaire à réaction exponentielle.
date: 2025-11-28
hide_table_of_contents: true
---

import ACSHeader from '@site/src/components/docs/ACSHeader.tsx'
import SCPImage from '@site/src/components/docs/SCPImage.tsx'
import MolotovItem from '@site/static/img/doc/sou.jpg'
import MolotovZone from '@site/static/img/doc/sou.jpg'

<ACSHeader 
  item="SCP-1049-KR" 
  name="Cocktail Molotov"
  ObjectClass="SAFE"
  Level="4"
  Disruption="VLAM"
  itemColor="#ff3d00"
  credits={[
    { role: "Chimie Organique", name: "Dr. Omer" },
    { role: "Supervision éthique", name: "Dr. Patrique (Contournée)" },
  ]}
/>

# SCP-1049-KR : "Cocktail Molotov"

<SCPImage
  src={MolotovItem}
  alt="Bouteille Incendiaire"
  width="500px"
  caption="Contenant de l'agent chimique 'Hellfire'"
  type="normal"
/>

## 1. Archives Classifiées

L'existence de **SCP-1049-KR** est le résultat direct de l'initiative "Terre Brûlée" lancée secrètement par le **Dr. Omer** suite à la brèche de confinement massive de 2024.

**Genèse du Projet :**
Le Dr. Omer cherchait une arme capable de neutraliser les instances nécrotiques (SCP-049-2) qui submergeaient les équipes de sécurité. Les lance-flammes standards s'avéraient inefficaces : les corps morts ne ressentaient pas la douleur et continuaient d'avancer en brûlant.

Il a alors synthétisé le composé **X-77 "Hellfire"**. Contrairement à l'essence qui brûle *sur* la peau, le X-77 utilise les lipides et les protéines de la cible comme carburant. Plus la cible reste dans la zone, plus la réaction chimique s'emballe, augmentant la température de manière exponentielle jusqu'à la carbonisation totale.

**L'Incident du Secteur-12 :**
Le **Dr. Patrique**, initialement opposé à l'utilisation d'armes chimiques cruelles, a tenté de stopper la production. Cependant, lors d'une attaque surprise de SCP-049, un technicien a paniqué et lancé un prototype dans le couloir de ventilation.
Le rapport indique que la horde de zombies a été réduite en cendres en moins de 12 secondes. L'odeur de "barbecue chimique" a persisté pendant 3 semaines. Devant l'efficacité terrifiante du produit, le Dr. Patrique a validé sa distribution restreinte, ajoutant la mention : *"Que Dieu nous pardonne, mais ça marche."*

---

## 2. Description et Obtention

L'objet ressemble à une bouteille de spiritueux remplie d'un liquide visqueux orange fluo. Un simple chiffon imbibé sert de mèche, mais la réaction est hypergolique (s'enflamme à l'impact).

### Distribution Logistique

Le commandement a dispersé ces objets dans les zones à haut risque d'infection.
**Limite :** 2 Unités.

| Lieu | Chance d'apparition |
| :--- | :--- |
| **Armoires de la zone Entrance** | 75 % |
| **Armoires de LCZ** | 50 % |
| **Armoires de HCZ** | 50 % |
| **Salle GR-18 de LCZ** | 75 % |
| **Couloir à côté ascenseur de la Nuke** | 50 % |

---

## 3. Mécanique de Combustion

:::danger DANGER : IMPACT IMMÉDIAT
Le cocktail Molotov utilise un verre fragile. Il explose **dès qu'il touche une surface** (sol, mur, joueur). Ne tentez pas de le faire rebondir contre un mur, ou vous brûlerez avec.
:::

<SCPImage
  src={MolotovZone}
  alt="Zone de feu"
  width="500px"
  caption="Zone d'effet active (Rayon 5m)"
  type="normal"
/>

### Caractéristiques de la Zone
* **Durée :** 20 secondes.
* **Rayon :** 5 mètres.
* **Visuel :** Un soleil de forme cylindre de chaleur visible.

### Dégâts Progressifs
Le liquide colle à la peau et chauffe avec le temps. Plus vous restez longtemps, plus vous souffrez.
* **Seuil Initial :** 5 Dégâts / seconde.
* **Seuil Final (à 20s) :** 20 Dégâts / seconde.
* **Calcul :** Les dégâts augmentent linéairement à chaque demi-seconde.

### Efficacité Contre les Menaces
Le composé réagit différemment selon la cible :

| Cible | Effet | Dégâts |
| :--- | :--- | :--- |
| **Humains** | Brûlures sévères | De 5 à 20 DPS (Progressif) |
| **SCP (Classiques)** | Corrosion Acide | **~1.3% HP Max** / seconde |
| **Zombies (049-2)** | **COMBUSTION TOTALE** | **2.5x Dégâts** (Jusqu'à 50 DPS !) |

---

## 4. Rapport de Test Terrain

Archives de la FIM Epsilon-11.

> **< Début de l'enregistrement >**
>
> **Sergent "Pyro" (MTF) :** "Contact ! SCP-049 et une demi-douzaine de macchabées dans l'ascenseur Gate B !"
>
> **Dr. Omer (Radio) :** "Ne les laissez pas sortir. Utilisez le X-77."
>
> *[Le Sergent lance la bouteille. Le verre se brise au moment où les portes s'ouvrent.]*
> *[Hurlements inhumains. Le feu ne semble pas naturel, il est aveuglant.]*
>
> **Sergent "Pyro" :** "Cible principale touchée ! Regardez les zombies... ils fondent littéralement !"
>
> **Dr. Omer :** "Le mélange réagit aux tissus nécrosés. C'est une réaction exothermique violente. Et le Docteur ?"
>
> **Sergent "Pyro" :** "Il recule ! Il prend cher. Sa robe est en feu. Zone sécurisée."
>
> **< Fin de l'enregistrement >**

---

## 5. Directive Tactique

:::info AVIS DE MAËL
"C'est l'outil ultime de **contrôle de zone**.
1.  **Contre les SCPs :** Si un SCP campe dans une pièce (ex: 914 ou Salle SCP-079), lancez le Molotov. Les dégâts en pourcentage le forceront à sortir ou à mourir.
2.  **Contre les Hordes :** Si vous voyez des zombies, c'est votre meilleure arme. Ils disparaîtront en quelques secondes.
3.  **Attention :** Le feu brûle aussi les amis. Ne bloquez pas la seule sortie de votre équipe."
:::