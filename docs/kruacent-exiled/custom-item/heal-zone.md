---
sidebar_position: 1051
title: SCP-1051-KR (Heal Zone)
tags:
    - Grenade
    - Soin
description: Grenade de dispersion bio-chimique pour soins de zone.
date: 2025-11-27
hide_table_of_contents: true
---

import ACSHeader from '@site/src/components/docs/ACSHeader.tsx'
import SCPImage from '@site/src/components/docs/SCPImage.tsx'
import HealZoneItem from '@site/static/img/doc/sou.jpg'
import HealZoneDetonated from '@site/static/img/doc/sou.jpg'

<ACSHeader 
  item="SCP-1051-KR" 
  name="Heal Zone"
  ObjectClass="SAFE"
  Level="2"
  Disruption="VLAM"
  itemColor="#66bb6a"
  credits={[
    { role: "Chimiste en chef", name: "Dr. Omer" },
    { role: "Supervision", name: "Dr. Patrique" },
  ]}
/>

# SCP-1051-KR : "Heal Zone"

<SCPImage
  src={HealZoneItem}
  alt="Heal zone"
  width="500px"
  caption="Heal zone disposé par terre"
  type="normal"
/>

## 1. Description et Obtention

**SCP-1051-KR** se présente sous la forme d'une grenade flash modifiée, peinte d'une bande <span style={{color: '#66bb6a', fontWeight: 'bold'}}>VERTE</span> distinctive.

Il ne s'agit pas d'un explosif conventionnel. Le **Dr. Omer** a remplacé la charge pyrotechnique par un composé gazeux régénérateur expérimental (le "bacta-gaz"). Lors de la détonation, l'objet libère un nuage dense qui accélère la mitose cellulaire, soignant instantanément les tissus organiques des sujets présents dans le rayon d'action.

### Localisation

Cet objet est largement distribué dans les zones de haute sécurité pour soutenir les équipes d'intervention.
**Limite :** 3 Unités.

| Lieu | Chance d'apparition |
| :--- | :--- |
| **Casier médical de HCZ** | 100 % |
| **Casier médical de LCZ** | 50 % |
| **Casier médical de Entrance** | 75 % |
| **Couloir du Micro H.I.D** | 75 % |
| **Couloir à côté ascenseur de la Nuke** | 50 % |

---

## 2. Manuel de Déploiement

:::danger Distinction Critique : IMPACT
Contrairement aux grenades frag ou flash classiques qui rebondissent, la Heal Zone est équipée d'un **détonateur à impact**. Elle s'active dès qu'elle touche une surface (sol, mur ou joueur).
:::

| Action Joueur | Résultat Technique | Effet en Jeu |
| :--- | :--- | :--- |
| **Clic Gauche (Lancer)** | **ACTIVATION** | La grenade est projetée. Elle explose **immédiatement** au contact du sol ou d'un mur. |
| **Effet de Zone** | **RÉGÉNÉRATION** | Crée une zone circulaire verte durable. Tous les joueurs (alliés) à l'intérieur reçoivent des soins continus. |

<SCPImage
  src={HealZoneDetonated}
  alt="Heal zone"
  width="500px"
  caption="La zone créer par SCP-1051-KR"
  type="normal"
/>

### Caractéristiques
* **Type :** Grenade à Impact (Explode on Collision).
* **Délai de mèche :** 5 secondes (Si lancée en l'air sans toucher d'obstacle).
* **Visuel :** Nuage de gaz vert persistant.
* **Cibles :** Soigne l'utilisateur et ses alliés.
* **Soins de :** 2 HP/s

---

## 3. Rapport de Test Terrain

Archives vidéo de l'Incident de Confinement 1051-Alpha.

> **< Début de l'enregistrement >**
>
> **Dr. Patrique (Radio) :** "Escouade Epsilon, rapport de situation ?"
>
> **Capitaine Romain (MTF) :** "Situation critique ! On est coincés au Checkpoint Heavy. Deux blessés graves, plus de kits de soins. On ne tiendra pas une autre vague de Chaos !"
>
> **Dr. Patrique :** "Utilisez le prototype 1051 que vous avez récupéré au Nuke Silo."
>
> *[On voit le Capitaine Romain dégoupiller la grenade verte et la jeter au sol, au centre de l'escouade.]*
> *[Détonation sourde. Un gaz émeraude remplit la pièce.]*
>
> **Soldat (Voix étouffée) :** "C'est... rafraîchissant. Mes saignements s'arrêtent ! Ma barre de vie remonte !"
>
> **Capitaine Romain :** "On est opérationnels ! Merci Doc. On contre-attaque !"
>
> **< Fin de l'enregistrement >**

---

## 4. Directive Tactique

:::info Note du Chercheur Noé
"N'essayez pas de faire des 'trickshots' ou des rebonds avec cette grenade. Si elle touche le cadre de la porte, elle explose sur le cadre de la porte. Jetez-la à vos pieds ou directement sur le groupe à soigner."
:::

:::warning AVIS DE MAËL
"Contrairement aux premiers prototypes, cette version finale est tactiquement sûre. Le gaz intègre des nano-marqueurs IFF (Identification Friend or Foe) qui reconnaissent votre faction.
**Conclusion :** Vous pouvez lancer cette grenade en plein milieu d'une mêlée. Elle soignera votre escouade tout en laissant vos ennemis se vider de leur sang."
:::