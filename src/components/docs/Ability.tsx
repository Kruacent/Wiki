import React, { useMemo } from 'react';
// @ts-ignore
import Link from '@docusaurus/Link';

interface GenerateLinksProps {
  abilities?: string[];
}

interface SearchRolesProps {
  ability?: string;
}

interface RoleData {
  title: string;
  slug: string;
  abilities: string[];
}

declare const require: {
  context: (path: string, deep?: boolean, filter?: RegExp) => {
    keys: () => string[];
    <T>(id: string): T;
  };
};

const styles = {
  emptyText: {
    fontStyle: 'italic',
    color: '#54595d',
  } as React.CSSProperties,
  list: {
    listStyleType: 'square',
    paddingLeft: '1.5em',
    marginTop: '1rem',
    color: '#54595d',
  } as React.CSSProperties,
  listItem: {
    marginBottom: '0.5rem',
  } as React.CSSProperties,
  link: {
    fontWeight: 'bold',
    textDecoration: 'none',
    color: '#0645ad',
  } as React.CSSProperties,
};

/**
 * Trouve les roles possédant les abilités passées en paramètre.
 * @param targetAbility L'abilité à rechercher.
 * @returns Les rôles possédant cette abilité.
 */
function getRolesWithAbility(targetAbility: string): RoleData[] {
  try {
    const roleFiles = require.context('@site/docs/kruacent-exiled/custom-role', true, /\.mdx?$/);
    
    const allRoles: RoleData[] = roleFiles.keys().map((key) => {
      const module = roleFiles<any>(key);
      const frontMatter = module.frontMatter || {};
      
      // création de l'url de la page du role
      const cleanKey = key.replace(/^\.\//, '').replace(/\.mdx?$/, '');
      const defaultSlug = `/docs/kruacent-exiled/custom-role/${cleanKey}`;
      
      return {
        title: frontMatter.title || cleanKey,
        slug: frontMatter.slug || defaultSlug,
        abilities: Array.isArray(frontMatter.abilities) ? frontMatter.abilities : [],
      };
    });

    return allRoles.filter((role) =>
      role.abilities.some((a) => a.toLowerCase() === targetAbility.toLowerCase())
    );
  } catch (error) {
    console.error(error);
    return [];
  }
}

/**
 * Affiche les abilités d'un rôle.
 */
export function GenerateLinksToAbilities({ abilities }: GenerateLinksProps) {
  if (!abilities || abilities.length === 0) {
    return <p style={styles.emptyText}>Ce rôle ne possède aucune abilités.</p>;
  }

  return (
    <ul style={styles.list}>
      {abilities.map((ability, index) => {
        return (
          <li key={index} style={styles.listItem}>
            <Link 
              to={`/docs/kruacent-exiled/custom-ability/${ability}`} 
              style={styles.link}
            >
              {ability}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

/**
 * Affiche la liste des rôles possédant une abilité donnée.
 */
export function SearchRolesByAbility({ ability }: SearchRolesProps) {
  if (!ability) return null;
  
  const rolesVises = useMemo(() => {
    return getRolesWithAbility(ability);
  }, [ability]);

  if (rolesVises.length === 0) {
    return <p style={styles.emptyText}>Aucun rôle possède cette abilité actuellement.</p>;
  }

  return (
    <ul style={styles.list}>
      {rolesVises.map((role, index) => (
        <li key={index} style={styles.listItem}>
          <Link to={role.slug} style={styles.link}>
            {role.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}