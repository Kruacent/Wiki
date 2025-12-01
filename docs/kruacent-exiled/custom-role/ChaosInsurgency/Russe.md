---
title: Le Russe
description: Tu dois faire la roulette russe avec les autres joueurs.
date: 2025-12-01
hide_table_of_contents: true
---

import RoleProfile from '@site/src/components/docs/RoleProfile.tsx';

<RoleProfile 
  name="Le Russe" 
  type="chaos"
  spawnLocation="Surface Zone (Voiture Chaos)"
  description="Tu dois faire la roulette russe avec les autres joueurs."
  hp={100}
  roleColor="rgba(255, 0, 0, 1)" 
  scale={{ x: 1.1, y: 1, z: 1.1 }} 
  keepRoleOnDeath={false}
  keepRoleOnChangingRole={false}
  inventory={[
    'Revolver', 'Radio', 'Adrenaline', 
    'KeycardChaosInsurgency', 'Grenade HE', 'Grenade HE'
  ]}
/>