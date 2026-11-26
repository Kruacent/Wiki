/**
 * Outils partagés autour des patchnotes, utilisés :
 * - au build, par src/plugins/latest-docs-plugin.js (lignes de changements, dernières versions) ;
 * - dans le navigateur, par PatchnoteHistory (historique en bas des pages) ;
 * En CommonJS pour pouvoir être utilisé partout.
 */

/** Nombre de versions considérées comme « nouvelles » (badge « Nouveau »). */
const NB_VERSIONS_NOUVELLES = 3;

/** Mots trop génériques pour identifier une page. */
const IGNORED = new Set(['scp', 'role', 'item', 'version', 'le', 'la', 'les', 'the']);

/**
 * Mots qui, placés juste avant un nom, désignent un autre objet
 * (« True Divine Pills » n'est pas « Divine Pills »).
 */
const PREFIXES_AUTRE_OBJET = ['true'];

function normalize(text) {
  return text
    // « DivinePills » → « Divine Pills », « FriendMaker » → « Friend Maker »
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

/** Transforme les noms d'une page en termes de recherche (« SCP-1049-KR (Molotov) » → « molotov », etc.). */
function termsFrom(names) {
  const terms = new Set();
  for (const name of names) {
    if (!name) continue;
    const inParens = name.match(/\(([^)]+)\)/);
    const candidates = [name, name.replace(/\([^)]*\)/g, ''), inParens ? inParens[1] : ''];
    for (const candidate of candidates) {
      const term = normalize(candidate).replace(/^(le|la|les|l) /, '');
      if (term.length >= 4 && !IGNORED.has(term)) terms.add(term);
    }
  }
  return [...terms];
}

/** La ligne de patchnote parle-t-elle de la page (un de ses termes) ? */
function mentions(line, terms) {
  const text = ` ${normalize(line)} `;
  // La ligne parle d'un autre objet (« True Divine Pills : … ») : on l'ignore.
  if (PREFIXES_AUTRE_OBJET.some((p) => terms.some((term) => text.startsWith(` ${p} ${term} `)))) return false;
  return terms.some((term) => {
    // Le nom doit apparaître au moins une fois sans être précédé d'un préfixe d'un autre objet.
    const parts = text.split(` ${term} `);
    for (let i = 0; i < parts.length - 1; i++) {
      const before = parts[i].trim().split(' ').pop() || '';
      if (!PREFIXES_AUTRE_OBJET.includes(before)) return true;
    }
    return false;
  });
}

/**
 * Lignes de changements d'une patchnote : { section, text } en texte brut.
 * Une puce qui se termine par « : » et qui a des sous-puces (« - SCP-035 : » puis « - Vie augmentée »)
 * n'est pas gardée seule : son nom est ajouté devant chaque sous-puce (« SCP-035 : Vie augmentée »).
 * Sans ça, l'historique des pages affichait des puces vides.
 */
function extractLines(content) {
  const lines = [];
  let section = '';
  /** Puces parentes en cours : { indent, label, hasChild, section }. */
  const parents = [];

  const closeParents = (indent) => {
    while (parents.length && parents[parents.length - 1].indent >= indent) {
      const parent = parents.pop();
      // Une puce « Titre : » sans sous-puce reste une ligne normale.
      if (!parent.hasChild) lines.push({ section: parent.section, text: `${parent.label} :` });
    }
  };

  for (const raw of content.split(/\r?\n/)) {
    const heading = raw.match(/^##\s+(.+?)\s*:?\s*$/);
    if (heading && !raw.startsWith('###')) {
      closeParents(-1);
      section = heading[1].replace(/\s*:$/, '');
      continue;
    }
    const item = raw.match(/^(\s*)[-*]\s+(.+)$/);
    if (!item) continue;
    const indent = item[1].replace(/\t/g, '    ').length;
    const text = item[2]
      .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
      .replace(/[*_`]/g, '')
      .trim();
    if (!text) continue;

    closeParents(indent);
    // Le label de la dernière puce parente contient déjà ceux de ses propres parents.
    const prefix = parents.length ? parents[parents.length - 1].label : '';
    parents.forEach((p) => {
      p.hasChild = true;
    });

    if (/:\s*$/.test(text)) {
      const label = text.replace(/\s*:\s*$/, '');
      parents.push({ indent, label: prefix ? `${prefix} › ${label}` : label, hasChild: false, section });
      continue;
    }
    lines.push({ section, text: prefix ? `${prefix} : ${text}` : text });
  }
  closeParents(-1);
  return lines;
}

/** Compare deux versions « X.Y.Z » (négatif si a < b). */
function compareVersions(a, b) {
  const pa = String(a).split('.').map(Number);
  const pb = String(b).split('.').map(Number);
  for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
    const d = (pa[i] || 0) - (pb[i] || 0);
    if (d !== 0) return d;
  }
  return 0;
}

/** Les N dernières versions, de la plus récente à la plus ancienne. */
function latestVersions(versions, n = NB_VERSIONS_NOUVELLES) {
  return [...new Set(versions.filter(Boolean))].sort((a, b) => compareVersions(b, a)).slice(0, n);
}

module.exports = {
  termsFrom,
  mentions,
  extractLines,
  latestVersions,
};
