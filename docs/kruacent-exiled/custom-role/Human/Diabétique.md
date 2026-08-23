---
title: Le Diabétique
description: T'as mangé le crambleu au pomme de mael
date: 2025-12-01
hide_table_of_contents: true
abilities: ["Diabète"]
---

import { GenerateLinksToAbilities } from '@site/src/components/docs/Ability.tsx';
import RoleProfile from '@site/src/components/docs/RoleProfile.tsx';
import StatusEffect from '@site/src/components/docs/StatusEffect.tsx';

<RoleProfile 
  name="Diabétique" 
  type="human"
  description="T'as mangé le crambleu au pomme de mael"
  hp={100}
  roleColor="rgba(255, 255, 0, 1)"
  scale={1.0} 
  spawnLocation="Spawn de la classe de base"
  keepRoleOnDeath={false}
  keepRoleOnChangingRole={false}
  inventory={['Inventaire de la Classe de base']}
/>

### Compétences

<GenerateLinksToAbilities abilities={frontMatter.abilities} />

---

## Survie

:::warning GESTION DES SOINS
Votre priorité absolue n'est pas de trouver une arme, mais de trouver des **Soins**.
* **SCP-500 :** Ne retire **PAS** votre diabète.
:::