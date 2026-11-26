const path = require('path');
const fs = require('fs');
const matter = require('gray-matter');
const glob = require('fast-glob');

/**
 * Rassemble au build les infos des rôles et des capacités, pour les afficher en cartes
 * (src/components/docs/RoleAbilityCards.tsx) sans rien recopier à la main :
 * - le frontmatter de chaque page (titre, description, type, capacités, version d'ajout…) ;
 * - quelques valeurs lues dans les tableaux des pages (temps de recharge, points de vie).
 * Changer une page met donc les cartes à jour automatiquement.
 */

/** Camps des rôles, dans l'ordre d'affichage. Les couleurs sont celles des bandeaux des pages. */
const TEAMS = [
  { id: 'Class-D', label: 'Classe-D', color: '#FF8E00', text: '#fff' },
  { id: 'Scientist', label: 'Scientifiques', color: '#FFFF7C', text: '#000' },
  { id: 'Guard', label: 'Gardes du Site', color: '#556372', text: '#fff' },
  { id: 'MTF', label: 'Mobile Task Force', color: '#0096FF', text: '#fff' },
  { id: 'ChaosInsurgency', label: 'Insurrection du Chaos', color: '#008F1C', text: '#fff' },
  { id: 'Human', label: 'Rôles humains', color: '#707070', text: '#fff' },
  { id: 'SCP', label: 'SCP', color: '#FF0000', text: '#fff' },
];

/** Valeur d'une ligne de tableau « | **Nom** | valeur | » dans le texte d'une page. */
function tableValue(content, name) {
  const re = new RegExp(`^\\|\\s*\\*\\*${name}\\*\\*\\s*\\|\\s*([^|]+?)\\s*\\|`, 'mi');
  const m = content.match(re);
  return m ? m[1].replace(/\*\*/g, '').trim() : null;
}

/** Statut de la page d'après sa classe de sidebar (obsolète, désactivé). */
function statusOf(data) {
  const c = data.sidebar_class_name || '';
  if (c.includes('sidebar-obsolete')) return 'obsolete';
  if (c.includes('sidebar-desactive')) return 'desactive';
  return null;
}

function addedInOf(data) {
  const v = data.sidebar_custom_props && data.sidebar_custom_props.addedIn;
  return v == null || v === '' ? null : String(v);
}

module.exports = function rolesAbilitiesPlugin(context) {
  const docsDir = path.join(context.siteDir, 'docs/kruacent-exiled');
  const staticDir = path.join(context.siteDir, 'static');

  /** Garde l'icône seulement si le fichier existe vraiment dans static/. */
  const existingImage = (image) =>
    image && fs.existsSync(path.join(staticDir, image.replace(/^\//, ''))) ? image : null;

  async function loadAbilities() {
    const files = await glob('custom-ability/*.{md,mdx}', { cwd: docsDir });
    const abilities = {};
    for (const file of files) {
      const id = path.basename(file).replace(/\.mdx?$/, '');
      if (id === 'index') continue;
      const { data, content } = matter(fs.readFileSync(path.join(docsDir, file), 'utf-8'));
      const props = data.sidebar_custom_props || {};
      abilities[id] = {
        id,
        title: data.title || id,
        description: data.description || '',
        type: props.type || null,
        cooldown: tableValue(content, 'Temps de recharge'),
        duration: tableValue(content, 'Durée'),
        image: existingImage(data.image),
        link: `/docs/kruacent-exiled/custom-ability/${id}`,
        addedIn: addedInOf(data),
        status: statusOf(data),
      };
    }
    return abilities;
  }

  async function loadRoles() {
    const files = await glob('custom-role/*/*.{md,mdx}', { cwd: docsDir });
    return files
      .map((file) => {
        const [, team, name] = file.split('/');
        const { data, content } = matter(fs.readFileSync(path.join(docsDir, file), 'utf-8'));
        const id = name.replace(/\.mdx?$/, '');
        return {
          id: `${team}/${id}`,
          team,
          title: data.title || id,
          description: data.description || '',
          abilities: Array.isArray(data.abilities) ? data.abilities : [],
          hp: tableValue(content, 'Points de vie'),
          link: data.slug || `/docs/kruacent-exiled/custom-role/${team}/${id}`,
          addedIn: addedInOf(data),
          status: statusOf(data),
        };
      })
      .sort((a, b) => {
        const ta = TEAMS.findIndex((t) => t.id === a.team);
        const tb = TEAMS.findIndex((t) => t.id === b.team);
        return ta - tb || a.title.localeCompare(b.title, 'fr');
      });
  }

  return {
    name: 'roles-abilities-plugin',

    async loadContent() {
      return { teams: TEAMS, abilities: await loadAbilities(), roles: await loadRoles() };
    },

    async contentLoaded({ content, actions }) {
      actions.setGlobalData(content);
    },

    getPathsToWatch() {
      return [path.join(docsDir, 'custom-ability/**/*.{md,mdx}'), path.join(docsDir, 'custom-role/**/*.{md,mdx}')];
    },
  };
};
