---
sidebar_position: 1068
title: SCP-1068-KR (Wormhole Pistol)
aliases: ["Wormhole Pistol", "Wormhole Pistol (Pistolet TP)"]
tags:
    - Arme
description: Tire et POUF, tu change de position avec la cible.
date: 2026-11-24
hide_table_of_contents: true
sidebar_custom_props:
  addedIn: "2.2.1"
---

import ACSHeader from '@site/src/components/docs/ACSHeader.tsx'
import SCPImage from '@site/src/components/docs/SCPImage.tsx'
import ItemImage from '@site/static/img/doc/WormholePistol.jpg'
import SpawnRule from '@site/src/components/docs/SpawnRule';

<ACSHeader 
  item="SCP-1068-KR" 
  name="Wormhole Pistol"
  ObjectClass="EUCLID"
  Level="3"
  Disruption="KENEQ"
  itemColor="#e040fb"
/>

# SCP-1068-KR : « Pistolet TP »

<SCPImage
  src={ItemImage}
  alt="Le Pistolet TP"
  width="500px"
  caption="Le Pistolet TP."
  type="normal"
/>

Le **Wormhole Pistol** échange les positions : quand une de ses balles touche un joueur, le tireur et la cible échangent leur place. La balle n'inflige que **1** point de dégât.

L'échange n'a lieu que si le tireur **a les pieds au sol** au moment du tir, et si les deux joueurs sont vivants.

Après **2 tirs**, l'arme doit refroidir pendant **1 minute** : un message indique le temps restant (*« Tu dois attendre … secondes avant de pouvoir l'utiliser à nouveau »*).

## Caractéristiques

| Paramètre | Valeur |
| :--- | :--- |
| **Description (Français)** | Tire et POUF, tu change de position avec la cible |
| **Description (Anglais)** | Change position with the target you shot at, 'MERICA! |
| **Objet de base** | COM-18 |
| **Chargeur** | 2 balles |
| **Dégâts** | 1 |
| **Recharge** | 1 minute après 2 tirs |
| **Poids** | 1 |
| **Rareté** | Épique |
| **Limite** | 1 |

## Localisation

| Lieu | Chance d'apparition |
| :--- | :--- |
| **Serre (LCZ)** | 25 % |
| **Salle de l'ogive (HCZ)** | 25 % |
| **Confinement de SCP-939 (HCZ)** | 25 % |
| **Abri (Entrance Zone)** | 25 % |

<SpawnRule limit={1} lieux={4} />

## Conseils

- Tirez sur un ennemi bien protégé pour prendre sa place… et lui laisser la vôtre au milieu d'un danger.

---

## Archives : l'échange standard

Le **Pistolet TP** est le résultat d'une expérience ratée sur la [grenade de téléportation](./teleportation-grenade). Le Dr. Omer voulait une version « ciblée » qui envoie l'ennemi loin. Il a obtenu un pistolet qui **échange** les positions : quand la balle touche, le tireur et la cible prennent la place l'un de l'autre.

La balle elle-même ne fait presque rien, à peine une égratignure. C'est l'échange qui compte. Pour qu'il marche, le tireur doit avoir les pieds au sol au moment du tir, et les deux joueurs doivent être en vie. Le chargeur ne contient que deux balles.

Le département de physique a refusé de signer le rapport. Le département juridique a demandé qui était responsable quand deux personnes échangent leur place et qu'une seule tombe dans une fosse. Personne n'a répondu.

---

## Rapport d'incident : « Le mauvais échange »

> **Cpt. Romain :** "Dorian, il y a un Chaos bien retranché en haut de la Gate A."
>
> **Sgt. Dorian :** "Je m'en occupe."
>
> *[Le Sergent Dorian tire avec le Pistolet TP. Il se retrouve en haut de la Gate A, derrière le Chaos. Le Chaos se retrouve au milieu de l'escouade MTF.]*
>
> **Soldat du Chaos :** "…Bonjour ?"
>
> **Cpt. Romain :** "Bonjour."
>
> *[Plus tard.]*
>
> *[SCP-096 hurle. Il charge droit sur le Sergent Caedit, coincé au fond d'un cul-de-sac.]*
>
> **Sgt. Alex :** "Caedit ! Cours !"
>
> **Sgt. Caedit :** *[se retourne, vise au-dessus de l'épaule de 096, tire une seule fois]*
>
> *[La balle touche un soldat du Chaos posté à l'autre bout de la salle. Caedit se retrouve à sa place, en sécurité. Le soldat du Chaos se retrouve au fond du cul-de-sac, face à SCP-096.]*
>
> **Soldat du Chaos :** "…Pourquoi moi ?"
>
> **Sgt. Dorian :** "Il a fait ça exprès ?"
>
> **Sgt. Caedit :** "Évidemment. Enfin… je crois."

:::warning L'avis de Maël
« Le Pistolet TP n'est pas un jouet. Le Sergent Caedit est autorisé à s'en servir. Les autres, non. Je ne sais pas pourquoi ça marche quand c'est lui, et franchement je préfère ne pas savoir. »
:::
