/**
 * Plugin remark : lie la première occurrence de chaque terme du glossaire
 * (src/data/glossary.js) vers sa définition sur la page Glossaire.
 *
 * Règles :
 * - une seule fois par terme et par page (les variantes d'un terme comptent ensemble) ;
 * - jamais dans les titres, les liens, le code, les citations (rapports d'incident),
 *   ni dans les composants JSX : le ton des histoires reste intact ;
 * - pas sur la page Glossaire elle-même, ni dans le Lore et les Archives.
 * Le lien porte la définition courte en infobulle (attribut title).
 */
const fs = require('fs');
const path = require('path');
const allEntries = require('../data/glossary');

const GLOSSARY_URL = '/docs/kruacent-exiled/glossaire';
const GLOSSARY_FILE = path.join(__dirname, '../../docs/kruacent-exiled/glossaire.mdx');

// Sécurité : un terme dont l'ancre n'existe plus sur la page Glossaire n'est pas lié
// (sinon le build signale des ancres cassées). On prévient dans la console du build.
const glossaryPage = fs.existsSync(GLOSSARY_FILE) ? fs.readFileSync(GLOSSARY_FILE, 'utf8') : '';
const glossary = allEntries.filter((entry) => glossaryPage.includes(`{#${entry.anchor}}`));
const orphans = allEntries.filter((entry) => !glossary.includes(entry)).map((entry) => entry.anchor);
if (orphans.length) {
  console.warn(`[glossaire] Ancres absentes de glossaire.mdx, termes non liés : ${orphans.join(', ')}`);
}

/** Types de nœuds dans lesquels on ne descend pas. */
const SKIP = new Set([
  'heading',
  'link',
  'linkReference',
  'definition',
  'inlineCode',
  'code',
  'blockquote',
  'html',
  'mdxjsEsm',
  'mdxFlowExpression',
  'mdxTextExpression',
  'mdxJsxFlowElement',
  'mdxJsxTextElement',
]);

/** Pages où l'on ne met aucun lien automatique. */
const EXCLUDED_PATHS = [/[\\/]glossaire\.mdx?$/, /[\\/]lore[\\/]/, /[\\/]archives[\\/]/];

const escapeRegExp = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// Toutes les variantes, de la plus longue à la plus courte (« Global Events » avant « Global Event »).
const ENTRIES = glossary
  .flatMap((entry) => entry.terms.map((term) => ({ term, entry })))
  .sort((a, b) => b.term.length - a.term.length);

// Un terme ne doit pas être collé à une lettre, un chiffre ou un tiret (« MTF » oui, « MTFs » non).
const PATTERN = new RegExp(
  `(?<![\\p{L}\\p{N}-])(${ENTRIES.map((e) => escapeRegExp(e.term)).join('|')})(?![\\p{L}\\p{N}])`,
  'gu',
);

function linkify(text, used) {
  const parts = [];
  let last = 0;
  PATTERN.lastIndex = 0;
  let match;
  while ((match = PATTERN.exec(text)) !== null) {
    const found = ENTRIES.find((e) => e.term === match[1]);
    if (!found || used.has(found.entry.anchor)) continue;
    used.add(found.entry.anchor);
    if (match.index > last) parts.push({ type: 'text', value: text.slice(last, match.index) });
    parts.push({
      type: 'link',
      url: `${GLOSSARY_URL}#${found.entry.anchor}`,
      title: found.entry.def,
      data: { hProperties: { className: 'glossary-link' } },
      children: [{ type: 'text', value: match[1] }],
    });
    last = match.index + match[1].length;
  }
  if (parts.length === 0) return null;
  if (last < text.length) parts.push({ type: 'text', value: text.slice(last) });
  return parts;
}

function walk(node, used) {
  if (!node.children) return;
  for (let i = 0; i < node.children.length; i++) {
    const child = node.children[i];
    if (SKIP.has(child.type)) continue;
    if (child.type === 'text') {
      const parts = linkify(child.value, used);
      if (parts) {
        node.children.splice(i, 1, ...parts);
        i += parts.length - 1;
      }
      continue;
    }
    walk(child, used);
  }
}

module.exports = function remarkGlossary() {
  return (tree, file) => {
    const path = file.path || (file.history && file.history[0]) || '';
    if (EXCLUDED_PATHS.some((re) => re.test(path))) return;
    walk(tree, new Set());
  };
};
