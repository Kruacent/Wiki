---
title: Garde de 914
description: Un garde isolé assigné à la surveillance de la machine SCP-914.
date: 2025-12-01
hide_table_of_contents: true
---

import RoleProfile from '@site/src/components/docs/RoleProfile.tsx';

<RoleProfile 
  name="Garde de 914" 
  type="guard"
  description="Tu es le garde assigné au poste de surveillance de SCP-914."
  hp={100}
  scale={1.0} 
  spawnLocation="Salle SCP-914"
  keepRoleOnDeath={false}
  keepRoleOnChangingRole={false}
  inventory={[
    'FSP-9', 
    'Armor Light', 
    'Medkit', 
    'Radio',
    'Grenade Flash'
  ]}
/>