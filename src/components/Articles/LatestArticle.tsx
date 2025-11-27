import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import { usePluginData } from '@docusaurus/useGlobalData';
import styles from '../../pages/index.module.css';

export function LatestArticles() {
  const pluginData = usePluginData('custom-latest-docs-plugin');

  const articles = Array.isArray(pluginData) ? pluginData : [];

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
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ArticleCard({ title, excerpt, link }) {
  return (
    <div className={styles.articleCard}>
      <Heading as="h3" className={styles.cardTitle}>
        {title}
      </Heading>
      <p className={styles.cardExcerpt}>{excerpt}</p>
      <Link to={link} className={`button button--secondary ${styles.readMore}`}>
        Lire la suite
      </Link>
    </div>
  );
}

export default LatestArticles;