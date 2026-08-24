---
title: Ultra SCP-939
description: Tu sais où est tout le monde. Une variante de SCP-939 capable de traquer le nombre de proies par zone.
date: 2026-08-24
keywords: [scp, scp-939, ultra, radar, traque, zone, survivant, sensoriel]
---

import PatchNoteBanner from '@site/src/components/docs/PatchnoteBanner';
import SpawnImg from '@site/static/img/doc/facility/hcz/939-lab.png';

# Ultra SCP-939

<div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1rem' }}>
  <div>
    <span style={{ backgroundColor: '#FF0000', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase' }}>SCP-939</span>
  </div>
</div>

> **FR :** *"Tu sais où est tout le monde"*

> **EN :** *"You can sense where people are located"*

L'**Ultra SCP-939** est un rôle pour SCP-939. Doté de sens surdéveloppés dépassant de loin la simple perception auditive, ce prédateur est capable de ressentir la présence de ses proies peu importe la distance.

---

## Profil

| Paramètre | Valeur |
| :--- | :--- |
| **Points de vie** | 2700 HP |
| **Classe de base** | SCP-939 |
| **Conservation du rôle lors échappement** | Non |
| **Conservation du rôle lors décès** | Non |

---

## Apparition

<div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap', backgroundColor: 'var(--ifm-background-surface-color)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--ifm-color-emphasis-200)', marginTop: '1rem' }}>
  <img src={SpawnImg} alt="Zone de spawn" style={{ width: '440px', borderRadius: '8px', border: '1px solid var(--ifm-color-emphasis-300)' }} />
  <div>
    <strong style={{ fontSize: '1.1rem', color: 'var(--ifm-color-primary)' }}>Laboratoire de SCP-939</strong><br/>
    **Zone :** Heavy Containment Zone<br/>
  </div>
</div>

---

## Mécanique

L'atout de l'Ultra SCP-939 réside dans sa capacité de traque,  lui permettant de sentir les mouvements des humains.

* **Toutes les 60 secondes**, les sens du SCP s'actualisent pour scanner l'intégralité des zones.
* Le joueur reçoit un affichage visuel sur son écran.
* Cet affichage lui liste **exactement combien de joueurs humains vivants** se trouvent dans chaque zone de la carte (Light Containment, Heavy Containment, Entrance Zone, Surface, etc.).
* *Note : Les autres entités SCP ne déclenchent pas ce radar et ne faussent pas les chiffres.*

---

<PatchNoteBanner name="Ultra SCP-939" tag="ultra939" />