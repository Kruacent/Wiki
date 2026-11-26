import React, { useEffect, useRef, useState } from 'react';
import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';
import { Archive, archivesOuvertes, memoriser, ouvrir } from '@site/src/utils/secrets';
import styles from './terminal.module.css';

type Ligne = { texte: string; type?: 'saisie' | 'ok' | 'erreur' | 'info' };

const DEMARRAGE: Ligne[] = [
  { texte: 'FONDATION SCP / SITE KRUAÇENT / TERMINAL O5', type: 'info' },
  { texte: 'Connexion établie. Ligne non sécurisée (on a pas le budget).' },
  { texte: 'Saisissez un code d’archive, ou « aide ».' },
];

const AIDE: Ligne[] = [
  { texte: 'Saisissez un code pour ouvrir l’archive qu’il protège.', type: 'info' },
  { texte: '« effacer » efface l’écran.' },
  { texte: '' },
  { texte: 'Post-it collé sur l’écran :', type: 'info' },
  { texte: '  « Le mot de passe de la direction est le numéro de la réclamation que' },
  { texte: '    j’ai refusée, qui est suivi de la page des contrats que je cite toujours. »' },
  { texte: ' - Assistant Noé. »' },
  { texte: '' },
  { texte: 'Les codes ne tiennent compte ni des majuscules, ni des accents, ni des espaces.' },
];

const REFUS = [
  'ACCÈS REFUSÉ.',
  'ACCÈS REFUSÉ. Tentative enregistrée.',
  'ACCÈS REFUSÉ. Le Dr. Omer a été prévenu. Il s’en fiche.',
  'ACCÈS REFUSÉ. Le Dr. Patrique vous recherche.',
  'ACCÈS REFUSÉ. Arrêter la bande passante coûte une blinde.',
  'ACCÈS REFUSÉ. L’Assistant Noé facturera chaque tentative à hauteur de 50 $.',
];

export default function TerminalO5() {
  const [lignes, setLignes] = useState<Ligne[]>(DEMARRAGE);
  const [saisie, setSaisie] = useState('');
  const [occupe, setOccupe] = useState(false);
  const [archive, setArchive] = useState<Archive | null>(null);
  const [ouvertes, setOuvertes] = useState<Archive[]>([]);
  const refus = useRef(0);
  const champ = useRef<HTMLInputElement>(null);
  const ecran = useRef<HTMLDivElement>(null);
  const feuille = useRef<HTMLElement>(null);

  const ecrire = (...nouvelles: Ligne[]) => setLignes((l) => [...l, ...nouvelles]);

  useEffect(() => {
    archivesOuvertes().then(setOuvertes);
    champ.current?.focus();
  }, []);

  useEffect(() => {
    ecran.current?.scrollTo({ top: ecran.current.scrollHeight });
  }, [lignes]);

  useEffect(() => {
    if (archive) feuille.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [archive]);

  async function executer(commande: string) {
    const texte = commande.trim();
    if (!texte) return;
    ecrire({ texte: `> ${texte}`, type: 'saisie' });
    const mot = texte.toLowerCase();
    if (mot === 'aide' || mot === 'help') return ecrire(...AIDE);
    if (mot === 'effacer' || mot === 'clear') return setLignes([]);

    setOccupe(true);
    ecrire({ texte: 'Vérification…' });
    const trouvee = await ouvrir(texte);
    setOccupe(false);
    champ.current?.focus();
    if (!trouvee) {
      ecrire({ texte: REFUS[Math.min(refus.current, REFUS.length - 1)], type: 'erreur' });
      refus.current += 1;
      return;
    }
    refus.current = 0;
    memoriser(texte);
    setArchive(trouvee);
    setOuvertes((liste) => (liste.some((a) => a.id === trouvee.id) ? liste : [...liste, trouvee]));
    ecrire({ texte: `ACCÈS AUTORISÉ · ${trouvee.titre}`, type: 'ok' });
  }

  return (
    <Layout title="Terminal O5" description="Terminal de maintenance du Site.">
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <main className={styles.page}>
        <div className={styles.cadre}>
          <div className={styles.barre}>
            <span>TERMINAL O5</span>
            <span>{ouvertes.length > 0 ? `${ouvertes.length} archive(s) ouverte(s)` : 'aucune archive ouverte'}</span>
          </div>
          <div className={styles.ecran} ref={ecran} onClick={() => champ.current?.focus()}>
            {lignes.map((l, i) => (
              <div key={i} className={l.type ? styles[l.type] : undefined}>
                {l.texte || ' '}
              </div>
            ))}
            <form
              className={styles.invite}
              onSubmit={(e) => {
                e.preventDefault();
                const valeur = saisie;
                setSaisie('');
                executer(valeur);
              }}
            >
              <label htmlFor="terminal-saisie">&gt;</label>
              <input
                id="terminal-saisie"
                ref={champ}
                value={saisie}
                onChange={(e) => setSaisie(e.target.value)}
                disabled={occupe}
                autoComplete="off"
                autoCapitalize="characters"
                spellCheck={false}
                aria-label="Code d’archive ou commande"
              />
            </form>
          </div>
        </div>

        {ouvertes.length > 0 && (
          <nav className={styles.onglets} aria-label="Archives ouvertes">
            {ouvertes.map((a) => (
              <button
                key={a.id}
                type="button"
                className={archive?.id === a.id ? styles.ongletActif : styles.onglet}
                onClick={() => setArchive(a)}
              >
                {a.titre}
              </button>
            ))}
          </nav>
        )}

        {archive && (
          <article className={styles.document} ref={feuille}>
            <p className={styles.tampon}>Archive de la Fondation · Accès autorisé</p>
            <h1>{archive.titre}</h1>
            <div className={styles.contenu} dangerouslySetInnerHTML={{ __html: archive.html }} />
          </article>
        )}
      </main>
    </Layout>
  );
}
