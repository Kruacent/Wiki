---
sidebar_position: 1072
title: SCP-1072-KR (Low Gravity)
tags:
    - Grenade
description: Dispositif expérimental générant une poche de micro-gravité locale.
date: 2025-11-28
hide_table_of_contents: true
---

import ACSHeader from '@site/src/components/docs/ACSHeader.tsx'
import SCPImage from '@site/src/components/docs/SCPImage.tsx'
import LowGravItem from '@site/static/img/doc/sou.jpg'

<ACSHeader 
  item="SCP-1072-KR" 
  name="Low Gravity Grenade"
  ObjectClass="SAFE"
  Level="3"
  Disruption="VLAM"
  itemColor="#bdbdbd"
  credits={[
    { role: "Physique appliquée", name: "Dr. Omer" },
    { role: "Validation sécurité", name: "Dr. Patrique" },
  ]}
/>

# SCP-1072-KR : "Low Gravity Grenade"

<SCPImage
  src={LowGravItem}
  alt="Low Gravity Grenade"
  width="500px"
  caption="Prototype Mk-IV scellé en plomb"
  type="normal"
/>

## 1. Historique de Développement

**SCP-1072-KR** n'était pas destiné à être une arme. Initialement, le projet "Moonwalker" dirigé par le **Dr. Omer** visait à créer un outil de manutention pour déplacer les conteneurs lourds en Zone de Confinement.

La version actuelle (Mk-IV) est le résultat de plusieurs échecs critiques :
* **Mk-I :** Gravité inversée totale. Les sujets de test ont été projetés au plafond à 80 km/h. (Abandonné)
* **Mk-II :** Durée illimitée. Trois Classe-D flottent toujours dans l'ancienne salle de SCP-173 du Site-19.
* **Mk-IV (Actuelle) :** Version stabilisée sous forme de grenade à main, limitant l'effet à une zone de 10 mètres et une durée de 15 secondes.

### Localisation

En raison de son instabilité potentielle, cet objet est confiné dans la **Heavy Containment Zone (HCZ)**.
**Limite :** 2 Unités.

| Lieu | Chance d'apparition |
| :--- | :--- |
| **Salle de SCP-127** | 25 % |
| **Salle de SCP-939** | 25 % |
| **Laboratoire Micro-HID** | 25 % |

---

## 2. Mécanique de Distorsion

:::info Distinction Technique : MÈCHE STANDARD
Contrairement aux grenades d'impact récentes, SCP-1072-KR utilise un **détonateur à retardement classique (3 secondes)**. Elle peut rebondir sur les murs avant de s'activer.
:::

| Action Joueur | Résultat Technique | Effet en Jeu |
| :--- | :--- | :--- |
| **Lancer (Clic Gauche)** | **DÉTONATION** | Après 3 secondes, l'objet libère une impulsion d'énergie grise. Pas de dégâts explosifs. |
| **Effet de Zone** | **ALTERATION G** | Dans un rayon de 10m, la gravité terrestre est annulée et remplacée par une physique lunaire. |

### Caractéristiques de l'Anomalie
* **Rayon d'action :** 10 mètres autour du point d'impact.
* **Durée de l'effet :** 15 secondes.
* **Facteur G :** Réduit drastiquement. Permet des sauts de 3 à 4 mètres de haut et des chutes lentes.
* **Cibles :** Affecte TOUTES les entités (Alliés, Ennemis, SCPs).

---

## 3. Rapport d'Incident 1072-Delta

Extrait du journal de surveillance du **Chercheur Noé**.

> **< Début de l'enregistrement >**
>
> **Sujet :** Agent Romain (Sécurité) vs SCP-939
>
> **Chercheur Noé :** "L'Agent Romain est acculé dans la salle des munitions. SCP-939 bloque la sortie."
>
> *[Vidéo : Romain dégoupille une sphère grise et la jette à ses pieds. L'impulsion se déclenche.]*
>
> **Chercheur Noé :** "Activation confirmée. Regardez ça... Il vient de sauter par-dessus le SCP !"
>
> *[À l'écran, l'Agent Romain effectue un bond de 4 mètres, passant littéralement au-dessus de la bête qui mord dans le vide. Il retombe lentement derrière elle, comme une plume.]*
>
> **Agent Romain (Radio) :** "Yippee ! Je me sens léger Doc ! Extraction réussie."
>
> **Chercheur Noé :** "Notez cependant que pendant son 'vol', il était une cible facile. S'il y avait eu des tireurs, il aurait été un pigeon d'argile."
>
> **< Fin de l'enregistrement >**

---

## 4. Directive Tactique

:::warning AVIS DE MAËL
"C'est un outil de mobilité, pas d'attaque.
1.  **Fuite :** Utilisez-la pour sauter par-dessus les SCPs (173, 939) ou descendre les escaliers sans prendre de dégâts de chute.
2.  **Accès :** La faible gravité permet d'atteindre des endroits 'glitchy' ou en hauteur (haut des étagères, tuyaux) inaccessibles normalement.
3.  **Danger :** Une fois en l'air, vous êtes lent. Vous ne pouvez pas esquiver les balles. Ne l'utilisez pas face à une escouade armée."
:::