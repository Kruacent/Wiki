---
title: Small
description: Une variante SCP de petite taille, plus difficile à toucher.
date: 2025-12-01
hide_table_of_contents: true
---

import RoleProfile from '@site/src/components/docs/RoleProfile.tsx';
import AbilityLoader from '@site/src/components/docs/AbilityLoader.tsx';

<RoleProfile 
  name="Small" 
  type="scp"
  description="U smoll. Une version compacte et furtive d'un SCP standard."
  hp="Variable (Selon le SCP)"
  roleColor="#b71c1c"
  scale={{ x: 1, y: 0.75, z: 1 }} 
  spawnLocation="Spawn de base du SCP"
  keepRoleOnDeath={false}
  keepRoleOnChangingRole={false}
  inventory={[]}
/>

## La Menace Compacte

Ce rôle s'applique aléatoirement sur les SCP. Il ne change pas vos PV ni vos dégâts, mais il change la façon dont les humains doivent vous viser.

<AbilityLoader id="SmallSize" />