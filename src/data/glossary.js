/**
 * Termes du glossaire, utilisés par le plugin remark `src/plugins/remark-glossary.js`
 * pour lier automatiquement la première occurrence de chaque terme sur chaque page.
 *
 * - `anchor` : l'ancre du terme sur la page Glossaire (`{#anchor}` dans le titre).
 * - `terms` : les façons d'écrire le terme dans le wiki. Sensible à la casse.
 *   Les variantes d'un même terme partagent l'ancre : seule la première trouvée est liée.
 * - `def` : définition courte, affichée en infobulle au survol du lien.
 *
 * Pour ajouter un terme : ajoutez-le ici ET dans docs/kruacent-exiled/glossaire.mdx.
 */
module.exports = [
  // Les camps
  { anchor: 'classe-d', terms: ['Classe-D', 'Classe D'], def: 'Prisonniers en combinaison orange. Ils commencent dans leurs cellules en LCZ et doivent s\'échapper.' },
  { anchor: 'scientifique', terms: ['Scientifiques', 'Scientifique'], def: 'Personnel de recherche de la Fondation. Il commence en LCZ et doit s\'échapper.' },
  { anchor: 'garde', terms: ['Gardes du Site', 'Garde du Site'], def: 'Les gardes de la Fondation (Facility Guards), déjà dans le Site au début de la partie.' },
  { anchor: 'mtf', terms: ['MTF', 'Epsilon-11'], def: 'Mobile Task Force : les renforts armés de la Fondation, arrivés par hélicoptère.' },
  { anchor: 'chaos', terms: ['Insurrection du Chaos', 'Insurgés du Chaos', 'Insurgé du Chaos'], def: 'Groupe armé ennemi de la Fondation. Allié des Classe-D, arrive en renfort par la Surface.' },
  { anchor: 'scp', terms: ['SCP personnalisé', 'SCP personnalisés'], def: 'Les créatures anormales. Sur Kruaçent, SCP-035 et SCP-049-C s\'ajoutent aux SCP du jeu.' },

  // La carte
  { anchor: 'lcz', terms: ['LCZ', 'Light Containment Zone'], def: 'Light Containment Zone : la zone de confinement légère, où commencent Classe-D et Scientifiques.' },
  { anchor: 'hcz', terms: ['HCZ', 'Heavy Containment Zone'], def: 'Heavy Containment Zone : la zone de confinement lourde, où sont enfermés la plupart des SCP.' },
  { anchor: 'ez', terms: ['Entrance Zone'], def: 'Entrance Zone : la zone de bureaux entre HCZ et la Surface.' },
  { anchor: 'gates', terms: ['Gate A', 'Gate B'], def: 'Les deux grandes portes qui mènent de l\'Entrance Zone à la Surface.' },
  { anchor: 'tesla', terms: ['Tesla'], def: 'Portes électriques de HCZ qui électrocutent ce qui passe dessous.' },
  { anchor: 'ogive', terms: ['ogive Alpha', 'Ogive Alpha', 'Alpha Warhead'], def: 'La bombe nucléaire du Site. Quand elle explose, tout ce qui est encore à l\'intérieur meurt.' },
  { anchor: 'gambling-room', terms: ['Gambling Room'], def: 'La machine à sous cachée dans la salle de SCP-173.' },

  // Annonces et classification
  { anchor: 'cassie', terms: ['C.A.S.S.I.E.', 'C.A.S.S.I.E', 'CASSIE'], def: 'La voix du Site, qui fait les annonces : pannes, renforts, ogive…' },
  { anchor: 'redacted', terms: ['[REDACTED]'], def: 'Information censurée par la Fondation. Ou par Maël, pour raisons budgétaires.' },
  { anchor: 'classe-objet', terms: ['SAFE', 'EUCLID', 'KETER', 'THAUMIEL', 'NEUTRALIZED'], def: 'Classe de confinement : à quel point l\'objet est difficile à contenir.' },
  { anchor: 'perturbation', terms: ['DARK', 'VLAM', 'KENEQ', 'EKHI', 'AMIDA'], def: 'Classe de perturbation : à quel point l\'objet peut chambouler le Site (de DARK, discret, à AMIDA, catastrophique).' },
  { anchor: 'raretes', terms: ['Rareté'], def: 'La puissance d\'un objet personnalisé : Basique, Bon, Épique, Légendaire ou Exotique.' },
  { anchor: 'hume-shield', terms: ['Hume Shield'], def: 'Bouclier qui protège la plupart des SCP et se recharge quand ils ne prennent plus de dégâts.' },

  // Le plugin
  { anchor: 'global-event', terms: ['Global Events', 'Global Event'], def: 'La règle spéciale tirée au sort au début de chaque partie.' },
  { anchor: 'middle-event', terms: ['Middle Events', 'Middle Event'], def: 'Un événement qui tombe en pleine partie, entre 10 et 16 minutes, dans un peu plus d\'une partie sur trois.' },
  { anchor: 'custom-role', terms: ['rôle personnalisé', 'rôles personnalisés', 'Custom Roles', 'Custom Role'], def: 'Une variante d\'une classe, avec ses propres statistiques, objets et capacités.' },
  { anchor: 'custom-item', terms: ['objets personnalisés', 'objet personnalisé', 'Custom Items', 'Custom Item'], def: 'Un objet anormal ajouté par le serveur.' },
  { anchor: 'capacite', terms: ['capacité active', 'capacités actives', 'capacité passive', 'capacités passives'], def: 'Les pouvoirs des rôles personnalisés : les actives se déclenchent avec une touche, les passives agissent toutes seules.' },
  { anchor: 'piece', terms: ['Gambling Coin'], def: 'La pièce de monnaie : la lancer déclenche un effet au hasard, bon ou mauvais.' },
  { anchor: 'tir-allie', terms: ['tir allié', 'Tir allié'], def: 'Les dégâts entre coéquipiers. Sur Kruaçent, il s\'allume et s\'éteint au fil de la partie.' },
  { anchor: 'renforts', terms: ['vague de renforts', 'vagues de renforts'], def: 'L\'arrivée des MTF ou du Chaos. Une seule vague par camp, sauf exploit.' },
];
