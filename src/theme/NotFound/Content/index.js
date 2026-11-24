import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

/** Page 404 : sobre, dans le style du wiki, avec un clin d'œil à la Fondation. */
export default function NotFoundContent({ className }) {
  return (
    <main className={clsx('container margin-vert--xl', className)}>
      <div className={styles.wrapper}>
        <p className={styles.code}>Erreur 404 · Document introuvable</p>
        <Heading as="h1" className={styles.title}>
          Ce document a disparu.
        </Heading>
        <p className={styles.text}>
          La page que vous cherchez n'existe pas, ou plus. Le Dr. Omer l'a probablement égarée, et l'Assistant Noé
          refuse de financer les recherches.
        </p>
        <p className={styles.text}>
          Vérifiez l'adresse, ou utilisez la recherche en haut de la page.
        </p>
        <div className={styles.actions}>
          <Link className="button button--primary" to="/">Retour à l'accueil</Link>
          <Link className="button button--secondary" to="/docs/kruacent-exiled/">Ouvrir le wiki</Link>
        </div>
      </div>
    </main>
  );
}
