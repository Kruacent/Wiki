---
title: DBoyInShape
description: Dammmmnnnnnnn les gates.
date: 2025-12-01
hide_table_of_contents: true
---

import RoleProfile from '@site/src/components/docs/RoleProfile.tsx';
import AbilityLoader from '@site/src/components/docs/AbilityLoader.tsx';
import StatusEffect from '@site/src/components/docs/StatusEffect.tsx';

<RoleProfile 
  name="DBoyInShape" 
  type="classd"
  description="Dammmmnnnnnnn les gates. Trop musclé pour être arrêté par une simple porte."
  hp={100}
  scale={{ x: 1, y: 1, z: 1 }} 
  keepRoleOnDeath={false}
  keepRoleOnChangingRole={true}
  spawnLocation="Cellule des Class-D"
/>

## Passifs & Malus

Sa masse musculaire excessive le rend moins agile que les autres.

<StatusEffect 
  name="Slowness" 
  type="debuff" 
  intensity="15"
  description="Réduit votre vitesse de déplacement de manière permanente tant que vous possédez ce rôle." 
/>

---

## Compétences

<AbilityLoader id="ForceOpen" />