export default function ItemLink({ name, wikiId }: { name: string, wikiId?: string }) {
  const target = wikiId || name; 
  const url = `https://en.scpslgame.com/index.php?title=${target}`;

  return (
    <a href={url} style={{ color: '#326eb3' }}>
      <strong>{name}</strong>
    </a>
  );
}