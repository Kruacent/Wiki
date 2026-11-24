import React from 'react';
import Footer from '@theme-original/DocItem/Footer';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import { usePluginData } from '@docusaurus/useGlobalData';
import PatchnoteHistory from '@site/src/components/docs/PatchnoteHistory';

/** Catégories du wiki qui affichent l'historique des mises à jour. */
const CATEGORIES = ['custom-item', 'custom-role', 'custom-ability', 'global-event', 'map', 'miscellaneous'];

/**
 * Ajoute l'historique des patchnotes en bas des pages du wiki,
 * sauf sur les pages qui l'affichent déjà avec <PatchnoteBanner />.
 */
export default function FooterWrapper(props) {
  const { metadata } = useDoc();
  const data = usePluginData('custom-latest-docs-plugin') || {};
  const source = metadata.source.replace(/^@site\//, '');
  const parts = source.split('/');
  const fileName = parts[parts.length - 1].replace(/\.mdx?$/, '');

  const show =
    parts[1] === 'kruacent-exiled' &&
    CATEGORIES.includes(parts[2]) &&
    fileName !== 'index' &&
    !(data.pagesWithBanner || []).includes(source);

  return (
    <>
      {show && <PatchnoteHistory names={[metadata.title, fileName.replace(/-/g, ' ')]} />}
      <Footer {...props} />
    </>
  );
}
