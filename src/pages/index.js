import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { usePluginData } from '@docusaurus/useGlobalData';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const SECTIONS = [
  { code: 'CR', title: 'Rôles', text: 'Les rôles personnalisés des humains et des SCP.', to: '/docs/articles/CustomRole' },
  { code: 'CI', title: 'Objets', text: 'Les objets anormaux qui traînent dans la facilité.', to: '/docs/articles/CustomItem' },
  { code: 'CA', title: 'Capacités', text: 'Les pouvoirs actifs et passifs des rôles.', to: '/docs/articles/CustomAbility' },
  { code: 'GE', title: 'Global Events', text: 'La règle spéciale tirée au début de chaque partie.', to: '/docs/articles/global-events' },
  { code: 'MAP', title: 'Map', text: 'Pannes du Site, installations et machine à sous.', to: '/docs/articles/map' },
  { code: 'MSC', title: 'Miscellaneous', text: 'Pièces magiques, SCP-914, renforts, paramètres…', to: '/docs/articles/miscelanious' },
  { code: 'LORE', title: 'Lore', text: 'Le personnel du Site et ses incidents.', to: '/docs/articles/lore' },
];

const CATEGORY_LABELS = {
  'global-event': 'Global Event',
  'middle-event': 'Middle Event',
  'custom-item': 'Objet',
  'custom-ability': 'Capacité',
  miscellaneous: 'Misc',
  map: 'Map',
  lore: 'Lore',
};

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
}

function categoryLabel(category) {
  return CATEGORY_LABELS[category] || category.replace(/-/g, ' ');
}

function Hero({ latest }) {
  const { siteConfig } = useDocusaurusContext();
  const banner = useBaseUrl('/img/banner.png');
  const logo = useBaseUrl('/img/logo.png');

  return (
    <header className={styles.hero}>
      <div className={styles.heroBackground} style={{ backgroundImage: `url(${banner})` }} />
      <div className={styles.heroOverlay} />
      <div className={clsx('container', styles.heroContent)}>
        <img src={logo} alt="Logo Kruaçent" className={styles.heroLogo} />
        <span className={styles.heroKicker}>Wiki officiel · SCP: Secret Laboratory</span>
        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
        </Heading>
        <p className={styles.heroSubtitle}>
          Rôles, objets, événements et incidents du serveur de la Team Croissant.
        </p>
        <div className={styles.heroButtons}>
          <Link className="button button--primary button--lg" to="/docs/kruacent-exiled/">
            Explorer le wiki
          </Link>
          <Link className={clsx('button button--lg', styles.ghostButton)} to="/patchnotes/">
            Patchnotes
          </Link>
          <Link className={clsx('button button--lg', styles.ghostButton)} to="/SAF">
            Succès
          </Link>
        </div>
        {latest && (
          <Link to={latest.link} className={styles.versionBadge}>
            <span className={styles.versionDot} />
            Version {latest.version} · {formatDate(latest.date)}
          </Link>
        )}
      </div>
    </header>
  );
}

function Sections() {
  return (
    <section className={styles.section}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>Explorer le Site</Heading>
        <div className={styles.sectionGrid}>
          {SECTIONS.map((s) => (
            <Link key={s.code} to={s.to} className={styles.sectionCard}>
              <span className={styles.sectionCode}>{s.code}</span>
              <span className={styles.sectionName}>{s.title}</span>
              <span className={styles.sectionText}>{s.text}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function LatestPatchnote({ patchnotes }) {
  if (!patchnotes.length) return null;
  const [latest, ...older] = patchnotes;

  return (
    <section className={clsx(styles.section, styles.sectionAlt)}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>Dernière mise à jour</Heading>
        <div className={styles.updateLayout}>
          <Link to={latest.link} className={styles.updateCard}>
            <span className={styles.updateLabel}>Nouveau</span>
            <span className={styles.updateVersion}>v{latest.version}</span>
            <span className={styles.updateDate}>{formatDate(latest.date)}</span>
            <div className={styles.tagRow}>
              {latest.tags.map((tag) => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
            <span className={styles.updateMeta}>{latest.changes} changements</span>
            <span className={styles.updateLink}>Lire les notes →</span>
          </Link>
          <div className={styles.timeline}>
            {older.slice(0, 5).map((p) => (
              <Link key={p.link} to={p.link} className={styles.timelineItem}>
                <span className={styles.timelineVersion}>v{p.version}</span>
                <span className={styles.timelineDate}>{formatDate(p.date)}</span>
              </Link>
            ))}
            <Link to="/patchnotes/" className={styles.timelineAll}>Toutes les versions →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function LatestArticles({ articles }) {
  if (!articles.length) return null;
  return (
    <section className={styles.section}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>Derniers ajouts au wiki</Heading>
        <div className={styles.articleGrid}>
          {articles.map((a) => (
            <Link key={a.link} to={a.link} className={styles.articleCard}>
              <span className={styles.articleCategory}>{categoryLabel(a.category)}</span>
              <span className={styles.articleTitle}>{a.title}</span>
              <span className={styles.articleExcerpt}>{a.excerpt}</span>
              <span className={styles.articleDate}>{formatDate(a.date)}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const data = usePluginData('custom-latest-docs-plugin') || {};
  const patchnotes = data.patchnotes || [];
  const articles = data.articles || [];

  return (
    <Layout title={`Accueil - ${siteConfig.title}`} description="Bienvenue sur le Wiki de Kruaçent">
      <Hero latest={patchnotes[0]} />
      <main>
        <Sections />
        <LatestPatchnote patchnotes={patchnotes} />
        <LatestArticles articles={articles} />
      </main>
    </Layout>
  );
}
