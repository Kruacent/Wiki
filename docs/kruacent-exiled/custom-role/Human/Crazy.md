---
title: Le Fou de le facilité
description: Un survivant traumatisé sujet à des hallucinations.
date: 2025-12-01
hide_table_of_contents: true
---

import RoleProfile from '@site/src/components/docs/RoleProfile.tsx';
import AbilityLoader from '@site/src/components/docs/AbilityLoader.tsx';

<RoleProfile 
  name="Le Fou de la facilité" 
  type="human"
  description="Je pense que le traitement que t'as eu à la fondation t'as pas aidé..."
  hp={100}
  roleColor="#e0e0e0"
  scale={1.0} 
  spawnLocation="Spawn de la classe de base"
  keepRoleOnDeath={true}
  keepRoleOnChangingRole={true}
  inventory={['Inventaire de la Classe de base']}
/>

## Symptômes

Ce rôle est une malédiction. Vous ne contrôlez pas toujours votre corps ni vos sens.

<AbilityLoader id="CrazyEffect" />