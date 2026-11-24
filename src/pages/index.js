import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { usePluginData } from '@docusaurus/useGlobalData';
import Layout from '@theme/Layout';
import styles from './index.module.css';

/* ───────────── Données ───────────── */

const SOMMAIRE = [
  { n: '01', key: 'custom-role', title: 'Rôles personnalisés', to: '/docs/articles/CustomRole' },
  { n: '02', key: 'custom-item', title: 'Objets anormaux', to: '/docs/articles/CustomItem' },
  { n: '03', key: 'custom-ability', title: 'Capacités', to: '/docs/articles/CustomAbility' },
  { n: '04', key: 'global-event', title: 'Global Events', to: '/docs/articles/global-events' },
  { n: '05', key: 'map', title: 'Map', to: '/docs/articles/map' },
  { n: '06', key: 'miscellaneous', title: 'Miscellaneous', to: '/docs/articles/miscelanious' },
  { n: '07', key: 'lore', title: 'Lore', to: '/docs/articles/lore' },
];

/* Global Events avec leur poids réel, pour le tirage. */
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

const CASSIE = [
  'Warning. Failure of all lights in Heavy Containment Zone. In 5 seconds.',
  'Mobile Task Force Unit Epsilon-11 has entered the facility.',
  'Alpha Warhead emergency detonation sequence engaged.',
  'Warning. Failure of all doors in Entrance Zone. In 5 seconds.',
  'SCP 69 420 has been contained successfully.',
];

const PERSONNEL = [
  { name: 'Facility Manager Maël', role: 'Direction', status: 'En pause pizza', tone: 'warn' },
  { name: 'Dr. Patrique', role: 'Recherche', status: 'En service', tone: 'ok' },
  { name: 'Dr. Omer', role: 'Recherche', status: 'En service (hélas)', tone: 'warn' },
  { name: 'Assistant Noé', role: 'Administration', status: 'En réunion budgétaire', tone: 'ok' },
  { name: 'Cpt. Romain', role: 'MTF Epsilon-11', status: 'Mutation refusée', tone: 'warn' },
  { name: 'Sgt. Dorian', role: 'MTF Epsilon-11', status: 'En service', tone: 'ok' },
  { name: 'Sgt. Alex', role: 'MTF Epsilon-11', status: 'Quelque part dans la Light', tone: 'warn' },
  { name: 'Sgt. Caedit', role: 'MTF Epsilon-11', status: "À l'infirmerie", tone: 'bad' },
];

const ARCHIVES = [
  { who: 'Facility Manager Maël', line: 'En faillite ? Quel mot vulgaire. Je préfère le terme de « flexibilité monétaire négative ».', to: '/docs/kruacent-exiled/custom-item/presse-purée' },
  { who: 'Assistant Noé', line: "Statistiquement, Caedit absorbe 94 % de la malchance de l'escouade.", to: '/docs/kruacent-exiled/lore/le-premier-jour-du-sgt-caedit' },
  { who: 'Dr. Omer', line: '…Un appareil à raclette. Douze poêlons. Version professionnelle.', to: '/docs/kruacent-exiled/lore/la-nuit-de-la-grande-panne' },
  { who: 'Dr. Omer', line: 'La maison gagne toujours, Romain.', to: '/docs/kruacent-exiled/map/gambling-room' },
  { who: 'Sgt. Dorian', line: "Statistiquement, c'est Caedit.", to: '/docs/kruacent-exiled/lore/le-casino-de-la-salle-173' },
  { who: 'Dr. Patrique', line: 'Omer. SCP-049-C suit les flèches.', to: '/docs/kruacent-exiled/lore/le-docteur-qui-ne-soignait-plus' },
];

/* ───────────── Utilitaires ───────────── */

function formatDate(iso, long = false) {
  return new Date(iso).toLocaleDateString(
    'fr-FR',
    long ? { day: 'numeric', month: 'long', year: 'numeric' } : { day: '2-digit', month: '2-digit', year: 'numeric' },
  );
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

/* ───────────── Composants ───────────── */

/** Annonces de C.A.S.S.I.E. tapées lettre par lettre. */
function CassieTicker() {
  const [text, setText] = useState('');

  useEffect(() => {
    let message = 0;
    let char = 0;
    let pause = 0;
    const timer = setInterval(() => {
      const current = CASSIE[message];
      if (char <= current.length) {
        setText(current.slice(0, char));
        char += 1;
      } else if (pause < 40) {
        pause += 1;
      } else {
        message = (message + 1) % CASSIE.length;
        char = 0;
        pause = 0;
      }
    }, 45);
    return () => clearInterval(timer);
  }, []);

  return (
    <span className={styles.ticker}>
      <span className={styles.tickerLabel}>C.A.S.S.I.E.</span>
      <span className={styles.tickerText}>{text}<span className={styles.caret}>_</span></span>
    </span>
  );
}

/** Mot caviardé : barre noire, révélé au survol ou au clic. */
function Redacted({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      type="button"
      className={clsx(styles.redacted, open && styles.redactedOpen)}
      onClick={() => setOpen(!open)}
      title="Accès niveau 2 requis (ou un clic)"
    >
      {children}
    </button>
  );
}

function EventDraw() {
  const [shown, setShown] = useState(null);
  const [result, setResult] = useState(null);
  const [rolling, setRolling] = useState(false);
  const [redacted, setRedacted] = useState(false);
  const timer = useRef(null);

  useEffect(() => () => clearInterval(timer.current), []);

  const draw = () => {
    if (rolling) return;
    const final = drawEvent();
    const isRedacted = Math.random() < 0.1;
    let ticks = 0;
    setRolling(true);
    setResult(null);
    timer.current = setInterval(() => {
      ticks += 1;
      setShown(GLOBAL_EVENTS[Math.floor(Math.random() * GLOBAL_EVENTS.length)]);
      if (ticks >= 18) {
        clearInterval(timer.current);
        setShown(final);
        setResult(final);
        setRedacted(isRedacted);
        setRolling(false);
      }
    }, 65);
  };

  return (
    <div className={styles.draw}>
      <div className={clsx(styles.drawScreen, rolling && styles.drawRolling)}>
        {shown ? (
          <>
            <span className={styles.drawPrefix}>Global Events: </span>
            <span style={{ color: IMPACT_COLORS[shown.impact] }}>
              [{shown.impact}]{result && redacted ? '[REDACTED]' : shown.text}
            </span>
          </>
        ) : (
          <span className={styles.drawIdle}>En attente du tirage de la prochaine partie</span>
        )}
        <span className={styles.caret}>_</span>
      </div>
      <div className={styles.drawActions}>
        <button type="button" className={styles.drawButton} onClick={draw} disabled={rolling}>
          {rolling ? 'Tirage…' : result ? 'Relancer' : 'Tirer un Global Event'}
        </button>
        {result && (
          <Link to={result.to} className={styles.drawLink}>
            {redacted ? "Découvrir lequel c'était" : `Voir ${result.name}`} →
          </Link>
        )}
      </div>
      <p className={styles.note}>
        Les mêmes chances qu'en jeu. Une fois sur dix, la Fondation refuse de vous dire ce qui vous attend.
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

/* ───────────── Page ───────────── */

export default function Home() {
  const data = usePluginData('custom-latest-docs-plugin') || {};
  const patchnotes = data.patchnotes || [];
  const counts = data.counts || {};
  const latest = patchnotes[0];
  const totalPages = Object.values(counts).reduce((s, n) => s + n, 0);
  const logo = useBaseUrl('/img/logo.png');
  const banner = useBaseUrl('/img/banner.png');
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={`Accueil - ${siteConfig.title}`} description="Le wiki du serveur SCP: Secret Laboratory de la Team Croissant">
      <main className={styles.page}>
        <div className={styles.statusBar}>
          <span className={styles.statusSite}>FONDATION SCP · SITE KRUAÇENT</span>
          <CassieTicker />
          {latest && <span className={styles.statusBuild}>BUILD v{latest.version}</span>}
        </div>

        <div className={clsx('container', styles.container)}>
          {/* ───── Fiche de l'objet ───── */}
          <article className={styles.sheet}>
            <header className={styles.sheetHeader}>
              <img src={logo} alt="" className={styles.logo} />
              <div>
                <p className={styles.org}>Fondation SCP</p>
                <p className={styles.motto}>Sécuriser · Contenir · Protéger</p>
              </div>
              <p className={styles.docRef}>Document KR-001<br />Accès niveau 1</p>
            </header>

            <div className={styles.sheetBody}>
              <div className={styles.sheetMain}>
                <p className={styles.itemLabel}>Objet n° : SCP-KR</p>
                <h1 className={styles.title}>Kruaçent</h1>

                <dl className={styles.classification}>
                  <div>
                    <dt>Classe</dt>
                    <dd><span className={styles.keter}>Keter</span></dd>
                  </div>
                  <div>
                    <dt>Statut</dt>
                    <dd>Non confiné</dd>
                  </div>
                  <div>
                    <dt>Révision</dt>
                    <dd>{latest ? `v${latest.version} · ${formatDate(latest.date)}` : '-'}</dd>
                  </div>
                  <div>
                    <dt>Documents</dt>
                    <dd>{totalPages} pages</dd>
                  </div>
                </dl>

                <h2 className={styles.sheetHeading}>Procédures de confinement spéciales</h2>
                <p className={styles.sheetText}>
                  Kruaçent ne peut pas être confiné. Avant toute interaction, le personnel doit régler ses touches dans
                  les <Link to="/docs/kruacent-exiled/miscellaneous/parametres">paramètres du serveur</Link>. Il est
                  formellement interdit de confier une pièce au Sgt. Caedit.
                </p>

                <h2 className={styles.sheetHeading}>Description</h2>
                <p className={styles.sheetText}>
                  Kruaçent est un serveur <em>SCP: Secret Laboratory</em> exploité par la <Redacted>Team Croissant</Redacted>.
                  Il ajoute au jeu de base des rôles, des objets anormaux, des événements aléatoires et un nombre
                  préoccupant de <Redacted>pizzas à l'ananas</Redacted>. Les effets observés sur le personnel incluent
                  la malchance chronique, les téléportations involontaires et <Redacted>la perte de cartes de Capitaine</Redacted>.
                </p>
                <p className={styles.hint}>Passages caviardés : accès niveau 2 requis. Ou un clic.</p>

                <div className={styles.actions}>
                  <Link to="/docs/kruacent-exiled/" className={styles.primary}>Ouvrir le wiki</Link>
                  <Link to="/patchnotes/" className={styles.secondary}>Patchnotes</Link>
                  <Link to="/SAF" className={styles.secondary}>Succès</Link>
                </div>
              </div>

              <aside className={styles.annex}>
                <p className={styles.annexLabel}>Annexe A · Surveillance</p>
                <div className={styles.camera}>
                  <img src={banner} alt="Image de la caméra de surveillance du Site" />
                  <span className={styles.cameraLabel}>CAM-04 · <span className={styles.rec}>● REC</span></span>
                </div>
                <p className={styles.annexText}>
                  Document relu et validé par la direction. Une tache de sauce tomate n'invalide pas ce document.
                </p>
                <p className={styles.signature}>Facility Manager Maël</p>
                <span className={styles.stamp}>Approuvé</span>
              </aside>
            </div>
          </article>

          {/* ───── Index ───── */}
          <section className={styles.block}>
            <h2 className={styles.blockTitle}>Index des documents</h2>
            <ol className={styles.toc}>
              {SOMMAIRE.map((s) => (
                <li key={s.n}>
                  <Link to={s.to} className={styles.tocLink}>
                    <span className={styles.tocNumber}>{s.n}</span>
                    <span className={styles.tocTitle}>{s.title}</span>
                    <span className={styles.tocDots} aria-hidden="true" />
                    <span className={styles.tocCount}>
                      {counts[s.key] || 0} doc{(counts[s.key] || 0) > 1 ? 's' : ''}
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </section>

          {/* ───── Tirage + journal ───── */}
          <section className={clsx(styles.block, styles.split)}>
            <div>
              <h2 className={styles.blockTitle}>Tirage de la prochaine partie</h2>
              <EventDraw />
            </div>
            <div>
              <h2 className={styles.blockTitle}>Journal des révisions</h2>
              <ul className={styles.log}>
                {patchnotes.slice(0, 6).map((p, i) => (
                  <li key={p.link}>
                    <Link to={p.link} className={styles.logLine}>
                      <span className={styles.logDate}>{formatDate(p.date)}</span>
                      <span className={styles.logVersion}>v{p.version}</span>
                      <span className={styles.logTags}>{p.tags.join(' · ')}</span>
                      {i === 0 && <span className={styles.logNew}>Nouveau</span>}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link to="/patchnotes/" className={styles.more}>Toutes les patchnotes →</Link>
            </div>
          </section>

          {/* ───── Personnel ───── */}
          <section className={styles.block}>
            <div className={styles.blockHead}>
              <h2 className={styles.blockTitle}>Personnel en service</h2>
              <Link to="/docs/kruacent-exiled/lore/personnel" className={styles.more}>Fiches du personnel →</Link>
            </div>
            <ul className={styles.badges}>
              {PERSONNEL.map((p) => (
                <li key={p.name} className={styles.badge}>
                  <span className={styles.badgeRole}>{p.role}</span>
                  <span className={styles.badgeName}>{p.name}</span>
                  <span className={clsx(styles.badgeStatus, styles[`tone_${p.tone}`])}>{p.status}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* ───── Archives ───── */}
          <section className={styles.block}>
            <h2 className={styles.blockTitle}>Extrait des archives</h2>
            <Archive />
          </section>
        </div>
      </main>
    </Layout>
  );
}
