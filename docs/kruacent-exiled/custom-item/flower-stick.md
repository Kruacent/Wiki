---
sidebar_position: 1060
title: SCP-1060-KR (Flower Stick)
aliases: ["Flower Stick", "Flower Stick"]
tags:
    - Mêlée
description: It says "Flowery".
date: 2026-11-22
hide_table_of_contents: true
---

import ACSHeader from '@site/src/components/docs/ACSHeader.tsx'
import SCPImage from '@site/src/components/docs/SCPImage.tsx'
import ItemImage from '@site/static/img/doc/FlowerStick.jpg'

import Sons from '@site/src/components/docs/Sons';

<ACSHeader 
  item="SCP-1060-KR" 
  name="Flower Stick"
  ObjectClass="EUCLID"
  Level="3"
  Disruption="KENEQ"
  itemColor="#ec407a"
/>

# SCP-1060-KR : « Flower Stick »

<SCPImage
  src={ItemImage}
  alt="Le Flower Stick"
  width="500px"
  caption="Le Flower Stick."
  type="normal"
/>

Le **Flower Stick** est un Jailbird qui parle. Il fonctionne exactement comme un Jailbird normal, mais il prononce des répliques selon son usure :

| Action | Réplique jouée |
| :--- | :--- |
| **Inspecter** (en bon état) | « Here I come San Frandisco » |
| **Inspecter** (légère usure) | Réplique « glue » |
| **Inspecter** (usure moyenne) | Bruit de vent mystérieux |
| **Inspecter** (forte usure) | « Here I come San Frandisco », version faible |
| **Inspecter** (presque cassé) | « Goodbye » |
| **Attaque chargée** | Une réplique au hasard parmi 4 (« one more for the fans » s'il est presque cassé) |
| **Se casse** | « I'm falling » |

Son nom n'est pas affiché quand on le ramasse.

## Caractéristiques

| Paramètre | Valeur |
| :--- | :--- |
| **Description** | It says "Flowery" |
| **Objet de base** | Jailbird |
| **Poids** | 0,65 |
| **Rareté** | Exotique |

<Sons titre="Ce que dit le Flower Stick" sons={[
  { src: '/audio/flower-stick/san-frandisco.ogg', nom: "Here I come San Frandisco", quand: "Inspection, comme neuf" },
  { src: '/audio/flower-stick/glue.ogg', nom: "Glue", quand: "Inspection, un peu abîmé" },
  { src: '/audio/flower-stick/vent.ogg', nom: "Mysterious wind", quand: "Inspection, à moitié usé" },
  { src: '/audio/flower-stick/san-frandisco-faible.ogg', nom: "San Frandisco (fatigué)", quand: "Inspection, très usé" },
  { src: '/audio/flower-stick/goodbye.ogg', nom: "Goodbye", quand: "Inspection, presque cassé" },
  { src: '/audio/flower-stick/jarona-1.ogg', nom: "Jarona 1", quand: "Attaque chargée" },
  { src: '/audio/flower-stick/jarona-2.ogg', nom: "Jarona 2", quand: "Attaque chargée" },
  { src: '/audio/flower-stick/jarona-3.ogg', nom: "Jarona 3", quand: "Attaque chargée" },
  { src: '/audio/flower-stick/jarona-4.ogg', nom: "Jarona 4", quand: "Attaque chargée" },
  { src: '/audio/flower-stick/one-more.ogg', nom: "One more for the fans", quand: "Attaque chargée, presque cassé" },
  { src: '/audio/flower-stick/falling.ogg', nom: "I'm falling", quand: "Il se casse" },
]} />

## Obtention

Tout Jailbird qui apparaît dans un **casier d'armes expérimentales** devient un Flower Stick.

---

## Archives : le bâton qui parlait trop

À l'origine, le **Flower Stick** était un Jailbird tout à fait normal, rangé dans un casier d'armes expérimentales. Puis quelqu'un l'a oublié trois semaines dans la serre de Light, entre deux pots de fleurs et une radio qui passait des dessins animés en boucle.

Quand on l'a retrouvé, il avait **une voix**. Et une opinion sur tout.

Le bâton commente ses propres combats, s'encourage avant les attaques chargées, s'inquiète quand il s'abîme et fait ses adieux quand il se casse. Il a visiblement appris à parler en écoutant une fleur de dessin animé, et il en a gardé l'accent, l'enthousiasme et une passion inexpliquée pour une ville appelée « San Frandisco ».

Le service de recherche a essayé de le faire taire avec du ruban adhésif, puis avec un sac, puis avec une conférence sur le silence. Rien n'y fait.

---

## Transcription : interrogatoire de l'objet

> **Assistant Noé :** "Objet, déclinez votre identité."
>
> **Flower Stick :** "Here I come, San Frandisco !"
>
> **Assistant Noé :** "Ce n'est pas une réponse."
>
> **Flower Stick :** *[silence]*
>
> **Assistant Noé :** "Bon. Avez-vous conscience d'être une arme ?"
>
> **Flower Stick :** "Goodbye."
>
> **Assistant Noé :** "Il dit au revoir. Il est presque cassé. Je le note comme inutilisable."
>
> *[Alarme. SCP-939 entre dans la salle d'interrogatoire. Le Sergent Caedit arrache le bâton des mains de Noé.]*
>
> **Flower Stick :** "One more for the fans !"
>
> *[Une seule attaque chargée. Parfaite. SCP-939 s'effondre.]*
>
> **Flower Stick :** "I'm falling…"
>
> **Sgt. Caedit :** "Merci pour tout, l'ami."
>
> **Assistant Noé :** *[raye « inutilisable » sur son formulaire]* "Je vais devoir créer une nouvelle case."
>
> **Cpt. Romain :** "Caedit. Rapport."
>
> **Sgt. Caedit :** "SCP-939 neutralisé, Capitaine. Le bâton a dit au revoir."
>
> **Cpt. Romain :** "J'ai survécu à 939, à 096 et à une ogive nucléaire. Je n'ai jamais vu un bâton faire ses adieux. Mettez-lui une médaille."
>
> **Assistant Noé :** "Au bâton ou au Sergent ?"
>
> **Cpt. Romain :** "Au bâton. Caedit en a déjà trop."

:::warning L'avis de Maël
« Les objets qui parlent ne sont pas autorisés en réunion. La dernière fois, il a dit « goodbye » pendant ma présentation du budget. Tout le monde a applaudi. Je l'ai mal pris. »
:::
