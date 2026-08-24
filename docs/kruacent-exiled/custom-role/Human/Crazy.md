---
title: Fou de la facilité
description: Un humain instable souffrant de crises de démence régulières aux effets imprévisibles.
date: 2026-08-24
keywords: [humain, fou, crazy, folie, hallucination]
---

import ItemLink from '@site/src/components/docs/ItemLink';
import PatchNoteBanner from '@site/src/components/docs/PatchnoteBanner';

# Fou de la facilité

<div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1rem' }}>
  <div>
    <span style={{ backgroundColor: '#707070', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase' }}>Personnel Humain</span>
  </div>
</div>

> **FR :** *"Je pense que le traitement que t'as eu à la fondation t'as pas aidé"*

> **EN :** *"Crazy? I Was Crazy Once. They Locked Me In A Room. A Rubber Room. A Rubber Room With Rats. And Rats Make Me Crazy"*

Le **Fou de la facilité** est un rôle humain global qui altère la santé mentale du joueur. Totalement traumatisé par son séjour au sein de la Fondation, il est sujet à des crises de folie soudaines et incontrôlables qui peuvent se manifester sous la forme de tics physiques ou d'hallucinations intenses.

---

## Profil

| Paramètre | Valeur |
| :--- | :--- |
| **Points de vie** | 100 HP |
| **Morphologie** | 1.0x (Standard) |
| **Conservation du rôle lors échappement** | Non |
| **Conservation du rôle lors décès** | Non |

---

## Inventaire et Apparition

Étant un rôle global modifiant un humain, le Fou de la Facilité apparaît avec l'inventaire et le point d'apparition de sa classe humaine sous-jacente (Classe-D, Scientifique, etc.), sans modification d'équipement.

---

## Mécaniques détaillées

Toutes les **3 à 5 minutes**, le joueur subit obligatoirement une crise de folie. Le jeu tire au sort un comportement parmi 4 possibilités. 
Certains événements ont plus de chances de se produire que d'autres :

| Comportement | Probabilité | Description de la crise |
| :--- | :--- | :--- |
| **Sursaut** | **33%** | Le joueur est forcé de sauter de manière incontrôlable. |
| **Hallucination auditive** | **33%** | Le joueur entend le bruit du bouclier de SCP-173 qui se brise. Simultanément, tous les autres joueurs aux alentours entendent des faux tirs provenant de la position du fou. <br/> <audio controls src={require('@site/static/sound/scp/173_Hume_Shield_Break.mp3').default} style={{ width: '100%', height: '30px', marginTop: '10px' }}></audio> |
| **Hallucination visuelle** | **22%** | Un faux SCP aléatoire apparaît juste derrière le joueur avec un bruit d'arme à feu, avant de disparaître 2 secondes plus tard. |
| **Crise de panique** | **11%** | Le joueur perd le contrôle de sa vision. Sa caméra se met à trembler violemment et à tourner dans tous les sens pendant **15 secondes**. |

---

<PatchNoteBanner name="Fou de la facilité" tag="crazy" />

---

## Trivia

- La description anglaise est un copier-coller de la *copypasta* Internet : *"Crazy? I was crazy once..."* (Fou ? J'étais fou autrefois. Ils m'ont enfermé dans une pièce. Une pièce en caoutchouc. Une pièce en caoutchouc avec des rats. Et les rats me rendent fou).