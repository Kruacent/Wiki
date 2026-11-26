/**
 * Déchiffrement des archives secrètes, dans le navigateur.
 * Le contenu est chiffré par `npm run secrets` (scripts/secrets.mjs) : voir ce fichier.
 * Tout se passe côté client : rien de vraiment sensible ne doit être caché ici, c'est pour le jeu.
 */
import donnees from '@site/src/data/secrets.enc.json';

export interface Archive {
  id: string;
  titre: string;
  html: string;
  inline: Record<string, string>;
}

interface Entree {
  s: string;
  i: string;
  d: string;
}

const STOCKAGE = 'kruacent-terminal-codes';
const EVENEMENT = 'kruacent-archives';

/** Même normalisation que scripts/secrets.mjs : majuscules, sans accents, espaces ni ponctuation. */
export function normaliser(code: string): string {
  return code
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, '');
}

const octets = (b64: string) => Uint8Array.from(atob(b64), (c) => c.charCodeAt(0));

async function essayer(code: string, entree: Entree): Promise<Archive | null> {
  const { subtle } = window.crypto;
  const base = await subtle.importKey('raw', new TextEncoder().encode(code), 'PBKDF2', false, ['deriveKey']);
  const cle = await subtle.deriveKey(
    { name: 'PBKDF2', salt: octets(entree.s), iterations: donnees.iterations, hash: 'SHA-256' },
    base,
    { name: 'AES-GCM', length: 256 },
    false,
    ['decrypt'],
  );
  try {
    const clair = await subtle.decrypt({ name: 'AES-GCM', iv: octets(entree.i) }, cle, octets(entree.d));
    return JSON.parse(new TextDecoder().decode(clair)) as Archive;
  } catch {
    return null; // mauvais code pour cette entrée
  }
}

/** Résultats déjà calculés pendant la visite : la dérivation de clé est volontairement lente. */
const cache = new Map<string, Promise<Archive | null>>();

/** Ouvre l'archive correspondant au code, ou null. */
export function ouvrir(code: string): Promise<Archive | null> {
  const n = normaliser(code);
  if (!n || typeof window === 'undefined' || !window.crypto?.subtle) return Promise.resolve(null);
  if (!cache.has(n)) {
    cache.set(
      n,
      (async () => {
        for (const entree of donnees.entrees as Entree[]) {
          const archive = await essayer(n, entree);
          if (archive) return archive;
        }
        return null;
      })(),
    );
  }
  return cache.get(n)!;
}

/** Texte révélé pour un <Redacted cle="..." />, si une archive ouverte le contient. */
export async function texteRevele(cle: string): Promise<string | null> {
  for (const archive of await archivesOuvertes()) {
    if (archive.inline && archive.inline[cle]) return archive.inline[cle];
  }
  return null;
}

/* ---------- Codes déjà trouvés (mémorisés dans ce navigateur) ---------- */

export function codesTrouves(): string[] {
  try {
    const brut = window.localStorage.getItem(STOCKAGE);
    return brut ? (JSON.parse(brut) as string[]) : [];
  } catch {
    return [];
  }
}

export function memoriser(code: string): void {
  const n = normaliser(code);
  const codes = codesTrouves();
  if (codes.includes(n)) return;
  try {
    window.localStorage.setItem(STOCKAGE, JSON.stringify([...codes, n]));
  } catch {
    /* navigation privée : tant pis, le code marche quand même pour cette visite */
  }
  window.dispatchEvent(new Event(EVENEMENT));
}

/** Toutes les archives déjà ouvertes dans ce navigateur. */
export async function archivesOuvertes(): Promise<Archive[]> {
  const resultat: Archive[] = [];
  for (const code of codesTrouves()) {
    const archive = await ouvrir(code);
    if (archive && !resultat.some((a) => a.id === archive.id)) resultat.push(archive);
  }
  return resultat;
}

/** Prévient quand un nouveau code est trouvé (pour mettre à jour les <Redacted /> de la page). */
export function surChangement(rappel: () => void): () => void {
  window.addEventListener(EVENEMENT, rappel);
  window.addEventListener('storage', rappel);
  return () => {
    window.removeEventListener(EVENEMENT, rappel);
    window.removeEventListener('storage', rappel);
  };
}
