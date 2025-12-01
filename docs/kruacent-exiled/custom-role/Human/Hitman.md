---
title: Hitman
description: Un tueur à gages sous couverture traquant une cible spécifique.
date: 2025-12-01
hide_table_of_contents: true
---

import RoleProfile from '@site/src/components/docs/RoleProfile.tsx';
import AbilityLoader from '@site/src/components/docs/AbilityLoader.tsx';
import StatusEffect from '@site/src/components/docs/StatusEffect.tsx';

<RoleProfile 
  name="Hitman" 
  type="human"
  description="POV Sou Hiyori de Your Turn To Die."
  hp={100}
  roleColor="rgba(54, 54, 54, 1)"
  scale={1.0} 
  spawnLocation="Spawn de la classe de base"
  keepRoleOnDeath={false}
  keepRoleOnChangingRole={true}
  inventory={['Inventaire de la Classe de base']}
/>

## Mécanique de Jeu

Le Hitman n'est pas une classe de combat direct, c'est un prédateur. Vous savez qui est votre cible, mais elle ne sait pas qui vous êtes... jusqu'à ce qu'il soit trop tard.

<AbilityLoader id="Contrat" />

---

## Système de Proximité (Pour la Cible)

Si vous êtes la cible du Hitman, vous recevrez des avertissements sensoriels en fonction de sa distance. Apprenez-les pour survivre.

| Distance | Message affiché à la cible | Danger |
| :--- | :--- | :--- |
| **Même Zone** | *"You feel dizzy..."* | 🟡 Moyen |
| **5 Salles** | *"Your lungs tighten up..."* | 🟠 Élevé |
| **3 Salles** | *"Your heart beats out of your chest..."* | 🔴 Critique |
| **Même Salle** | *"Sweat drips down your forehead..."* | ⚫ IMMÉDIAT |

---

## Conséquences

Votre performance modifie vos statistiques de manière permanente pour le reste de la partie.

### En cas de Succès
Vous obtenez un boost massif pour récompenser votre exécution.

<StatusEffect 
  name="Adrénaline Pure" 
  type="buff" 
  intensity="Permanent"
  description="Vos PV Max passent à 130 (+30 Soin) et vous obtenez un Boost de Vitesse permanent." 
/>

### En cas d'Échec
L'organisation vous punit pour votre incompétence.

<StatusEffect 
  name="Disgrâce" 
  type="debuff" 
  intensity="Permanent"
  description="Vos PV Max tombent à 70 (-30 Dégâts) et votre vitesse de déplacement est réduite (Slowness)." 
/>