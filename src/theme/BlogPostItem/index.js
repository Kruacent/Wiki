import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { useBlogPost } from '@docusaurus/plugin-content-blog/client';
import BlogPostItem from '@theme-original/BlogPostItem';
import styles from './styles.module.css';

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
}

function versionOf(title) {
  return (title || '').replace(/^Version\s*/i, '');
}

/** Carte compacte affichée dans la liste des patchnotes. */
function PatchnoteCard() {
  const { metadata } = useBlogPost();
  const { title, permalink, date, tags, authors } = metadata;

  return (
    <article className={styles.card}>
      <Link to={permalink} className={styles.cardVersion}>
        <span className={styles.cardVersionLabel}>Version</span>
        <span className={styles.cardVersionNumber}>{versionOf(title)}</span>
      </Link>
      <div className={styles.cardBody}>
        <div className={styles.cardTop}>
          <time dateTime={date} className={styles.cardDate}>{formatDate(date)}</time>
          <div className={styles.cardAuthors}>
            {authors.map((a) => (
              <span key={a.key || a.name} className={styles.cardAuthor} title={a.name}>
                {a.imageURL && <img src={a.imageURL} alt={a.name} />}
                <span>{a.name}</span>
              </span>
            ))}
          </div>
        </div>
        <div className={styles.cardTags}>
          {tags.map((t) => (
            <Link key={t.permalink} to={t.permalink} className={styles.cardTag}>
              {t.label}
            </Link>
          ))}
        </div>
        <Link to={permalink} className={styles.cardLink}>
          Lire les notes de version →
        </Link>
      </div>
    </article>
  );
}

export default function BlogPostItemWrapper(props) {
  const { isBlogPostPage } = useBlogPost();

  if (!isBlogPostPage) {
    return <PatchnoteCard />;
  }

  return (
    <div className={clsx('patchnote-page', styles.page)}>
      <BlogPostItem {...props} />
    </div>
  );
}
