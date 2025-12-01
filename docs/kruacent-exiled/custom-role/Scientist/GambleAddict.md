---
title: Gamble Addict
description: Un scientifique accro au jeu qui a vendu son équipement.
date: 2025-12-01
hide_table_of_contents: true
---

import RoleProfile from '@site/src/components/docs/RoleProfile.tsx';
import AbilityLoader from '@site/src/components/docs/AbilityLoader.tsx';

<RoleProfile 
  name="Gamble Addict" 
  type="scientist"
  description="T'as trade ton kit et ta carte contre 2 pièces... Fais-en bon usage."
  hp={100}
  scale={1.0} 
  spawnLocation="Light Containment Zone (Spawn Scientifique)"
  keepRoleOnDeath={false}
  keepRoleOnChangingRole={false}
  inventory={['Coin', 'Coin']}
/>

## Le Casino Gagne Toujours

<AbilityLoader id="Trade" />