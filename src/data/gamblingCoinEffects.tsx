import React from 'react';
import Link from '@docusaurus/Link';

/**
 * Liste des effets des pièces (Gambling Coin).
 *
 * Pour ajouter un effet : copiez une ligne et changez les valeurs.
 * - type    : 'positif' ou 'negatif'
 * - poids   : le poids de l'effet (plus il est grand, plus l'effet tombe souvent)
 * - message : le message affiché à l'écran ('' s'il n'y en a pas)
 * - effet   : ce qui arrive au joueur
 *
 * Les chances sont recalculées automatiquement sur la page à partir des poids :
 * chance d'un effet = 50 % × (son poids ÷ somme des poids de sa catégorie).
 */

export type CoinEffectType = 'positif' | 'negatif';

export interface CoinEffect {
  nom: string;
  type: CoinEffectType;
  poids: number;
  message: string;
  effet: React.ReactNode;
  secret?: boolean;
}

export const gamblingCoinEffects: CoinEffect[] = [
  // ───────────── Bons tirages ─────────────
  { nom: 'SpawnHeal', type: 'positif', poids: 25, message: '', effet: 'Un Medkit et des Anti-douleurs tombent à vos pieds.' },
  { nom: 'GiveKeycard', type: 'positif', poids: 20, message: 'You got a keycard !', effet: 'Une carte Containment Engineer, ou parfois une Facility Manager.' },
  { nom: 'GiveRandomKeycard', type: 'positif', poids: 20, message: 'You got a keycard !', effet: 'Une carte bizarre, aux couleurs et aux accès complètement aléatoires.' },
  { nom: 'Gnomed', type: 'positif', poids: 20, message: 'You got gnomed.', effet: 'Vous devenez un petit gnome trapu.' },
  { nom: 'RandomItem', type: 'positif', poids: 20, message: 'You got a random item !', effet: 'Un objet au hasard à vos pieds. Parfois rien du tout.' },
  { nom: 'RedCandy', type: 'positif', poids: 20, message: 'You got a pink candy ! Wait is that pink no ?', effet: 'Un bonbon rouge de SCP-330.' },
  { nom: 'RandomBadEffect', type: 'positif', poids: 20, message: 'You got a random effect !', effet: 'Un petit malus aléatoire pendant quelques secondes. Rangé avec les bons tirages, allez savoir pourquoi.' },
  { nom: 'ForceRespawn', type: 'positif', poids: 15, message: 'Someone respawned... probably.', effet: 'Une vague de renforts arrive. Pour qui ? Surprise.' },
  { nom: 'Lightbulb', type: 'positif', poids: 15, message: 'Follow the light !!', effet: 'Une ampoule SCP-2176.' },
  { nom: 'EmptyMicro', type: 'positif', poids: 10, message: 'DID YOU JUST GET A MICRO HID !?', effet: 'Un Micro H.I.D. ! …complètement vide.' },
  { nom: 'HealPlayer', type: 'positif', poids: 10, message: 'You got magically healed !', effet: 'Un petit soin, qui peut même dépasser votre vie max.' },
  { nom: 'IncreasePlayerHeal', type: 'positif', poids: 10, message: "You're life expectancy is extended !", effet: 'Un soin proportionnel à votre vie actuelle.' },
  { nom: 'KaboomCandy', type: 'positif', poids: 10, message: 'Pink candy kaboooom !!', effet: 'Un bonbon rose. Oui, celui qui explose.' },
  { nom: 'NiceHat', type: 'positif', poids: 10, message: "You've got a nice hat !", effet: "SCP-268, le chapeau d'invisibilité." },
  { nom: 'NightVision', type: 'positif', poids: 10, message: 'Yippee, you can see in the dark', effet: 'Vision nocturne pendant deux minutes.' },
  { nom: 'RandomGoodEffect', type: 'positif', poids: 10, message: 'You got a random effect !', effet: 'Un petit bonus aléatoire pendant quelques secondes.' },
  { nom: 'RandomizeInventory', type: 'positif', poids: 10, message: "You shouldn't gamble !", effet: 'Tout votre inventaire est remplacé par des objets au hasard.' },
  { nom: 'HappyBirthday', type: 'positif', poids: 8, message: '', effet: "C'est votre anniversaire ! Tout le serveur le sait, la musique joue et les lumières font la fête.", secret: true },
  { nom: 'BigJump', type: 'positif', poids: 5, message: 'Congratulations, you can now jump higher', effet: 'Super sauts pendant une minute et demie.' },
  { nom: 'FakeYourDeath', type: 'positif', poids: 5, message: 'Congrats ! You are now officially dead', effet: 'Un faux cadavre à votre nom apparaît, et les SCP vous croient mort.' },
  { nom: 'GiveCom45', type: 'positif', poids: 5, message: 'Ohh a Com45!', effet: 'Un COM-45. Un vrai, cette fois.' },
  { nom: 'OneAmmoLogicer', type: 'positif', poids: 5, message: 'Were you hiding that in your... ', effet: 'Un Logicer avec une seule balle. Visez bien.' },
  { nom: 'Revolver', type: 'positif', poids: 5, message: "It's a gift from the sky !!", effet: 'Un revolver équipé d\'une lunette.' },
  { nom: 'TeleportToEscape', type: 'positif', poids: 5, message: '', effet: 'Vous voilà à la sortie de secours.' },

  // ───────────── Mauvais tirages ─────────────
  { nom: 'Shit', type: 'negatif', poids: 40, message: 'The tacos of the otherday was not passed very good', effet: 'Une flaque de SCP-173 apparaît sous vous.' },
  { nom: 'DetonatedFlash', type: 'negatif', poids: 30, message: 'a gift for your eyes', effet: 'Une grenade flash vous explose à la figure.' },
  { nom: 'TeleportToEnemy', type: 'negatif', poids: 30, message: 'You were teleported to an enemy !!', effet: "Vous atterrissez à côté d'un ennemi ou d'un SCP." },
  { nom: 'InventoryReset', type: 'negatif', poids: 20, message: 'have you ever got item in your inventory ?', effet: "Votre inventaire disparaît (sauf l'objet en main, qui tombe)." },
  { nom: 'PrimedVase', type: 'negatif', poids: 20, message: "You're grandma come to visit you", effet: 'Un vase SCP-244 déjà activé à vos pieds. Ça caille.' },
  { nom: 'ReduceHP', type: 'negatif', poids: 20, message: 'The coin fall on your head !', effet: 'La pièce vous tombe sur la tête. Ça fait mal.' },
  { nom: 'SwapInventory', type: 'negatif', poids: 20, message: "I think you don't deserve this stuff, i take it away", effet: 'Vous échangez votre inventaire avec un autre humain au hasard.' },
  { nom: 'SwapPosition', type: 'negatif', poids: 20, message: 'Congratulations ! You just unlocked the premium teleport Uber service... but with no refunds.', effet: 'Vous échangez votre place avec un autre joueur.' },
  { nom: 'Ball', type: 'negatif', poids: 15, message: 'Look a BALL', effet: 'Une balle SCP-018 géante. Courez.' },
  { nom: 'HolyGrenade', type: 'negatif', poids: 15, message: 'Watch a holy grenade !', effet: <>Une <Link to="/docs/kruacent-exiled/custom-item/sainte-grenade">Sainte Grenade</Link> vous explose dessus. Alléluia.</> },
  { nom: 'MakeOneHP', type: 'negatif', poids: 15, message: '', effet: 'Vous tombez à 1 PV. Si vous y étiez déjà, vous explosez.' },
  { nom: 'RandomTeleport', type: 'negatif', poids: 15, message: 'You were randomly teleported', effet: "Téléporté n'importe où." },
  { nom: 'TransformZombie', type: 'negatif', poids: 15, message: '', effet: 'Vous devenez un zombie de SCP-049.' },
  { nom: 'YouLoveTesla', type: 'negatif', poids: 15, message: 'You love Tesla much more than Elon Musk', effet: 'Téléporté dans une salle de Tesla.' },
  { nom: 'AutoDoor', type: 'negatif', poids: 10, message: 'You are very talented in messing up the game !', effet: "Toutes les portes d'une zone s'ouvrent." },
  { nom: 'EveryoneChange', type: 'negatif', poids: 10, message: 'You converted everyone in the opposite team !', effet: 'Tout le serveur change de camp. Bravo.' },
  { nom: 'FakeNuke', type: 'negatif', poids: 10, message: '', effet: "L'ogive Alpha démarre… puis s'arrête toute seule. Normalement." },
  { nom: 'Handcuff', type: 'negatif', poids: 10, message: 'You were arrested for uhh commiting war crimes... or something', effet: 'Menotté, et tout votre matériel par terre.' },
  { nom: 'Prison', type: 'negatif', poids: 10, message: 'Not another warcrime mate, what are you doing', effet: 'Une cage vous enferme quelques secondes.' },
  { nom: 'Reversed', type: 'negatif', poids: 10, message: 'Oops ! I connected your keyboard in the wrong way, sorryyyy', effet: 'Vos commandes sont inversées pendant un moment.' },
  { nom: 'SwapWithSpectator', type: 'negatif', poids: 10, message: "You just made someone's round better !", effet: 'Un spectateur prend votre place, votre vie et votre équipement. Vous, vous regardez.' },
  { nom: 'TurnOffLight', type: 'negatif', poids: 10, message: '', effet: 'Toute la facilité est plongée dans le noir quelques secondes.' },
  { nom: 'DropInventory', type: 'negatif', poids: 8, message: 'Empty your pocket... NOOOOWW !!', effet: 'Vous lâchez tout.' },
  { nom: 'TransformZombieFake', type: 'negatif', poids: 8, message: 'Good luck', effet: "Vous ressemblez à un zombie… mais vous n'en êtes pas un. Vos alliés, eux, ne le savent pas." },
  { nom: 'EatingStar', type: 'negatif', poids: 7, message: "Eating the disco ball wasn't good idea", effet: 'Vous devenez une boule disco musicale pendant un moment.' },
  { nom: 'Laugh', type: 'negatif', poids: 7, message: 'Smile you are on a TV show', effet: 'Des rires enregistrés vous suivent pendant plusieurs minutes.' },
  { nom: 'FlipPlayerRole', type: 'negatif', poids: 6, message: "That's what I call an UNO reverse card!", effet: 'Vous changez de camp et perdez votre équipement.' },
  { nom: 'GiveFakeCom45', type: 'negatif', poids: 5, message: 'Ohh a Com45!', effet: <>Un COM-45 ! …enfin, un <Link to="/docs/kruacent-exiled/custom-item/life-ender">Life Ender</Link>. Ne tirez pas.</> },
  { nom: 'Kick', type: 'negatif', poids: 5, message: 'Bye !', effet: 'Vous êtes expulsé du serveur. Littéralement.' },
  { nom: 'TeleportToDBoyCell', type: 'negatif', poids: 5, message: 'You got teleported to Class D cells !', effet: 'Retour aux cellules des Classe-D.' },
  { nom: 'Vaporize', type: 'negatif', poids: 5, message: 'I think eating moss in your cell is not good for you', effet: "Rien ne se passe… pour l'instant. Quelques minutes plus tard, vous êtes désintégré." },
  { nom: 'Warhead', type: 'negatif', poids: 5, message: '', effet: "L'ogive Alpha démarre. Pour de vrai, cette fois." },
  { nom: 'InstantDecontamination', type: 'negatif', poids: 1, message: 'Ouuppss you have the covid', effet: 'La décontamination de Light démarre immédiatement.' },
];
