---
title: Tank
description: Un capitaine MTF lourdement armé avec 200 HP.
date: 2025-12-01
hide_table_of_contents: true
abilities: ["Lourd"]
---

import { GenerateLinksToAbilities } from '@site/src/components/docs/Ability.tsx';
import RoleProfile from '@site/src/components/docs/RoleProfile.tsx';
import StatusEffect from '@site/src/components/docs/StatusEffect.tsx';

<RoleProfile 
  name="Tank" 
  type="mtf"
  description="Une forteresse mobile. Ta force de tir est démultipliée, mais fais attention au poids de tes balles."
  hp={200}
  roleColor="rgba(255, 192, 203, 1)"
  scale={{ x: 1.15, y: 1, z: 1.15 }} 
  spawnLocation="Surface Zone (Hélicoptère)"
  keepRoleOnDeath={false}
  keepRoleOnChangingRole={false}
  inventory={[
    'Logicer', 
    'FRMG-0', 
    'Armor Heavy', 
    'Keycard MTF Captain',
    'Adrenaline',
    'Painkillers',
    'Radio',
    'Grenade HE'
  ]}
/>

## Puissance de Feu

Le Tank est la seule classe à apparaître avec **deux armes lourdes** (LMG) et une Armure Lourde dès le début. Avec **200 HP**, il peut encaisser deux fois plus de dégâts qu'un soldat normal.

---

### Compétences

<GenerateLinksToAbilities abilities={frontMatter.abilities} />