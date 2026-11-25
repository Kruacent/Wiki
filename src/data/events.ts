/**
 * Global Events et Middle Events du serveur, avec leur poids de tirage.
 * Les chances affichées sur le wiki sont calculées automatiquement à partir de ces poids :
 * changez un poids ici et toutes les pages se mettent à jour.
 */

export type Impact = 'VeryLow' | 'Low' | 'Medium' | 'High' | 'VeryHigh' | 'Insane';

export const IMPACT_PREFIX: Record<Impact, string> = {
  VeryLow: '[VL]',
  Low: '[L]',
  Medium: '[M]',
  High: '[H]',
  VeryHigh: '[VH]',
  Insane: '[I]',
};

export interface GlobalEventData {
  /** Nom affiché à l'annonce (identifiant de l'event). */
  id: string;
  /** Ce que fait l'event, en une ligne. */
  resume: string;
  /** Lien vers la page du wiki. */
  page: string;
  poids: number;
  impact: Impact;
  annonces: string[];
  /** Chance (en %) que l'annonce soit remplacée par [REDACTED]. 10 % par défaut. */
  redacted?: number;
  /** Tombe toujours seul : aucun autre Global Event ne s'y ajoute. */
  seul?: boolean;
  /** Event retiré du tirage (il existe encore mais ne peut plus tomber). */
  obsolete?: boolean;
}

export interface MiddleEventData {
  id: string;
  resume: string;
  page: string;
  poids: number;
  annonces: string[];
  /** Condition à remplir pour que l'event puisse être tiré. */
  condition?: string;
  obsolete?: boolean;
}

/** Chance qu'il y ait deux Global Events au lieu d'un. */
export const CHANCE_DEUX_GE = 0.1;
/** Chance par défaut que l'annonce d'un Global Event soit [REDACTED]. */
export const CHANCE_REDACTED = 10;
/** Chance qu'un Middle Event se déclenche dans la partie. */
export const CHANCE_MIDDLE_EVENT = 0.37;

export const globalEvents: GlobalEventData[] = [
  { id: 'nothing', resume: "Rien. Une partie normale.", page: '/docs/kruacent-exiled/global-event/R', poids: 10, impact: 'VeryLow', annonces: ["y'a r", 'faut tuer le SCP'], seul: true },
  { id: 'Speed', resume: "Tout le monde va beaucoup plus vite, et certains SCP explosent", page: '/docs/kruacent-exiled/global-event/Speed', poids: 5, impact: 'VeryHigh', annonces: ['Gas! gas! gas!', 'Super instinct!', 'Mayhem mode activated'] },
  { id: 'RandomSpawn', resume: "Chaque rôle commence dans une salle au hasard", page: '/docs/kruacent-exiled/global-event/RandomSpawn', poids: 5, impact: 'High', annonces: ['Les spawns sont random'] },
  { id: 'Blitz', resume: "Des grenades tombent dans des salles au hasard toutes les 2 minutes", page: '/docs/kruacent-exiled/global-event/Blitz', poids: 4, impact: 'Low', annonces: ['La Luftwaffe arrive!', 'Attention aux bombardements!'] },
  { id: 'OpenBar', resume: "Gate A, Gate B et 3 portes importantes restent ouvertes", page: '/docs/kruacent-exiled/global-event/OpenBar', poids: 3, impact: 'Medium', annonces: ["j'espère que vous avez pas prévu de kampé"] },
  { id: 'Impostor', resume: "Les joueurs échangent leur apparence et leur pseudo", page: '/docs/kruacent-exiled/global-event/Impostor', poids: 2, impact: 'High', annonces: ['Ne vous fiez pas aux apparences !', 'sussy'] },
  { id: 'Kaboom', resume: "Fermer une porte peut faire apparaître une grenade", page: '/docs/kruacent-exiled/global-event/Kaboom', poids: 2, impact: 'Medium', annonces: ['Les portes sont piegés attention!', 'La guerrilla est présente'] },
  { id: 'ItemRain', resume: "Des objets apparaissent un peu partout toutes les 2 minutes", page: '/docs/kruacent-exiled/global-event/ItemRain', poids: 1, impact: 'Medium', annonces: ['Il pleut des items !!'] },
  { id: 'KIWIS', resume: "Les SCP gagnent de la vie à 15 et 30 minutes", page: '/docs/kruacent-exiled/global-event/KIWIS', poids: 1, impact: 'Medium', annonces: ["Kill It While It's Small"] },
  { id: 'Librarby', resume: "Parler trop fort fait exploser les humains", page: '/docs/kruacent-exiled/global-event/Librarby', poids: 1, impact: 'Medium', annonces: ['Ne parlez pas trop fort sinon vous subirez les conséquences !'], redacted: 0 },
  { id: 'RollBack', resume: "Tout le monde revient parfois 30 secondes en arrière", page: '/docs/kruacent-exiled/global-event/RollBack', poids: 1, impact: 'High', annonces: ['Shit the server is lagging', 'Pov Omer'] },
  { id: 'System Malfunction', resume: "L'ogive peut se lancer seule, les checkpoints s'ouvrent seuls", page: '/docs/kruacent-exiled/global-event/SystemMalfunction', poids: 1, impact: 'VeryLow', annonces: ['System Malfunction', 'La facilité marche pas trop là'] },
  { id: 'THEWORLDREVOLVING', resume: "Tout le monde tourne sur soi-même", page: '', poids: 0, impact: 'Medium', annonces: ['THE WORLD REVOLVING'], obsolete: true },
];

export const middleEvents: MiddleEventData[] = [
  { id: 'EGamble', resume: "Une pièce pour chaque humain", page: '/docs/kruacent-exiled/global-event/middle-event/EveryoneGamble', poids: 1, annonces: ['Everyone, throw the game now!'] },
  { id: 'HealSCPM', resume: "Les SCP à bout de souffle remontent à la moitié de leur vie", page: '/docs/kruacent-exiled/global-event/middle-event/HealSCP', poids: 1, annonces: ['Bon aller on rallonge un peu la game'], condition: 'Tous les SCP sont presque morts (30 % de vie ou moins)' },
  { id: 'MShuffleP', resume: "Tous les joueurs échangent leur place", page: '/docs/kruacent-exiled/global-event/middle-event/ShufflePosition', poids: 1, annonces: ['Aller on change de place'] },
  { id: 'SpeedM', resume: "Tout le monde accélère jusqu'à la fin", page: '/docs/kruacent-exiled/global-event/middle-event/SpeedM', poids: 1, annonces: ['Gas! gas! gas!'] },
  { id: 'WallHack', resume: "Tout le monde voit à travers les murs", page: '/docs/kruacent-exiled/global-event/middle-event/WallHackM', poids: 1, annonces: ['Tout le monde wallhack yippee!!!!!'] },
  { id: 'MShuffleI', resume: "Mélange les inventaires", page: '', poids: 0, annonces: ['Aller on change de stuff'], obsolete: true },
  { id: 'MShuffle', resume: "Mélange les rôles", page: '', poids: 0, annonces: ['Aller on change de role'], obsolete: true },
];
