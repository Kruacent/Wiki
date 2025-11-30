---
sidebar_position: 1052
title: SCP-1052-KR (Impact Flash)
tags:
    - Grenade
description: Grenade aveuglante modifiée avec détonateur à impact immédiat.
date: 2025-11-28
hide_table_of_contents: true
---

import ACSHeader from '@site/src/components/docs/ACSHeader.tsx'
import SCPImage from '@site/src/components/docs/SCPImage.tsx'
import ImpactFlashItem from '@site/static/img/doc/sou.jpg'

<ACSHeader 
  item="SCP-1052-KR" 
  name="Impact Flash"
  ObjectClass="SAFE"
  Level="2"
  Disruption="VLAM"
  itemColor="#ffa726"
  credits={[
    { role: "Ingénerie tactique", name: "Dr. Patrique" },
    { role: "Validation balistique", name: "Dr. Omer" },
  ]}
/>

# SCP-1052-KR : "Impact Flash"

<SCPImage
  src={ImpactFlashItem}
  alt="Impact Flash"
  width="500px"
  caption="Unité SCP-1052-KR prête à l'emploi"
  type="normal"
/>

## 1. Description et Obtention

**SCP-1052-KR** est une variante tactique de la grenade aveuglante standard (M84 Stun Grenade), identifiée par un marqueur de goupille <span style={{color: '#ffa726', fontWeight: 'bold'}}>ORANGE</span>.

Le délai de détonation chimique (mèche) a été retiré par le **Dr. Patrique** au profit d'un détonateur cinétique sensible. Là où une flashbang classique laisse 3 secondes à l'ennemi pour se retourner, la **Impact Flash** explose à la milliseconde où elle heurte une surface solide, rendant toute réaction évasive biologiquement impossible pour la cible.

### Localisation

Cet équipement est stocké dans les armureries pour les interventions rapides.
**Limite :** 5 Unités.

| Lieu | Chance d'apparition |
| :--- | :--- |
| **Armurerie HCZ** | 50 % |
| **Armurerie LCZ** | 50 % |
| **Armurerie 049 (HCZ)** | 50 % |
| **Salle SCP-914 (LCZ)** | 2 % |

---

## 2. Manuel de Déploiement

:::danger Distinction Critique : ZÉRO DÉLAI
Cette grenade n'a **aucun rebond**. Elle ne peut pas être utilisée pour des tirs indirects (rebondir contre un mur pour aveugler le coin). Elle explose au premier contact.
:::

| Action Joueur | Résultat Technique | Effet en Jeu |
| :--- | :--- | :--- |
| **Clic Gauche (Lancer)** | **IMPACT** | La grenade voyage dans les airs. Au premier contact (Sol, Mur, Plafond, Joueur), elle détone. |
| **Effet Tactique** | **AVEUGLEMENT** | Flash blanc intense instantané. Aucune possibilité pour l'ennemi de se retourner à temps. |

### Caractéristiques
* **Type :** Grenade à Impact (Explode on Collision).
* **Délai de sécurité :** 3 secondes (Uniquement si elle ne touche rien en vol).
* **Base :** Grenade Flash standard.

---

## 3. Rapport de Test Terrain

Archives de l'Intervention E-11 "Blindside".

> **< Début de l'enregistrement >**
>
> **Dr. Omer (Observateur) :** "Capitaine Romain, vous avez des insurgés retranchés dans la salle des serveurs. Ils surveillent la porte. Une flash classique leur donnerait le temps de se cacher."
>
> **Capitaine Romain (MTF) :** "Bien reçu. J'engage avec le SCP-1052-KR."
>
> *[Le Capitaine entrouvre la porte et jette la grenade directement sur le torse du premier insurgé.]*
> *[Pas de bruit de rebond. Un 'CLAC' immédiat suivi d'une lumière aveuglante sature la caméra.]*
>
> **Insurgé (Paniqué) :** "MES YEUX ! CONTACT CONTACT !"
>
> **Capitaine Romain :** "Cibles neutralisées. Ils n'ont même pas levé leurs armes."
>
> **Dr. Omer :** "L'effet de surprise est absolu. Validation du prototype."
>
> **< Fin de l'enregistrement >**

---

## 4. Directive Tactique

:::info Note du Chercheur Noé
"Faites extrêmement attention aux cadres de portes et aux coéquipiers qui passent devant vous. Si vous lancez cette grenade et qu'elle touche le dos de votre collègue situé à 1 mètre de vous, vous serez tous les deux aveugles instantanément."
:::

:::warning AVIS DE MAËL
"C'est l'outil parfait pour contrer les **SCP-173** ou les campeurs d'ascenseurs. Lancez-la au sol dès que les portes s'ouvrent. L'explosion est immédiate, ce qui vous donne l'initiative du tir."
:::