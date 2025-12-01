---
title: Terroriste
description: Un MTF kamikaze équipé d'un lourd arsenal explosif.
date: 2025-12-01
hide_table_of_contents: true
---

import RoleProfile from '@site/src/components/docs/RoleProfile.tsx';
import AbilityLoader from '@site/src/components/docs/AbilityLoader.tsx';

<RoleProfile 
  name="Terroriste" 
  type="mtf"
  description="Ne fais pas exploser la facilité... Tu es une unité de démolition mobile prête à tout sacrifier."
  hp={100}
  scale={1.0} 
  spawnLocation="Surface Zone (Hélicoptère)"
  keepRoleOnDeath={false}
  keepRoleOnChangingRole={false}
  inventory={[
    'E-11 SR', 
    'Grenade HE', 
    'Grenade HE', 
    'Grenade HE', 
    'Grenade HE',
    'Adrenaline',
    'Keycard MTF Operative',
    'Radio'
  ]}
/>

## Artificier de l'Extrême

Ce rôle est conçu pour le **Sacrifice**. Avec 4 grenades HE dès le spawn, vous pouvez nettoyer une vague entière de Chaos Insurgency ou piéger un SCP dans un ascenseur.

<AbilityLoader id="Explode" />

:::danger UTILISATION DU SUICIDE
Votre capacité **Ceinture Explosive** a un temps de fusible quasi-nul (0.2s).
N'utilisez cette compétence que si vous êtes certain de mourir. C'est votre dernière carte à jouer.
:::