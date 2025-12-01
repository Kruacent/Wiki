---
title: Paper
description: Une anomalie SCP plate comme une feuille de papier.
date: 2025-12-01
hide_table_of_contents: true
---

import RoleProfile from '@site/src/components/docs/RoleProfile.tsx';
import AbilityLoader from '@site/src/components/docs/AbilityLoader.tsx';

<RoleProfile 
  name="Paper" 
  type="scp"
  description="Uh oh. Paper jam."
  hp="Variable (Selon le SCP)"
  roleColor="rgba(255, 255, 255, 1)"
  scale={{ x: 0.1, y: 1, z: 1 }} 
  spawnLocation="Spawn de base du SCP"
  keepRoleOnDeath={false}
  keepRoleOnChangingRole={false}
  inventory={[]}
/>

## Anomalie 2D

Ce rôle transforme un SCP terrifiant en une version "Cartoon" plate.

<AbilityLoader id="PaperJam" />