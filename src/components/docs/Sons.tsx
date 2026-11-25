import React, { useEffect, useRef, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './Sons.module.css';

export interface Son {
  /** Chemin dans `static/`, par exemple `/audio/molotov-feu.ogg`. */
  src: string;
  /** Nom court du son. */
  nom: string;
  /** Quand on l'entend en partie. */
  quand?: string;
}

/** Un seul son joue à la fois sur toute la page. */
let enCours: HTMLAudioElement | null = null;

function duree(s: number): string {
  if (!isFinite(s) || s <= 0) return '';
  if (s < 10) return `${s.toLocaleString('fr-FR', { maximumFractionDigits: 1 })} s`;
  const m = Math.floor(s / 60);
  const r = Math.round(s % 60);
  return m > 0 ? `${m}:${String(r).padStart(2, '0')}` : `${r} s`;
}

function IconePlay() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z" fill="currentColor" />
    </svg>
  );
}

function IconeStop() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
      <rect x="6" y="6" width="12" height="12" rx="2" fill="currentColor" />
    </svg>
  );
}

function CarteSon({ son }: { son: Son }) {
  const url = useBaseUrl(son.src);
  const audio = useRef<HTMLAudioElement | null>(null);
  const [joue, setJoue] = useState(false);
  const [progres, setProgres] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const a = new Audio();
    a.preload = 'metadata';
    a.src = url;
    a.volume = 0.6;
    const maj = () => setProgres(a.duration ? a.currentTime / a.duration : 0);
    const fin = () => {
      setJoue(false);
      setProgres(0);
    };
    a.addEventListener('loadedmetadata', () => setTotal(a.duration));
    a.addEventListener('timeupdate', maj);
    a.addEventListener('play', () => setJoue(true));
    a.addEventListener('pause', () => setJoue(false));
    a.addEventListener('ended', fin);
    audio.current = a;
    return () => {
      a.pause();
      if (enCours === a) enCours = null;
    };
  }, [url]);

  const basculer = () => {
    const a = audio.current;
    if (!a) return;
    if (!a.paused) {
      a.pause();
      a.currentTime = 0;
      setProgres(0);
      return;
    }
    if (enCours && enCours !== a) {
      enCours.pause();
      enCours.currentTime = 0;
    }
    enCours = a;
    a.currentTime = 0;
    a.play().catch(() => setJoue(false));
  };

  return (
    <li className={`${styles.carte} ${joue ? styles.active : ''}`}>
      <button
        type="button"
        className={styles.bouton}
        onClick={basculer}
        aria-label={`${joue ? 'Arrêter' : 'Écouter'} : ${son.nom}`}
      >
        {joue ? <IconeStop /> : <IconePlay />}
      </button>
      <div className={styles.infos}>
        <div className={styles.ligne}>
          <span className={styles.nom}>{son.nom}</span>
          {joue ? (
            <span className={styles.egaliseur} aria-hidden="true">
              <i /><i /><i />
            </span>
          ) : (
            <span className={styles.duree}>{duree(total)}</span>
          )}
        </div>
        {son.quand && <span className={styles.quand}>{son.quand}</span>}
        <span className={styles.barre} aria-hidden="true">
          <span style={{ transform: `scaleX(${progres})` }} />
        </span>
      </div>
    </li>
  );
}

/** Sons à écouter, avec le moment où on les entend en partie. */
export default function Sons({ titre = 'Les sons', sons }: { titre?: string; sons: Son[] }) {
  return (
    <section className={styles.bloc} aria-label={titre}>
      <div className={styles.entete}>
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <path
            d="M4 9v6h4l5 4V5L8 9H4zm12.5 3a4.5 4.5 0 0 0-2.5-4v8a4.5 4.5 0 0 0 2.5-4zM14 3.2v2.1a7 7 0 0 1 0 13.4v2.1a9 9 0 0 0 0-17.6z"
            fill="currentColor"
          />
        </svg>
        <span>{titre}</span>
      </div>
      <ul className={styles.grille}>
        {sons.map((s) => (
          <CarteSon key={s.src} son={s} />
        ))}
      </ul>
    </section>
  );
}
