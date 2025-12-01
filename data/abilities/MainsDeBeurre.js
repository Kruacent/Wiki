export default {
  name: "Mains de Beurre",
  type: "Passif",
  description: (
    <>
      Vous avez du mal à garder vos affaires en main.
      <br/>
      Toutes les <strong>2 à 3 minutes</strong>, un test de maladresse est effectué :
      <br/><br/>
      <table style={{width: '100%', fontSize: '0.85rem', borderCollapse: 'collapse', backgroundColor: '#1a1a1a'}}>
        <thead>
          <tr style={{borderBottom: '1px solid #555', color: '#aaa'}}>
            <th style={{textAlign: 'left', padding: '5px'}}>Probabilité</th>
            <th style={{textAlign: 'right', padding: '5px'}}>Effet</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{padding: '5px', color: '#ffb74d'}}>50%</td>
            <td style={{padding: '5px', textAlign: 'right'}}>Vous lâchez l'objet <strong>en main</strong>.</td>
          </tr>
          <tr>
            <td style={{padding: '5px', color: '#4caf50'}}>30%</td>
            <td style={{padding: '5px', textAlign: 'right'}}>Rien ne se passe (Ouf !).</td>
          </tr>
          <tr>
            <td style={{padding: '5px', color: '#e57373'}}>15%</td>
            <td style={{padding: '5px', textAlign: 'right'}}>1 item aléatoire tombe de l'inventaire.</td>
          </tr>
          <tr>
            <td style={{padding: '5px', color: '#d32f2f', fontWeight: 'bold'}}>5%</td>
            <td style={{padding: '5px', textAlign: 'right'}}>2 items aléatoires tombent de l'inventaire.</td>
          </tr>
        </tbody>
      </table>
    </>
  )
};