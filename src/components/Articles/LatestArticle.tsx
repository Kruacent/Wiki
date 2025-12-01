import React from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import { usePluginData } from '@docusaurus/useGlobalData';
import styles from '../../pages/index.module.css';

const categoryColors = {
  'custom-item': '#ff3700ff',
  'custom-role': '#fff200ff',
  'custom-ability': '#2196f3',
  'global-event': '#ef7373ff',
  'miscelanious': '#9e9e9e',
  'default': '#555'
};

export function LatestArticles() {
  const pluginData = usePluginData('custom-latest-docs-plugin');
  const articles = Array.isArray(pluginData) ? pluginData : [];

  if (articles.length === 0) return null;

  return (
    <section className={styles.latestArticles}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Derniers Articles
        </Heading>
        <div className={styles.articleCardsContainer}>
          {articles.map((article) => (
            <ArticleCard
              key={article.link}
              title={article.title}
              excerpt={article.excerpt}
              link={article.link}
              category={article.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ArticleCard({ title, excerpt, link, category }) {
  const safeCategory = category || 'default';

  const borderColor = categoryColors[safeCategory] || categoryColors['default'];

  return (
    <div 
      className={styles.articleCard}
      style={{ 
        border: `2px solid ${borderColor}`,
        boxShadow: `0 4px 10px ${borderColor}20`
      }}
    >
      <div style={{
        color: borderColor, 
        textTransform: 'uppercase', 
        fontSize: '0.7rem', 
        fontWeight: 'bold', 
        marginBottom: '5px'
      }}>
        {safeCategory.replace('-', ' ')}
      </div>

      <Heading as="h3" className={styles.cardTitle}>
        {title}
      </Heading>
      <p className={styles.cardExcerpt}>{excerpt}</p>
      
      <Link 
        to={link} 
        className={`button button--secondary ${styles.readMore}`}
        style={{ borderColor: borderColor }} 
      >
        Lire la suite
      </Link>
    </div>
  );
}

export default LatestArticles;