import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function ServerAchievementFramework() {
  return (
    <Layout title="SAF" description="Create achievement for your server">
      <main style={{
        backgroundColor: '#000000',
        minHeight: 'calc(100vh - 60px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '20px'
      }}>
        
        <div style={{
          color: '#444',
          fontSize: '0.75rem',
          fontWeight: '600',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          marginBottom: '2rem'
        }}>
          In Development
        </div>

        <h1 style={{
          color: '#fff',
          fontSize: 'clamp(2.5rem, 6vw, 5rem)',
          fontWeight: '700',
          letterSpacing: '-0.02em',
          lineHeight: '1.1',
          margin: '0 0 1.5rem 0',
          maxWidth: '800px'
        }}>
          Server Achievement Framework.
        </h1>

        <p style={{
          color: '#888',
          fontSize: 'clamp(1rem, 2vw, 1.5rem)',
          fontWeight: '400',
          maxWidth: '600px',
          margin: '0 0 4rem 0'
        }}>
          Create achievement for your server.
        </p>

        <div style={{ display: 'flex', gap: '20px' }}>
          <Link to="https://github.com/Kruacent/ServerAchievementFramework/tree/dev" style={{
            color: '#fff',
            textDecoration: 'none',
            borderBottom: '1px solid #fff',
            paddingBottom: '2px',
            fontSize: '0.9rem',
            transition: 'opacity 0.2s'
          }}>
            GitHub ↗
          </Link>

          <Link to="/Wiki/" style={{
            color: '#666',
            textDecoration: 'none',
            fontSize: '0.9rem',
            transition: 'color 0.2s'
          }}>
            Retour
          </Link>
        </div>

      </main>
    </Layout>
  );
}