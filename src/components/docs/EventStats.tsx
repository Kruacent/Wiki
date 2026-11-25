import React from 'react';
import Link from '@docusaurus/Link';
import {
  globalEvents,
  middleEvents,
  GlobalEventData,
  MiddleEventData,
  IMPACT_PREFIX,
  CHANCE_DEUX_GE,
  CHANCE_MIDDLE_EVENT,
} from '@site/src/data/events';

/* ---------- Calculs ---------- */

const actifs = () => globalEvents.filter((e) => e.poids > 0);
const total = () => actifs().reduce((s, e) => s + e.poids, 0);
const totalSeuls = () => actifs().filter((e) => e.seul).reduce((s, e) => s + e.poids, 0);

/** Chance d'être le premier event tiré (ou le seul). */
function chancePremier(ev: GlobalEventData): number {
  const n = total();
  return n > 0 && ev.poids > 0 ? ev.poids / n : 0;
}

/**
 * Le tirage : 90 % des parties ont un seul tirage, 10 % en ont deux.
 * Si le premier tirage est un event « seul », on s'arrête là.
 * Sinon le second tirage se fait sans les events « seuls », et sans un seul exemplaire du premier :
 * le même event peut donc ressortir, et la partie n'en a alors qu'un.
 */
function chanceSecond(ev: GlobalEventData): number {
  const n = total();
  const reste = n - 1 - totalSeuls();
  if (ev.seul || ev.poids <= 0 || reste <= 0) return 0;
  const autres = n - totalSeuls() - ev.poids;
  return (autres / n) * (ev.poids / reste);
}

/** Chance que l'event soit actif dans une partie. */
export function chanceGlobalEvent(ev: GlobalEventData): number {
  const premier = chancePremier(ev);
  if (ev.seul) return premier;
  return premier + CHANCE_DEUX_GE * chanceSecond(ev);
}

/** Chance que l'event tombe accompagné d'un autre Global Event. */
function chanceAccompagne(ev: GlobalEventData): number {
  if (ev.seul || ev.poids <= 0) return 0;
  const n = total();
  const reste = n - 1 - totalSeuls();
  const autres = n - totalSeuls() - ev.poids;
  return CHANCE_DEUX_GE * ((ev.poids / n) * (autres / reste) + chanceSecond(ev));
}

/** Chance qu'une partie ait deux Global Events différents. */
export function chanceDeuxEvents(): number {
  return actifs().reduce((s, e) => s + chanceAccompagne(e), 0) / 2;
}

function middleTirables(avecConditions: boolean) {
  return middleEvents.filter((e) => e.poids > 0 && (avecConditions || !e.condition));
}

/** Chance par partie : [quand toutes les conditions sont remplies, quand aucune ne l'est]. */
function chanceMiddle(ev: MiddleEventData): [number, number] {
  if (ev.poids <= 0) return [0, 0];
  const calc = (pool: MiddleEventData[]) => {
    if (!pool.includes(ev)) return 0;
    const n = pool.reduce((s, e) => s + e.poids, 0);
    return CHANCE_MIDDLE_EVENT * (ev.poids / n);
  };
  return [calc(middleTirables(true)), calc(middleTirables(false))];
}

/* ---------- Affichage ---------- */

/** Pourcentage arrondi, lisible d'un coup d'œil. */
function pct(p: number): string {
  if (p === 0) return '0 %';
  const v = p * 100;
  return `${v.toLocaleString('fr-FR', { maximumFractionDigits: v < 1 ? 1 : 0 })} %`;
}

function unSur(p: number): string {
  if (p <= 0) return 'jamais';
  return `1 partie sur ${Math.round(1 / p)}`;
}

function Annonces({ annonces }: { annonces: string[] }) {
  return (
    <>
      {annonces.map((a, i) => (
        <React.Fragment key={a}>
          {i > 0 && (i === annonces.length - 1 ? ' ou ' : ', ')}
          <em>{a}</em>
        </React.Fragment>
      ))}
    </>
  );
}

function trouverGE(id: string) {
  const ev = globalEvents.find((e) => e.id === id);
  if (!ev) throw new Error(`Global Event inconnu : ${id}`);
  return ev;
}

function trouverME(id: string) {
  const ev = middleEvents.find((e) => e.id === id);
  if (!ev) throw new Error(`Middle Event inconnu : ${id}`);
  return ev;
}

function chanceMiddleTexte(ev: MiddleEventData): string {
  const [avec, sans] = chanceMiddle(ev);
  if (ev.condition) return `${pct(avec)}, si la condition est remplie`;
  return avec === sans ? pct(avec) : `${pct(avec)} à ${pct(sans)}`;
}

/** Fiche « En bref » d'un Global Event. */
export function GlobalEventStats({ id }: { id: string }) {
  const ev = trouverGE(id);
  const chance = chanceGlobalEvent(ev);
  return (
    <table>
      <tbody>
        <tr><td><strong>Annonce</strong></td><td><Annonces annonces={ev.annonces} /></td></tr>
        <tr><td><strong>Impact</strong></td><td>{ev.impact} <strong>{IMPACT_PREFIX[ev.impact]}</strong></td></tr>
        <tr><td><strong>Chance par partie</strong></td><td><strong>{pct(chance)}</strong> (environ {unSur(chance)})</td></tr>
        {ev.seul && <tr><td><strong>Cumul</strong></td><td>Toujours seul, jamais avec un autre Global Event</td></tr>}
      </tbody>
    </table>
  );
}

/** Tableau de tous les Global Events, du plus courant au plus rare. */
export function GlobalEventTable() {
  const liste = actifs()
    .map((e) => ({ e, c: chanceGlobalEvent(e) }))
    .sort((a, b) => b.c - a.c || a.e.id.localeCompare(b.e.id));
  return (
    <table>
      <thead>
        <tr>
          <th>Global Event</th>
          <th>Ce que ça fait</th>
          <th>Impact</th>
          <th>Chance</th>
        </tr>
      </thead>
      <tbody>
        {liste.map(({ e, c }) => (
          <tr key={e.id}>
            <td><Link to={e.page}><strong>{e.id}</strong></Link></td>
            <td>{e.resume}</td>
            <td><strong>{IMPACT_PREFIX[e.impact]}</strong></td>
            <td style={{ whiteSpace: 'nowrap' }}><strong>{pct(c)}</strong></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/** L'essentiel sur le tirage. */
export function GlobalEventTirage() {
  return (
    <ul>
      <li>En général <strong>un seul</strong> Global Event par partie. Environ <strong>{unSur(chanceDeuxEvents())}</strong> en a deux.</li>
      <li>L'annonce s'affiche au début de la partie avec le niveau d'impact. Environ une fois sur dix, le nom est caché derrière <strong>[REDACTED]</strong>.</li>
    </ul>
  );
}

/** Fiche « En bref » d'un Middle Event. */
export function MiddleEventStats({ id }: { id: string }) {
  const ev = trouverME(id);
  return (
    <table>
      <tbody>
        <tr><td><strong>Annonce</strong></td><td><Annonces annonces={ev.annonces} /></td></tr>
        {ev.condition && <tr><td><strong>Condition</strong></td><td>{ev.condition}</td></tr>}
        <tr><td><strong>Chance par partie</strong></td><td><strong>{chanceMiddleTexte(ev)}</strong></td></tr>
        <tr><td><strong>Quand</strong></td><td>Vers 10 à 15 minutes de jeu, jusqu'à la fin de la partie</td></tr>
      </tbody>
    </table>
  );
}

/** Tableau de tous les Middle Events. */
export function MiddleEventTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>Middle Event</th>
          <th>Ce que ça fait</th>
          <th>Chance</th>
        </tr>
      </thead>
      <tbody>
        {middleEvents.filter((e) => e.poids > 0).map((e) => (
          <tr key={e.id}>
            <td><Link to={e.page}><strong>{e.id}</strong></Link></td>
            <td>{e.resume}</td>
            <td style={{ whiteSpace: 'nowrap' }}><strong>{chanceMiddleTexte(e)}</strong></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/** Chance qu'un Middle Event se déclenche, formatée. */
export function ChanceMiddleEvent() {
  return <strong>{pct(CHANCE_MIDDLE_EVENT)}</strong>;
}
