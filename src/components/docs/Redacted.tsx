import React, { useEffect, useState } from 'react';
import { surChangement, texteRevele } from '@site/src/utils/secrets';
import styles from './Redacted.module.css';

/**
 * Texte noirci, dans le style [REDACTED] du wiki.
 *
 * - `<Redacted cle="objets-contact" />` : se révèle tout seul quand le lecteur a ouvert, dans le
 *   Terminal O5, l'archive qui contient ce texte (champ `inline` de l'archive, chiffré).
 *   Le texte n'est donc pas lisible dans le dépôt.
 * - `<Redacted>texte</Redacted>` : se révèle au clic. Le texte est lisible dans le dépôt :
 *   à réserver aux blagues sans enjeu.
 * - `indice="..."` : ce qui s'affiche quand on clique sur un passage encore verrouillé.
 */
export default function Redacted({
  cle,
  indice,
  longueur = 14,
  children,
}: {
  cle?: string;
  indice?: string;
  longueur?: number;
  children?: React.ReactNode;
}) {
  const [revele, setRevele] = useState<React.ReactNode | null>(null);
  const [refus, setRefus] = useState(false);

  useEffect(() => {
    if (!cle) return undefined;
    const verifier = () => texteRevele(cle).then((t) => t && setRevele(t));
    verifier();
    return surChangement(verifier);
  }, [cle]);

  if (revele) {
    return (
      <span className={styles.revele} title="Archive déverrouillée">
        {revele}
      </span>
    );
  }

  const cliquer = () => {
    if (!cle && children) {
      setRevele(children);
      return;
    }
    setRefus(true);
    window.setTimeout(() => setRefus(false), 2600);
  };

  return (
    <span className={styles.conteneur}>
      <button
        type="button"
        className={`${styles.barre} ${refus ? styles.secoue : ''}`}
        onClick={cliquer}
        aria-label="Passage censuré"
        title={!cle && children ? 'Cliquer pour révéler' : 'Passage censuré'}
      >
        {'█'.repeat(longueur)}
      </button>
      {refus && (
        <span className={styles.bulle} role="status">
          ACCÈS REFUSÉ{indice ? ` (${indice})` : ''}
        </span>
      )}
    </span>
  );
}
