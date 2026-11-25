import React from 'react';
import styles from './Statut.module.css';

type Type = 'obsolete' | 'desactive';

const TEXTES: Record<Type, { titre: string; texte: string }> = {
  obsolete: {
    titre: 'Obsolète',
    texte: "Retiré du serveur. Ça n'existe plus en partie, cette page est gardée pour archive.",
  },
  desactive: {
    titre: 'Désactivé',
    texte: "Toujours présent sur le serveur, mais impossible à croiser en partie pour l'instant.",
  },
};

/**
 * Bandeau très visible en haut d'une page qui n'est plus à jour avec le serveur.
 * - `obsolete` : retiré du plugin.
 * - `desactive` : encore dans le plugin, mais ne peut pas apparaître.
 * Ajoutez aussi `sidebar_class_name: sidebar-obsolete` (ou `sidebar-desactive`) dans le frontmatter
 * pour le marquer dans le menu.
 */
export default function Statut({ type = 'obsolete', children }: { type?: Type; children?: React.ReactNode }) {
  const t = TEXTES[type];
  return (
    <div className={`${styles.statut} ${styles[type]}`} role="note">
      <span className={styles.titre}>{t.titre}</span>
      <div className={styles.texte}>
        <strong>{t.texte}</strong>
        {children && <div className={styles.raison}>{children}</div>}
      </div>
    </div>
  );
}
