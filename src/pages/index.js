import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

const latestArticles = [
  {
    title: "Autre Article",
    excerpt: "Un autre article important à découvrir...",
    link: "/docs/articles/another-article",
  },
];


function ArticleCard({ title, excerpt, link }) {
  return (
    <div className={styles.articleCard}>
      <h3>{title}</h3>
      <p>{excerpt}</p>
      <Link to={link} className={styles.readMore}>
        Lire la suite
      </Link>
    </div>
  );
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

function LatestArticles() {
  return (
    <section className={styles.latestArticles}>
      <div className="container">
        <Heading as="h2">📢 Derniers Articles</Heading>
        <div className={styles.articleCardsContainer}>
          {latestArticles.slice(0, 3).map((article, index) => (
            <ArticleCard
              key={index}
              title={article.title}
              excerpt={article.excerpt}
              link={article.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Accueil - ${siteConfig.title}`}
      description="Bienvenue sur le Wiki de Kruaçent">
      <HomepageHeader />
      <main>
        <LatestArticles />
      </main>
    </Layout>
  );
}
