---
title: Ultra
description: Un SCP doté d'une perception extrasensorielle globale.
date: 2025-12-01
hide_table_of_contents: true
---

import RoleProfile from '@site/src/components/docs/RoleProfile.tsx';
import AbilityLoader from '@site/src/components/docs/AbilityLoader.tsx';

<RoleProfile 
  name="Ultra" 
  type="scp"
  description="You can sense where people are located. Rien ne peut se cacher de votre regard."
  hp="Variable (Selon le SCP)"
  roleColor="rgba(213, 0, 249, 1)" 
  scale={1.0} 
  spawnLocation="Spawn de base du SCP"
  keepRoleOnDeath={false}
  keepRoleOnChangingRole={false}
  inventory={[]}
/>

## Le Traqueur Absolu

L'Ultra ne gagne pas de puissance brute, mais une information capitale : **La Position**. Il empêche les derniers humains de se cacher indéfiniment dans un coin de la carte.

<AbilityLoader id="UltraSense" />