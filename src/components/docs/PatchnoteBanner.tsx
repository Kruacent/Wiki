interface Props {
  name: string;
  tag: string;
}

export default function PatchnoteBanner({ name, tag }: Props) {
  return (
    <a 
      href={`/Wiki/patchnotes/tags/${tag}`} 
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem 1.5rem',
        backgroundColor: 'var(--ifm-background-surface-color)',
        border: '1px solid var(--ifm-color-emphasis-300)',
        borderRadius: '8px',
        textDecoration: 'none',
        color: 'inherit',
        marginTop: '1rem',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div>
          <strong style={{ display: 'block', fontSize: '1.1rem', color: 'var(--ifm-color-primary)', marginBottom: '0.2rem' }}>
            Historique des mises à jour
          </strong>
          <span style={{ fontSize: '0.9rem', color: 'var(--ifm-color-emphasis-600)' }}>
            Consulter toutes les mises à jour pour : <b>{name}</b>
          </span>
        </div>
      </div>
      <div style={{ fontSize: '1.2rem', color: 'var(--ifm-color-primary)' }}>
        ➔
      </div>
    </a>
  );
}