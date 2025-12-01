---
title: Chef des Gardes
description: Une version gradée du Garde avec un accès Private et un Crossvec.
date: 2025-12-01
hide_table_of_contents: true
---

import RoleProfile from '@site/src/components/docs/RoleProfile.tsx';

<RoleProfile 
  name="Chef des Gardes" 
  type="guard"
  description="Vous disposez d'une carte de Private et d'un Crossvec."
  hp={100}
  roleColor="rgba(112, 195, 255, 1)"
  scale={{ x: 1, y: 1, z: 1 }} 
  spawnLocation="Entrance Zone (Spawn Garde)"
  keepRoleOnDeath={false}
  keepRoleOnChangingRole={false}
  inventory={[
    'Crossvec', 
    'Keycard MTF Private', 
    'Armor Light', 
    'Medkit', 
    'Radio',
    'Flashlight'
  ]}
/>

## Accréditation
Votre **Carte d'Accès MTF Private** est supérieure à celle du garde :
* Elle vous permet d'ouvrir les portes nécessitant un niveau d'armurerie plus élevé.
* Elle facilite l'accès aux zones sécurisées.