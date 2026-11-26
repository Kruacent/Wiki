import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { usePluginData } from '@docusaurus/useGlobalData';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const CATEGORIES = [
  { key: 'custom-role', title: 'Rôles', text: 'Les rôles personnalisés des humains et des SCP.', to: '/docs/articles/CustomRole' },
  { key: 'scp', title: 'SCP', text: 'Les SCP du serveur, ce qui change et comment les battre.', to: '/docs/articles/scp' },
  { key: 'custom-item', title: 'Objets', text: 'Les objets anormaux que l’on trouve dans la facilité.', to: '/docs/articles/CustomItem' },
  { key: 'custom-ability', title: 'Abilités', text: 'Les abilités actives et passives des rôles.', to: '/docs/articles/CustomAbility' },
  { key: 'global-event', title: 'Global Events', text: 'La règle spéciale tirée au début de chaque partie.', to: '/docs/articles/global-events' },
  { key: 'map', title: 'Map', text: 'Pannes du Site, installations et Gambling Room.', to: '/docs/articles/map' },
  { key: 'miscellaneous', title: 'Miscellaneous', text: 'Pièces, SCP-914, renforts, paramètres et le reste.', to: '/docs/articles/miscelanious' },
  { key: 'lore', title: 'Lore', text: 'Le personnel du Site et ses rapports d’incident.', to: '/docs/articles/lore' },
];

const CATEGORY_LABELS = {
  'global-event': 'Global Event',
  'middle-event': 'Middle Event',
  'custom-item': 'Objet',
  'custom-ability': 'Capacité',
  scp: 'SCP',
  miscellaneous: 'Misc',
  map: 'Map',
  lore: 'Lore',
};

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
}

function pages(n) {
  return `${n} page${n > 1 ? 's' : ''}`;
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const data = usePluginData('custom-latest-docs-plugin') || {};
  const patchnotes = data.patchnotes || [];
  const articles = data.articles || [];
  const counts = data.counts || {};
  const latest = patchnotes[0];
  const logo = useBaseUrl('/img/logo.png');

  return (
    <Layout title={`Accueil - ${siteConfig.title}`} description="Le wiki du serveur SCP: Secret Laboratory Kruaçent">
      <main className="container margin-vert--xl">
        <header className={styles.header}>
          <img src={logo} alt="" className={styles.logo} />
          <div>
            <Heading as="h1" className={styles.title}>Kruaçent</Heading>
            <p className={styles.lead}>
              Le wiki du serveur <em>SCP: Secret Laboratory</em> des Kruacent.
            </p>
            {latest && (
              <p className={styles.version}>
                Dernière version : <Link to={latest.link}>v{latest.version}</Link>, le {formatDate(latest.date)}
              </p>
            )}
          </div>
        </header>

        <section className={styles.section}>
          <Heading as="h2">Parcourir le wiki</Heading>
          <div className={styles.grid}>
            {CATEGORIES.map((c) => (
              <Link key={c.key} to={c.to} className={styles.category}>
                <span className={styles.categoryTitle}>{c.title}</span>
                <span className={styles.categoryText}>{c.text}</span>
                {counts[c.key] > 0 && <span className={styles.categoryCount}>{pages(counts[c.key])}</span>}
              </Link>
            ))}
          </div>
        </section>

        <div className={styles.columns}>
          <section className={styles.section}>
            <Heading as="h2">Dernières mises à jour</Heading>
            <ul className={styles.list}>
              {patchnotes.slice(0, 5).map((p) => (
                <li key={p.link}>
                  <Link to={p.link} className={styles.listTitle}>Version {p.version}</Link>
                  <span className={styles.listMeta}>
                    {formatDate(p.date)}
                    {p.tags.length > 0 && ` · ${p.tags.join(', ')}`}
                  </span>
                </li>
              ))}
            </ul>
            <Link to="/patchnotes/">Toutes les patchnotes →</Link>
          </section>

          <section className={styles.section}>
            <Heading as="h2">Récemment ajouté</Heading>
            <ul className={styles.list}>
              {articles.slice(0, 5).map((a) => (
                <li key={a.link}>
                  <Link to={a.link} className={styles.listTitle}>{a.title}</Link>
                  <span className={styles.listMeta}>
                    {CATEGORY_LABELS[a.category] || a.category} · {formatDate(a.date)}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </Layout>
  );
}
