import React, { useEffect, useState } from 'react';
import styles from './Capture.module.css';

interface Props {
  /** Image importée (ou vidéo si `video` est vrai). */
  src: string;
  alt?: string;
  /** Petite phrase sous la capture. */
  caption?: string;
  /** Mettre à true pour une vidéo .mp4. */
  video?: boolean;
  /** Largeur maximale, 720px par défaut. */
  width?: string;
}

/**
 * Capture d'écran du jeu, pour les pages hors objets (Map, Misc, Global Events…).
 * Image en couleur, coins arrondis ; un clic l'ouvre en grand.
 */
export default function Capture({ src, alt = '', caption, video = false, width = '720px' }: Props) {
  const [ouvert, setOuvert] = useState(false);

  useEffect(() => {
    if (!ouvert) return;
    const fermer = (e: KeyboardEvent) => e.key === 'Escape' && setOuvert(false);
    window.addEventListener('keydown', fermer);
    return () => window.removeEventListener('keydown', fermer);
  }, [ouvert]);

  return (
    <figure className={styles.capture} style={{ maxWidth: width }}>
      {video ? (
        <video className={styles.media} src={src} controls loop muted playsInline preload="metadata" />
      ) : (
        <button type="button" className={styles.zoom} onClick={() => setOuvert(true)} aria-label={`Agrandir : ${alt || caption || 'capture'}`}>
          <img className={styles.media} src={src} alt={alt} loading="lazy" />
        </button>
      )}
      {caption && <figcaption className={styles.legende}>{caption}</figcaption>}

      {ouvert && (
        <div className={styles.plein} role="dialog" aria-label={alt || caption} onClick={() => setOuvert(false)}>
          <img src={src} alt={alt} />
          {caption && <span className={styles.pleinLegende}>{caption}</span>}
        </div>
      )}
    </figure>
  );
}
