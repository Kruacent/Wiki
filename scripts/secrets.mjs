import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const SOURCE = path.join(ROOT, 'secrets/archives');
const OUT = path.join(ROOT, 'src/data/secrets.enc.json');
const ITERATIONS = 150000;
const { subtle } = globalThis.crypto;

export function normaliser(code) {
  return String(code)
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, '');
}

const echapper = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function enLigne(s) {
  return echapper(s)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[^*])\*(?!\s)(.+?)\*/g, '$1<em>$2</em>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
}

function markdown(texte) {
  const blocs = texte.replace(/\r\n/g, '\n').trim().split(/\n{2,}/);
  return blocs
    .map((bloc) => {
      const lignes = bloc.split('\n');
      if (/^```/.test(bloc) && /```$/.test(bloc.trim())) {
        return `<pre><code>${echapper(lignes.slice(1, -1).join('\n'))}</code></pre>`;
      }
      if (lignes.length >= 2 && lignes.every((l) => /^\|.*\|\s*$/.test(l)) && /^\|[\s:|-]+\|\s*$/.test(lignes[1])) {
        const cellules = (l) => l.trim().slice(1, -1).split('|').map((c) => enLigne(c.trim()));
        const tete = cellules(lignes[0]).map((c) => `<th>${c}</th>`).join('');
        const corps = lignes.slice(2).map((l) => `<tr>${cellules(l).map((c) => `<td>${c}</td>`).join('')}</tr>`).join('');
        return `<table><thead><tr>${tete}</tr></thead><tbody>${corps}</tbody></table>`;
      }
      const titre = bloc.match(/^(#{2,4})\s+(.+)$/);
      if (titre && lignes.length === 1) return `<h${titre[1].length}>${enLigne(titre[2])}</h${titre[1].length}>`;
      if (/^---+$/.test(bloc.trim())) return '<hr />';
      if (lignes.every((l) => /^>/.test(l))) {
        const interieur = lignes.map((l) => l.replace(/^>\s?/, '')).join('\n');
        return `<blockquote>${markdown(interieur)}</blockquote>`;
      }
      if (lignes.every((l) => /^\d+\.\s+/.test(l))) {
        return `<ol>${lignes.map((l) => `<li>${enLigne(l.replace(/^\d+\.\s+/, ''))}</li>`).join('')}</ol>`;
      }
      if (lignes.every((l) => /^[-*]\s+/.test(l))) {
        return `<ul>${lignes.map((l) => `<li>${enLigne(l.replace(/^[-*]\s+/, ''))}</li>`).join('')}</ul>`;
      }
      return `<p>${lignes.map(enLigne).join('<br />')}</p>`;
    })
    .join('\n');
}

const b64 = (buf) => Buffer.from(buf).toString('base64');

async function chiffrer(code, objet) {
  const sel = crypto.getRandomValues(new Uint8Array(16));
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const base = await subtle.importKey('raw', new TextEncoder().encode(normaliser(code)), 'PBKDF2', false, ['deriveKey']);
  const cle = await subtle.deriveKey(
    { name: 'PBKDF2', salt: sel, iterations: ITERATIONS, hash: 'SHA-256' },
    base,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt'],
  );
  const donnees = await subtle.encrypt({ name: 'AES-GCM', iv }, cle, new TextEncoder().encode(JSON.stringify(objet)));
  return { s: b64(sel), i: b64(iv), d: b64(donnees) };
}

if (!fs.existsSync(SOURCE)) {
  console.error(`Dossier introuvable : ${path.relative(ROOT, SOURCE)}. Les archives en clair ne sont pas dans le dépôt public.`);
  process.exit(1);
}

const fichiers = fs.readdirSync(SOURCE).filter((f) => f.endsWith('.md')).sort();
const entrees = [];
const codesVus = new Map();

for (const fichier of fichiers) {
  const { data, content } = matter(fs.readFileSync(path.join(SOURCE, fichier), 'utf8'));
  const id = fichier.replace(/\.md$/, '');
  const codes = (Array.isArray(data.code) ? data.code : [data.code]).filter(Boolean);
  if (codes.length === 0) throw new Error(`${fichier} : pas de code`);
  const objet = { id, titre: data.titre || id, html: markdown(content), inline: data.inline || {} };
  for (const code of codes) {
    const n = normaliser(code);
    if (!n) throw new Error(`${fichier} : code vide après normalisation (${code})`);
    if (codesVus.has(n)) throw new Error(`Code en double : « ${code} » (${fichier} et ${codesVus.get(n)})`);
    codesVus.set(n, fichier);
    entrees.push(await chiffrer(code, objet));
  }
  console.log(`  ${id.padEnd(28)} ${codes.length} code(s)`);
}

entrees.sort(() => Math.random() - 0.5);
fs.writeFileSync(OUT, JSON.stringify({ version: 1, iterations: ITERATIONS, entrees }, null, 2) + '\n');
console.log(`\n${entrees.length} entrée(s) chiffrée(s) → ${path.relative(ROOT, OUT)}`);
