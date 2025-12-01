export default {
  name: "Psychose",
  type: "Passif",
  description: (
    <>
      Les traitements de la Fondation ont laissé des séquelles.
      <br/>
      Toutes les <strong>3 à 5 minutes</strong>, une crise aléatoire survient :
      <br/><br/>
      <table style={{width: '100%', fontSize: '0.85rem', borderCollapse: 'collapse', backgroundColor: '#1a1a1a'}}>
        <tbody>
          <tr>
            <td style={{padding: '8px', borderBottom: '1px solid #333'}}><strong>Saut compulsif</strong></td>
            <td style={{padding: '8px', borderBottom: '1px solid #333', color: '#aaa'}}>Vous sautez sans le vouloir.</td>
          </tr>
          <tr>
            <td style={{padding: '8px', borderBottom: '1px solid #333'}}><strong>Paranoïa Auditive</strong></td>
            <td style={{padding: '8px', borderBottom: '1px solid #333', color: '#aaa'}}>Vous entendez des tirs et des bruits inexistants.</td>
          </tr>
          <tr>
            <td style={{padding: '8px', borderBottom: '1px solid #333'}}><strong>Hallucinations</strong></td>
            <td style={{padding: '8px', borderBottom: '1px solid #333', color: '#aaa'}}>Un faux SCP apparaît devant vous avant de disparaître.</td>
          </tr>
          <tr>
            <td style={{padding: '8px'}}><strong>Crise de Panique</strong></td>
            <td style={{padding: '8px', color: '#aaa'}}>Votre caméra tremble violemment et tourne dans tous les sens pendant 15s.</td>
          </tr>
        </tbody>
      </table>
    </>
  )
};