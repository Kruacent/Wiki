---
title: Negotiator
description: Who knew zombies could be such great listeners?
date: 2025-12-01
hide_table_of_contents: true
abilities: ["Immunité Diplomatique"]
---

import { GenerateLinksToAbilities } from '@site/src/components/docs/Ability.tsx';
import RoleProfile from '@site/src/components/docs/RoleProfile.tsx';

<RoleProfile 
  name="Negotiator" 
  type="chaos"
  description="Who knew zombies could be such great listeners?"
  hp={100}
  scale={1.0} 
  spawnLocation="Surface Zone (Voiture Chaos)"
  inventory={[
    'AK', 
    'KeycardChaosInsurgency', 
    'Armure de combat', 
    'Medkit', 
    'Painkillers',
    'Radio'
  ]}
/>

### Compétences

<GenerateLinksToAbilities abilities={frontMatter.abilities} />

---

## Stratégie

:::tip RECRUTEMENT FORCÉ
Votre force réside dans le recyclage. Ne tuez pas les zombies isolés. Essayez de les isoler pour utiliser votre **Négociation** et gagner un soldat Chaos supplémentaire armé.
:::

* **En groupe :** Votre immunité au Friendly Fire vous permet de passer devant votre escouade dans les couloirs étroits sans risquer de prendre une balle perdue dans le dos.
* **Contre SCP-049 :** Vous êtes son pire cauchemar. Il crée des zombies, vous les lui volez. Restez cependant à distance du Docteur lui-même.