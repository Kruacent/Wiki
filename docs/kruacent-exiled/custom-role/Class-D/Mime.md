---
title: Mime
description: Un Class-D muet, silencieux et plat comme une feuille.
date: 2025-12-01
hide_table_of_contents: true
abilities: ["Simulate Death"]
---

import { GenerateLinksToAbilities } from '@site/src/components/docs/Ability.tsx';
import RoleProfile from '@site/src/components/docs/RoleProfile.tsx';
import StatusEffect from '@site/src/components/docs/StatusEffect.tsx';

<RoleProfile 
  name="Mime" 
  type="classd"
  description="Tu ne peux pas parler, mais tu fais très peu de bruit quand tu marches... et tu es tout plat."
  hp={100}
  roleColor="rgba(255, 74, 74)"
  scale={{ x: 0.1, y: 1, z: 1 }} 
  keepRoleOnDeath={false}
  keepRoleOnChangingRole={true}
  spawnLocation="Cellule des Class-D"
/>

### Compétences

<GenerateLinksToAbilities abilities={frontMatter.abilities} />

<StatusEffect 
  name="Silent Walk" 
  type="buff" 
  intensity="Infini"
  description="Vos pas sont totalement silencieux pour les humains." 
/>

<StatusEffect 
  name="Muted" 
  type="debuff" 
  intensity="Infini"
  description="Incapacité totale de parler." 
/>

---

## Compétences
