import React from 'react';
import Link from '@docusaurus/Link';
import { usePluginData } from '@docusaurus/useGlobalData';
import { termsFrom, mentions } from '@site/src/utils/patchnotes';

interface PatchnoteLine {
  section: string;
  text: string;
}

interface Patchnote {
  version: string;
  link: string;
  date: string;
  lines: PatchnoteLine[];
}

// Même logique qu'au build : voir src/utils/patchnotes.js.

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
}

interface Props {
  names: string[];
}

/** Liste des patchnotes qui mentionnent la page, de la plus récente à la plus ancienne. */
export default function PatchnoteHistory({ names }: Props) {
  const data = (usePluginData('custom-latest-docs-plugin') || {}) as { patchnotes?: Patchnote[] };
  const terms = termsFrom(names);

  const history = (data.patchnotes || [])
    .map((p) => ({ ...p, matches: (p.lines || []).filter((l) => mentions(l.text, terms)) }))
    .filter((p) => p.matches.length > 0);

  return (
    <section
      style={{
        marginTop: '2rem',
        padding: '1rem 1.25rem',
        border: '1px solid var(--ifm-color-emphasis-300)',
        borderRadius: 'var(--ifm-card-border-radius)',
      }}
    >
      <strong style={{ display: 'block', marginBottom: '0.5rem' }}>Historique des mises à jour</strong>
      {history.length === 0 ? (
        <span style={{ fontSize: '0.9rem', color: 'var(--ifm-color-emphasis-600)' }}>
          Aucune patchnote ne mentionne encore cette page.
        </span>
      ) : (
        <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {history.map((p) => (
            <li key={p.link} style={{ padding: '0.5rem 0', borderTop: '1px solid var(--ifm-toc-border-color)' }}>
              <Link to={p.link} style={{ fontWeight: 600 }}>Version {p.version}</Link>
              <span style={{ marginLeft: '0.5rem', fontSize: '0.85rem', color: 'var(--ifm-color-emphasis-600)' }}>
                {formatDate(p.date)}
              </span>
              <ul style={{ margin: '0.25rem 0 0', paddingLeft: '1.25rem' }}>
                {p.matches.map((m, i) => (
                  <li key={i} style={{ fontSize: '0.92rem' }}>
                    {m.section && (
                      <span style={{ color: 'var(--ifm-color-emphasis-600)' }}>{m.section} : </span>
                    )}
                    {m.text}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
