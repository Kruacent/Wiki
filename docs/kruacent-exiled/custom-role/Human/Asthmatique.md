---
title: Asthmatique
description: Une condition médicale affectant l'endurance mais augmentant la concentration.
date: 2025-12-01
hide_table_of_contents: true
---

import RoleProfile from '@site/src/components/docs/RoleProfile.tsx';
import StatusEffect from '@site/src/components/docs/StatusEffect.tsx';

<RoleProfile 
  name="Asthmatique" 
  type="human"
  description="Ton endurance est réduite de moitié, mais tu vise mieux."
  hp={100}
  roleColor="rgba(191, 255, 0, 1)"
  scale={1.0} 
  spawnLocation="Spawn de la classe de base"
  keepRoleOnDeath={false}
  keepRoleOnChangingRole={true}
  inventory={['Inventaire de la Classe de base']}
/>

## Symptômes & Avantages

<StatusEffect 
  name="Exhausted" 
  type="debuff" 
  intensity="Permanent"
  description="Votre endurance maximale et sa régénération sont drastiquement réduites."
/>

<StatusEffect 
  name="SCP-1853" 
  type="buff" 
  intensity="x2"
  description="Augmente la vitesse de maniement des armes, réduit le recul et améliore la précision." 
/>

---

## Traitement

Comme pour la plupart des afflictions physiques, il existe un remède miracle.

<StatusEffect 
  name="Guérison 500" 
  type="neutral" 
  icon="💊"
  description="Consommer un SCP-500 soigne immédiatement votre asthme, retirant à la fois le malus d'endurance et le bonus de visée." 
/>