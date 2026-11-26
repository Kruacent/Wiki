import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { usePluginData } from '@docusaurus/useGlobalData';
import { NewBadge } from './NewBadge';
import styles from './RoleAbilityCards.module.css';

/**
 * Registres des rôles et des capacités, dans le style des fiches d'objets (ACSHeader).
 * Les données viennent de src/plugins/roles-abilities-plugin.js (frontmatter + tableaux des pages) :
 * rien n'est recopié ici, il suffit de modifier les pages.
 */

interface Team {
  id: string;
  label: string;
  color: string;
  text: string;
}

interface AbilityData {
  id: string;
  title: string;
  description: string;
  type: 'active' | 'passive' | null;
  cooldown: string | null;
  duration: string | null;
  image: string | null;
  link: string;
  addedIn: string | null;
  status: 'obsolete' | 'desactive' | null;
}

interface RoleData {
  id: string;
  team: string;
  title: string;
  description: string;
  abilities: string[];
  hp: string | null;
  link: string;
  addedIn: string | null;
  status: 'obsolete' | 'desactive' | null;
}

interface Data {
  teams: Team[];
  abilities: Record<string, AbilityData>;
  roles: RoleData[];
}

function useData(): Data {
  const data = usePluginData('roles-abilities-plugin') as Data | undefined;
  return data || { teams: [], abilities: {}, roles: [] };
}

/** Retrouve une capacité par son nom de fichier ou son titre (sans tenir compte de la casse). */
function findAbility(data: Data, name: string): AbilityData | undefined {
  const key = name.toLowerCase();
  return (
    data.abilities[name] ||
    Object.values(data.abilities).find((a) => a.id.toLowerCase() === key || a.title.toLowerCase() === key)
  );
}

function rolesWithAbility(data: Data, ability: AbilityData): RoleData[] {
  const names = [ability.id, ability.title].map((n) => n.toLowerCase());
  return data.roles.filter((r) => r.abilities.some((a) => names.includes(a.toLowerCase())));
}

/** « 60 secondes » → « 60 s », « 4 minutes » → « 4 min ». */
function court(valeur: string): string {
  return valeur.replace(/\s*secondes?\b/gi, ' s').replace(/\s*minutes?\b/gi, ' min');
}

/** « 100 HP » → « 100 ». Rien si la valeur n'est pas un nombre (« Inchangés »). */
function pointsDeVie(hp: string | null): string | null {
  const m = hp && hp.match(/\d[\d\s.,]*/);
  return m ? m[0].trim() : null;
}

/** Variable CSS --accent : couleur du liseré et des survols. */
function accent(couleur?: string): React.CSSProperties | undefined {
  return couleur ? ({ '--accent': couleur } as React.CSSProperties) : undefined;
}

const numero = (i: number) => String(i + 1).padStart(2, '0');

/* ---------- Petits éléments ---------- */

const STATUT = { obsolete: 'obsolète', desactive: 'désactivé' } as const;

function Statut({ status }: { status: AbilityData['status'] }) {
  if (!status) return null;
  return <span className={`${styles.statut} ${styles[status]}`}>{STATUT[status]}</span>;
}

function Nouveau({ addedIn }: { addedIn: string | null }) {
  return <NewBadge addedIn={addedIn || undefined} style={{ marginLeft: 0, alignSelf: 'center' }} />;
}

function Metrique({ libelle, valeur }: { libelle: string; valeur: string | null }) {
  if (!valeur) return <span />;
  return (
    <span className={styles.metrique}>
      <span className={styles.metriqueLibelle}>{libelle}</span>
      <span className={styles.metriqueValeur}>{valeur}</span>
    </span>
  );
}

function Icone({ ability }: { ability: AbilityData }) {
  const src = useBaseUrl(ability.image || '');
  return (
    <span className={styles.icone} aria-hidden="true">
      {ability.image ? <img src={src} alt="" loading="lazy" /> : ability.title.charAt(0)}
    </span>
  );
}

/** Cadre du registre : liseré de couleur en haut, titre facultatif, lignes séparées par des filets. */
function Registre({
  titre,
  compte,
  couleur,
  children,
}: {
  titre?: string;
  compte?: string;
  couleur?: string;
  children: React.ReactNode;
}) {
  return (
    <section className={styles.registre} style={accent(couleur)} aria-label={titre}>
      {titre && (
        <div className={styles.registreTitre}>
          <span className={styles.registreNom}>{titre}</span>
          {compte && <span className={styles.registreCompte}>{compte}</span>}
        </div>
      )}
      <ul className={styles.lignes}>{children}</ul>
    </section>
  );
}

/* ---------- Lignes ---------- */

function LigneCapacite({ ability, roles }: { ability: AbilityData; roles?: RoleData[] }) {
  const recharge = ability.type === 'active' && ability.cooldown ? court(ability.cooldown) : null;
  return (
    <li>
      <Link to={ability.link} className={styles.ligne}>
        <Icone ability={ability} />
        <span className={styles.corps}>
          <span className={styles.titre}>
            <span className={styles.nom}>{ability.title}</span>
            {ability.type && (
              <span className={styles.sousTitre}>{ability.type === 'active' ? 'Capacité active' : 'Capacité passive'}</span>
            )}
            <Statut status={ability.status} />
            <Nouveau addedIn={ability.addedIn} />
          </span>
          {ability.description && <span className={styles.desc}>{ability.description}</span>}
          {roles && roles.length > 0 && (
            <span className={styles.liens}>
              <strong>{roles.length > 1 ? 'Rôles' : 'Rôle'} :</strong> {roles.map((r) => r.title).join(', ')}
            </span>
          )}
        </span>
        <Metrique libelle="Recharge" valeur={recharge} />
      </Link>
    </li>
  );
}

function LigneRole({
  role,
  team,
  index,
  data,
  montrerCamp,
}: {
  role: RoleData;
  team?: Team;
  index: number;
  data: Data;
  montrerCamp?: boolean;
}) {
  const capacites = role.abilities.map((name) => findAbility(data, name)?.title || name);
  return (
    <li>
      <Link
        to={role.link}
        className={`${styles.ligne} ${montrerCamp ? styles.ligneCamp : ''}`}
        style={accent(team?.color)}
      >
        <span className={styles.numero}>{numero(index)}</span>
        <span className={styles.corps}>
          <span className={styles.titre}>
            <span className={styles.nom}>{role.title}</span>
            {montrerCamp && team && <span className={`${styles.sousTitre} ${styles.camp}`}>{team.label}</span>}
            <Statut status={role.status} />
            <Nouveau addedIn={role.addedIn} />
          </span>
          {role.description && <span className={styles.desc}>{role.description}</span>}
          {capacites.length > 0 && (
            <span className={styles.liens}>
              <strong>{capacites.length > 1 ? 'Capacités' : 'Capacité'} :</strong> {capacites.join(', ')}
            </span>
          )}
        </span>
        <Metrique libelle="PV" valeur={pointsDeVie(role.hp)} />
      </Link>
    </li>
  );
}

/* ---------- Ce qu'on place dans les pages ---------- */

/** Capacités d'un rôle (page d'un rôle). */
export function AbilityCards({ abilities }: { abilities?: string[] }) {
  const data = useData();
  if (!abilities || abilities.length === 0) {
    return <p className={styles.vide}>Ce rôle ne possède aucune capacité.</p>;
  }
  return (
    <Registre>
      {abilities.map((name) => {
        const ability = findAbility(data, name);
        if (!ability) {
          return (
            <li key={name}>
              <Link to={`/docs/kruacent-exiled/custom-ability/${name}`} className={styles.ligne}>
                <span />
                <span className={styles.nom}>{name}</span>
              </Link>
            </li>
          );
        }
        return <LigneCapacite key={name} ability={ability} />;
      })}
    </Registre>
  );
}

/** Rôles qui possèdent une capacité (page d'une capacité). */
export function RoleCards({ ability }: { ability: string }) {
  const data = useData();
  const target = findAbility(data, ability);
  const roles = target
    ? rolesWithAbility(data, target)
    : data.roles.filter((r) => r.abilities.some((a) => a.toLowerCase() === ability.toLowerCase()));
  if (roles.length === 0) {
    return <p className={styles.vide}>Aucun rôle ne possède cette capacité actuellement.</p>;
  }
  return (
    <Registre>
      {roles.map((r, i) => (
        <LigneRole key={r.id} role={r} team={data.teams.find((t) => t.id === r.team)} index={i} data={data} montrerCamp />
      ))}
    </Registre>
  );
}

/** Tous les rôles, un registre par camp (page « Liste des Custom Roles »). */
export function RoleGrid() {
  const data = useData();
  return (
    <>
      {data.teams.map((team) => {
        const roles = data.roles.filter((r) => r.team === team.id);
        if (roles.length === 0) return null;
        return (
          <Registre
            key={team.id}
            titre={team.label}
            compte={`${roles.length} rôle${roles.length > 1 ? 's' : ''}`}
            couleur={team.color}
          >
            {roles.map((r, i) => (
              <LigneRole key={r.id} role={r} team={team} index={i} data={data} />
            ))}
          </Registre>
        );
      })}
    </>
  );
}

/** Toutes les capacités, actives puis passives, avec les rôles qui les ont (page « Liste des Customs Abilités »). */
export function AbilityGrid() {
  const data = useData();
  const all = Object.values(data.abilities).sort((a, b) => a.title.localeCompare(b.title, 'fr'));
  const groupes: [string, AbilityData[], string][] = [
    ['Capacités actives', all.filter((a) => a.type === 'active'), 'var(--ifm-color-primary)'],
    ['Capacités passives', all.filter((a) => a.type === 'passive'), 'var(--ifm-color-emphasis-600)'],
    ['Autres', all.filter((a) => !a.type), 'var(--ifm-color-emphasis-500)'],
  ];
  return (
    <>
      {groupes.map(([titre, liste, couleur]) =>
        liste.length === 0 ? null : (
          <Registre key={titre} titre={titre} compte={`${liste.length}`} couleur={couleur}>
            {liste.map((a) => (
              <LigneCapacite key={a.id} ability={a} roles={rolesWithAbility(data, a)} />
            ))}
          </Registre>
        ),
      )}
    </>
  );
}
