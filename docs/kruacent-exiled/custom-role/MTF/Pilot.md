---
title: Pilot
description: Un spécialiste MTF capable d'ordonner des frappes aériennes.
date: 2025-12-01
hide_table_of_contents: true
abilities: ["SetPosition", "AirStrike"]
---

import { GenerateLinksToAbilities } from '@site/src/components/docs/Ability.tsx';
import RoleProfile from '@site/src/components/docs/RoleProfile.tsx';

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


### Compétences

<GenerateLinksToAbilities abilities={frontMatter.abilities} />
