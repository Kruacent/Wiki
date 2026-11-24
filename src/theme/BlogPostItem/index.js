import React from 'react';
import clsx from 'clsx';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
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

/** Image de partage générée pour cette version (voir src/plugins/og-images-plugin.js). */
function PatchnoteShareImage() {
  const { metadata } = useBlogPost();
  const { siteConfig } = useDocusaurusContext();
  const slug = metadata.permalink.split('/').filter(Boolean).pop();
  const image = `${siteConfig.url}${siteConfig.baseUrl}img/og/${slug}.png`;

  return (
    <Head>
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
}

export default function BlogPostItemWrapper(props) {
  const { isBlogPostPage } = useBlogPost();

  if (!isBlogPostPage) {
    return <PatchnoteCard />;
  }

  return (
    <div className={clsx('patchnote-page', styles.page)}>
      <PatchnoteShareImage />
      <BlogPostItem {...props} />
    </div>
  );
}
