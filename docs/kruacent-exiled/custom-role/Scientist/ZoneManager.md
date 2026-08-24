---
title: Zone Manager
description: Incroyable tu peux avoir une promotion alors fais ton boulot et ouvre tous ces checkpoints et tu pourras sortir d'ici!
date: 2026-08-24
keywords: [scientifique, zone manager, manager, checkpoint, carte, upgrade, promotion]
---

import { GenerateLinksToAbilities } from '@site/src/components/docs/Ability.tsx';
import ItemLink from '@site/src/components/docs/ItemLink';
import PatchNoteBanner from '@site/src/components/docs/PatchnoteBanner';
import SpawnImg from '@site/static/img/doc/facility/hcz/127-lab.png';

import LczHczImage from '@site/static/img/doc/facility/lcz/lcz-hcz-checkpoint.png';
import EzHczImage from '@site/static/img/doc/facility/entrance/ez-hcz-checkpoint.png';

# Zone Manager

<div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1rem' }}>
  <div>
    <span style={{ backgroundColor: '#FFFF7C', color: 'black', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase' }}>Personnel Scientifique</span>
  </div>
</div>

> **FR :** *"Incroyable tu peux avoir une promotion alors fais ton boulot et ouvre tous ces checkpoints et tu pourras sortir d'ici!"*

> **EN :** *"Open all of the checkpoint to get a better card!"*

Le **Zone Manager** est un rôle scientifique doté de responsabilités. Plutôt que de fuir, il doit accomplir sa mission de supervision en vérifiant les checkpoint de la facilité. S'il accomplit son devoir avec succès, on lui accordera une promotion inestimable pour garantir sa survie.

---

## Profil

| Paramètre | Valeur |
| :--- | :--- |
| **Points de vie** | 100 HP |
| **Morphologie** | 1.0x (Standard) |
| **Conservation du rôle lors échappement** | Non |
| **Conservation du rôle lors décès** | Non |

---

## Apparition

<div style={{ backgroundColor: 'var(--ifm-background-surface-color)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--ifm-color-emphasis-200)', marginTop: '1rem' }}>
  
  <div style={{ marginBottom: '1rem' }}>
    <strong style={{ fontSize: '1.1rem', color: 'var(--ifm-color-primary)' }}>Laboratoire de <ItemLink name="SCP-127" wikiId="SCP-127" /></strong><br/>
    **Zone :** Heavy Containment Zone
  </div>

  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
    <img src={SpawnImg} alt="Salle de conférence" style={{ width: '100%', borderRadius: '6px', border: '1px solid var(--ifm-color-emphasis-300)' }} />
  </div>

</div>

---

## Inventaire

Son inventaire est un peu différent :

| Équipement | Détails et Quantité |
| :--- | :--- |
| <ItemLink name="Carte de Zone Manager" wikiId="Keycard" /> | 1x |
| <ItemLink name="Medkit" wikiId="First_Aid_Kit" /> | 1x |
| <ItemLink name="Adrénaline" wikiId="Adrenaline" /> | 1x |

---

## Objectif : La Promotion

La survie du Zone Manager repose sur un objectif d'exploration bien précis qui récompensera sa prise de risque.

Votre Mission
Pour obtenir sa promotion, le joueur doit interagir manuellement avec les **4 Checkpoints** majeurs du complexe. 

| Checkpoint | Zone de transition | Aperçu visuel |
| :--- | :--- | :--- |
| **LCZ / HCZ A** | Light Containment ➔ Heavy Containment | <img src={LczHczImage} width="180" style={{ borderRadius: '5px' }} alt="LCZ A" /> |
| **LCZ / HCZ B** | Light Containment ➔ Heavy Containment | <img src={LczHczImage} width="180" style={{ borderRadius: '5px' }} alt="LCZ B" /> |
| **EZ / HCZ A** | Entrance Zone ➔ Heavy Containment | <img src={EzHczImage} width="180" style={{ borderRadius: '5px' }} alt="EZ A" /> |
| **EZ / HCZ B** | Entrance Zone ➔ Heavy Containment | <img src={EzHczImage} width="180" style={{ borderRadius: '5px' }} alt="EZ B" /> |

<br/>

> Dès que le dernier checkpoint est ouvert, la <ItemLink name="Carte d'accès Zone Manager" wikiId="Keycard" /> présente dans l'inventaire est instantanément **détruite** et remplacée par une **<ItemLink name="Carte d'accès Facility Manager" wikiId="Keycard" />**, lui ouvrant toutes les portes vers la liberté !

---

<PatchNoteBanner name="Zone Manager" tag="zonemanager" />