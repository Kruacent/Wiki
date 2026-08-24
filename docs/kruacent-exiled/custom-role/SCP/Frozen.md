---
title: Frozen
description: Au lieu de chier tu poses un SCP-244. Tué quelqu'un qui est en hypothermie donne du shield.
date: 2026-08-24
keywords: [scp, scp-173, glace, frozen, scp-244, hypothermie, hume shield, tantrum, flaque]
---

import ItemLink from '@site/src/components/docs/ItemLink';
import SpawnImg from '@site/static/img/doc/facility/hcz/173-cell-inside.png';
import PatchNoteBanner from '@site/src/components/docs/PatchnoteBanner';

# SCP-173 Frozen

<div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1rem' }}>
  <div>
    <span style={{ backgroundColor: '#FF0000', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase' }}>SCP-173</span>
  </div>
</div>

> **FR :** *"Au lieu de chier tu poses un SCP-244. Tué quelqu'un qui est en hypothermie donne du shield (dans le jeu hein)"*

> **EN :** *"Instead of Tantrum you drop a SCP-244. Killing anyone with hypothermia gives Hume Shield"*

Le **SCP-173 Glacé** est un rôle qui a troqué ses habituelles flaques organique (*la merde*) contre la capacité de générer des tempêtes de givre.

---

## Profil

| Paramètre | Valeur |
| :--- | :--- |
| **Points de vie** | 4500 HP |
| **Classe de base** | SCP-173 |
| **Conservation du rôle lors échappement** | Non |
| **Conservation du rôle lors décès** | Non |

---

## Apparition

<div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap', backgroundColor: 'var(--ifm-background-surface-color)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--ifm-color-emphasis-200)', marginTop: '1rem' }}>
  <img src={SpawnImg} alt="Zone de spawn" style={{ width: '440px', borderRadius: '8px', border: '1px solid var(--ifm-color-emphasis-300)' }} />
  <div>
    <strong style={{ fontSize: '1.1rem', color: 'var(--ifm-color-primary)' }}>Salle de 173</strong><br/>
    **Zone :** Heavy Containment Zone<br/>
  </div>
</div>

---

## Mécaniques

Le gameplay du SCP-173 Frozen tourne entièrement autour ddu froid extrême et sa capacité à attirer ses proies.

### 1. Tempête Artificielle
Lorsque le joueur utilise sa compétence pour poser une flaque de merde, il ne crée pas de merde. À la place, la compétence fait apparaître un **<ItemLink name="SCP-244" wikiId="SCP-244" />** à l'endroit ciblé.
* Ce vase génère immédiatement un brouillard qui gèle l'environnement et inflige l'effet de statut *Hypothermie* aux joueurs proches, brouillant leur vision et leur précision.
* Le vase se détruit automatiquement de lui-même à la fin de la durée d'une flaque classique.

### 2. Kill Thermique
Le froid permet de régénérer l'armure. Si le SCP-173 Frozen parvient à tuer un joueur se trouvant **à l'intérieur de la zone de froid**, le SCP gagne **+400 points de Hume Shield** (cependant, sans pouvoir dépasser sa jauge maximale autorisée).

---

<PatchNoteBanner name="SCP-173 Frozen" tag="frozen173" />