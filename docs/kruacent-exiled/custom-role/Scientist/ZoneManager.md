---
title: Zone Manager
description: Un gestionnaire de site devant ouvrir les accès pour obtenir une promotion.
date: 2025-12-01
hide_table_of_contents: true
---

import RoleProfile from '@site/src/components/docs/RoleProfile.tsx';
import AbilityLoader from '@site/src/components/docs/AbilityLoader.tsx';

<RoleProfile 
  name="Zone Manager" 
  type="scientist"
  description="Incroyable tu peux avoir une promotion alors fais ton boulot et ouvre tous ces checkpoints et tu pourras sortir d'ici"
  hp={100}
  roleColor="rgba(4, 52, 50)"
  scale={1.0} 
  spawnLocation="HCZ - Confinement de SCP-127"
  keepRoleOnDeath={false}
  keepRoleOnChangingRole={false}
  inventory={[
    'Keycard Zone Manager', 
    'Medkit', 
    'Adrenaline'
  ]}
/>

## Mission Prioritaire

Contrairement aux autres scientifiques qui cherchent juste à fuir, vous avez un travail à faire. Vous commencez déjà avec une carte capable d'ouvrir les Checkpoints, mais elle ne suffit pas pour ouvrir les Gates ou l'Intercom.

<AbilityLoader id="Promotion" />