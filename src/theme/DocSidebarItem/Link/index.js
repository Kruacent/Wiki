import React from 'react';
import clsx from 'clsx';
import Link from '@theme-original/DocSidebarItem/Link';
import { useIsNew } from '@site/src/components/docs/NewBadge';

/**
 * Ajoute la classe `sidebar-nouveau` aux pages récentes de la sidebar.
 * Le badge « Nouveau » lui-même est dessiné en CSS (src/css/custom.css).
 */
export default function LinkWrapper(props) {
  const { item } = props;
  const isNew = useIsNew(item.customProps && item.customProps.addedIn);
  if (!isNew) return <Link {...props} />;
  return <Link {...props} item={{ ...item, className: clsx(item.className, 'sidebar-nouveau') }} />;
}
