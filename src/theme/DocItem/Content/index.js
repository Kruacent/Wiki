import React from 'react';
import Content from '@theme-original/DocItem/Content';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import AddedIn from '@site/src/components/docs/NewBadge';

/**
 * Affiche « Ajouté en vX.Y.Z » (et le badge « Nouveau » si la version est récente)
 * en haut des pages qui ont `sidebar_custom_props.addedIn` dans leur frontmatter.
 */
export default function ContentWrapper(props) {
  const { frontMatter } = useDoc();
  const addedIn = frontMatter.sidebar_custom_props && frontMatter.sidebar_custom_props.addedIn;
  return (
    <>
      {addedIn && <AddedIn version={addedIn} />}
      <Content {...props} />
    </>
  );
}
