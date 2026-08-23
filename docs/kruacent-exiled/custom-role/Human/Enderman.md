---
title: Enderman
description: Un rôle capable de se téléporter au prix de sa santé vitale.
date: 2025-12-01
hide_table_of_contents: true
abilities: ["SetPosition", "Téléportation"]
---

import { GenerateLinksToAbilities } from '@site/src/components/docs/Ability.tsx';
import RoleProfile from '@site/src/components/docs/RoleProfile.tsx';

<RoleProfile 
  name="Enderman" 
  type="human"
  description="Tu peux te téléporter ! T tro for enféte."
  hp={100}
  roleColor="rgba(142, 37, 190, 1)"
  scale={1.0} 
  spawnLocation="Spawn de la classe de base"
  keepRoleOnDeath={false}
  keepRoleOnChangingRole={true}
  inventory={['Inventaire de la Classe de base']}
/>

### Compétences

<GenerateLinksToAbilities abilities={frontMatter.abilities} />

## Maîtrise de l'Espace

L'Enderman possède un kit de deux compétences qui fonctionnent ensemble. Vous devez d'abord **Marquer** une position pour pouvoir vous y **Téléporter** plus tard.


:::warning RESTRICTIONS DE TÉLÉPORTATION
* Vous ne pouvez vous téléporter que si le point marqué est dans la **même Zone** que vous (ex: LCZ ➔ LCZ).
* Si la LCZ est décontaminée, vous ne pourrez pas y retourner.
:::