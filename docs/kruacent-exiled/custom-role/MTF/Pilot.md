---
title: Pilot
description: Un spécialiste MTF capable d'ordonner des frappes aériennes.
date: 2025-12-01
hide_table_of_contents: true
---

import RoleProfile from '@site/src/components/docs/RoleProfile.tsx';
import AbilityLoader from '@site/src/components/docs/AbilityLoader.tsx';

<RoleProfile 
  name="Pilot" 
  type="mtf"
  description="So I haveth a Laser Pointere..."
  hp={75}
  roleColor="rgba(33, 150, 243, 1)"
  scale={1.0} 
  spawnLocation="Surface Zone (Hélicoptère)"
  keepRoleOnDeath={false}
  keepRoleOnChangingRole={false}
  inventory={[
    'Crossvec', 
    'Keycard MTF Operative', 
    'Armor Combat', 
    'Medkit', 
    'Radio'
  ]}
/>


### Combo d'Artillerie

Vous devez utiliser vos deux compétences dans l'ordre :

1.  **Marquage (Set Position) :** Désignez une zone
2.  **Exécution (Air Strike) :** Repliez-vous et déclenchez l'enfer.

<AbilityLoader id="SetPosition" />

<AbilityLoader id="AirStrike" />