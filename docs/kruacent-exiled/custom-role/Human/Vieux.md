---
title: Le Vieux
description: Un état pathologique causant des téléportations aléatoires.
date: 2025-12-01
hide_table_of_contents: true
---

import RoleProfile from '@site/src/components/docs/RoleProfile.tsx';
import AbilityLoader from '@site/src/components/docs/AbilityLoader.tsx';
import StatusEffect from '@site/src/components/docs/StatusEffect.tsx';

<RoleProfile 
  name="Le Vieux" 
  type="human"
  description="POV Mishima"
  hp={100}
  roleColor="rgba(112, 112, 112, 1)"
  scale={1.0} 
  spawnLocation="Spawn de la classe de base"
  keepRoleOnDeath={false}
  keepRoleOnChangingRole={true}
  inventory={['Inventaire de la Classe de base']}
/>

## Symptômes

Ce rôle n'est pas une classe à part entière, mais une **maladie** qui peut toucher n'importe quel humain.

<AbilityLoader id="Alzheimer" />

---

## Traitement

Cette condition n'est pas irréversible. La médecine de la fondation peut vous aider.

<StatusEffect 
  name="Guérison 500" 
  type="buff" 
  icon="💊"
  description="Consommer un SCP-500 retire définitivement le rôle Alzheimer et arrête les téléportations." 
/>