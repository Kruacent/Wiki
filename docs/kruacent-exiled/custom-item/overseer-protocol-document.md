---
sidebar_position: 1064
title: SCP-1064-KR (Protocole Secret)
aliases: ["Protocole Secret", "Protocole Secret (Overseer Protocol Document)"]
tags:
    - Objectif
description: Tu as besoin de t'echaper avec cet objet pour gagner un avantage.
date: 2026-11-24
hide_table_of_contents: true
---

import ACSHeader from '@site/src/components/docs/ACSHeader.tsx'
import SCPImage from '@site/src/components/docs/SCPImage.tsx'
import ItemImage from '@site/static/img/doc/O5ProtocolDocument.jpg'
import SpawnRule from '@site/src/components/docs/SpawnRule';

<ACSHeader 
  item="SCP-1064-KR" 
  name="Protocole Secret"
  ObjectClass="SAFE"
  Level="5"
  Disruption="VLAM"
  itemColor="#d32f2f"
/>

# SCP-1064-KR : « Protocole Secret »

<SCPImage
  src={ItemImage}
  alt="Le Protocole Secret"
  width="500px"
  caption="Le Protocole Secret."
  type="normal"
/>

Le **Protocole Secret** est un document qui ressemble à une carte d'accès rouge. Il n'a qu'un usage : **s'échapper de la facilité en l'ayant dans son inventaire**. Au moment de l'évasion, le document est détruit et l'équipe du joueur gagne **une vague de renforts supplémentaire**.

L'équipe qui gagne la vague dépend du rôle du joueur au moment de l'évasion : un Classe-D fait gagner l'Insurrection du Chaos, un Scientifique fait gagner les MTF.

## Caractéristiques

| Paramètre | Valeur |
| :--- | :--- |
| **Nom (Français)** | Protocole Secret |
| **Description (Français)** | Tu as besoin de t'echaper avec cet objet pour gagner un avantage |
| **Description (Anglais)** | You need to escape with this item to get an advantage |
| **Objet de base** | Carte d'accès personnalisée |
| **Poids** | 0,65 |
| **Rareté** | Exotique |
| **Effet** | +1 vague de renforts pour l'équipe |
| **Limite** | 1 |

## Localisation

| Lieu | Chance d'apparition |
| :--- | :--- |
| **Confinement de SCP-079** | 100 % |

<SpawnRule limit={1} lieux={1} />

---

## Archives : le dossier rouge

Personne ne sait exactement ce que contient le **Protocole Secret**. Le dossier porte le sceau du Conseil O5, une étiquette « *ProtocolDocument* » et un avertissement en lettres capitales : « NE PAS SORTIR DU SITE ».

Évidemment, tout le monde veut le sortir du Site.

Ce qu'on sait, c'est ce qui se passe quand quelqu'un s'échappe avec : son camp reçoit **une vague de renforts supplémentaire**. Les MTF pensent que le dossier contient des codes d'urgence pour appeler des hélicoptères. Le Chaos pense qu'il contient des preuves pour faire chanter la Fondation. L'Assistant Noé pense qu'il contient la recette secrète du café de la salle de pause, et refuse d'en démordre.

Le dossier est rangé dans le confinement de SCP-079. L'IA a déjà essayé trois fois de l'ouvrir.

---

## Transcription : la réunion des O5

> **O5-█ :** "Le document a quitté le Site hier soir. Par la sortie des Classe-D."
>
> **Maël :** "Avec tout mon respect, ce n'est pas ma faute. Il était sous clé."
>
> **O5-█ :** "Qui l'a sorti ?"
>
> **Maël :** "Un Classe-D. Il dit l'avoir pris parce qu'il était rouge et qu'il aime le rouge."
>
> **O5-█ :** "Et ensuite ?"
>
> **Maël :** "Ensuite, l'Insurrection du Chaos a reçu des renforts. Beaucoup de renforts."
>
> **O5-█ :** "Monsieur Maël. Que contient ce dossier, selon vous ?"
>
> **Maël :** "Honnêtement ? Je l'ai ouvert une fois. Il y avait un menu de pizzeria et un numéro de téléphone."
>
> **O5-█ :** *[silence]* "C'est le bon numéro."
>
> *[Plus tard, dans le couloir.]*
>
> **Cpt. Romain :** "Maël. Si un Classe-D sort ce dossier et que le Chaos reçoit des renforts, c'est mon escouade qui les affronte."
>
> **Maël :** "Je sais, Capitaine."
>
> **Cpt. Romain :** "Alors la prochaine fois, c'est nous qui le sortons."
>
> **Maël :** "Si vous le sortez, Capitaine, c'est vous qui recevez des renforts."
>
> **Cpt. Romain :** "C'est exactement mon idée."

:::warning L'avis de Maël
« Si vous trouvez le Protocole Secret, ne le lisez pas, ne le photocopiez pas, et surtout ne commandez rien avec. Remettez-le à la sortie la plus proche. Du bon côté. »
:::
