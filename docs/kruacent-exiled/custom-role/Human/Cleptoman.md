---
title: Le Cleptomane
description: Un trouble obsessionnel poussant au vol d'objets.
date: 2025-12-01
hide_table_of_contents: true
abilities: ["Thief"]
---

import { GenerateLinksToAbilities } from '@site/src/components/docs/Ability.tsx';
import RoleProfile from '@site/src/components/docs/RoleProfile.tsx';

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

### Compétences

<GenerateLinksToAbilities abilities={frontMatter.abilities} />
