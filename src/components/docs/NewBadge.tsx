import React from 'react';
import Link from '@docusaurus/Link';
import { usePluginData } from '@docusaurus/useGlobalData';

/**
 * Version d'ajout et badge « Nouveau ».
 *
 * La version d'ajout d'une page se met dans son frontmatter :
 *   sidebar_custom_props:
 *     addedIn: "2.2.1"
 * Une page est « Nouveau » si sa version fait partie des 3 dernières patchnotes.
 * Ces 3 versions sont calculées au build (src/plugins/latest-docs-plugin.js),
 * donc rien à mettre à jour à la main quand une patchnote sort.
 */

/** Les dernières versions (de la plus récente à la plus ancienne). */
export function useLatestVersions(): string[] {
  const data = (usePluginData('custom-latest-docs-plugin') || {}) as { latestVersions?: string[] };
  return data.latestVersions || [];
}

/** La page ajoutée dans cette version est-elle « Nouveau » ? */
export function useIsNew(addedIn?: string | number): boolean {
  const latest = useLatestVersions();
  return addedIn != null && latest.includes(String(addedIn));
}

/** Petite pastille « Nouveau ». N'affiche rien si la version n'est pas récente. */
export function NewBadge({ addedIn, style }: { addedIn?: string | number; style?: React.CSSProperties }) {
  const isNew = useIsNew(addedIn);
  if (!isNew) return null;
  return (
    <span className="badge-nouveau" title={`Ajouté en v${addedIn}`} style={style}>
      Nouveau
    </span>
  );
}

/** Bandeau « Ajouté en vX.Y.Z », avec le badge si la version est récente. */
export default function AddedIn({ version }: { version?: string | number }) {
  if (version == null || version === '') return null;
  const v = String(version);
  return (
    <div className="added-in">
      <span>
        Ajouté en <Link to={`/patchnotes/v${v}`}>v{v}</Link>
      </span>
      <NewBadge addedIn={v} />
    </div>
  );
}
