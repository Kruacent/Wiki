---
title: Le Maladroit
description: Un rôle handicapant causant la perte involontaire d'objets.
date: 2025-12-01
hide_table_of_contents: true
---

import RoleProfile from '@site/src/components/docs/RoleProfile.tsx';
import AbilityLoader from '@site/src/components/docs/AbilityLoader.tsx';

<RoleProfile 
  name="Maladroit" 
  type="human"
  description="Fais attention à tes items ! Tu as une fâcheuse tendance à tout laisser tomber."
  hp={100}
  roleColor="rgba(211, 110, 112, 1)"
  scale={1.0} 
  spawnLocation="Spawn de la classe de base"
  keepRoleOnDeath={false}
  keepRoleOnChangingRole={true}
  inventory={['Inventaire de la Classe de base']}
/>

## (In)Compétence

Ce rôle ne vous apporte aucun avantage, c'est un défi de survie supplémentaire.

<AbilityLoader id="MainsDeBeurre" />