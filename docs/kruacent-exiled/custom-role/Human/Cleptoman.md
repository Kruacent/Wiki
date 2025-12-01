---
title: Le Cleptomane
description: Un trouble obsessionnel poussant au vol d'objets.
date: 2025-12-01
hide_table_of_contents: true
---

import RoleProfile from '@site/src/components/docs/RoleProfile.tsx';
import AbilityLoader from '@site/src/components/docs/AbilityLoader.tsx';

<RoleProfile 
  name="Cleptomane" 
  type="human"
  description="Tu peux voler les items des autres joueurs."
  hp={100}
  roleColor="rgba(194, 0, 0)"
  scale={{ x: 1.01, y: 0.99, z: 1 }} 
  spawnLocation="Spawn de la classe de base"
  keepRoleOnDeath={false}
  keepRoleOnChangingRole={true}
  inventory={['Inventaire de la Classe de base']}
/>

## Mécanique de Vol

<AbilityLoader id="Thief" />