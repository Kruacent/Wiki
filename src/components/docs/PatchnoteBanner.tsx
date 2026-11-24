import React from 'react';
import PatchnoteHistory from './PatchnoteHistory';

interface Props {
  name: string;
  tag: string;
}

/**
 * Historique des mises à jour d'une page, placé à la main dans la page.
 * Il liste automatiquement les patchnotes qui mentionnent `name` ou `tag`.
 * Les pages qui n'ont pas ce composant affichent le même historique en bas de page.
 */
export default function PatchnoteBanner({ name, tag }: Props) {
  return <PatchnoteHistory names={[name, tag]} />;
}
