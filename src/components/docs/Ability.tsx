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
 * Va chercher la description d'une abilité directement dans son fichier .mdx
 */
function getAbilityDescription(targetAbility: string): string {
  try {
    const abilityFiles = require.context('@site/docs/kruacent-exiled/custom-ability', true, /\.mdx?$/);
    
    for (const key of abilityFiles.keys()) {
      const module = abilityFiles<any>(key);
      const frontMatter = module.frontMatter || {};
      
      if (frontMatter.title && frontMatter.title.toLowerCase() === targetAbility.toLowerCase()) {
        return frontMatter.description || "Aucune description disponible.";
      }
    }
  } catch (error) {
    console.error("Erreur de récupération de la description :", error);
  }
  
  return "Description introuvable.";
}

/**
 * Affiche les abilités d'un rôle.
 */
export function GenerateLinksToAbilities({ abilities }: GenerateLinksProps) {
  if (!abilities || abilities.length === 0) {
    return <p style={styles.emptyText}>Ce rôle ne possède aucune abilité.</p>;
  }

  return (
    <dl style={{ margin: '1rem 0' }}>
      {abilities.map((ability, index) => {
        const description = getAbilityDescription(ability);

        return (
          <React.Fragment key={index}>
            <dt style={{ fontSize: '1.1rem', marginTop: '1rem', borderBottom: '1px solid var(--ifm-color-emphasis-200)', paddingBottom: '0.2rem' }}>
              <span style={{ marginRight: '8px', color: 'var(--ifm-color-emphasis-500)' }}>▪</span>
              <Link 
                to={`/docs/kruacent-exiled/custom-ability/${ability}`} 
                style={{ fontWeight: 'bold', textDecoration: 'none', color: 'var(--ifm-color-primary)' }}
              >
                {ability}
              </Link>
            </dt>
            <dd style={{ margin: '0.4rem 0 0 1.5rem', color: 'var(--ifm-color-emphasis-700)', lineHeight: '1.5' }}>
              {description}
            </dd>
          </React.Fragment>
        );
      })}
    </dl>
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