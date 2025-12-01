---
title: Le Diabétique
description: T'as mangé le crambleu au pomme de mael
date: 2025-12-01
hide_table_of_contents: true
---

import RoleProfile from '@site/src/components/docs/RoleProfile.tsx';
import AbilityLoader from '@site/src/components/docs/AbilityLoader.tsx';
import StatusEffect from '@site/src/components/docs/StatusEffect.tsx';

<RoleProfile 
  name="Diabétique" 
  type="human"
  description="T'as mangé le crambleu au pomme de mael"
  hp={100}
  roleColor="rgba(255, 255, 0, 1)"
  scale={1.0} 
  spawnLocation="Spawn de la classe de base"
  keepRoleOnDeath={false}
  keepRoleOnChangingRole={false}
  inventory={['Inventaire de la Classe de base']}
/>

## État de Santé

Ce rôle transforme votre barre de vie en fuel.

<AbilityLoader id="Crambleux" />

<StatusEffect 
  name="SCP-207" 
  type="buff" 
  intensity="x1 (Permanent)"
  description="Vous permet de distancer n'importe quel humain ou SCP, mais vous tue à petit feu si vous ne vous soignez pas." 
/>

---

## Survie

:::warning GESTION DES SOINS
Votre priorité absolue n'est pas de trouver une arme, mais de trouver des **Soins**.
* **SCP-500 :** Ne retire **PAS** votre diabète.
:::