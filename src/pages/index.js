import { useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { usePluginData } from '@docusaurus/useGlobalData';
import Layout from '@theme/Layout';
import styles from './index.module.css';

/* Sommaire du wiki, présenté comme la table des matières d'un dossier. */
const SOMMAIRE = [
  { n: '01', title: 'Rôles personnalisés', note: 'Classe-D trop musclé, garde asocial, SCP-035…', to: '/docs/articles/CustomRole' },
  { n: '02', title: 'Objets anormaux', note: 'Grenades qui soignent, drone, pistolet TP…', to: '/docs/articles/CustomItem' },
  { n: '03', title: 'Capacités', note: 'Actives, passives, et comment les utiliser', to: '/docs/articles/CustomAbility' },
  { n: '04', title: 'Global Events', note: 'La règle spéciale de chaque partie', to: '/docs/articles/global-events' },
  { n: '05', title: 'Map', note: 'Pannes, ascenseur de la Gate A, machine à sous', to: '/docs/articles/map' },
  { n: '06', title: 'Miscellaneous', note: 'Pièces, SCP-914, renforts, paramètres', to: '/docs/articles/miscelanious' },
  { n: '07', title: 'Lore', note: 'Le personnel du Site et ses incidents', to: '/docs/articles/lore' },
];

/* Global Events avec leur poids réel, pour le tirage de la page d'accueil. */
const GLOBAL_EVENTS = [
  { name: 'nothing', impact: 'VL', text: "y'a r", weight: 10, to: '/docs/kruacent-exiled/global-event/R' },
  { name: 'Speed', impact: 'VH', text: 'Gas! gas! gas!', weight: 5, to: '/docs/kruacent-exiled/global-event/Speed' },
  { name: 'RandomSpawn', impact: 'H', text: 'Les spawns sont random', weight: 5, to: '/docs/kruacent-exiled/global-event/RandomSpawn' },
  { name: 'Blitz', impact: 'L', text: 'La Luftwaffe arrive!', weight: 4, to: '/docs/kruacent-exiled/global-event/Blitz' },
  { name: 'OpenBar', impact: 'M', text: "j'espère que vous avez pas prévu de kampé", weight: 3, to: '/docs/kruacent-exiled/global-event/OpenBar' },
  { name: 'Impostor', impact: 'H', text: 'Ne vous fiez pas aux apparences !', weight: 2, to: '/docs/kruacent-exiled/global-event/Impostor' },
  { name: 'Kaboom', impact: 'M', text: 'Les portes sont piegés attention!', weight: 2, to: '/docs/kruacent-exiled/global-event/Kaboom' },
  { name: 'ItemRain', impact: 'M', text: 'Il pleut des items !!', weight: 1, to: '/docs/kruacent-exiled/global-event/ItemRain' },
  { name: 'KIWIS', impact: 'M', text: "Kill It While It's Small", weight: 1, to: '/docs/kruacent-exiled/global-event/KIWIS' },
  { name: 'Librarby', impact: 'M', text: 'Ne parlez pas trop fort sinon vous subirez les conséquences !', weight: 1, to: '/docs/kruacent-exiled/global-event/Librarby' },
  { name: 'RollBack', impact: 'H', text: 'Shit the server is lagging', weight: 1, to: '/docs/kruacent-exiled/global-event/RollBack' },
  { name: 'System Malfunction', impact: 'VL', text: 'System Malfunction', weight: 1, to: '/docs/kruacent-exiled/global-event/SystemMalfunction' },
];

const IMPACT_COLORS = { VL: '#d8d8ff', L: '#d8e8f0', M: '#d8fcde', H: '#fbfbd8', VH: '#f0e8d8', I: '#ffd8d8' };

/* Extraits des archives, tirés des rapports d'incident du wiki. */
const ARCHIVES = [
  { who: 'Manager Maël', line: "En faillite ? Quel mot vulgaire. Je préfère le terme de « flexibilité monétaire négative ».", to: '/docs/kruacent-exiled/custom-item/presse-purée' },
  { who: 'Assistant Noé', line: 'Statistiquement, Caedit absorbe 94 % de la malchance de l\'escouade.', to: '/docs/kruacent-exiled/lore/le-premier-jour-du-sgt-caedit' },
  { who: 'Dr. Omer', line: '...Un appareil à raclette. Douze poêlons. Version professionnelle.', to: '/docs/kruacent-exiled/lore/la-nuit-de-la-grande-panne' },
  { who: 'Dr. Omer', line: 'La maison gagne toujours, Romain.', to: '/docs/kruacent-exiled/map/gambling-room' },
  { who: 'Sgt. Dorian', line: 'Statistiquement, c\'est Caedit.', to: '/docs/kruacent-exiled/lore/le-casino-de-la-salle-173' },
  { who: 'Dr. Patrique', line: 'Omer. SCP-049-C suit les flèches.', to: '/docs/kruacent-exiled/lore/le-docteur-qui-ne-soignait-plus' },
];

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

function drawEvent() {
  const total = GLOBAL_EVENTS.reduce((s, e) => s + e.weight, 0);
  let roll = Math.random() * total;
  for (const e of GLOBAL_EVENTS) {
    roll -= e.weight;
    if (roll < 0) return e;
  }
  return GLOBAL_EVENTS[0];
}

function EventDraw() {
  const [event, setEvent] = useState(null);
  const [redacted, setRedacted] = useState(false);

  const draw = () => {
    setEvent(drawEvent());
    setRedacted(Math.random() < 0.1);
  };

  return (
    <div className={styles.draw}>
      <div className={styles.drawScreen}>
        {event ? (
          <>
            <span className={styles.drawPrefix}>Global Events: </span>
            <span style={{ color: IMPACT_COLORS[event.impact] }}>
              [{event.impact}]{redacted ? '[REDACTED]' : event.text}
            </span>
          </>
        ) : (
          <span className={styles.drawIdle}>En attente du tirage de la prochaine partie_</span>
        )}
      </div>
      <div className={styles.drawActions}>
        <button type="button" className={styles.drawButton} onClick={draw}>
          {event ? 'Relancer' : 'Tirer un Global Event'}
        </button>
        {event && (
          <Link to={event.to} className={styles.drawLink}>
            {redacted ? 'Découvrir lequel c\'était' : `Voir ${event.name}`} →
          </Link>
        )}
      </div>
      <p className={styles.drawNote}>
        Même tirage qu'en jeu, avec les vraies chances. Une fois sur dix, la Fondation refuse de vous dire ce qui vous attend.
      </p>
    </div>
  );
}

function Archive() {
  const [index, setIndex] = useState(0);
  const quote = ARCHIVES[index];
  return (
    <figure className={styles.archive}>
      <blockquote>{quote.line}</blockquote>
      <figcaption>
        <span>{quote.who}</span>
        <span className={styles.archiveActions}>
          <Link to={quote.to}>Lire le rapport</Link>
          <button type="button" onClick={() => setIndex((index + 1) % ARCHIVES.length)}>
            Extrait suivant
          </button>
        </span>
      </figcaption>
    </figure>
  );
}

export default function Home() {
  const data = usePluginData('custom-latest-docs-plugin') || {};
  const patchnotes = data.patchnotes || [];
  const latest = patchnotes[0];
  const logo = useBaseUrl('/img/logo.png');
  const banner = useBaseUrl('/img/banner.png');
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={`Accueil - ${siteConfig.title}`} description="Le wiki du serveur SCP: Secret Laboratory de la Team Croissant">
      <main className={styles.page}>
        <div className={styles.statusBar}>
          <span>FONDATION SCP · SITE KRUAÇENT</span>
          <span>TERMINAL PUBLIC</span>
          {latest && <span>BUILD v{latest.version}</span>}
        </div>

        <div className={clsx('container', styles.container)}>
          {/* ── En-tête du dossier ── */}
          <section className={styles.header}>
            <div className={styles.headerText}>
              <img src={logo} alt="" className={styles.logo} />
              <p className={styles.reference}>DOSSIER N° KR-001 · ACCÈS NIVEAU 1</p>
              <h1 className={styles.title}>Kruaçent</h1>
              <p className={styles.lead}>
                Le wiki du serveur <em>SCP: Secret Laboratory</em> de la Team Croissant. Tout ce que le serveur ajoute au jeu,
                expliqué par le personnel du Site, qui n'en assume pas la responsabilité.
              </p>
              <div className={styles.links}>
                <Link to="/docs/kruacent-exiled/" className={styles.primaryLink}>Ouvrir le wiki</Link>
                <Link to="/docs/kruacent-exiled/miscellaneous/parametres">Nouveau ? Réglez vos touches</Link>
              </div>
            </div>

            <div className={styles.memo}>
              <div className={styles.camera}>
                <img src={banner} alt="Caméra de surveillance du Site" />
                <span className={styles.cameraLabel}>CAM-04 · REC ●</span>
              </div>
              <p className={styles.memoText}>
                Ce wiki a été relu et validé par la direction. Une tache de sauce tomate n'invalide pas ce document.
              </p>
              <p className={styles.memoSign}>Facility Manager Maël</p>
              <span className={styles.stamp}>Approuvé</span>
            </div>
          </section>

          {/* ── Sommaire ── */}
          <section className={styles.block}>
            <h2 className={styles.blockTitle}>Sommaire</h2>
            <ol className={styles.toc}>
              {SOMMAIRE.map((s) => (
                <li key={s.n}>
                  <Link to={s.to} className={styles.tocLink}>
                    <span className={styles.tocNumber}>{s.n}</span>
                    <span className={styles.tocTitle}>{s.title}</span>
                    <span className={styles.tocDots} aria-hidden="true" />
                    <span className={styles.tocNote}>{s.note}</span>
                  </Link>
                </li>
              ))}
            </ol>
          </section>

          {/* ── Tirage + journal ── */}
          <section className={clsx(styles.block, styles.split)}>
            <div>
              <h2 className={styles.blockTitle}>Tirage de la prochaine partie</h2>
              <EventDraw />
            </div>
            <div>
              <h2 className={styles.blockTitle}>Journal des mises à jour</h2>
              <ul className={styles.log}>
                {patchnotes.slice(0, 6).map((p, i) => (
                  <li key={p.link}>
                    <Link to={p.link} className={styles.logLine}>
                      <span className={styles.logDate}>{formatDate(p.date)}</span>
                      <span className={styles.logVersion}>v{p.version}</span>
                      <span className={styles.logTags}>{p.tags.join(' · ')}</span>
                      {i === 0 && <span className={styles.logNew}>NOUVEAU</span>}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link to="/patchnotes/" className={styles.more}>Toutes les patchnotes →</Link>
            </div>
          </section>

          {/* ── Extrait des archives ── */}
          <section className={styles.block}>
            <h2 className={styles.blockTitle}>Extrait des archives</h2>
            <Archive />
          </section>
        </div>
      </main>
    </Layout>
  );
}
